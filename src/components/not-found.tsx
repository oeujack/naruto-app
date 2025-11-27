import { Box, Typography } from '@mui/material';
import imgWhite from '@assets/palha.webp';
import '@styles/not-found.css';
import { useEffect } from 'react';
import FuzzyText from '@components/fuzzy-text';

export default function PageNotFound() {
  useEffect(() => {
    const element = document.querySelector('.bounce') as HTMLElement;
    if (element) {
      element.style.backgroundImage = `url(${imgWhite})`;
    }
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <Box
        sx={{
          fontSize: '120px',
          fontWeight: 'bold',
          lineHeight: 1,
          mb: 4,
          // Importante: FuzzyText precisa de um tamanho de fonte definido
          '& .fuzzy-text': {
            fontSize: 'inherit',
          },
        }}
      >
        <FuzzyText
          baseIntensity={0.3}
          fontWeight={700}
          color="#000"
        >
          404
        </FuzzyText>
      </Box>
      <Box
        sx={{
          m: '1em auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            display: 'block',
            textAlign: 'center',
            height: '100px',
            width: '100px',
            borderBottom: 'solid 2px #333',
            overflow: 'hidden',
          }}
        >
          <Box
            className="bounce"
            sx={{
              display: 'inline-block',
              position: 'absolute',
              bottom: 0,
              left: '50%',
              width: '40px',
              height: '40px',
              marginLeft: '-20px',
              backgroundSize: 'contain',
              animation:
                'bounceAnim 1s cubic-bezier(0.63, 0.09, 0.75, 0.46) infinite alternate, spinAnim 3s linear infinite',
            }}
          ></Box>

          <Box
            sx={{
              position: 'absolute',
              top: '95%',
              backgroundColor: '#333',
              width: '10px',
              height: '10px',
              borderRadius: '20px 20px 0px 0px',
              animation: 'pebblesAnim 1s linear infinite',
            }}
          ></Box>
          <Box
            sx={{
              position: 'absolute',
              top: '97%',
              backgroundColor: '#333',
              width: '5px',
              height: '5px',
              borderRadius: '10px 10px 0px 0px',
              animation: 'pebblesAnim 2s linear infinite',
            }}
          ></Box>
          <Box
            sx={{
              position: 'absolute',
              top: '98%',
              backgroundColor: '#333',
              width: '3px',
              height: '3px',
              borderRadius: '20px 20px 0px 0px',
              animation: 'pebblesAnim 3s linear infinite',
            }}
          ></Box>
        </Box>

        <Box>
          <Typography
            variant="h3"
            fontSize="24px"
            fontWeight="400"
            lineHeight="35px"
            textAlign="center"
            sx={{
              color: (theme) =>
                theme.palette.mode === 'dark' ? 'white' : 'black',
              mt: 2,
              fontFamily: 'Varela Round, sans-serif',
            }}
          >
            Página não encontrada
          </Typography>
          <Typography
            sx={{
              color: (theme) =>
                theme.palette.mode === 'dark' ? '#A0A0A0' : '#666',
              fontFamily: 'Varela Round, sans-serif',
            }}
            textAlign="center"
            fontSize="0.950rem"
          >
            A página que você está tentando acessar não existe ou foi movida.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
