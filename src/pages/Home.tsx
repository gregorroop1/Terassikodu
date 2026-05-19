import React from 'react';
import { ArrowRight } from 'lucide-react';
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

// Portfolio images
import project1 from '../assets/portfolio/project1.png';
import project2 from '../assets/portfolio/project2.png';
import project3 from '../assets/portfolio/project3.png';
import project4 from '../assets/portfolio/project4.png';
import project5 from '../assets/portfolio/project5.png';
import project6 from '../assets/portfolio/project6.png';

const Home: React.FC = () => {
  const projects = [
    { id: 1, title: "Modernne puhkeala", location: "Tartu vald", image: project1 },
    { id: 2, title: "Luksuslik terrassikompleks", location: "Elva", image: project2 },
    { id: 3, title: "Minimalistlik metsavaade", location: "Ülenurme", image: project3 },
    { id: 4, title: "Sunset Terrace", location: "Luunja", image: project4 },
    { id: 5, title: "Architectural Deck", location: "Tartu linn", image: project5 },
    { id: 6, title: "Outdoor Kitchen & Terrace", location: "Haaslava", image: project6 }
  ];

  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video autoplay failed:", error);
      });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document.querySelectorAll('.process-item').forEach(el => el.classList.remove('active'));
            entry.target.classList.add('active');
          } else {
            entry.target.classList.remove('active');
          }
        });
      },
      {
        rootMargin: '-45% 0px -45% 0px',
        threshold: 0,
      }
    );

    const processItems = document.querySelectorAll('.process-item');
    processItems.forEach((item) => observer.observe(item));

    return () => {
      processItems.forEach((item) => observer.unobserve(item));
      observer.disconnect();
    };
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
              <span className="welcome-text">Teenused</span><br />
              Mis sind täpsemalt huvitab?
            </h2>
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

      <section className="epood-hero-banner">
        <div className="epood-hero-overlay"></div>
        <div className="epood-section-container relative z-10">
          <div className="epood-hero-content">
            <div className="header-left">
              <h2 className="section-title">
                <span className="welcome-text">E-pood</span><br />
                Kvaliteetsed materjalid terrassi ehituseks.
              </h2>
              <div className="section-header-buttons">
                <a href="/epood" className="section-btn-lime-large">VAATA E-POODI</a>
              </div>
            </div>
            <div className="header-right-aligned">
              <div className="description-with-line">
                <p className="section-description-hero">
                  Meilt leiad enda maitsele sobivaimad materjalid ja tarvikud. Pakume laia valikut kvaliteetseid tooteid otse meie e-poest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="epood-section">
        <div className="epood-section-container">
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
                <div className="product-price-row">
                  <span className="product-price">65.00€</span>
                  <span className="product-price-unit">/ tk</span>
                </div>
                <div className="product-footer">
                  <span className="read-more-text">VAATA TOODET</span>
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
                <h3 className="product-title">Roostevabad kruvid A4 200tk</h3>
                <div className="product-price-row">
                  <span className="product-price">42.50€</span>
                  <span className="product-price-unit">/ pakk</span>
                </div>
                <div className="product-footer">
                  <span className="read-more-text">VAATA TOODET</span>
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
                <div className="product-price-row">
                  <span className="product-price">28.90€</span>
                  <span className="product-price-unit">/ tk</span>
                </div>
                <div className="product-footer">
                  <span className="read-more-text">VAATA TOODET</span>
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
                <div className="product-price-row">
                  <span className="product-price">15.00€</span>
                  <span className="product-price-unit">/ tk</span>
                </div>
                <div className="product-footer">
                  <span className="read-more-text">VAATA TOODET</span>
                  <div className="arrow-circle">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="epood-section-container">
          <div className="section-header-area">
            <div className="header-left">
              <h2 className="section-title">
                <span className="welcome-text">Protsess</span><br />
                Kuidas näeb välja Terassi ehitamise protsess?
              </h2>
            </div>
            <div className="header-right">
              <p className="section-description">
                Meie lähenemine on süsteemne ja läbimõeldud, tagades parima tulemuse igas etapis.
              </p>
            </div>
          </div>

          <div className="process-grid">
            {[
              { num: "01", title: "Ala mõõtmine ja maastiku hindamine", desc: "Mõõda terassi pindala täpselt ja hinda maapinna kallet. Pöörä tähelepanu drenaaži suunale, puujuurtele ja varjuallikatele, et vältida hilisemaid probleeme. Kaasa mõõtmisse ka olemasolevad taristu elemendid, nagu torud ja kaablid." },
              { num: "02", title: "Terassi funktsioonide ja kasutuse plaanimine", desc: "Otsusta, milleks terrassi peamiselt kasutatakse — söömiseks, lõõgastumiseks, grillimiseks või laste mängualaks. Funktsioon määrab terassi suuruse, kuju ja vajalikud lisad, nagu piirded, valgustus, katused ja veepistikupesad." },
              { num: "03", title: "Eelarve koostamine", desc: "Koosta realistlik eelarve, mis katab nii materjalid, tööjõu kui ka ootamatud kulud. Hea rusikareegel on lisada kavandatavale eelarvele 15–20% reserv. Eelarve mõjutab otseselt materjali valikut — puit, komposiit ja kivi erinevad hinna poolest oluliselt." },
              { num: "04", title: "Projekti koostamine ja visandamine", desc: "Joonista terassi plaan koos mõõtude, sammaste asukohte ja drenaaži suunaga. Isegi lihtne käsitsi tehtud visand aitab tuvastada praktilisi probleeme enne paigaldust. Keerukamatel juhtudel tasub palgata projekteerija." },
              { num: "05", title: "Ehitusloa ja kooskõlastuste kontrollimine", desc: "Enne tööde alustamist kontrolli oma omavalitsusest, kas terassi rajamiseks on vaja ehitusluba. Üldreeglina nõuab luba terass, mtis ületab 20 m² või asub elumaja juurde ehitatuna. Loa menetlemine võtab aega, plaani see ajakavasse." },
              { num: "06", title: "Materjali ja paigaldusmeetodi valimine", desc: "Vali materjal vastavalt eelarvele, esteetikale ja hooldussoovidele. Töötlemata puit on soodne, kuid vajab regulaarset hooldust. Komposiit- ja WPC-terrassid on vastupidavamad ja madalama hoolduskoormusega. Kivid ja betoon sobivad hästi kuumaõhksoojendusega terassidele." },
              { num: "07", title: "Terassi paigaldamine", desc: "Aluspõhja ja kandestruktuuri kvaliteet määrab terassi eluea. Kanna alustarind immutusainega ning taga piisav ventileerimine konstruktsiooni all. Puittüüpidel jäta lauad vahele 3–5 mm paisumisvahe. Keerulisemad tööd usaldada professionaalile." },
              { num: "08", title: "Regulaarne hooldus ja pikaealisuse tagamine", desc: "Terassi hooldus pikendab oluliselt selle eluiga. Puidust terrassi puhul tähenda see iga-aastast õlitamist või lakkimist. Komposiitlaudu puhasta kaks korda aastas pesuainelahusega. Kontrolli regulaarselt kinnituste ja kandekonstruktsiooni seisukorda." }
            ].map((step, idx) => (
              <div key={idx} className="process-item">
                <div className="process-number-wrap">
                  <span className="process-number">{step.num}</span>
                </div>
                <div className="process-content">
                  <h3 className="process-item-title">{step.title}</h3>
                  <p className="process-item-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-listing-section home-portfolio-preview">
        <div className="epood-section-container">
          <div className="section-header-area">
            <div className="header-left">
              <h2 className="section-title">
                <span className="welcome-text">Tehtud tööd</span><br />
                Valitud tööd
              </h2>
            </div>
            <div className="header-right">
              <p className="section-description">
                Siin on valik meie poolt teostatud projekte. Iga terass räägib oma loo.
              </p>
            </div>
          </div>

          <div className="portfolio-grid">
            {projects.slice(0, 3).map((project, idx) => (
              <div
                key={project.id}
                className={`portfolio-item item-${(idx % 3) + 1}`}
              >
                <div className="portfolio-image-wrapper">
                  <img src={project.image} alt={project.title} className="portfolio-image" />
                  <div className="portfolio-info-overlay">
                    <span className="project-location">{project.location}</span>
                    <h3 className="project-title">{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="all-services-container">
            <a href="/tehtud-tood" className="all-services-link">
              <span>VAATA KÕIKI TÖID</span>
              <div className="all-services-icon">
                <ArrowRight size={20} />
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="epood-section-container">
          <div className="section-header-area">
            <div className="header-left">
              <h2 className="section-title">
                <span className="welcome-text">KKK</span><br />
                Korduma Kippuvad Küsimused
              </h2>
            </div>
          </div>

          <div className="faq-container">
            {[
              { q: "Kui palju maksab terrassi ehitus ruutmeetri kohta?", a: "Terrassi ehituse hind sõltub materjalist, maapinna ettevalmistusest ja disaini keerukusest. Üldiselt jäävad hinnad vahemikku 50-150€/m². Täpse pakkumise saamiseks võtke meiega ühendust." },
              { q: "Milline materjal on kõige vastupidavam?", a: "Kõige vastupidavamad on komposiitmaterjalid (WPC) ja termopuit, kuna need taluvad hästi Eesti muutlikku kliimat ja vajavad vähem hooldust võrreldes tavalise immutatud männiga." },
              { q: "Kas terrassi ehituseks on vaja ehitusluba?", a: "Enamasti mitte, kui terrass on madal ja alla 20m². Suuremate või elumajaga ühendatud konstruktsioonide puhul tasub kohalikust omavalitsusest üle kontrollida, kuna reeglid võivad piirkonniti erineda." },
              { q: "Kui tihti peaks terrassi õlitama?", a: "Tavalisest puidust terrassi tuleks õlitada kord aastas, eelistatavalt kevadel pärast süvapesu. See hoiab ära puidu pragunemise ja pleekimise. Komposiitterrassid õlitamist ei vaja." },
              { q: "Millal on parim aeg terrassi ehitamiseks?", a: "Parim aeg on kevadest sügiseni, mil maapind on kuiv ja temperatuurid on püsivalt üle nulli. See tagab vundamendi stabiilsuse ja võimaldab materjalidel loomulikult kohaneda." }
            ].map((item, idx) => (
              <div key={idx} className="faq-item">
                <details>
                  <summary className="faq-question">
                    {item.q}
                    <span className="faq-icon"></span>
                  </summary>
                  <div className="faq-answer">
                    <p>{item.a}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
