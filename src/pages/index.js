import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout title="Natalie The Nerd Wiki" description="Game Boy board scans, references and more">
      <main style={{ textAlign: 'center', padding: '20px' }}>
        <h1>👩‍💻 Natalie The Nerd Wiki</h1>
        <h4>A collection of resources made by Natalie the Nerd</h4>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px',
            maxWidth: '800px',
            margin: '40px auto',
          }}
        >
          <a
            href="/docs/category/dmg"
            style={{
              textDecoration: 'none',
              color: 'inherit',
              border: '1px solid #ddd',
              borderRadius: '12px',
              padding: '30px 20px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
              transition: 'transform 0.15s ease, box-shadow 0.15s ease',
            }}
            onMouseOver={e => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.05)';
            }}
          >
            <div style={{ fontSize: '60px', marginBottom: '10px' }}>🖥️</div>
            <h2 style={{ fontSize: '1.3em', margin: '10px 0' }}>DMG</h2>
            <p style={{ fontSize: '0.95em', lineHeight: '1.4em', maxWidth: '250px', margin: '0 auto' }}>
              The first in the Game Boy family, released in 1989.
            </p>
          </a>

          <a
            href="/docs/category/game-boy-pocket"
            style={{
              textDecoration: 'none',
              color: 'inherit',
              border: '1px solid #ddd',
              borderRadius: '12px',
              padding: '30px 20px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
              transition: 'transform 0.15s ease, box-shadow 0.15s ease',
            }}
            onMouseOver={e => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.05)';
            }}
          >
            <div style={{ fontSize: '60px', marginBottom: '10px' }}>🖥</div>
            <h2 style={{ fontSize: '1.3em', margin: '10px 0' }}>Pocket</h2>
            <p style={{ fontSize: '0.95em', lineHeight: '1.4em', maxWidth: '250px', margin: '0 auto' }}>
              The second in the Game Boy family, released in 1996. A slimmed-down unit that requires two AAA.
            </p>
          </a>

           <a
            href="/docs/category/game-boy-color"
            style={{
              textDecoration: 'none',
              color: 'inherit',
              border: '1px solid #ddd',
              borderRadius: '12px',
              padding: '30px 20px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
              transition: 'transform 0.15s ease, box-shadow 0.15s ease',
            }}
            onMouseOver={e => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.05)';
            }}
          >
            <div style={{ fontSize: '60px', marginBottom: '10px' }}>🖥</div>
            <h2 style={{ fontSize: '1.3em', margin: '10px 0' }}>Color</h2>
            <p style={{ fontSize: '0.95em', lineHeight: '1.4em', maxWidth: '250px', margin: '0 auto' }}>
              The first in the Game Boy family to feature a color display. Released in 1998.
            </p>
          </a>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px',
            maxWidth: '800px',
            margin: '40px auto',
          }}
        >
          <a
            href="/docs/category/game-boy-advance"
            style={{
              textDecoration: 'none',
              color: 'inherit',
              border: '1px solid #ddd',
              borderRadius: '12px',
              padding: '30px 20px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
              transition: 'transform 0.15s ease, box-shadow 0.15s ease',
            }}
            onMouseOver={e => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.05)';
            }}
          >
            <div style={{ fontSize: '60px', marginBottom: '10px' }}>🖥️</div>
            <h2 style={{ fontSize: '1.3em', margin: '10px 0' }}>Advance</h2>
            <p style={{ fontSize: '0.95em', lineHeight: '1.4em', maxWidth: '250px', margin: '0 auto' }}>
              A 32-bit handheld game console, released in 2001.
            </p>
          </a>

          <a
            href="/docs/category/game-boy-advance-sp"
            style={{
              textDecoration: 'none',
              color: 'inherit',
              border: '1px solid #ddd',
              borderRadius: '12px',
              padding: '30px 20px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
              transition: 'transform 0.15s ease, box-shadow 0.15s ease',
            }}
            onMouseOver={e => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.05)';
            }}
          >
            <div style={{ fontSize: '60px', marginBottom: '10px' }}>🖥</div>
            <h2 style={{ fontSize: '1.3em', margin: '10px 0' }}>Advance SP</h2>
            <p style={{ fontSize: '0.95em', lineHeight: '1.4em', maxWidth: '250px', margin: '0 auto' }}>
              The first device in the Game Boy family with a rechargeable battery and the first widely released model with an integrated screen light. Released in 2003.
            </p>
          </a>

           <a
            href="/docs/category/game-boy-micro"
            style={{
              textDecoration: 'none',
              color: 'inherit',
              border: '1px solid #ddd',
              borderRadius: '12px',
              padding: '30px 20px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
              transition: 'transform 0.15s ease, box-shadow 0.15s ease',
            }}
            onMouseOver={e => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.05)';
            }}
          >
            <div style={{ fontSize: '60px', marginBottom: '10px' }}>🖥</div>
            <h2 style={{ fontSize: '1.3em', margin: '10px 0' }}>Micro</h2>
            <p style={{ fontSize: '0.95em', lineHeight: '1.4em', maxWidth: '250px', margin: '0 auto' }}>
              The smallest device of the Game Boy family. Released in 2005.
            </p>
          </a>
        </div>
      </main>
    </Layout>
  );
}
