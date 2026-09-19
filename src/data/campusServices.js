// Campus Assistance Hub - VIT Vellore Dataset
// Realistic campus services, facilities, locations, and contacts

export const CAMPUS_SERVICES = [
  {
    id: "acad-01",
    name: "Academic Support & FFCS Cell",
    category: "Academic Support",
    badge: "Official Advisory",
    icon: "GraduationCap",
    shortDesc: "Comprehensive assistance for Fully Flexible Credit System (FFCS), course registration, grade revisions, and academic counseling.",
    description: "The Office of the Dean (Academics) and Academic Advisory Cell provides centralized counseling and assistance for students regarding course registration, FFCS slot scheduling, credit transfers, re-examinations, grade improvement, and degree audit queries across all schools at VIT Vellore.",
    location: "Technology Tower (TT), 2nd Floor, Room TT-214",
    landmark: "Opposite to Foodys / Next to Dean Academics Secretariat",
    timings: "Monday - Friday: 9:00 AM - 5:30 PM (Lunch break: 1:15 PM - 2:00 PM)",
    operatingHoursNote: "Extended advisory available during FFCS Course Registration weeks",
    isOpenNow: true,
    contactPhone: "+91 416 220 2133 / 2135",
    contactEmail: "dean.academic@vit.ac.in",
    emergencyNumber: "+91 416 220 2000",
    keyPersonnel: "Dr. K. Sathiyanarayanan (Dean, Academics) & Faculty Advisors",
    servicesOffered: [
      "FFCS Course Add/Drop & Course Withdrawal guidance",
      "Course Equivalence & Credit Transfer Evaluation",
      "Proctor-Student Academic Consultation & Mentoring",
      "Grade Card Distribution & Transcript Verification",
      "Special Exam & Re-evaluation application support"
    ],
    faqs: [
      {
        q: "What should I do if a theory slot clashes with my lab component?",
        a: "Visit the FFCS Helpdesk in TT-214 during registration windows or request an alternate open slot through your assigned faculty proctor on VTOP."
      },
      {
        q: "How can I apply for official academic transcripts?",
        a: "Apply online via the VTOP portal under Examination -> Transcripts, or visit the Academic Counter in the Technology Tower ground floor."
      }
    ],
    rating: 4.8,
    virtualDeskUrl: "https://vtop.vit.ac.in"
  },
  {
    id: "lib-02",
    name: "Periyar EVR Central Library",
    category: "Library Services",
    badge: "Open Till 12 AM",
    icon: "BookOpen",
    shortDesc: "Six-tier air-conditioned central library hosting over 250,000 volumes, international journals, digital subscriptions, and silent reading zones.",
    description: "The Periyar EVR Central Library is an architectural marvel spread over six floors, equipped with modern RFID book circulation, computerized catalogue (OPAC), digital research labs with access to IEEE Xplore, ScienceDirect, and Scopus, multimedia sections, and dedicated quiet study halls for undergraduate and postgraduate scholars.",
    location: "Periyar EVR Central Library Building (Central Campus)",
    landmark: "Adjacent to Main Building (MB) and Dr. MGR Central Block",
    timings: "Daily: 8:00 AM - Midnight (12:00 AM) | 24/7 during CAT & FAT Exams",
    operatingHoursNote: "Digital library terminals accessible 24/7 on campus intranet",
    isOpenNow: true,
    contactPhone: "+91 416 220 2141 / 2142",
    contactEmail: "librarian@vit.ac.in",
    emergencyNumber: "+91 416 220 2141",
    keyPersonnel: "Chief Librarian & Digital Resource Managers",
    servicesOffered: [
      "Automated RFID Book Issue, Return, and Renewal Terminals",
      "Remote & Intranet access to 35,000+ IEEE, Elsevier & Springer e-journals",
      "Plagiarism Verification Desk (Turnitin & Urkund checks)",
      "Audio-Visual & Multimedia Discussion Chambers",
      "Inter-Library Loan (DELNET / INFLIBNET consortia)"
    ],
    faqs: [
      {
        q: "How many books can a B.Tech student borrow at a time?",
        a: "Undergraduate students can borrow up to 5 books for a standard duration of 14 days, renewable online once via the library portal."
      },
      {
        q: "How do I access IEEE e-journals from my hostel room?",
        a: "Connect to the VIT Campus Wi-Fi or authenticate via OpenAthens / VIT Fortinet VPN using your student credentials."
      }
    ],
    rating: 4.9,
    virtualDeskUrl: "https://library.vit.ac.in"
  },
  {
    id: "trans-03",
    name: "Campus Transportation & Shuttles",
    category: "Transportation",
    badge: "Eco-Fleet Active",
    icon: "Bus",
    shortDesc: "Eco-friendly battery-operated campus buggies, shuttle buses connecting academic blocks and hostels, plus Katpadi railway transit.",
    description: "The VIT Transportation Office manages intra-campus zero-emission electric buggies connecting Main Gate, SJT, TT, and hostel blocks, as well as a large fleet of university buses serving day-scholars across Vellore, Ranipet, and Katpadi. Scheduled weekend shuttle connections are also operated to Katpadi Junction railway station.",
    location: "Transport Control Office, Near Gate No. 2 (Opposite TT Parking)",
    landmark: "Main Transport Depot, Next to Anna Auditorium Parking Bay",
    timings: "Intra-Campus Shuttles: 7:00 AM - 10:00 PM | Day Scholar: 7:30 AM - 6:30 PM",
    operatingHoursNote: "Buggies operate every 5-7 minutes along prime loop routes",
    isOpenNow: true,
    contactPhone: "+91 416 220 2188 / 2189",
    contactEmail: "transport@vit.ac.in",
    emergencyNumber: "+91 94433 11223",
    keyPersonnel: "Transport Officer & Fleet Coordinators",
    servicesOffered: [
      "Continuous Campus Loop Shuttles (Main Gate - MB - TT - SJT - MH / LH)",
      "Day-Scholar Bus Route passes and timetable scheduling",
      "Katpadi Railway Station weekend shuttle drop & pickup points",
      "Accessible mobility assistance for differently-abled students",
      "Outstation educational tour vehicle booking assistance"
    ],
    faqs: [
      {
        q: "Are the campus electric shuttles free of cost for students?",
        a: "Yes, all internal battery-operated campus buggies and shuttle vans are completely free for valid VIT ID card holders."
      },
      {
        q: "Where do I register for the Day Scholar bus pass?",
        a: "Day-scholar transportation passes can be applied for at the Transport Office counter near Gate 2 at the commencement of each academic semester."
      }
    ],
    rating: 4.6,
    virtualDeskUrl: "https://vtop.vit.ac.in/transport"
  },
  {
    id: "hostel-04",
    name: "Hostel Services & Chief Warden Office",
    category: "Hostel Services",
    badge: "24/7 Helpdesk",
    icon: "Home",
    shortDesc: "Single-window clearance for room allocations, mess catering management, biometric out-pass approval, and maintenance redressal.",
    description: "VIT Vellore residential life accommodates thousands of students across Men's Hostels (MH Blocks A through T) and Ladies' Hostels (LH Blocks A through J). The Chief Warden Secretariat oversees student comfort, safety, dietary health across Special, Non-Veg, and Veg messes, round-the-clock maintenance, and digital biometric leave applications.",
    location: "Chief Warden Office, Ground Floor, MH Central Block & LH Office Block",
    landmark: "Opposite to Swimming Pool Complex / Near Gym & Indoor Stadium",
    timings: "Administrative Desk: 9:00 AM - 6:00 PM | Warden On-Duty: 24/7",
    operatingHoursNote: "Biometric attendance scanning: 8:30 PM - 9:00 PM daily",
    isOpenNow: true,
    contactPhone: "+91 416 220 2528 (MH) / +91 416 220 2532 (LH)",
    contactEmail: "chiefwarden@vit.ac.in",
    emergencyNumber: "+91 99940 12345 (MH Emergency) / +91 99940 54321 (LH Emergency)",
    keyPersonnel: "Chief Warden (MH & LH) and Block Resident Wardens",
    servicesOffered: [
      "Room allocation, upgradation, and hostel shifting approvals",
      "Mess type change (Special Mess, North Indian Veg, South Indian Veg, Non-Veg)",
      "Biometric Weekend Out-Pass and Vacation Home Leave authorization",
      "Hostel Room Maintenance Helpdesk (Electrical, Plumbing, Carpenter & AC)",
      "Night dispensary coordination & late study permissions"
    ],
    faqs: [
      {
        q: "How do I apply for a weekend out-pass to visit home?",
        a: "Submit a Leave Request on the VTOP portal at least 24 hours in advance with verified parent/guardian OTP approval."
      },
      {
        q: "How do I log a room air conditioning or electrical fault?",
        a: "Log a ticket on the VTOP Maintenance grievance portal or inform your block supervisor's register at the ground floor reception."
      }
    ],
    rating: 4.7,
    virtualDeskUrl: "https://vtop.vit.ac.in/hostel"
  },
  {
    id: "health-05",
    name: "VIT Health Centre & Emergency Care",
    category: "Health & Wellness",
    badge: "24/7 Hospital Care",
    icon: "HeartPulse",
    shortDesc: "Round-the-clock medical clinic, emergency observation beds, full pharmacy, on-call specialized physicians, and immediate ambulance.",
    description: "The VIT Health Centre delivers round-the-clock inpatient and outpatient healthcare services to the university community. Staffed by full-time medical officers, resident nurses, visiting specialists (Cardiologists, Dermatologists, Orthopedicians), and licensed psychological counselors, the centre is supported by tie-ups with Christian Medical College (CMC) Vellore.",
    location: "VIT Health Centre Complex (Behind Main Building)",
    landmark: "Adjacent to Staff Quarters and Sports Pavilion",
    timings: "Emergency Services: 24 Hours / 7 Days a Week | Outpatient: 8:00 AM - 9:00 PM",
    operatingHoursNote: "Ambulance stationed on site 24/7 with trained paramedical staff",
    isOpenNow: true,
    contactPhone: "+91 416 220 2161 / 2162",
    contactEmail: "healthcentre@vit.ac.in",
    emergencyNumber: "+91 416 220 2000 / +91 94433 11111",
    keyPersonnel: "Chief Medical Officer (CMO), Resident Doctors, and Staff Nurses",
    servicesOffered: [
      "24/7 Emergency triage, trauma stabilization, and critical care dispatch",
      "Free primary consultation, basic pathological diagnostics, and dispensary medicines",
      "Immediate ambulance transit to CMC Vellore Hospital for tertiary emergencies",
      "Dedicated psychological counseling & Student Mental Wellness Cell",
      "Periodic blood donation camps and immunization drives"
    ],
    faqs: [
      {
        q: "Are the doctor consultations and medicines free for students?",
        a: "Yes, general physician consultations and primary medications dispensed at the health centre are provided free under student medical coverage."
      },
      {
        q: "How do I book a confidential session with a campus counselor?",
        a: "You can walk in directly to the Wellness wing in the Health Centre or request an appointment via wellness@vit.ac.in with total confidentiality."
      }
    ],
    rating: 4.9,
    virtualDeskUrl: "https://vit.ac.in/health-centre"
  },
  {
    id: "tech-06",
    name: "Centre for Technical Support (CTS)",
    category: "Technical Support",
    badge: "IT & Network Hub",
    icon: "Laptop",
    shortDesc: "Official university helpdesk for VTOP portal passwords, institutional email, FortiClient VPN, and campus Wi-Fi network authentication.",
    description: "The Centre for Technical Support (CTS) maintains the technological backbone of VIT Vellore, governing enterprise IT infrastructure, high-speed fiber-optic campus intranet, Eduroam access points, university ERP portals (VTOP, LMS, V-Tribe), faculty and student Google Workspace accounts, and software licensing.",
    location: "CDMM Building, 2nd Floor, Room 204",
    landmark: "Next to Technology Tower & Hexagon Ground",
    timings: "Monday - Saturday: 8:30 AM - 6:30 PM (Sunday Ticket Support)",
    operatingHoursNote: "Self-service password recovery portal open 24/7",
    isOpenNow: true,
    contactPhone: "+91 416 220 2151 / 2152",
    contactEmail: "cts@vit.ac.in",
    emergencyNumber: "+91 416 220 2155",
    keyPersonnel: "Director, CTS & Lead Network Administrators",
    servicesOffered: [
      "VTOP student portal password resets and account unlock assistance",
      "Campus Wi-Fi device MAC address registration and 802.1X certificate renewal",
      "Institutional email (@vitstudent.ac.in) provisioning and Google Workspace support",
      "FortiClient SSL-VPN configuration for off-campus research database access",
      "Software license downloads (MATLAB, Microsoft 365, Autodesk, SolidWorks)"
    ],
    faqs: [
      {
        q: "What should I do if my VTOP account gets locked due to multiple failed attempts?",
        a: "Use the 'Forgot Password' link on the VTOP login screen with your registered mobile OTP, or visit CTS counter in CDMM 204 with your student ID."
      },
      {
        q: "How many devices can I register on the campus Wi-Fi?",
        a: "Each student is permitted up to 2 active devices (typically one laptop and one smartphone) on the VIT student Wi-Fi network."
      }
    ],
    rating: 4.7,
    virtualDeskUrl: "https://cts.vit.ac.in"
  },
  {
    id: "sec-07",
    name: "Campus Security & Lost & Found",
    category: "Security & Safety",
    badge: "24/7 Surveillance",
    icon: "ShieldCheck",
    shortDesc: "Campus vigil, visitor management, ID card verification, vehicle permits, and unified central Lost & Found depot.",
    description: "The Department of Campus Safety and Security oversees physical security, automated license plate readers (ANPR), and perimeter patrols across the 372-acre campus. It also operates the centralized Lost & Found repository where lost identity cards, keys, electronic gadgets, and documents are securely deposited and reclaimed.",
    location: "Main Gate Security Central Hub (Gate No. 1)",
    landmark: "Adjacent to Main Reception & Visitors Lounge",
    timings: "24 Hours / 7 Days a Week (All 365 days)",
    operatingHoursNote: "Lost & Found claim desk: 9:00 AM - 7:00 PM daily",
    isOpenNow: true,
    contactPhone: "+91 416 220 2101 / 2102",
    contactEmail: "security@vit.ac.in",
    emergencyNumber: "+91 416 220 2000 (Central Emergency Command)",
    keyPersonnel: "Chief Security Officer & Duty Shift Officers",
    servicesOffered: [
      "Central Lost & Found registry and item verification",
      "Temporary visitor gate passes and vehicle parking stickers",
      "Emergency campus escort service during late-night arrivals",
      "24/7 CCTV surveillance room monitoring across all campus zones",
      "Lost Student ID card duplicate verification clearance"
    ],
    faqs: [
      {
        q: "Where should I report a lost wallet or ID card on campus?",
        a: "Report immediately to the Security Control Room at Gate 1 or check the daily updated Lost & Found notice board at the security reception."
      }
    ],
    rating: 4.8,
    virtualDeskUrl: "https://vit.ac.in/security"
  },
  {
    id: "welfare-08",
    name: "Office of Student Welfare & Clubs",
    category: "Student Welfare",
    badge: "Student Activities",
    icon: "Users",
    shortDesc: "Hub for 120+ student technical chapters, cultural clubs, Riviera & gravITAS fests, scholarships, and international student care.",
    description: "The Directorate of Student Welfare (DSW) fosters extracurricular enrichment, leadership development, and multicultural inclusion. DSW coordinates student chapters (IEEE, ACM, CSI), arts and drama teams, social outreach initiatives, Riviera (international cultural fest), gravITAS (technical fest), and national scholarships.",
    location: "Dr. MGR Central Block, 1st Floor",
    landmark: "Opposite to Anna Auditorium / Beside Admissions Office",
    timings: "Monday - Friday: 9:00 AM - 6:00 PM | Saturday: 9:00 AM - 1:00 PM",
    operatingHoursNote: "Extended event hours during Riviera and gravITAS seasons",
    isOpenNow: true,
    contactPhone: "+91 416 220 2200 / 2201",
    contactEmail: "dsw@vit.ac.in",
    emergencyNumber: "+91 416 220 2200",
    keyPersonnel: "Director, Student Welfare & Assistant Directors",
    servicesOffered: [
      "Student Chapter & Club recruitment approvals and event venue sanctions",
      "Auditorium and amphitheatre booking for technical workshops",
      "Merit-cum-means and sports scholarship application processing",
      "International student liaison and cultural adaptation support",
      "Annual cultural festival (Riviera) and technical festival (gravITAS) headquarters"
    ],
    faqs: [
      {
        q: "How can I start a new student club or technical chapter?",
        a: "Submit a proposal signed by at least 30 interested students along with a confirmed faculty coordinator's consent to the DSW office during the semester club-charter window."
      }
    ],
    rating: 4.9,
    virtualDeskUrl: "https://vit.ac.in/student-welfare"
  }
];

export const CAMPUS_CATEGORIES = [
  "All",
  "Academic Support",
  "Library Services",
  "Transportation",
  "Hostel Services",
  "Health & Wellness",
  "Technical Support",
  "Security & Safety",
  "Student Welfare"
];

export const EMERGENCY_CONTACTS = [
  { name: "Campus Emergency Command Center", phone: "+91 416 220 2000", desc: "Immediate 24/7 response for any campus emergency" },
  { name: "VIT Health Centre & Ambulance", phone: "+91 416 220 2161", desc: "24/7 on-call trauma doctor and ambulance dispatch" },
  { name: "Chief Warden Office (Men's Hostels)", phone: "+91 416 220 2528", desc: "Residential emergency, block wardens & medical leaves" },
  { name: "Chief Warden Office (Ladies' Hostels)", phone: "+91 416 220 2532", desc: "Residential security, block wardens & student care" },
  { name: "Campus Security & Main Gate Control", phone: "+91 416 220 2101", desc: "Gate 1 security desk, late night transport & patrol" },
  { name: "Centre for Technical Support (CTS)", phone: "+91 416 220 2151", desc: "VTOP portal, network connectivity, and cyber desk" },
  { name: "National Anti-Ragging Helpline", phone: "1800-180-5522", desc: "Toll-free 24/7 national anti-ragging support" }
];
