import DomeGallery from '@components/dome-gallery';
import CharacterModal from '@components/modal-characters';
import { useQueryGetCharacters } from '@hooks/use-query-characters';
import type { Characters } from '@models/characters';
import { useState } from 'react';

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

  function handleImageClick(imageData: Characters, index: number) {
    const character =
      data?.[index] ||
      data?.find((char) => char.profile_image === imageData?.profile_image);
    if (character) {
      setSelectedCharacter(character);
    }
  }

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
