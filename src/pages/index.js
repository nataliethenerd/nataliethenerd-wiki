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
            href="/docs/category/scans"
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
            <h2 style={{ fontSize: '1.3em', margin: '10px 0' }}>Scans</h2>
            <p style={{ fontSize: '0.95em', lineHeight: '1.4em', maxWidth: '250px', margin: '0 auto' }}>
              Soldermask and copper scans of various PCBs to aid in repairs and modding.
            </p>
          </a>

          <a
            href="/docs/category/device-references"
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
            <div style={{ fontSize: '60px', marginBottom: '10px' }}>📚</div>
            <h2 style={{ fontSize: '1.3em', margin: '10px 0' }}>Device Reference</h2>
            <p style={{ fontSize: '0.95em', lineHeight: '1.4em', maxWidth: '250px', margin: '0 auto' }}>
              Schematics, pinouts, KiCad libraries, and technical resources for devices.
            </p>
          </a>
        </div>
      </main>
    </Layout>
  );
}
