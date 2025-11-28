import { motion } from 'framer-motion';

export default function CreateBy({ position = 'footer' }) {
  const isFooter = position === 'footer';

  return (
    <motion.div
      initial={{ opacity: 0, y: isFooter ? 20 : -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      style={{
        position: 'fixed',
        [isFooter ? 'bottom' : 'top']: '15px',
        right: '15px',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 14px',
        background:
          'linear-gradient(135deg, rgba(255, 140, 60, 0.15), rgba(255, 100, 40, 0.1))',
        backdropFilter: 'blur(10px)',
        borderRadius: '50px',
        border: '2px solid rgba(255, 140, 60, 0.3)',
        boxShadow:
          '0 4px 20px rgba(255, 140, 60, 0.2), 0 0 40px rgba(0, 0, 0, 0.3)',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
      }}
      whileTap={{ scale: 0.95 }}
      onClick={() => window.open('https://github.com/oeujack', '_blank')}
    >
      <motion.svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        style={{ flexShrink: 0 }}
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        <path
          d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
          fill="#f5e6d3"
        />
      </motion.svg>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
        <div
          style={{
            fontFamily: "'Ninja Naruto', cursive",
            fontSize: '14px',
            color: '#ff8c3c',
            textShadow:
              '0 2px 10px rgba(255, 140, 60, 0.5), 0 0 20px rgba(0, 0, 0, 0.8)',
            letterSpacing: '0.5px',
            lineHeight: 1.2,
          }}
        >
          CREATED BY
        </div>
        <div
          style={{
            fontFamily: "'Ninja Naruto', cursive",
            fontSize: '16px',
            color: '#ffa858',
            textShadow:
              '0 2px 15px rgba(255, 140, 60, 0.6), 0 0 25px rgba(0, 0, 0, 0.9)',
            letterSpacing: '1px',
            lineHeight: 1,
          }}
        >
          JACKSON
        </div>
      </div>

      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            'radial-gradient(circle at center, rgba(255, 140, 60, 0.2), transparent 70%)',
          borderRadius: '50px',
          pointerEvents: 'none',
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <style>{`
        @import url('https://fonts.cdnfonts.com/css/ninja-naruto');
        
        @font-face {
          font-family: 'Ninja Naruto';
          src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/Ninja%20Naruto.woff') format('woff');
          font-weight: normal;
          font-style: normal;
        }
      `}</style>
    </motion.div>
  );
}
