import DomeGallery from '@components/dome-gallery';
import { useQueryGetCharacters } from '@hooks/use-query-characters';
import type { Characters } from '@models/characters';
import { useState } from 'react';

function CharacterModal({
  character,
  onClose,
}: {
  character: Characters;
  onClose: () => void;
}) {
  if (!character) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        zIndex: 10000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        overflow: 'auto',
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#1a1a2e',
          borderRadius: '20px',
          maxWidth: '800px',
          width: '100%',
          maxHeight: '90vh',
          overflow: 'auto',
          padding: '30px',
          color: '#fff',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '15px',
            right: '15px',
            background: 'rgba(255, 255, 255, 0.1)',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            fontSize: '24px',
            cursor: 'pointer',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.3s',
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)')
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)')
          }
        >
          ×
        </button>

        <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
          <div style={{ flex: '0 0 200px' }}>
            <img
              src={character.profile_image}
              alt={character.name}
              style={{
                width: '200px',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '15px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              }}
            />
          </div>

          <div style={{ flex: '1', minWidth: '300px' }}>
            <h2
              style={{
                margin: '0 0 20px 0',
                fontSize: '32px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {character.name}
            </h2>

            <div style={{ display: 'grid', gap: '15px' }}>
              <InfoRow label="Vila" value={character.village.name} />
              <InfoRow label="Rank" value={character.rank} />
              <InfoRow label="Poder" value={character.power.toString()} />
            </div>

            {character.summary && (
              <div style={{ marginTop: '20px' }}>
                <h3
                  style={{
                    fontSize: '18px',
                    marginBottom: '10px',
                    color: '#a0a0ff',
                  }}
                >
                  Sobre
                </h3>
                <p style={{ lineHeight: '1.6', color: '#ccc' }}>
                  {character.summary}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <span style={{ fontWeight: 'bold', color: '#a0a0ff', minWidth: '80px' }}>
        {label}:
      </span>
      <span style={{ color: '#fff' }}>{value}</span>
    </div>
  );
}

export default function ViewCharacters() {
  const { data, isLoading, error } = useQueryGetCharacters();
  const [selectedCharacter, setSelectedCharacter] = useState<Characters | null>(
    null
  );

  const galleryImages =
    data?.map((character) => ({
      src: character.profile_image,
      alt: character.name,
    })) || [];

  const handleImageClick = (imageData: Characters, index: number) => {
    const character =
      data?.[index] ||
      data?.find((char) => char.profile_image === imageData?.profile_image);
    if (character) {
      setSelectedCharacter(character);
    }
  };

  if (isLoading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          fontSize: '24px',
          color: '#667eea',
        }}
      >
        Carregando personagens...
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          fontSize: '24px',
          color: '#ff4444',
        }}
      >
        Erro ao carregar personagens: {error.message}
      </div>
    );
  }

  return (
    <>
      <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
        <DomeGallery
          images={galleryImages}
          fit={0.6}
          dragSensitivity={15}
          enlargeTransitionMs={400}
          openedImageWidth="500px"
          openedImageHeight="500px"
          imageBorderRadius="20px"
          openedImageBorderRadius="20px"
          grayscale={true}
          overlayBlurColor="#0a0a1e"
          onImageClick={handleImageClick}
        />

        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />
      </div>

      {selectedCharacter && (
        <CharacterModal
          character={selectedCharacter}
          onClose={() => setSelectedCharacter(null)}
        />
      )}
    </>
  );
}
