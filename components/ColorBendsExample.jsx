"use client";

import ColorBends from './ColorBends';

export default function ColorBendsExample() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* ColorBends Background */}
      <ColorBends
        colors={["#ff5c7a", "#8a5cff", "#03BFFF"]}
        rotation={30}
        speed={0.3}
        scale={1.2}
        frequency={1.4}
        warpStrength={1.2}
        mouseInfluence={0.8}
        parallax={0.6}
        noise={0.08}
        transparent={false}
        className="color-bends-background"
      />
      
      {/* Content on top */}
      <div style={{ 
        position: 'relative', 
        zIndex: 10, 
        padding: '2rem',
        color: 'white',
        textAlign: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
          ColorBends Background
        </h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
          This is an example of using the ColorBends component as a full-page animated background. 
          The background responds to mouse movement and creates beautiful flowing color patterns.
        </p>
        <div style={{ 
          marginTop: '2rem', 
          padding: '1rem 2rem', 
          backgroundColor: 'rgba(255,255,255,0.1)', 
          borderRadius: '10px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.2)'
        }}>
          <p>Move your mouse around to see the interactive effects!</p>
        </div>
      </div>
    </div>
  );
}