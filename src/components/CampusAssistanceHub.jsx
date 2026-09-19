import React, { Component } from 'react';
import Navbar from './Navbar';
import CampusAlertBar from './CampusAlertBar';
import HeroBanner from './HeroBanner';
import CategoryFilter from './CategoryFilter';
import ServiceCard from './ServiceCard';
import ServiceDetailModal from './ServiceDetailModal';
import EmergencyModal from './EmergencyModal';
import HotsAnalysisModal from './HotsAnalysisModal';
import Footer from './Footer';
import { 
  CAMPUS_SERVICES, 
  CAMPUS_CATEGORIES 
} from '../data/campusServices';
import { Sparkles, Info, RefreshCw } from 'lucide-react';

/**
 * CampusAssistanceHub (Main Container Component)
 * 
 * Implemented as a React Class Component to explicitly demonstrate Module 6 concepts:
 * 1. Constructor-based State Initialization: constructor(props) & super(props)
 * 2. React Component API: this.state, this.setState with callbacks
 * 3. Lifecycle Methods: componentDidMount, componentDidUpdate, componentWillUnmount
 * 4. JSX Composition & Reusable Child Components
 */
export default class CampusAssistanceHub extends Component {
  constructor(props) {
    super(props);

    // Initializing component state inside the constructor
    this.state = {
      services: CAMPUS_SERVICES,
      categories: CAMPUS_CATEGORIES,
      selectedCategory: 'All',
      searchTerm: '',
      selectedService: null,
      isEmergencyModalOpen: false,
      isHotsModalOpen: false,
      currentTime: new Date().toLocaleTimeString('en-US', { hour12: true }),
      announcementIndex: 0,
      announcements: [
        "Fall Semester FFCS Registration Helpdesk is active in Technology Tower (Room TT 214)",
        "Periyar EVR Central Library reading halls extended to 12:00 Midnight daily",
        "Campus Electric Shuttles operating along main loop: Main Gate - MB - TT - SJT - Hostels",
        "24/7 Health Centre Ambulance is active: Dial +91 416 220 2000 for medical emergencies",
        "CTS Helpdesk update: New high-speed Wi-Fi security certificates installed across all academic blocks",
        "Chief Warden Office: Online weekend out-pass approval system operational on VTOP"
      ],
      lifecycleLogs: [
        `[Constructor Initialized] State defined with ${CAMPUS_SERVICES.length} campus services.`
      ]
    };

    // Explicit method binding for React event handlers
    this.handleCategorySelect = this.handleCategorySelect.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleClearSearch = this.handleClearSearch.bind(this);
    this.handleSelectService = this.handleSelectService.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleToggleEmergency = this.handleToggleEmergency.bind(this);
    this.handleToggleHots = this.handleToggleHots.bind(this);
    this.getCategoryCount = this.getCategoryCount.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.addLifecycleLog = this.addLifecycleLog.bind(this);
  }

  /**
   * Component Lifecycle: componentDidMount
   * Executed immediately after component is mounted into the DOM.
   * Initializes real-time clock ticker, announcement rotator, and keyboard listeners.
   */
  componentDidMount() {
    this.addLifecycleLog('[componentDidMount] Timers started, listeners bound, campus feed initialized.');

    // Timer 1: Live clock update every second
    this.clockInterval = setInterval(() => {
      this.setState({
        currentTime: new Date().toLocaleTimeString('en-US', { hour12: true })
      });
    }, 1000);

    // Timer 2: Campus announcement rotation every 6 seconds
    this.announcementInterval = setInterval(() => {
      this.setState((prevState) => ({
        announcementIndex: (prevState.announcementIndex + 1) % prevState.announcements.length
      }));
    }, 6000);

    // Global keyboard listener for modal dismissal
    window.addEventListener('keydown', this.handleKeyDown);

    console.log('%c[VIT Campus Assistance Hub] Component successfully mounted (componentDidMount).', 'color: #002147; font-weight: bold; font-size: 13px;');
  }

  /**
   * Component Lifecycle: componentDidUpdate
   * Executed whenever component props or state change.
   * Synchronizes browser title and inspects search/filter state transitions.
   */
  componentDidUpdate(prevProps, prevState) {
    // React to selectedService state change
    if (prevState.selectedService !== this.state.selectedService) {
      if (this.state.selectedService) {
        document.title = `VIT Hub: ${this.state.selectedService.name}`;
        this.addLifecycleLog(`[componentDidUpdate] Active service changed to "${this.state.selectedService.name}".`);
      } else {
        document.title = 'VIT Vellore – Campus Assistance Hub';
        this.addLifecycleLog('[componentDidUpdate] Service detail modal closed.');
      }
    }

    // React to category or search filter change
    if (
      prevState.selectedCategory !== this.state.selectedCategory ||
      prevState.searchTerm !== this.state.searchTerm
    ) {
      this.addLifecycleLog(`[componentDidUpdate] Filter updated -> Category: "${this.state.selectedCategory}", Query: "${this.state.searchTerm}"`);
    }
  }

  /**
   * Component Lifecycle: componentWillUnmount
   * Executed right before component is destroyed/removed.
   * Performs cleanup to avoid memory leaks.
   */
  componentWillUnmount() {
    if (this.clockInterval) clearInterval(this.clockInterval);
    if (this.announcementInterval) clearInterval(this.announcementInterval);
    window.removeEventListener('keydown', this.handleKeyDown);
    console.log('[VIT Campus Assistance Hub] Component unmounted, timers cleared (componentWillUnmount).');
  }

  // Helper method to keep a rolling log of lifecycle events for inspection
  addLifecycleLog(message) {
    const timestamp = new Date().toLocaleTimeString();
    this.setState((prevState) => ({
      lifecycleLogs: [`${timestamp} - ${message}`, ...prevState.lifecycleLogs.slice(0, 4)]
    }));
  }

  // Keyboard shortcut handler (Escape closes modals)
  handleKeyDown(e) {
    if (e.key === 'Escape') {
      if (this.state.selectedService) this.handleCloseModal();
      if (this.state.isEmergencyModalOpen) this.handleToggleEmergency(false);
      if (this.state.isHotsModalOpen) this.handleToggleHots(false);
    }
  }

  // Category filter click handler using React Component API setState
  handleCategorySelect(category) {
    this.setState({ selectedCategory: category });
  }

  // Search input handler
  handleSearchChange(query) {
    this.setState({ searchTerm: query });
  }

  // Search input clear handler
  handleClearSearch() {
    this.setState({ searchTerm: '' });
  }

  // Service selection handler (opens SPA modal view)
  handleSelectService(service) {
    this.setState({ selectedService: service });
  }

  // Modal close handler
  handleCloseModal() {
    this.setState({ selectedService: null });
  }

  // Toggle emergency modal
  handleToggleEmergency(isOpen = !this.state.isEmergencyModalOpen) {
    this.setState({ isEmergencyModalOpen: isOpen });
  }

  // Toggle HOTS analysis modal
  handleToggleHots(isOpen = !this.state.isHotsModalOpen) {
    this.setState({ isHotsModalOpen: isOpen });
  }

  // Calculates the count of services for each category filter badge
  getCategoryCount(category) {
    if (category === 'All') return this.state.services.length;
    return this.state.services.filter((s) => s.category === category).length;
  }

  render() {
    const { 
      services, 
      categories, 
      selectedCategory, 
      searchTerm, 
      selectedService, 
      isEmergencyModalOpen, 
      isHotsModalOpen, 
      currentTime,
      announcements,
      announcementIndex,
      lifecycleLogs
    } = this.state;

    // Filter services dynamically by both category and search query
    const normalizedQuery = searchTerm.trim().toLowerCase();
    const filteredServices = services.filter((service) => {
      const matchesCategory = 
        selectedCategory === 'All' || service.category === selectedCategory;
      
      const matchesSearch = 
        !normalizedQuery ||
        service.name.toLowerCase().includes(normalizedQuery) ||
        service.category.toLowerCase().includes(normalizedQuery) ||
        service.shortDesc.toLowerCase().includes(normalizedQuery) ||
        service.location.toLowerCase().includes(normalizedQuery) ||
        service.landmark.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesSearch;
    });

    return (
      <div className="hub-app">
        {/* Navigation Bar with VIT branding, clock & quick actions */}
        <Navbar 
          currentTime={currentTime}
          onOpenEmergency={() => this.handleToggleEmergency(true)}
          onOpenHots={() => this.handleToggleHots(true)}
        />

        {/* Real-time Campus Notice Bar (Demonstrating Lifecycle update) */}
        <CampusAlertBar 
          announcement={announcements[announcementIndex]}
          index={announcementIndex}
          total={announcements.length}
        />

        {/* Hero Section with campus headline, search bar and key metrics */}
        <HeroBanner 
          searchTerm={searchTerm}
          onSearchChange={this.handleSearchChange}
          onClearSearch={this.handleClearSearch}
          totalServicesCount={services.length}
        />

        {/* Main Content Area */}
        <main className="hub-main" id="main-services-hub">
          {/* Section Header */}
          <div className="section-header-bar">
            <div className="section-title-wrap">
              <h2>Explore Campus Services & Departments</h2>
              <p>Select any facility to dynamically view operating hours, official contacts, and live assistance desk.</p>
            </div>

            <div className="results-counter-badge">
              Showing {filteredServices.length} of {services.length} Services
            </div>
          </div>

          {/* Reusable Category Filter Component */}
          <CategoryFilter 
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={this.handleCategorySelect}
            getCategoryCount={this.getCategoryCount}
          />

          {/* Service Cards Grid (Demonstrating Component Reusability) */}
          {filteredServices.length > 0 ? (
            <div className="services-grid">
              {filteredServices.map((service) => (
                <ServiceCard 
                  key={service.id}
                  service={service}
                  onSelectService={this.handleSelectService}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state-box">
              <Info size={40} color="#94a3b8" />
              <h3>No matching campus services found</h3>
              <p>We couldn't find any service matching "<strong>{searchTerm}</strong>" under category "<strong>{selectedCategory}</strong>".</p>
              <button 
                type="button" 
                className="btn-reset-filter"
                onClick={() => {
                  this.handleClearSearch();
                  this.handleCategorySelect('All');
                }}
              >
                Reset Search Filters
              </button>
            </div>
          )}

          {/* React Lifecycle & Component API Demonstration Monitor */}
          <div style={{ marginTop: '3rem', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, color: '#002147', fontSize: '0.92rem' }}>
                <RefreshCw size={16} color="#0284c7" />
                <span>React Component API & Life Cycle Event Monitor (Module 6)</span>
              </div>
              <span style={{ fontSize: '0.75rem', background: '#e0f2fe', color: '#0369a1', padding: '2px 8px', borderRadius: '12px', fontWeight: 600 }}>
                Live Class Component State
              </span>
            </div>
            <div style={{ fontFamily: 'monospace', fontSize: '0.8rem', background: '#0f172a', color: '#38bdf8', padding: '0.85rem 1rem', borderRadius: '8px', lineHeight: 1.6 }}>
              {lifecycleLogs.map((log, lIdx) => (
                <div key={lIdx}>{log}</div>
              ))}
            </div>
          </div>
        </main>

        {/* Dynamic Service Detail Modal (SPA Interaction) */}
        {selectedService && (
          <ServiceDetailModal 
            service={selectedService}
            onClose={this.handleCloseModal}
          />
        )}

        {/* 24/7 Emergency Directory Modal */}
        <EmergencyModal 
          isOpen={isEmergencyModalOpen}
          onClose={() => this.handleToggleEmergency(false)}
        />

        {/* Higher-Order Thinking Skills (HOTS) Scalability Analysis Modal */}
        <HotsAnalysisModal 
          isOpen={isHotsModalOpen}
          onClose={() => this.handleToggleHots(false)}
        />

        {/* Institutional Campus Footer */}
        <Footer />
      </div>
    );
  }
}
