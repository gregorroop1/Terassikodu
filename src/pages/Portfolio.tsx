import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Portfolio images
import project1 from '../assets/portfolio/project1.png';
import project2 from '../assets/portfolio/project2.png';
import project3 from '../assets/portfolio/project3.png';
import project4 from '../assets/portfolio/project4.png';
import project5 from '../assets/portfolio/project5.png';
import project6 from '../assets/portfolio/project6.png';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Kõik');

  const projects = [
    {
      id: 1,
      title: "Modernne puhkeala",
      location: "Tartu vald",
      category: "Terassid",
      image: project1,
      description: "Suur mitmetasandiline lehisest terrass koos integreeritud valgustusega.",
      year: "2024"
    },
    {
      id: 2,
      title: "Luksuslik terrassikompleks",
      location: "Elva",
      category: "Terassid",
      image: project2,
      description: "Eritellimusel valminud termomännist terrass koos klaaspiiretega.",
      year: "2023"
    },
    {
      id: 3,
      title: "Minimalistlik metsavaade",
      location: "Ülenurme",
      category: "Varjualused",
      image: project3,
      description: "Klaaskatusega varjualune, mis sulandub ümbritseva loodusega.",
      year: "2024"
    },
    {
      id: 4,
      title: "Sunset Terrace",
      location: "Luunja",
      category: "Terassid",
      image: project4,
      description: "Premium klassi terrass koos klaaspiirete ja mugava lounge alaga.",
      year: "2024"
    },
    {
      id: 5,
      title: "Architectural Deck",
      location: "Tartu linn",
      category: "Eriprojektid",
      image: project5,
      description: "Keerukas mitmetasandiline treppidega lahendus maastiku eripärasid arvestades.",
      year: "2023"
    },
    {
      id: 6,
      title: "Outdoor Kitchen & Terrace",
      location: "Haaslava",
      category: "Eriprojektid",
      image: project6,
      description: "Terviklik väliala lahendus koos köögi, kamina ja mugava puhkealaga.",
      year: "2024"
    }
  ];

  const filters = ['Kõik', 'Terassid', 'Varjualused', 'Eriprojektid'];

  const filteredProjects = activeFilter === 'Kõik' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="portfolio-page">
      <section className="portfolio-hero">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text-center"
          >
            <h1 className="portfolio-hero-title">Tehtud Tööd</h1>
            <p className="portfolio-hero-subtitle">
              Iga projekt on meie jaoks unikaalne lugu. Avasta meie tehtud töid ja leia inspiratsiooni oma järgmise väliala jaoks.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="portfolio-listing-section">
        <div className="container">
          <div className="portfolio-filter-bar">
            {filters.map(filter => (
              <button 
                key={filter}
                className={`portfolio-filter-tab ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <motion.div 
            layout
            className="portfolio-grid"
          >
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project, idx) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className={`portfolio-item item-${(idx % 3) + 1}`}
                >
                  <div className="portfolio-image-wrapper">
                    <img src={project.image} alt={project.title} className="portfolio-image" />
                    <div className="portfolio-info-overlay">
                      <span className="project-location">{project.location}</span>
                      <h3 className="project-title">{project.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="portfolio-cta-section">
        <div className="cta-banner-dark">
          <h2>Kas sul on oma projekt?</h2>
          <p>Aitame sul selle ellu viia. Alustame planeerimisega juba täna.</p>
          <button className="cta-button-light">VÕTA ÜHENDUST</button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
