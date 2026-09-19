import React from 'react';
import { MapPin, Mail, Phone, ExternalLink, Award } from 'lucide-react';
import vitLogo from '../assets/vit-logo.png';

/**
 * Footer Component
 * Renders institutional copyright, academic slot information, and campus references.
 */
export default function Footer() {
  return (
    <footer className="hub-footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Col 1: University Info */}
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '0.6rem' }}>
              <img 
                src={vitLogo} 
                alt="VIT Vellore Emblem" 
                style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#ffffff', padding: '1px', border: '2px solid #f59e0b' }} 
              />
              <h3 style={{ margin: 0 }}>Vellore Institute of Technology (VIT)</h3>
            </div>
            <p>
              Vellore Campus, Tiruvalam Road, Katpadi, Vellore, Tamil Nadu - 632014, India. 
              The Campus Assistance Hub provides centralized single-page student assistance 
              for academic navigation, residential living, and emergency health services.
            </p>
            <div style={{ marginTop: '1rem', display: 'flex', gap: '1.25rem', fontSize: '0.82rem', color: '#cbd5e1' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <MapPin size={14} color="#f59e0b" />
                Vellore Campus
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Phone size={14} color="#f59e0b" />
                +91 416 220 2000
              </span>
            </div>
          </div>

          {/* Col 2: Useful Student Portals */}
          <div className="footer-col">
            <h4>Quick Campus Links</h4>
            <ul className="footer-links">
              <li>
                <a href="https://vtop.vit.ac.in" target="_blank" rel="noreferrer">
                  VTOP Student Portal
                </a>
              </li>
              <li>
                <a href="https://library.vit.ac.in" target="_blank" rel="noreferrer">
                  Periyar EVR Central Library
                </a>
              </li>
              <li>
                <a href="https://vit.ac.in" target="_blank" rel="noreferrer">
                  VIT Official University Website
                </a>
              </li>
              <li>
                <a href="https://vit.ac.in/campus-life/health-centre" target="_blank" rel="noreferrer">
                  Health Centre & Wellness
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Academic Submission Context */}
          <div className="footer-col">
            <h4>Course Assessment Details</h4>
            <div style={{ fontSize: '0.84rem', lineHeight: 1.6, color: '#cbd5e1' }}>
              <div><strong>Course:</strong> BCSE203E – Web Programming</div>
              <div><strong>Assignment:</strong> Assignment – 7 (10 Marks)</div>
              <div><strong>Faculty:</strong> Prof. Nihaal Ahmed.K</div>
              <div><strong>Slot:</strong> L31 + L32 + L51 + L52</div>
              <div style={{ marginTop: '0.5rem', color: '#94a3b8', fontSize: '0.78rem' }}>
                Demonstrating: React Environment, JSX, Component Architecture, Constructors, Component API, and Lifecycle Methods.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>
            © {new Date().getFullYear()} Vellore Institute of Technology • Campus Assistance Hub Single Page Application.
          </div>
          <div className="academic-credits-tag">
            <Award size={13} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
            Developed for Academic Demonstration & Evaluation
          </div>
        </div>
      </div>
    </footer>
  );
}
