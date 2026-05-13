import React from 'react';
import { Cloud, ArrowRight } from 'lucide-react';
import { CardContainer, CardBody, CardItem } from '../components/ThreeDCard';

// Image imports
import constructionImg from '../assets/construction.png';
import maintenanceImg from '../assets/maintenance.png';
import designImg from '../assets/design.png';
import backgroundVideo from '../assets/Terassikodu_background.mp4';

// Shop images
import oilImg from '../assets/shop/oil.png';
import brushImg from '../assets/shop/brush.png';
import cleanerImg from '../assets/shop/cleaner.png';
import screwsImg from '../assets/shop/screws.png';

const Home: React.FC = () => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div className="home-page-github">
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
            Koht kus algavad soojad suveõhtud, pere/sõpradega grillimised või hoopis rahulikud hommikuhetked 
            värskes õhus kohvi nautides. Pakume terrassi ehitust, hooldust ja planeerimist Tartus ning Tartumaal, 
            et sinu õuealast saaks mugav, vastupidav ja kaunis paik aastateks.
          </p>
        </div>
      </section>

      <section className="services-section">
        <div className="section-header-area">
          <div className="header-left">
            <h2 className="section-title">
              <span className="welcome-text">Tere!</span> Mis sind täpsemalt huvitab?
            </h2>
            <div className="section-header-buttons">
              <a href="/epood" className="section-btn-lime">E-POOD</a>
              <a href="/teenused" className="section-btn-dark">TEENUSED</a>
            </div>
          </div>
          <div className="header-right">
            <p className="section-description">
              Pakume täislahendust terassi planeerimisest kuni terassi ehitusest valmislahenduseni koos materjalidega.
            </p>
          </div>
        </div>
        
        <div className="section-cards-horizontal">
          <CardContainer className="inter-var">
            <CardBody className="bg-black/40 relative group/card dark:hover:shadow-2xl dark:bg-black/20 border-[#C0C0C0]/30 w-auto sm:w-[24rem] h-auto rounded-xl py-6 px-2 border transition-all duration-300 service-card">
              <CardItem translateZ="50" className="text-xl text-white w-full text-center card-title">
                Terassi/varjualuse ehitus
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img src={constructionImg} height="1000" width="1000" className="h-64 w-full object-cover rounded-xl group-hover/card:shadow-xl" alt="Terrassi ehitus" />
              </CardItem>
              <div className="flex justify-between items-center mt-10">
                <CardItem translateZ={20} as="button" className="px-4 py-2 rounded-xl font-normal text-white card-secondary-button">
                  Loe lähemalt →
                </CardItem>
                <CardItem translateZ={20} as="button" className="rounded-xl bg-white text-black card-cta-button">
                  Küsi pakkumist
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

          <CardContainer className="inter-var">
            <CardBody className="bg-black/40 relative group/card dark:hover:shadow-2xl dark:bg-black/20 border-[#C0C0C0]/30 w-auto sm:w-[24rem] h-auto rounded-xl py-6 px-2 border transition-all duration-300 service-card">
              <CardItem translateZ="50" className="text-xl text-white w-full text-center card-title">
                Hooldused ja õlitus
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img src={maintenanceImg} height="1000" width="1000" className="h-64 w-full object-cover rounded-xl group-hover/card:shadow-xl" alt="Hooldused ja õlitus" />
              </CardItem>
              <div className="flex justify-between items-center mt-10">
                <CardItem translateZ={20} as="button" className="px-4 py-2 rounded-xl font-normal text-white card-secondary-button">
                  Loe lähemalt →
                </CardItem>
                <CardItem translateZ={20} as="button" className="rounded-xl bg-white text-black card-cta-button">
                  Küsi pakkumist
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

          <CardContainer className="inter-var">
            <CardBody className="bg-black/40 relative group/card dark:hover:shadow-2xl dark:bg-black/20 border-[#C0C0C0]/30 w-auto sm:w-[24rem] h-auto rounded-xl py-6 px-2 border transition-all duration-300 service-card">
              <CardItem translateZ="50" className="text-xl text-white w-full text-center card-title">
                Materjal
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img src={designImg} height="1000" width="1000" className="h-64 w-full object-cover rounded-xl group-hover/card:shadow-xl" alt="Materjalid" />
              </CardItem>
              <div className="flex justify-between items-center mt-10">
                <CardItem translateZ={20} as="button" className="px-4 py-2 rounded-xl font-normal text-white card-secondary-button">
                  Loe lähemalt →
                </CardItem>
                <CardItem translateZ={20} as="button" className="rounded-xl bg-white text-black card-cta-button">
                  Küsi pakkumist
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>

        <div className="all-services-container">
          <a href="/teenused" className="all-services-link">
            <span>VAATA KÕIKI TEENUSEID</span>
            <div className="all-services-icon">
              <ArrowRight size={20} />
            </div>
          </a>
        </div>
      </section>
      <section className="epood-section">
        <div className="epood-section-container">
          <div className="section-header-area">
            <div className="header-left">
              <h2 className="section-title">
                <span className="welcome-text">E-pood</span>
                Kvaliteetsed materjalid terrassi ehituseks.
              </h2>
              <div className="section-header-buttons">
                <a href="/epood" className="section-btn-lime">VAATA KÕIKI</a>
              </div>
            </div>
            <div className="header-right">
              <p className="section-description">
                Leiame teile sobivaimad materjalid ja tarvikud. Pakume laia valikut kvaliteetseid tooteid otse meie e-poest.
              </p>
            </div>
          </div>

          <div className="popular-products-heading">
            <span className="category-label">E-POOD</span>
            <h2 className="main-heading">Populaarsed tooted</h2>
          </div>

          <div className="section-cards-horizontal products-grid-home">
            <div className="modern-product-card">
              <div className="product-image-wrapper">
                <img src={oilImg} alt="Premium Terrassiõli" />
                <span className="product-tag-lime">KVALITEETNE</span>
              </div>
              <div className="product-content">
                <span className="product-category">Puidukaitse</span>
                <h3 className="product-title">Premium Terrassiõli 5L</h3>
                <div className="product-footer">
                  <span className="read-more-text">LOE LÄHEMALT</span>
                  <div className="arrow-circle">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </div>

            <div className="modern-product-card">
              <div className="product-image-wrapper">
                <img src={screwsImg} alt="Roostevabad kruvid" />
                <span className="product-tag-lime">PREMIUM</span>
              </div>
              <div className="product-content">
                <span className="product-category">Paigaldustarvikud</span>
                <h3 className="product-title">Roostevabad kruvid A4</h3>
                <div className="product-footer">
                  <span className="read-more-text">LOE LÄHEMALT</span>
                  <div className="arrow-circle">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </div>

            <div className="modern-product-card">
              <div className="product-image-wrapper">
                <img src={cleanerImg} alt="Süvapesuvahend" />
                <span className="product-tag-lime">SOOVITATUD</span>
              </div>
              <div className="product-content">
                <span className="product-category">Hooldus</span>
                <h3 className="product-title">Süvapesuvahend 2.5L</h3>
                <div className="product-footer">
                  <span className="read-more-text">LOE LÄHEMALT</span>
                  <div className="arrow-circle">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </div>

            <div className="modern-product-card">
              <div className="product-image-wrapper">
                <img src={brushImg} alt="Hooldushari Pro" />
                <span className="product-tag-lime">TARVIK</span>
              </div>
              <div className="product-content">
                <span className="product-category">Paigaldustarvikud</span>
                <h3 className="product-title">Hooldushari Pro</h3>
                <div className="product-footer">
                  <span className="read-more-text">LOE LÄHEMALT</span>
                  <div className="arrow-circle">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
