import React, { useState } from 'react';
import { BrandMark, Button, Card, Divider } from './design-system';
import { openTallyForm } from './utils/tally';
import photoSam from './assets/photo_sam_2.jpeg';
import './App.css';

const TALLY_FORM_URL = import.meta.env.VITE_TALLY_FORM_URL;

export default function App() {
  const [showSetupNotice, setShowSetupNotice] = useState(false);

  const handleBecomeClient = () => {
    const result = openTallyForm(TALLY_FORM_URL);
    if (!result.opened && result.reason === 'placeholder') {
      setShowSetupNotice(true);
    } else {
      setShowSetupNotice(false);
    }
  };

  return (
    <main className="nb-container stech-page">
      <header className="stech-header">
        <BrandMark prefix="S-" highlight="TECH" />
        <div className="stech-header__right">
          <div className="stech-header__identity">
            <h3>Samuel Schmutz</h3>
            <span className="stech-header__meta">Stellenbosch, ZA</span>
          </div>
          <img
            src={photoSam}
            alt="Samuel Schmutz — Founder of S-Tech"
            className="stech-header__avatar"
          />
        </div>
      </header>

      <Divider />

      <section className="stech-hero" aria-labelledby="hero-heading">
        <h1 id="hero-heading" className="nb-heading nb-heading--hero">
          Capture more of the market
        </h1>
        <p className="nb-copy stech-hero__lead">
          Targeted, scalable ad campaigns built to improve your business' visibility in South Africa
        </p>
      </section>

      <div className="stech-sections">
        <Card label="Mission" labelTone="mint">
          <p className="nb-copy">
            Scale businesses in South Africa by connecting them
            with more of their clients. This can be done through ad campaigns that ensure more customers and engagement.
          </p>
        </Card>

        <Card label="About Me" labelTone="lavender">
          <p className="nb-copy">
            I&apos;m a final-year Data Engineering student at Stellenbosch
            University, passionate about using technology, automation, and
            problem-solving to boost South Africa&apos;s private sector.
          </p>
        </Card>
      </div>

      <section className="stech-cta" aria-label="Client onboarding">
        <div className="stech-cta__bar">
          <div className="stech-cta__copy">
            <h2 className="stech-cta__title">Ready to scale your business?</h2>
            <p className="stech-cta__note">
              Opens a short form to leave your details and I&apos;ll get back to you as soon as possible.
            </p>
          </div>
          <Button
            variant="lavender"
            size="lg"
            className="stech-cta__action"
            onClick={handleBecomeClient}
          >
            Become a Client &rarr;
          </Button>
        </div>

        {showSetupNotice ? (
          <div className="stech-cta__warning" role="status">
            Tally form URL is currently a placeholder. Set{' '}
            <code>VITE_TALLY_FORM_URL</code> in your <code>.env</code> file and
            restart the dev server to enable the live form.
          </div>
        ) : null}
      </section>

      <footer className="stech-footer">
        <span>S-Tech</span>
        <span>Scalable Ad Campaigns &bull; South Africa</span>
      </footer>
    </main>
  );
}
