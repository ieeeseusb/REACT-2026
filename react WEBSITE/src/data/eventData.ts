import { Segment, Partner, Collaborator, ScheduleItem, FaqItem } from '../types';

export const LOGOS = {
  eventReact: "https://drive.google.com/file/d/1qkHcRqxIeK9R-NtFGR1Vnvb6kz_vB2GG/view?usp=sharing",
  organizersIeeeSeu: "https://drive.google.com/file/d/14yS1yxU6aFnFFfm3PvSLKLlnyYShfsnp/view?usp=sharing",
  southeastUniversity: "https://drive.google.com/file/d/1n34gEAgfKZxiXqtDDV5jkOpAQ6xOpDvn/view?usp=sharing"
};

export interface HelplineContact {
  name: string;
  role: string;
  phone: string;
  whatsappNumber: string;
}

export const HELPLINE_CONTACTS: HelplineContact[] = [
  {
    name: "Md Maruf Hasan",
    role: "IEEE Chair",
    phone: "+880 1642-963222",
    whatsappNumber: "8801642963222"
  },
  {
    name: "Salehin Sadek",
    role: "IEEE Vice Chair",
    phone: "+880 1889-001676",
    whatsappNumber: "8801889001676"
  },
  {
    name: "Salman Sany Jetu",
    role: "IEEE Webmaster",
    phone: "+880 1575332918",
    whatsappNumber: "8801575332918"
  }
];

export function getRandomHelplineContact(): HelplineContact {
  const index = Math.floor(Math.random() * HELPLINE_CONTACTS.length);
  return HELPLINE_CONTACTS[index];
}

export function openRandomWhatsAppChat(customMessage?: string) {
  const contact = getRandomHelplineContact();
  const text = encodeURIComponent(
    customMessage || `Hello ${contact.name} (${contact.role})! I have a query regarding REACT 2026 competition.`
  );
  window.open(`https://wa.me/${contact.whatsappNumber}?text=${text}`, '_blank');
}

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/seu.ieee.sb",
  instagram: "https://www.instagram.com/ieee.seu.sb",
  linkedin: "http://linkedin.com/company/seu-ieee-sb",
  whatsapp: "https://wa.me/8801642963222"
};

export const EVENT_DETAILS = {
  name: "REACT 2026",
  tagline: "1st National Robotics Competition by IEEE SEU SB",
  organizer: "IEEE SEU Student Branch",
  university: "Southeast University",
  venue: "Southeast University Main Campus, Tejgaon, Dhaka",
  dateText: "September 10-11, 2026",
  totalPrizePool: "BDT 140,000",
  expectedParticipants: "1000+",
  universitiesCount: "50+",
  contactEmail: "ieee.seusb@gmail.com",
  contactPhone: "+880 1642-963222",
  whatsappNumber: "+880 1642-963222"
};

export const SEGMENTS: Segment[] = [
  {
    id: "soccer-bot",
    title: "Soccer Bot",
    category: "Robotics Arena",
    eligibility: "Open for All",
    shortDescription: "Unleash custom remote-controlled soccer bots on the pitch in a high-octane battle. Open for all students and robotics enthusiasts.",
    fullDescription: "Soccer Bot is a fast-paced robotic sport where teams maneuver custom-built mechanical robots to score goals against opponents. Test your bot's agility, motor torque, radio control range, and tactical teamwork on a custom mini turf field. Dimensions: 25 x 25 x 20 cm | Max Weight: 2.5 kg.",
    feeText: "BDT 500 / person",
    feeAmount: 500,
    currency: "BDT",
    teamSize: "3 - 4 Members",
    totalPrizePool: "BDT 30,000",
    image: "https://drive.google.com/file/d/1LU7sD87nGn-5D1v9ZGajekTaPJoJLhJu/view?usp=sharing",
    formUrl: "https://forms.gle/CQ5b1GHnywDysGmG6",
    rules: [
      "Open for all participants (School, College, University, & Open).",
      "Team limit: strictly 3 to 4 members per team.",
      "Registration Fee: BDT 500 per person.",
      "IEEE Discount: BDT 100 off per team | Campus Ambassador Discount: 5% off.",
      "Bot Dimensions (Length x Width x Height): strictly 25 x 25 x 20 cm.",
      "Maximum Bot Weight: 2.5 kg (including power source).",
      "Wireless control frequency must be non-interfering (2.4 GHz recommended).",
      "Match duration: 2 halves of 3 minutes each."
    ]
  },
  {
    id: "datathon",
    title: "Datathon",
    category: "AI & Data Science",
    eligibility: "University Only",
    shortDescription: "Dive into real-world datasets, build predictive Machine Learning models, and present actionable AI solutions. Powered by Shohoj Coding & Shohoj Skills.",
    fullDescription: "Datathon brings together aspiring university data scientists, AI engineers, and analysts to solve an intensive business or societal data challenge. Teams receive a raw dataset on event morning, clean features, build ML models, and defend their analytical pipeline. Evaluated on the official Shohoj Coding portal, backed by mother company Shohoj Skills. Fee: BDT 400 per person (3 to 4 members per team).",
    feeText: "BDT 400 / person",
    feeAmount: 400,
    currency: "BDT",
    teamSize: "3 - 4 Members",
    totalPrizePool: "BDT 30,000",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    formUrl: "https://forms.gle/swNQMxqLqFGd3jAx6",
    portalUrl: "https://www.shohojcoding.com/",
    rules: [
      "Strictly University students only.",
      "Team limit: strictly 3 to 4 members per team.",
      "Registration Fee: BDT 400 per person.",
      "IEEE Discount: BDT 100 off per team | Campus Ambassador Discount: 5% off.",
      "Official Contest Platform: Shohoj Coding by Shohoj Skills (https://www.shohojcoding.com/).",
      "Dataset released on the day of the competition.",
      "Allowed tools: Python, R, Jupyter, Google Colab, Scikit-Learn, PyTorch/TensorFlow.",
      "Evaluation based on leaderboard accuracy metric (60%) and slide deck presentation (40%)."
    ]
  },
  {
    id: "lfr",
    title: "Line Following Robot (LFR)",
    category: "Autonomous Robotics",
    eligibility: "Open for All",
    shortDescription: "Race ultra-fast autonomous line-tracing bots across complex tracks featuring sharp bends, intersections, and speed bumps. Open for all.",
    fullDescription: "Line Following Robot (LFR) tests autonomous sensor calibration, PID control algorithms, and chassis aerodynamics. Robots must navigate a complex black line grid on a white track. Dimensions: 100 ~ 250 mm | Max Weight: 2 kg.",
    feeText: "BDT 500 / person",
    feeAmount: 500,
    currency: "BDT",
    teamSize: "3 - 4 Members",
    totalPrizePool: "BDT 30,000",
    image: "https://drive.google.com/file/d/1wryqIqvAOU2tDSMUq2eo86MWBQvA30eL/view?usp=sharing",
    formUrl: "https://forms.gle/Qd4dVfUQ2j4e99Bj6",
    rules: [
      "Open for all participants (School, College, University, & Open).",
      "Team limit: strictly 3 to 4 members per team.",
      "Registration Fee: BDT 500 per person.",
      "IEEE Discount: BDT 100 off per team | Campus Ambassador Discount: 5% off.",
      "Bot Dimensions (Length / Width / Height): strictly within 100 mm ~ 250 mm.",
      "Maximum Bot Weight: 2.0 kg (including power source).",
      "Bot must be 100% autonomous with no remote intervention after trigger start.",
      "Track width: 3 cm black line on matte white background."
    ]
  },
  {
    id: "poster-presentation",
    title: "Poster Presentation",
    category: "Innovation & Research",
    eligibility: "University Only",
    shortDescription: "Showcase original research, eco-innovations, and engineering concepts through visually engaging poster designs across 6 cutting-edge technical domains.",
    fullDescription: "A national research forum for university students to present original engineering studies, smart healthcare, AI, and renewable tech ideas. Abstract (<500 words) required during registration. Poster size: 4'x4' feet (encouraged).",
    feeText: "BDT 400 / person",
    feeAmount: 400,
    currency: "BDT",
    teamSize: "1 - 4 Members",
    totalPrizePool: "BDT 20,000",
    image: "https://drive.google.com/file/d/1fcwh6AbR3Fz61OU8SD9En5jiq3BilEhp/view?usp=sharing",
    formUrl: "https://forms.gle/6chwz7DHij5Ari9d6",
    rules: [
      "Strictly University students only.",
      "Team limit: 1 to 4 members per team.",
      "Registration Fee: BDT 400 / person for first 3 members + BDT 300 for 4th member.",
      "IEEE Discount: BDT 100 off per team | Campus Ambassador Discount: 5% off.",
      "Abstract Requirement: Presentation abstract (Under 500 words) required during registration.",
      "Poster Size: Should fit within a 4' x 4' feet area (Not enforced, but Highly Encouraged).",
      "Allowed Topics: 1. AI/ML & Data Science & Cybersecurity | 2. IoT, Robotics & Intelligent Automation | 3. Smart Healthcare & Biomedical Engineering | 4. Renewable Energy & Smart Grids | 5. Engineering for Humanitarian & Societal Challenges | 6. Advanced Materials & Nanotechnology.",
      "Presentation time: 5 minutes pitch followed by 3 minutes judge Q&A."
    ]
  },
  {
    id: "project-showcase",
    title: "Project Showcase",
    category: "Hardware & IoT Innovation",
    eligibility: "Open for All (Junior & Senior)",
    shortDescription: "Exhibit physical hardware prototypes, IoT systems, robotics solutions, or working software projects across Junior (Class 9-12) and Senior (University) tracks.",
    fullDescription: "Project Showcase features working engineering hardware, smart IoT devices, robotics innovations, and software applications. Abstract (<500 words) required during registration.",
    feeText: "BDT 300 - 400 / person",
    feeAmount: 300,
    currency: "BDT",
    teamSize: "3 - 4 Members",
    totalPrizePool: "BDT 30,000",
    image: "https://drive.google.com/file/d/1nH05412lYCGFnbjJ5fhia7iwVQtt3aQE/view?usp=sharing",
    formUrl: "https://forms.gle/N3eRZVJSeadv83cw6",
    rules: [
      "Open for all across 2 tracks: Junior Category (Class 9-12 / School / College / Diploma) & Senior Category (University).",
      "Junior Track Fee: BDT 300 / person (3 to 4 members per team | Prize Pool: BDT 10,000).",
      "Senior Track Fee: BDT 400 / person (3 members per team | Prize Pool: BDT 20,000).",
      "IEEE Discount: BDT 100 off per team | Campus Ambassador Discount: 5% off.",
      "Abstract Requirement: Project abstract under 500 words required during online registration.",
      "Functional working prototype required at the booth on event day."
    ],
    categories: [
      {
        name: "Junior Category",
        feeText: "BDT 300 / person",
        feeAmount: 300,
        teamSize: "3 - 4 Members",
        description: "Exclusively for Class 9-12, High School, College, and Diploma Engineering students. Fee: BDT 300/person (3-4 members). Total Prize Pool: BDT 10,000."
      },
      {
        name: "Senior Category",
        feeText: "BDT 400 / person",
        feeAmount: 400,
        teamSize: "3 Members",
        description: "For University Undergraduate and CS/Engineering students. Fee: BDT 400/person (3 members). Total Prize Pool: BDT 20,000."
      }
    ]
  }
];

export const PARTNERS: Partner[] = [
  {
    id: "p-robotech",
    name: "Robotech Valley",
    type: "Technical Partner (LFR & Soccer)",
    logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80",
    description: "Official technical evaluation and arena management partner for Line Follower Robot (LFR) & Soccer Bot segments.",
    websiteUrl: "https://robotechvalley.com"
  },
  {
    id: "p-shohoj",
    name: "Shohoj Coding & Shohoj Skills",
    type: "Technical Partner (Datathon)",
    logo: "https://drive.google.com/file/d/19vw_jbGij6X-YYFlaR-2-qBTbTZNZok-/view?usp=drive_link",
    secondaryLogo: "https://drive.google.com/file/d/12GEfZXtt2gnEa4YwPHxzuNjjQ_FFamRs/view?usp=sharing",
    secondaryName: "Shohoj Skills",
    description: "Official technical platform and automated contest evaluation partner for the national Datathon hackathon, backed by mother company Shohoj Skills.",
    websiteUrl: "https://www.shohojcoding.com/"
  }
];

export const COLLABORATORS: Collaborator[] = [
  {
    id: "c1",
    name: "IEEE Bangladesh Section",
    type: "Parent Professional Section",
    logo: "https://drive.google.com/file/d/1lAznlCvzzYqwm44zuiwHYmLDoCqCICYp/view?usp=sharing",
    description: "Parent professional section fostering technological innovation and engineering excellence across Bangladesh.",
    link: "https://www.ieeebd.com/"
  },
  {
    id: "c2",
    name: "IEEE SEU SB WIE AG",
    type: "Affinity Group",
    logo: "https://drive.google.com/file/d/1Ta7APb6lRu7Ltq31AwIYb3KzY_1pAcG8/view?usp=sharing",
    description: "Women in Engineering Affinity Group at IEEE Southeast University Student Branch promoting female engineers and tech innovators.",
    link: "https://www.facebook.com/ieeeseuwie"
  }
];

export const SCHEDULE: ScheduleItem[] = [
  {
    time: "08:00 AM - 09:30 AM",
    title: "Participant Reporting & Badge Distribution",
    description: "Teams collect official REACT security badges, event kits, and booth allocations at SEU Central Plaza.",
    location: "Southeast University Central Plaza",
    day: "Day 1"
  },
  {
    time: "09:30 AM - 10:30 AM",
    title: "Grand Inauguration Ceremony",
    description: "Opening remarks by VC of Southeast University, IEEE BD Section dignitaries, and REACT convenors.",
    location: "SEU Auditorium",
    day: "Day 1"
  },
  {
    time: "10:30 AM - 01:00 PM",
    title: "LFR Prelims & Soccer Bot Group Matches",
    description: "High speed arena testing, LFR lap timing runs, and Soccer Bot knockouts.",
    location: "Indoor Sports Complex & Arena",
    day: "Day 1"
  },
  {
    time: "11:00 AM - 05:00 PM",
    title: "Datathon Live Hackathon Sprint",
    description: "6-hour machine learning challenge in SEU Computer Labs.",
    location: "Lab 402 & 403, CSE Dept",
    day: "Day 1"
  },
  {
    time: "01:00 PM - 02:00 PM",
    title: "Lunch & Networking Break",
    description: "Complimentary meal boxes provided at dining pavilion.",
    location: "Cafeteria Grounds",
    day: "Day 1"
  },
  {
    time: "02:00 PM - 05:30 PM",
    title: "Project Showcase (Junior & Senior) Judging",
    description: "Booth inspection by judge panels and public visitors.",
    location: "Exhibition Hall 1 & 2",
    day: "Day 1"
  },
  {
    time: "09:00 AM - 12:00 PM",
    title: "Poster Presentation Defense",
    description: "Oral presentation and judge evaluation for research posters.",
    location: "Seminar Room 301",
    day: "Day 2"
  },
  {
    time: "10:00 AM - 01:00 PM",
    title: "Soccer Bot & LFR Finals",
    description: "Championship matches for Soccer Bot and final track obstacle sprint for LFR top 8 teams.",
    location: "Main Arena",
    day: "Day 2"
  },
  {
    time: "03:30 PM - 05:30 PM",
    title: "Prize Giving & Closing Ceremony",
    description: "Awarding trophies, crests, prize money checks, and certificate distribution.",
    location: "SEU Auditorium",
    day: "Day 2"
  }
];

export const FAQS: FaqItem[] = [
  {
    category: "Registration",
    question: "How do I register for REACT segments?",
    answer: "Choose your segment under the 'Segments' section, select your sub-category if applicable (e.g. Junior or Senior for Project Showcase), fill out your team and member details, complete payment via bKash/Nagad/Rocket/Bank, and submit the form to receive an instant digital registration code."
  },
  {
    category: "Segments",
    question: "Can one participant register for multiple segments?",
    answer: "Yes! A participant can participate in multiple non-conflicting segments (e.g., Datathon and Project Showcase) provided they register for each segment individually."
  },
  {
    category: "Segments",
    question: "What is the team size limit for Project Showcase?",
    answer: "Teams can have between 2 to 4 members. You must specify whether you belong to the Junior Category (School/College/Diploma) or Senior Category (University)."
  },
  {
    category: "Payment",
    question: "What are the accepted payment methods?",
    answer: "We accept bKash Send Money / Payment, Nagad, Rocket, and direct Bank Transfer. Details and merchant numbers are displayed during the registration modal checkout."
  },
  {
    category: "General",
    question: "Where is the event venue located?",
    answer: "REACT is hosted live at Southeast University Main Campus: 251/A & 252, Tejgaon Industrial Area, Dhaka-1208, Bangladesh."
  },
  {
    category: "General",
    question: "Will certificates be provided to all participants?",
    answer: "Yes! All registered participants attending REACT will receive an official print and digital Certificate of Participation accredited by IEEE SEU Student Branch and Southeast University."
  }
];
