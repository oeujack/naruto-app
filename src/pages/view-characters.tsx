import DomeGallery from '@components/dome-gallery';
import CharacterModal from '@components/modal-characters';
import { useQueryGetCharacters } from '@hooks/use-query-characters';
import type { Characters } from '@models/characters';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import opening from '@assets/opening.gif';

export default function ViewCharacters() {
  const { data, isLoading, error } = useQueryGetCharacters();
  const [selectedCharacter, setSelectedCharacter] = useState<Characters | null>(
    null
  );
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setShowLoading(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

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
      <AnimatePresence mode="wait">
        {(isLoading || showLoading) && (
          <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.1,
              filter: 'blur(10px)',
            }}
            transition={{
              duration: 0.8,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
              width: '100vw',
              background: '#000000ff ',
              position: 'fixed',
              top: 0,
              left: 0,
              zIndex: 9999,
              overflow: 'hidden',
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: 'easeOut',
              }}
              style={{
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '30px',
              }}
            >
              <div
                style={{
                  width: '400px',
                  height: '300px',
                  borderRadius: '15px',
                  overflow: 'hidden',

                  backdropFilter: 'blur(10px)',
                  position: 'relative',
                }}
              >
                <img
                  src={opening}
                  alt="Carregando"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </motion.div>

            <style>{`
              @keyframes drift {
                0%, 100% { transform: translate(0, 0) scale(1); }
                33% { transform: translate(40px, -30px) scale(1.1); }
                66% { transform: translate(-30px, 25px) scale(0.95); }
              }
              
              @keyframes float {
                0%, 100% { transform: translateY(0px); opacity: 0.6; }
                50% { transform: translateY(-25px); opacity: 0.9; }
              }
              
              @keyframes glow {
                0%, 100% { opacity: 0.3; }
                50% { opacity: 0.6; }
              }
            `}</style>
          </motion.div>
        )}
      </AnimatePresence>

      {!showLoading && !isLoading && (
        <motion.div
          key="content"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
          style={{ width: '100vw', height: '100vh', position: 'relative' }}
        >
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
        </motion.div>
      )}

      {selectedCharacter && (
        <CharacterModal
          character={selectedCharacter}
          onClose={() => setSelectedCharacter(null)}
        />
      )}
    </>
  );
}
