import React from 'react';
import { X, ShieldAlert, Phone, AlertTriangle, HeartPulse, Building2 } from 'lucide-react';
import { EMERGENCY_CONTACTS } from '../data/campusServices';

/**
 * EmergencyModal Component
 * Displays 24/7 high-priority campus emergency dispatch numbers for VIT Vellore.
 */
export default function EmergencyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div 
      className="modal-overlay" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="emergency-dialog-title"
    >
      <div 
        className="modal-dialog-panel" 
        style={{ maxWidth: '640px' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header" style={{ background: 'linear-gradient(135deg, #7f1d1d 0%, #b91c1c 100%)' }}>
          <div className="modal-header-top">
            <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: '#fef08a' }}>
              Priority Helplines
            </span>
            <button 
              type="button"
              className="modal-close-btn" 
              onClick={onClose} 
              aria-label="Close emergency modal"
            >
              <X size={18} />
            </button>
          </div>
          <h2 id="emergency-dialog-title" className="modal-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ShieldAlert size={26} />
            <span>VIT Vellore 24/7 Emergency Directory</span>
          </h2>
        </div>

        <div className="modal-body" style={{ gap: '0.85rem' }}>
          <div style={{ background: '#fef2f2', border: '1px solid #fecaca', padding: '0.85rem', borderRadius: '10px', fontSize: '0.86rem', color: '#991b1b', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <AlertTriangle size={18} style={{ flexShrink: 0 }} />
            <span>For life-threatening medical emergencies or campus-wide security situations, dial the Central Command Center immediately.</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {EMERGENCY_CONTACTS.map((item, idx) => (
              <div 
                key={idx} 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  padding: '0.85rem 1rem', 
                  background: '#f8fafc', 
                  border: '1px solid #e2e8f0', 
                  borderRadius: '10px' 
                }}
              >
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.92rem', color: '#0f172a' }}>{item.name}</div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b' }}>{item.desc}</div>
                </div>
                <a 
                  href={`tel:${item.phone.replace(/[^0-9+]/g, '')}`} 
                  className="btn-emergency"
                  style={{ textDecoration: 'none', padding: '0.45rem 0.85rem', fontSize: '0.8rem' }}
                >
                  <Phone size={14} />
                  <span>{item.phone}</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="modal-footer">
          <span style={{ fontSize: '0.8rem', color: '#64748b' }}>VIT Vellore Campus Security & Medical Emergency Desk</span>
          <button type="button" className="btn-close-secondary" onClick={onClose}>
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}
