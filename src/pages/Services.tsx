import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Ruler, PenTool, ShieldCheck, Hammer } from 'lucide-react';
import { CardContainer, CardBody, CardItem } from '../components/ThreeDCard';

// Image imports
import constructionImg from '../assets/construction.png';
import maintenanceImg from '../assets/maintenance.png';
import designImg from '../assets/design.png';
import saunaImg from '../assets/sauna.png';
import gardenHouseImg from '../assets/garden_house.png';

const Services: React.FC = () => {
  const services = [
    {
      id: 'construction',
      slug: 'terrassid',
      title: 'Terrassi Ehitus',
      description: 'Pakume täislahendust alates vundamendist kuni viimase kruvini. Kasutame vaid kvaliteetseid materjale ja kaasaegseid ehitusvõtteid.',
      image: constructionImg,
      features: [
        'Erinevad puitmaterjalid (lehis, termomänd, immutatud mänd)',
        'Komposiitmaterjalist (WPC) terrassid',
        'Keerukad mitmetasandilised lahendused',
        'Peidetud kinnitustega paigaldus'
      ],
      icon: <Hammer className="w-6 h-6 text-[#d8f5a2]" />
    },
    {
      id: 'shelters',
      slug: 'varjualused',
      title: 'Varjualused ja Terrassikatused',
      description: 'Muuda oma terrass ilmastikukindlaks. Projekteerime ja ehitame stiilseid varjualuseid, mis sulanduvad kokku sinu kodu arhitektuuriga.',
      image: designImg,
      features: [
        'Klassikalised puitkarkassiga varjualused',
        'Modernsed klaaskatusega lahendused',
        'Auto varjualused ja kuurid',
        'Integreeritud valgustuslahendused'
      ],
      icon: <PenTool className="w-6 h-6 text-[#d8f5a2]" />
    },
    {
      id: 'maintenance',
      slug: 'hooldus',
      title: 'Hooldus ja Renoveerimine',
      description: 'Pikenda oma terrassi eluiga. Teostame põhjalikku süvapesu, õlitamist ja vajadusel vahetame välja kulunud lauad või konstruktsioonielemendid.',
      image: maintenanceImg,
      features: [
        'Süvapesu professionaalse tehnikaga',
        'Kvaliteetsete õlidega viimistlemine',
        'Konstruktsiooni kontroll ja tugevdamine',
        'Vana terrassi täielik renoveerimine'
      ],
      icon: <ShieldCheck className="w-6 h-6 text-[#d8f5a2]" />
    }
  ];

  const shortcutServices = [
    { id: 1, slug: 'terrassid', title: 'Terass', category: 'Ehitus', img: constructionImg, tag: 'KVALITEETNE' },
    { id: 2, slug: 'varjualused', title: 'Varjualune', category: 'Disain', img: designImg, tag: 'STIILNE' },
    { id: 3, slug: 'saunad', title: 'Saunad', category: 'Eriprojekt', img: saunaImg, tag: 'PREMIUM' },
    { id: 4, slug: 'aiamajad', title: 'Aiamajad', category: 'Eriprojekt', img: gardenHouseImg, tag: 'MODERNNE' },
    { id: 5, slug: 'hooldus', title: 'Muud ehitustööd', category: 'Ehitus', img: maintenanceImg, tag: 'PROFESSIONAALNE' },
  ];

  const filters = ['Kõik', 'Ehitus', 'Disain', 'Eriprojekt'];
  const [activeFilter, setActiveFilter] = useState('Kõik');

  const filteredShortcuts = activeFilter === 'Kõik' 
    ? shortcutServices 
    : shortcutServices.filter(s => s.category === activeFilter);

  return (
    <div className="services-page">
      {/* Mini Hero */}
      <section className="services-hero">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text-center"
          >
            <h1 className="services-hero-title">Meie Teenused</h1>
            <p className="services-hero-subtitle">
              Pakume professionaalseid lahendusi unistuste väliala loomiseks ja säilitamiseks. 
              Iga projekt on meie jaoks unikaalne.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Shortcut Grid Section */}
      <section className="service-shortcuts-section">
        <div className="container">
          <div className="shortcuts-header">
            <div className="shortcuts-title-area">
              <span className="subtitle-tag">TEENUSED</span>
              <h2 className="section-title-large">MEIE VALDKONNAD</h2>
            </div>
            <div className="filter-bar">
              {filters.map(filter => (
                <button 
                  key={filter}
                  className={`filter-tab ${activeFilter === filter ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            layout
            className="shortcuts-grid"
          >
            {filteredShortcuts.map((item) => (
              <motion.div 
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <Link to={`/teenused/${item.slug}`} className="shortcut-card block hover:no-underline">
                  <div className="shortcut-img-wrapper">
                    <img src={item.img} alt={item.title} />
                    <div className="shortcut-tag">{item.tag}</div>
                  </div>
                  <div className="shortcut-info">
                    <span className="shortcut-category">{item.category}</span>
                    <h3 className="shortcut-title">{item.title}</h3>
                    <div className="shortcut-footer">
                      <span className="hind-alates">LOE LÄHEMALT</span>
                      <div className="shortcut-arrow-btn">
                        <ArrowRight size={20} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
            
            {/* CTA Card */}
            <motion.div 
              layout
              className="shortcut-card cta-card"
            >
              <div className="cta-card-content">
                <h3>VAATA KÕIKI TEENUSEID</h3>
                <button className="cta-circle-btn">
                  <ArrowRight size={24} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="services-detail-section">
        <div className="container">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              className={`service-detail-row ${index % 2 === 1 ? 'row-reverse' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="service-detail-content">
                <div className="service-icon-wrapper">
                  {service.icon}
                </div>
                <h2 className="service-detail-title">{service.title}</h2>
                <p className="service-detail-description">{service.description}</p>
                <ul className="service-feature-list">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="service-feature-item">
                      <CheckCircle2 size={18} className="feature-check" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4 mt-8">
                  <button className="cta-button">KÜSI PAKKUMIST</button>
                  <Link to={`/teenused/${service.slug}`} className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white hover:text-black transition-all flex items-center gap-2">
                    LOE LÄHEMALT <ArrowRight size={18} />
                  </Link>
                </div>
              </div>

              <div className="service-detail-image-wrapper">
                <CardContainer className="inter-var">
                  <CardBody className="bg-black/40 relative group/card border-[#C0C0C0]/30 w-full h-auto rounded-xl py-4 border transition-all duration-300">
                    <CardItem translateZ="100" className="w-full">
                      <img
                        src={service.image}
                        className="h-[400px] w-full object-cover rounded-xl shadow-2xl"
                        alt={service.title}
                      />
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us-section">
        <div className="container">
          <div className="section-header-center">
            <h2 className="section-title text-center">Miks valida meid?</h2>
          </div>
          <div className="why-us-grid">
            {[
              { title: 'Täpsus ja kvaliteet', desc: 'Me ei tee järeleandmisi kvaliteedis. Iga detail on oluline.', icon: <Ruler /> },
              { title: 'Pikaajaline kogemus', desc: 'Oleme ehitanud sadu terrasse ja teame kõiki nüansse.', icon: <Hammer /> },
              { title: 'Garantii töödele', desc: 'Anname kõigile oma ehitustöödele 2-aastase garantii.', icon: <ShieldCheck /> }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                className="why-us-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
              >
                <div className="why-us-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta-section">
        <div className="cta-banner">
          <h2>Kas sul on projekt mõttes?</h2>
          <p>Võta meiega ühendust ja teeme sinu unistuse teoks.</p>
          <div className="cta-container justify-center mt-8">
            <button className="cta-button">ALUSTAME PLANEERIMIST</button>
            <button className="cta-icon-btn">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
