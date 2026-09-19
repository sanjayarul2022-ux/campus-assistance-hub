import React from 'react';
import { X, Sparkles, CheckCircle2, Layers, Cpu, Database, ShieldCheck } from 'lucide-react';

/**
 * HotsAnalysisModal Component
 * Formulates the student's Higher-Order Thinking Skills (HOTS) response
 * directly inside the application for interactive evaluation and documentation.
 */
export default function HotsAnalysisModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div 
      className="modal-overlay" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="hots-dialog-title"
    >
      <div 
        className="modal-dialog-panel hots-modal-panel"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div className="modal-header-top">
            <span className="hots-badge">HOTS / Design Analysis</span>
            <button 
              type="button"
              className="modal-close-btn" 
              onClick={onClose} 
              aria-label="Close HOTS analysis modal"
            >
              <X size={18} />
            </button>
          </div>
          <h2 id="hots-dialog-title" className="modal-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Sparkles size={24} color="#f59e0b" />
            <span>Higher-Order Thinking Skills (HOTS) Justification</span>
          </h2>
          <p style={{ fontSize: '0.85rem', color: '#cbd5e1', marginTop: '0.35rem' }}>
            Architectural Evaluation: Scaling Campus Assistance Hub from 5 to 50 Services
          </p>
        </div>

        <div className="modal-body">
          {/* Question Reference */}
          <div className="hots-quote-box">
            <strong>HOTS Prompt:</strong> "Suppose the Campus Assistance Hub is expanded from 5 services to 50 services. 
            Analyze how your component design would affect code reusability, duplication, and maintainability. 
            Identify one important component-design decision made in your application and justify why it would remain useful as the application grows."
          </div>

          {/* Section 1: Scalability Analysis */}
          <div className="hots-section-card">
            <h4>
              <Layers size={18} color="#002147" />
              <span>1. Impact on Code Reusability, Duplication, and Maintainability</span>
            </h4>
            <p>
              When scaling the Campus Assistance Hub from 5 to 50 services (e.g., adding Departmental Labs, Hostel Wardens per block, Sports Facilities, Placements & PAT, Scholarship Counters, COE Examination sections):
            </p>
            <ul style={{ paddingLeft: '1.25rem', marginTop: '0.6rem', display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.9rem', color: '#334155' }}>
              <li>
                <strong>Zero Code Duplication:</strong> In our architecture, the service card structure is never hardcoded. 
                Whether there are 5 or 50 services, exactly <em>one</em> reusable <code>&lt;ServiceCard /&gt;</code> component 
                and <em>one</em> reusable <code>&lt;ServiceDetailModal /&gt;</code> component exist. All 50 services are rendered via high-order array mapping over normalized data items.
              </li>
              <li>
                <strong>Data-Driven Decoupling:</strong> Adding 45 new services requires updating only the data model schema (or receiving a JSON response from a REST/GraphQL API) in <code>campusServices.js</code>. The React component hierarchy remains completely untouched, achieving 100% separation of content and presentation.
              </li>
              <li>
                <strong>High Maintainability:</strong> Any UI bug fix, design update (such as typography, badges, or button interaction), or accessibility improvement made to <code>ServiceCard.jsx</code> automatically propagates across all 50 service cards simultaneously without modifying 50 individual pages.
              </li>
            </ul>
          </div>

          {/* Section 2: Key Architectural Decision */}
          <div className="hots-section-card">
            <h4>
              <Cpu size={18} color="#002147" />
              <span>2. Key Component-Design Decision: Centralized Single-Source State Management</span>
            </h4>
            <p>
              <strong>The Decision:</strong> We centralized filtering, searching, dynamic counts, and modal selection at the top-level container component (<code>CampusAssistanceHub</code>) while keeping presentation components (<code>ServiceCard</code>, <code>CategoryFilter</code>, <code>ServiceDetailModal</code>) stateless and purely driven by props.
            </p>
            <p style={{ marginTop: '0.6rem' }}>
              <strong>Why it remains critical as the application scales to 50 services:</strong>
            </p>
            <ul style={{ paddingLeft: '1.25rem', marginTop: '0.4rem', display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.9rem', color: '#334155' }}>
              <li>
                <strong>Global Dynamic Cohesion:</strong> When the user enters a search query or selects a category among 50 services, the top-level container computes the filtered subset once. Both the category count badges in <code>CategoryFilter</code> and the grid in <code>ServiceGrid</code> immediately reflect consistent state without prop-drilling desynchronization.
              </li>
              <li>
                <strong>Seamless Transition to Virtualization / Pagination:</strong> With 50+ services, a virtualization window (e.g., <code>react-window</code>) or pagination slice can be introduced inside <code>CampusAssistanceHub</code> without altering the interface of individual <code>ServiceCard</code> components.
              </li>
              <li>
                <strong>Memory & Lifecycle Efficiency:</strong> Utilizing React's lifecycle (<code>componentDidUpdate</code>) to update document titles and search indices ensures operations occur predictably without redundant renders.
              </li>
            </ul>
          </div>

          {/* Section 3: Summary Table */}
          <div style={{ background: '#f1f5f9', padding: '1rem', borderRadius: '10px', fontSize: '0.85rem' }}>
            <div style={{ fontWeight: 700, color: '#002147', marginBottom: '0.4rem' }}>Summary Matrix (5 vs. 50 Services)</div>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #cbd5e1' }}>
                  <th style={{ padding: '4px 8px' }}>Metric</th>
                  <th style={{ padding: '4px 8px' }}>5 Services</th>
                  <th style={{ padding: '4px 8px' }}>50 Services (Scaled)</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '4px 8px' }}>Component Instances</td>
                  <td style={{ padding: '4px 8px' }}>1 Reusable Card Definition</td>
                  <td style={{ padding: '4px 8px' }}>1 Reusable Card Definition (Unchanged)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '4px 8px' }}>Maintenance Overhead</td>
                  <td style={{ padding: '4px 8px' }}>Low</td>
                  <td style={{ padding: '4px 8px' }}>O(1) - Only data array grows</td>
                </tr>
                <tr>
                  <td style={{ padding: '4px 8px' }}>Filtering Performance</td>
                  <td style={{ padding: '4px 8px' }}>Instant client-side filter</td>
                  <td style={{ padding: '4px 8px' }}>Optimized linear search / memoized in Hub state</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="modal-footer">
          <span style={{ fontSize: '0.82rem', color: '#64748b' }}>BCSE203E Module 6 Evaluation • Faculty: Nihaal Ahmed.K</span>
          <button type="button" className="btn-close-secondary" onClick={onClose}>
            Close Analysis
          </button>
        </div>
      </div>
    </div>
  );
}
