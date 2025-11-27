import DomeGallery from '@components/DomeGallery';
import { useQueryGetCharacters } from '@hooks/use-query-characters';
import { useState } from 'react';

// Componente para exibir os detalhes do personagem
function CharacterModal({ character, onClose }) {
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
              {character.father && (
                <InfoRow label="Pai" value={character.father} />
              )}
              {character.mother && (
                <InfoRow label="Mãe" value={character.mother} />
              )}
              {character.village && (
                <InfoRow label="Vila" value={character.village} />
              )}
              {character.rank && (
                <InfoRow label="Rank" value={character.rank} />
              )}
              {character.power && (
                <InfoRow label="Poder" value={character.power} />
              )}
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

            {character.jutsus && character.jutsus.length > 0 && (
              <div style={{ marginTop: '20px' }}>
                <h3
                  style={{
                    fontSize: '18px',
                    marginBottom: '10px',
                    color: '#a0a0ff',
                  }}
                >
                  Jutsus
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {character.jutsus.map((jutsu, index) => (
                    <span
                      key={index}
                      style={{
                        padding: '6px 12px',
                        backgroundColor: 'rgba(102, 126, 234, 0.2)',
                        borderRadius: '20px',
                        fontSize: '14px',
                        border: '1px solid rgba(102, 126, 234, 0.4)',
                      }}
                    >
                      {jutsu}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {character.images && character.images.length > 0 && (
          <div style={{ marginTop: '30px' }}>
            <h3
              style={{
                fontSize: '18px',
                marginBottom: '15px',
                color: '#a0a0ff',
              }}
            >
              Galeria
            </h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
                gap: '15px',
              }}
            >
              {character.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${character.name} ${index + 1}`}
                  style={{
                    width: '100%',
                    height: '150px',
                    objectFit: 'cover',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    transition: 'transform 0.3s',
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = 'scale(1.05)')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = 'scale(1)')
                  }
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function InfoRow({ label, value }) {
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
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  // Preparar as imagens para o DomeGallery
  const galleryImages =
    data?.map((character) => ({
      src: character.profile_image,
      alt: character.name,
      characterData: character,
    })) || [];

  // Handler customizado para quando uma imagem for clicada
  const handleImageClick = (imageData) => {
    if (imageData?.characterData) {
      setSelectedCharacter(imageData.characterData);
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
        />

        {/* Overlay customizado para capturar cliques */}
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
