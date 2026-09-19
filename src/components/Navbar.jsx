import React from 'react';
import { PhoneCall, Sparkles, Clock, ShieldAlert } from 'lucide-react';
import vitLogo from '../assets/vit-logo.png';

/**
 * Navbar Component
 * Displays university branding, VIT Vellore campus context, live operational clock,
 * and quick trigger buttons for Emergency lines and HOTS design analysis.
 */
export default function Navbar({ currentTime, onOpenEmergency, onOpenHots }) {
  return (
    <header className="hub-navbar">
      <div className="navbar-container">
        {/* University Crest and Branding */}
        <div className="navbar-brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="brand-logo-crest" title="Vellore Institute of Technology">
            <img src={vitLogo} alt="VIT Vellore Official Logo" />
          </div>

          <div className="brand-text-col">
            <div className="brand-title">
              VIT Vellore
              <span className="badge-campus">Main Campus</span>
            </div>
            <span className="brand-subtitle">Vellore Institute of Technology • Assistance Hub</span>
          </div>
        </div>

        {/* Header Actions */}
        <div className="navbar-actions">
          {/* Live System Clock (Updated via Lifecycle componentDidMount) */}
          <div className="clock-badge" title="Live Campus Real-time Clock">
            <span className="pulse-dot"></span>
            <Clock size={14} />
            <span>{currentTime || '09:00:00 AM'}</span>
          </div>

          {/* Scalability / HOTS Analysis Modal Button */}
          <button 
            type="button"
            className="btn-hots" 
            onClick={onOpenHots}
            title="View Higher Order Thinking Skills (HOTS) Architecture Analysis"
          >
            <Sparkles size={14} />
            <span>HOTS Scalability</span>
          </button>

          {/* Emergency 24/7 Helpline Trigger */}
          <button 
            type="button"
            className="btn-emergency" 
            onClick={onOpenEmergency}
            title="Immediate Campus Emergency Helplines"
          >
            <ShieldAlert size={14} />
            <span>Emergency 24/7</span>
          </button>
        </div>
      </div>
    </header>
  );
}
