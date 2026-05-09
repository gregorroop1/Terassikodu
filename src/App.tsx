import React from 'react';
import { Cloud, ArrowRight } from 'lucide-react';
import './App.css';
import backgroundVideo from './assets/Terassikodu_background.mp4';
import { CardContainer, CardBody, CardItem } from './components/ThreeDCard';

// Image imports
import constructionImg from './assets/construction.png';
import maintenanceImg from './assets/maintenance.png';
import designImg from './assets/design.png';

function App() {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div className="app-container">
      <div className="hero-section">
        <video
          ref={videoRef}
          className="background-video"
          src={backgroundVideo}
          muted
          autoPlay
          loop
          playsInline
          preload="auto"
        />
        <div className="overlay"></div>

        <nav className="navbar">
          <div className="logo-container">
            <Cloud className="logo-icon" strokeWidth={1.5} />
            <span>Terassikodu.ee</span>
          </div>

          <div className="nav-menu">
            <span className="nav-link">Avaleht</span>
            <span className="nav-link">Teenused</span>
            <span className="nav-link">Tehtud tööd</span>
            <button className="nav-button">PLANEERIMINE</button>
          </div>
        </nav>

        <main className="hero-content">
          <h1 className="hero-title">
            Terrasi ehitus ja planeerimine<br />Tartus ja Tartumaal.
          </h1>
        </main>

        <div className="hero-bottom">
          <p className="hero-description">
            Modernse ja silmapaistva terassi ehitamine ja planeerimine taskukohase hinnaga.
            Küsi meilt julgelt nõu ja teeme sulle mõistliku hinnaga pakkumise.
          </p>

          <div className="cta-container">
            <button className="cta-button">KÜSI PAKKUMIST</button>
            <button className="cta-icon-btn" aria-label="Küsi pakkumist">
              <ArrowRight size={20} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>

      <section className="intro-section">
        <div className="intro-container">
          <p className="intro-text">
            Koht kus algavad soojad suveõhtud, pere/sõpradega grillimised või hoopis rahulikud hommikuhetked värskes õhus kohvi nautides.
            Pakume terrassi ehitust, hooldust ja planeerimist Tartus ning Tartumaal, et sinu õuealast saaks mugav, vastupidav ja kaunis paik aastateks.
          </p>
        </div>
      </section>

      <section className="services-section">
        <div className="section-header-area">
          <h2 className="section-title">Mida sina soovid?</h2>
        </div>

        <div className="section-cards-horizontal">
          <CardContainer className="inter-var">
            <CardBody className="bg-black/40 relative group/card dark:hover:shadow-2xl dark:bg-black/20 border-[#C0C0C0]/30 w-auto sm:w-[24rem] h-auto rounded-xl py-6 px-2 border transition-all duration-300 service-card">
              <CardItem
                translateZ="50"
                className="text-xl text-white w-full text-center card-title"
              >
                Terassid
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={constructionImg}
                  height="1000"
                  width="1000"
                  className="h-64 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Terrassi ehitus"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-10">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl font-normal text-white card-secondary-button"
                >
                  Loe lähemalt →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="rounded-xl bg-white text-black card-cta-button"
                >
                  Küsi pakkumist
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

          <CardContainer className="inter-var">
            <CardBody className="bg-black/40 relative group/card dark:hover:shadow-2xl dark:bg-black/20 border-[#C0C0C0]/30 w-auto sm:w-[24rem] h-auto rounded-xl py-6 px-2 border transition-all duration-300 service-card">
              <CardItem
                translateZ="50"
                className="text-xl text-white w-full text-center card-title"
              >
                Varjualused
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={designImg}
                  height="1000"
                  width="1000"
                  className="h-64 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Varjualused"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-10">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl font-normal text-white card-secondary-button"
                >
                  Loe lähemalt →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="rounded-xl bg-white text-black card-cta-button"
                >
                  Küsi pakkumist
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

          <CardContainer className="inter-var">
            <CardBody className="bg-black/40 relative group/card dark:hover:shadow-2xl dark:bg-black/20 border-[#C0C0C0]/30 w-auto sm:w-[24rem] h-auto rounded-xl py-6 px-2 border transition-all duration-300 service-card">
              <CardItem
                translateZ="50"
                className="text-xl text-white w-full text-center card-title"
              >
                Hooldus ja õlitamine
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={maintenanceImg}
                  height="1000"
                  width="1000"
                  className="h-64 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Hooldus ja õlitamine"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-10">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl font-normal text-white card-secondary-button"
                >
                  Loe lähemalt →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="rounded-xl bg-white text-black card-cta-button"
                >
                  Küsi pakkumist
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </section>
    </div>
  );
}

export default App;
