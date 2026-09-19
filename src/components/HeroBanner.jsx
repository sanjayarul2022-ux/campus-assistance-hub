import React from 'react';
import { Search, X, MapPin, Shield, Layers, HelpCircle } from 'lucide-react';

/**
 * HeroBanner Component
 * Renders campus title, instant search bar, and campus operational stats.
 */
export default function HeroBanner({ searchTerm, onSearchChange, onClearSearch, totalServicesCount }) {
  return (
    <section className="hub-hero">
      <div className="hero-container">
        {/* Campus Pill */}
        <div className="hero-tag">
          <MapPin size={14} />
          <span>Vellore Institute of Technology • Katpadi, Vellore - 632014</span>
        </div>

        {/* Hero Title */}
        <h1 className="hero-title">
          Unified <span className="highlight">Campus Assistance</span> Hub
        </h1>
        
        <p className="hero-description">
          Welcome to the centralized student service portal for VIT Vellore. Effortlessly explore 
          academic guidance, library facilities, campus transport, residential wardens, healthcare, 
          and IT support — all within a unified interactive single-page interface.
        </p>

        {/* Dynamic Search Box */}
        <div className="search-wrapper">
          <Search className="search-icon-left" size={20} />
          <input
            type="text"
            className="search-input-box"
            placeholder="Search campus services, buildings (TT, SJT, Library, MH), or helplines..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            aria-label="Search campus assistance services"
            id="campus-service-search-input"
          />
          {searchTerm && (
            <button 
              type="button"
              className="search-clear-btn" 
              onClick={onClearSearch}
              title="Clear Search"
              aria-label="Clear Search Input"
            >
              <X size={15} />
            </button>
          )}
        </div>

        {/* Fast Metrics Row */}
        <div className="hero-stats-grid">
          <div className="stat-card">
            <div className="stat-number">{totalServicesCount}</div>
            <div className="stat-label">Core Departments</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">24 / 7</div>
            <div className="stat-label">Emergency Desk</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">40+</div>
            <div className="stat-label">Campus Blocks</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">100%</div>
            <div className="stat-label">Single Page SPA</div>
          </div>
        </div>
      </div>
    </section>
  );
}
