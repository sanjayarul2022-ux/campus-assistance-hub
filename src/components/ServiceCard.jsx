import React from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Bus, 
  Home, 
  HeartPulse, 
  Laptop, 
  ShieldCheck, 
  Users, 
  MapPin, 
  Clock, 
  Phone, 
  ArrowRight 
} from 'lucide-react';

// Icon mapper for dynamic category representation
const ICON_MAP = {
  GraduationCap: GraduationCap,
  BookOpen: BookOpen,
  Bus: Bus,
  Home: Home,
  HeartPulse: HeartPulse,
  Laptop: Laptop,
  ShieldCheck: ShieldCheck,
  Users: Users
};

/**
 * ServiceCard Component (Reusable Element)
 * Displays essential campus service info with hover dynamics, status tags,
 * and handles click events to trigger the Single Page Application modal view.
 */
export default function ServiceCard({ service, onSelectService }) {
  if (!service) return null;

  const IconComponent = ICON_MAP[service.icon] || GraduationCap;

  return (
    <article 
      className="service-card" 
      data-category={service.category}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelectService(service);
        }
      }}
    >
      <div>
        {/* Top Icon & Badge Row */}
        <div className="card-top-row">
          <div className="card-icon-box" title={service.category}>
            <IconComponent size={24} />
          </div>
          <div className="card-status-badges">
            <span className="badge-tag highlight">{service.badge}</span>
            <span className="badge-tag">⭐ {service.rating} / 5.0</span>
          </div>
        </div>

        {/* Category & Title */}
        <div className="card-category-label">{service.category}</div>
        <h3 className="card-service-title">{service.name}</h3>

        {/* Short Summary Description */}
        <p className="card-short-desc">{service.shortDesc}</p>

        {/* Quick Location & Timings Preview */}
        <div className="card-meta-list">
          <div className="meta-item" title="Campus Location">
            <MapPin size={15} />
            <span><strong>Location:</strong> {service.location.split(',')[0]}</span>
          </div>
          <div className="meta-item" title="Working Hours">
            <Clock size={15} />
            <span><strong>Hours:</strong> {service.timings.split('|')[0]}</span>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="card-footer-actions">
        <button 
          type="button" 
          className="btn-primary-explore"
          onClick={() => onSelectService(service)}
          aria-label={`Explore details for ${service.name}`}
        >
          <span>Explore Details</span>
          <ArrowRight size={15} />
        </button>

        <a 
          href={`tel:${service.contactPhone.split('/')[0].trim()}`} 
          className="btn-icon-call"
          title={`Call ${service.name}: ${service.contactPhone}`}
          aria-label={`Call ${service.name}`}
          onClick={(e) => e.stopPropagation()}
        >
          <Phone size={16} />
        </a>
      </div>
    </article>
  );
}
