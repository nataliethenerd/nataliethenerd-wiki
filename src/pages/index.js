import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout title="Natalie The Nerd Wiki" description="Game Boy board scans, refrences and more">
      <main style={{ textAlign: 'center', padding: '20px' }}>
        <h1>👩‍💻 Natalie The Nerd Wiki</h1>
        <p>Game Boy board scans, schematics, refrences and more</p>
        <a href="/docs/intro" style={{ padding: '10px', background: '#007acc', color: '#fff', borderRadius: '5px', textDecoration: 'none' }}>📖 Read the Wiki</a>
      </main>
    </Layout>
  );
}
