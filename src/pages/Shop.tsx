import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Search, Filter } from 'lucide-react';

// Shop images
import oilImg from '../assets/shop/oil.png';
import brushImg from '../assets/shop/brush.png';
import cleanerImg from '../assets/shop/cleaner.png';
import screwsImg from '../assets/shop/screws.png';

const Shop: React.FC = () => {
  const categories = [
    { name: "Terassilauad", count: 24, img: oilImg },
    { name: "Terassi karkass", count: 12, img: brushImg },
    { name: "Paigaldustarvikud", count: 48, img: cleanerImg },
    { name: "Puidukaitse", count: 18, img: screwsImg }
  ];

  const featuredProducts = [
    { name: "Premium Terrassiõli 5L", price: "45.90€", img: screwsImg, cat: "Puidukaitse" },
    { name: "Roostevabad kruvid A4", price: "18.90€", img: cleanerImg, cat: "Paigaldustarvikud" },
    { name: "Süvapesuvahend 2.5L", price: "24.50€", img: brushImg, cat: "Puidukaitse" },
    { name: "Hoolduhari Pro", price: "32.00€", img: oilImg, cat: "Paigaldustarvikud" }
  ];

  return (
    <div className="shop-page">
      <section className="shop-hero">
        <motion.div 
          className="shop-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="shop-title">E-pood</h1>
          <p className="shop-subtitle">Kõik vajalik professionaalseks terrassi ehituseks ja hoolduseks.</p>
          
          <div className="shop-search-bar">
            <Search className="search-icon" size={20} />
            <input type="text" placeholder="Otsi tooteid..." />
            <button className="search-button">OTSI</button>
          </div>
        </motion.div>
      </section>

      <section className="shop-categories-section">
        <div className="container">
          <h2 className="section-title-small">Kategooriad</h2>
          <div className="category-grid">
            {categories.map((cat, idx) => (
              <motion.div 
                key={idx}
                className="category-card"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <img src={cat.img} alt={cat.name} className="category-img" />
                <div className="category-info">
                  <h3>{cat.name}</h3>
                  <span>{cat.count} toodet</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="featured-products-section">
        <div className="container">
          <div className="section-header-row">
            <h2 className="section-title-small">Populaarsed tooted</h2>
            <div className="filter-controls">
              <button className="filter-btn"><Filter size={16} /> Filtreeri</button>
            </div>
          </div>

          <div className="products-grid">
            {featuredProducts.map((product, idx) => (
              <motion.div 
                key={idx}
                className="product-item-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="product-img-wrapper">
                  <img src={product.img} alt={product.name} />
                  <button className="quick-add-btn">
                    <ShoppingCart size={18} />
                  </button>
                </div>
                <div className="product-details">
                  <span className="product-cat-tag">{product.cat}</span>
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-price-large">{product.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
