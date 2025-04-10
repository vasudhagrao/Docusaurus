import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

import React from 'react';

export default function Home() {
  return (
    <Layout title="Twitter Spam Detection">
     <main
  style={{
    background: 'url("/img/bg-pattern.png") center/cover',
    padding: '5rem 1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '80vh',
  }}
>
  <div
    style={{
      backdropFilter: 'blur(10px)',
      background: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      padding: '3rem',
      borderRadius: '1.5rem',
      textAlign: 'center',
      color: '#fff',
    }}
  >
    <h1 style={{ fontSize: '2.75rem' }}>Twitter Spam Detection</h1>
    <p style={{ fontSize: '1.25rem', margin: '1rem 0 2rem' }}>
      ML-powered detection of spam tweets using NLP.
    </p>
    <a
      className="button button--primary"
      style={{ fontWeight: 'bold', fontSize: '1.1rem' }}
      href="/docs/introduction"
    >
      Start Exploring 🚀
    </a>
  </div>
</main>

<section style={{ textAlign: 'center', marginTop: '4rem' }}>
  <img
    src="/img/vasudha-rao.png"
    alt="Vasudha Rao"
    style={{
      width: '120px',
      height: '120px',
      borderRadius: '50%',
      objectFit: 'cover',
      marginBottom: '1rem',
    }}
  />
  <h3><section style={{ textAlign: 'center', marginTop: '1rem' }}>
  <h3>Vasudha Rao</h3>
  <p>Project Documentation  </p>
  <div style={{ marginTop: '0.5rem' }}>
    <a href="mailto:vasurao1996@gmail.com">📧 Email</a> | 
    <a href="https://github.com/vasudhagrao" target="_blank">GitHub</a> | 
    <a href="https://www.linkedin.com/in/vasudha-rao-400651128/" target="_blank">LinkedIn</a>
  </div>
</section>
</h3>
</section>


    </Layout>
  );
}
