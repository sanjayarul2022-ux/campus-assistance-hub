import React, { useState } from 'react';
import { 
  X, 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  ShieldAlert, 
  UserCheck, 
  CheckCircle2, 
  ExternalLink, 
  Send, 
  Sparkles,
  HelpCircle
} from 'lucide-react';

/**
 * ServiceDetailModal Component
 * Interactive modal dialog providing comprehensive information on the selected
 * campus service without reloading or leaving the single-page application.
 */
export default function ServiceDetailModal({ service, onClose }) {
  const [inquiryText, setInquiryText] = useState('');
  const [regNo, setRegNo] = useState('');
  const [submittedMessage, setSubmittedMessage] = useState(null);

  if (!service) return null;

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    if (!inquiryText.trim()) return;

    // Simulate instant ticket dispatch
    const ticketId = 'VIT-TKT-' + Math.floor(100000 + Math.random() * 900000);
    setSubmittedMessage({
      ticketId,
      msg: `Your query has been dispatched to ${service.name}. A confirmation SMS/Email has been simulated for ${regNo ? `Reg No: ${regNo}` : 'your account'}.`
    });
    setInquiryText('');
    setRegNo('');
  };

  return (
    <div 
      className="modal-overlay" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-service-title"
    >
      <div 
        className="modal-dialog-panel" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-header-top">
            <span className="modal-category-tag">{service.category}</span>
            <button 
              type="button"
              className="modal-close-btn" 
              onClick={onClose} 
              aria-label="Close modal dialog"
            >
              <X size={18} />
            </button>
          </div>
          <h2 id="modal-service-title" className="modal-title">{service.name}</h2>
          <div style={{ display: 'flex', gap: '0.6rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
            <span className="badge-tag highlight">{service.badge}</span>
            <span className="badge-tag">⭐ {service.rating} / 5.0 Student Rating</span>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="modal-body">
          {/* Detailed Overview */}
          <div>
            <h3 className="detail-section-title">
              <Sparkles size={17} color="#002147" />
              <span>Service Overview</span>
            </h3>
            <p style={{ fontSize: '0.94rem', color: '#334155', lineHeight: 1.65 }}>
              {service.description}
            </p>
          </div>

          {/* Quick Info Grid (Location, Hours, In-Charge) */}
          <div className="modal-info-grid">
            <div>
              <div className="info-block-label">Campus Location</div>
              <div className="info-block-val" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.35rem' }}>
                <MapPin size={16} color="#002147" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{service.location}</span>
              </div>
              <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '0.2rem' }}>
                <em>Landmark: {service.landmark}</em>
              </div>
            </div>

            <div>
              <div className="info-block-label">Operating Hours</div>
              <div className="info-block-val" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.35rem' }}>
                <Clock size={16} color="#002147" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{service.timings}</span>
              </div>
              <div style={{ fontSize: '0.78rem', color: '#059669', fontWeight: 600, marginTop: '0.2rem' }}>
                ✓ {service.operatingHoursNote}
              </div>
            </div>

            <div>
              <div className="info-block-label">Department Head / Officer</div>
              <div className="info-block-val" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <UserCheck size={16} color="#002147" />
                <span>{service.keyPersonnel}</span>
              </div>
            </div>

            <div>
              <div className="info-block-label">Emergency Helpline</div>
              <div className="info-block-val" style={{ color: '#dc2626', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <ShieldAlert size={16} />
                <span>{service.emergencyNumber}</span>
              </div>
            </div>
          </div>

          {/* Key Services & Facilities Checklist */}
          {service.servicesOffered && service.servicesOffered.length > 0 && (
            <div>
              <h3 className="detail-section-title">
                <CheckCircle2 size={17} color="#059669" />
                <span>Key Services & Facilities Offered</span>
              </h3>
              <ul className="services-list-checklist">
                {service.servicesOffered.map((item, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Frequently Asked Questions */}
          {service.faqs && service.faqs.length > 0 && (
            <div>
              <h3 className="detail-section-title">
                <HelpCircle size={17} color="#002147" />
                <span>Frequently Asked Questions</span>
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {service.faqs.map((faq, fIdx) => (
                  <div key={fIdx} style={{ background: '#f8fafc', padding: '0.85rem 1rem', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#0f172a', marginBottom: '0.3rem' }}>
                      Q: {faq.q}
                    </div>
                    <div style={{ fontSize: '0.86rem', color: '#475569', lineHeight: 1.5 }}>
                      A: {faq.a}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Interactive Simulated Student Inquiry / Ticket Form */}
          <div className="query-sim-box">
            <h4>
              <Send size={15} />
              <span>Instant Helpdesk Query / Callback Request</span>
            </h4>
            <p style={{ fontSize: '0.83rem', color: '#14532d' }}>
              Have an urgent query regarding {service.name}? Submit a quick inquiry below to simulate an immediate helpdesk acknowledgment.
            </p>

            <form onSubmit={handleInquirySubmit} style={{ marginTop: '0.65rem' }}>
              <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                <input
                  type="text"
                  placeholder="Registration Number (e.g., 23BCE1024)"
                  value={regNo}
                  onChange={(e) => setRegNo(e.target.value)}
                  className="query-sim-input"
                  style={{ maxWidth: '240px' }}
                />
                <input
                  type="text"
                  placeholder="Describe your issue or query..."
                  value={inquiryText}
                  onChange={(e) => setInquiryText(e.target.value)}
                  className="query-sim-input"
                  required
                />
                <button type="submit" className="btn-submit-query">
                  Submit Request
                </button>
              </div>
            </form>

            {submittedMessage && (
              <div className="query-feedback-msg">
                ✓ <strong>Ticket Generated ({submittedMessage.ticketId}):</strong> {submittedMessage.msg}
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <div className="modal-footer-contact">
            <a href={`tel:${service.contactPhone.split('/')[0].trim()}`}>
              <Phone size={15} />
              <span>{service.contactPhone}</span>
            </a>
            <a href={`mailto:${service.contactEmail}`}>
              <Mail size={15} />
              <span>{service.contactEmail}</span>
            </a>
            {service.virtualDeskUrl && (
              <a href={service.virtualDeskUrl} target="_blank" rel="noreferrer">
                <ExternalLink size={15} />
                <span>VTOP Portal</span>
              </a>
            )}
          </div>

          <button 
            type="button" 
            className="btn-close-secondary"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
