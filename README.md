# VIT Vellore – Campus Assistance Hub (SPA)
**BCSE203E – Web Programming | Assignment – 7 (10 Marks)**  
**Faculty Name:** Prof. Nihaal Ahmed.K  
**Slot:** L31 + L32 + L51 + L52  
**Context:** Vellore Institute of Technology (VIT), Vellore Campus  

---

## 🏛️ Project Overview
The **VIT Vellore Campus Assistance Hub** is an interactive, responsive Single Page Application (SPA) developed using **ReactJS (React 19 & Vite)**. It serves as a centralized portal enabling students to explore critical campus services—including **Academic Support**, **Library Services**, **Transportation**, **Hostel Services**, **Health & Wellness**, **Technical Support (CTS)**, **Campus Security**, and **Student Welfare**—without navigating to separate HTML webpages.

The application satisfies all Module 6 curriculum requirements:
- **React Environment Setup & Modern JSX**
- **Component Architecture** with modular, reusable components
- **Constructor-Based Initialization** (`constructor(props)`, `super(props)`, and explicit handler binding)
- **Component API Usage** (`this.state`, `this.setState` with state updates and callbacks)
- **Component Life Cycle Methods**:
  - `componentDidMount`: Initializes real-time campus clock and announcement rotation intervals, binds global event listeners.
  - `componentDidUpdate`: Synchronizes browser document title with active modal service and logs filter state transitions.
  - `componentWillUnmount`: Performs cleanup by clearing intervals and unbinding event listeners to avoid memory leaks.
- **Dynamic User Interaction**: Real-time multi-criteria filtering, search bar, interactive detail modal, simulated ticket submission, and 24/7 emergency dispatch directory.
- **React Developer Tools Inspection**: Clean, structured component hierarchy.
- **HOTS / Design Analysis**: Scalability analysis evaluating the transition from 5 to 50 campus services.

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation & Execution
```bash
# 1. Clone the repository
git clone https://github.com/[your-username]/vit-campus-assistance-hub.git

# 2. Navigate to project directory
cd vit-campus-assistance-hub

# 3. Install dependencies
npm install

# 4. Launch development server
npm run dev
```
Open your browser at `http://localhost:5173/` to view the application.

### Building for Production
```bash
npm run build
```
Creates an optimized production bundle inside the `dist/` directory.

---

## 🧩 Component Architecture & Hierarchy

```
<App>
  └── <CampusAssistanceHub> (Main Class Component Container)
       │    ├── constructor(props) [Initializes services, active filters, clock, announcements]
       │    ├── componentDidMount() [Starts live clock & alert ticker, registers keydown listener]
       │    ├── componentDidUpdate() [Reactivity: document title sync & filter logging]
       │    └── componentWillUnmount() [Clears intervals & listeners]
       │
       ├── <Navbar /> (VIT logo, campus branding, live clock, emergency trigger, HOTS modal trigger)
       ├── <CampusAlertBar /> (Real-time announcement ticker rotated via lifecycle)
       ├── <HeroBanner /> (Vellore campus heading, metrics counters, instant search box)
       ├── <CategoryFilter /> (Reusable filter pills with dynamic count badges)
       │
       ├── <main className="hub-main">
       │    └── <div className="services-grid">
       │         └── <ServiceCard /> (Reusable card component mapped over active services)
       │
       ├── <ServiceDetailModal /> (Conditional SPA modal view with facilities, FAQs & ticket form)
       ├── <EmergencyModal /> (24/7 high-priority campus emergency contacts directory)
       ├── <HotsAnalysisModal /> (In-app interactive HOTS scalability design justification)
       └── <Footer /> (VIT Vellore campus address, student assessment details, disclaimers)
```

---

## 🎓 Higher-Order Thinking Skills (HOTS) / Design Analysis


### 2. Key Component-Design Decision & Justification
- **The Decision: Centralized Single-Source State Management at the Top-Level Container.**  
  We deliberately concentrated all filtering, searching, modal selection, and timer states in the parent class component (`CampusAssistanceHub`), keeping presentation components purely stateless and driven by props.
- **Why It Remains Critical at Scale (50+ Services):**
  1. **Consistent Synchronization:** Dynamic counts inside `<CategoryFilter />` and filtered results in `<ServiceCard />` remain perfectly aligned because they derive from a single unified state without redundant prop passing or state desynchronization.
  2. **Virtualization & Pagination Readiness:** If rendering 50+ cards causes DOM overhead on mobile devices, a virtual list library (such as `react-window`) or pagination logic can be dropped directly into the container component without changing the public contract or internals of `<ServiceCard />`.
  3. **Optimized Lifecycle Execution:** Utilizing `componentDidUpdate` ensures that title updates, logging, and state side-effects execute only when active entities change, keeping performance high.

---

