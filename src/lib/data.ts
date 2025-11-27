export type LinkItem = {
  title: string;
  href: string;
};

export type ResourceSubCategory = {
  title:string;
  icon?: string;
  links?: LinkItem[];
  subCategories?: ResourceSubCategory[];
};

export type ResourceCategory = {
  id: string;
  title: string;
  icon: string;
  subCategories: ResourceSubCategory[];
  downloadLink?: LinkItem;
};

export const navigationLinks = [
  { href: '#syllabus', label: 'Syllabus' },
  { href: '#notes', label: 'Notes' },
  { href: '#pdfs', label: 'PDFs' },
  { href: '#cheatsheet', label: 'Formula Sheet' },
  { href: '#handwritten', label: 'My Notes' },
  { href: '#videos', label: 'Lectures' },
  { href: '#pyq', label: 'PYQs' },
];

export const syllabusData = {
  title: 'GATE 2025 Mining Engineering Syllabus',
  downloadLink: {
    title: 'Download Full Syllabus PDF',
    href: 'https://drive.google.com/file/d/1-dGK-ROzS6zpE9-a4rzMHlfzG4Zj2NEO/view?usp=sharing',
  },
  subCategories: [
    {
      title: 'Section 1: Engineering Mathematics',
      links: [
        { title: 'Linear Algebra, Calculus, Vector Calculus, Differential Equations', href: '#' },
        { title: 'Probability and Statistics, Numerical Methods', href: '#' },
      ],
    },
    {
      title: 'Section 2: Mining Geology, Mine Development and Surveying',
      links: [
        { title: 'Mining Geology: Minerals, Rocks, Ore Genesis, Structural Geology', href: '#' },
        { title: 'Mine Development: Access, Drilling, Explosives, Rock-Tool Interaction', href: '#' },
        { title: 'Mine Surveying: Levelling, Theodolite, Tacheometry, GIS, Remote Sensing', href: '#' },
      ],
    },
    {
      title: 'Section 3: Geomechanics and Ground Control',
      links: [{ title: 'Engineering Mechanics, Geomechanics, Ground Control Design', href: '#' }],
    },
    {
      title: 'Section 4: Mining Methods and Machinery',
      links: [
        { title: 'Surface Mining, Underground Coal & Metal Mining Methods', href: '#' },
        { title: 'Mining Machinery: Power Systems, Haulage, Conveyors, Hoisting', href: '#' },
      ],
    },
    {
      title: 'Section 5: Surface Environment, Mine Ventilation and Underground Hazards',
      links: [{ title: 'Pollution Control, EIA, Ventilation, Underground Hazards', href: '#' }],
    },
    {
      title: 'Section 6: Mineral Economics, Mine Planning, Systems Engineering',
      links: [{ title: 'Mineral Valuation, Reserve Estimation, Mine Planning, Systems Engineering', href: '#' }],
    },
  ],
};

export const weightageData = {
  title: 'GATE 2025 Mining Engineering - Subject-wise Weightage',
  note: '📢 Note: This weightage is based on previous trends and expert analysis. Actual distribution may vary in the GATE 2025 exam.',
  rows: [
    { section: 'General Aptitude', weightage: '15%', isSub: false },
    { section: 'Engineering Mathematics', weightage: '13%', isSub: false },
    { section: 'Core Mining Subjects', weightage: '72%', isSub: false },
    { section: '• Mining Geology, Mine Development, Surveying', weightage: '15–20%', isSub: true },
    { section: '• Geomechanics and Ground Control', weightage: '15–20%', isSub: true },
    { section: '• Mining Methods and Machinery', weightage: '20–25%', isSub: true },
    { section: '• Surface Environment, Ventilation, Underground Hazards', weightage: '15–20%', isSub: true },
    { section: '• Mineral Economics, Mine Planning, Systems Engineering', weightage: '10–15%', isSub: true },
  ],
};

export const notesData: ResourceCategory = {
  id: 'notes',
  title: 'Chapter-wise Notes',
  icon: '📘',
  subCategories: [
    {
      title: 'Surface Mining',
      links: [{ title: 'Surface Mining - Full Chapter Notes', href: 'notes/surface_mining_notes.pdf' }],
    },
    {
      title: 'Rock Mechanics',
      links: [{ title: 'Rock Mechanics - Full Chapter Notes', href: 'notes/rock_mechanics_notes.pdf' }],
    },
  ],
};

export const pdfsData: ResourceCategory = {
  id: 'pdfs',
  title: 'Topic-wise PDFs',
  icon: '📄',
  subCategories: [
    {
      title: 'Blasting Methods',
      links: [{ title: 'Blasting Methods PDF', href: 'pdfs/blasting_methods.pdf' }],
    },
    {
      title: 'Types of Drill Bits',
      links: [{ title: 'Types of Drill Bits PDF', href: 'pdfs/types_of_drill_bits.pdf' }],
    },
  ],
};

export const cheatsheetData: ResourceCategory = {
  id: 'cheatsheet',
  title: 'Formula Cheat Sheet',
  icon: '🧠',
  subCategories: [
    {
      title: 'Formulas',
      links: [
        { title: 'Download All Important Formulas (PDF)', href: 'https://drive.google.com/file/d/1zLtZ25N4ZbsnWz9lT1y8Cvk8ofDsCVCd/view?usp=drive_link' },
        { title: 'My Formula sheet (PDF)', href: 'https://drive.google.com/file/d/125XT41yFrySsT1jpH63NmO_u7l9jkwWw/view?usp=drive_link' },
      ]
    }
  ],
};

export const handwrittenNotesData: ResourceCategory = {
  id: 'handwritten',
  title: 'My Handwritten Notes',
  icon: '✍️',
  subCategories: [
    {
      title: 'Calculus',
      icon: '📐',
      links: [
        { title: 'Double & Triple Integral - Working Rule', href: 'https://drive.google.com/file/d/1xqNl3WpgEriz7MUrcbp4Wgw3c34WEvo_/view?usp=sharing' },
        { title: 'Integration', href: 'https://drive.google.com/file/d/1We7MztSpJIBTF6qaRQL9TH6mx4bFkfGp/view?usp=sharing' },
        { title: 'Jacobian (Integration)', href: 'https://drive.google.com/file/d/1ayvuDK_g4D47U7bmPyZGCc7k2khfUSBL/view?usp=sharing' },
        { title: 'Limits, Continuity & Differentiability', href: 'https://drive.google.com/file/d/1qc7MFbJ0oWxCbr8PdM-mGAqbG2ehgkd2/view?usp=drive_link' },
        { title: 'Maxima & Minima', href: 'https://drive.google.com/file/d/1Vz2B9s4JsEkkSS0KeWQNwK3uYLy1uyzh/view?usp=drive_link' },
        { title: 'Mean Value Theorem', href: 'https://drive.google.com/file/d/1L4kFFWycNXkERRmasH7LTuILOvbRaYWo/view?usp=drive_link' },
        { title: 'Odd/Even Functions + Taylor & Maclaurin', href: 'https://drive.google.com/file/d/1DpdyxiinAaEGe3HuKYJ2BqqgXxiIvErC/view?usp=drive_link' },
        { title: 'Partial Derivatives', href: 'https://drive.google.com/file/d/14W721hKQHmPUNiOsdJhjEwI8k9gOn6dM/view?usp=drive_link' },
      ],
      subCategories: [
        {
          title: 'Matrix One-Shot',
          icon: '📊',
          links: [{ title: 'Matrices One-Shot (Drive Link)', href: 'https://drive.google.com/file/d/1IiQnWE6lfzru_JmOvpufI6_yYafHSrMh/view?usp=sharing' }],
        },
      ],
    },
    {
      title: 'Numerical Methods',
      icon: '🧮',
      links: [
        { title: 'Beta & Gamma Functions', href: 'https://drive.google.com/file/d/1M28U3elKWIf5BLc0MWnaowVpkGp_L830/view?usp=drive_link' },
        { title: 'Calculus Syllabus', href: 'https://drive.google.com/file/d/1E6EXvmOQ_Sn7h5qhXYga14EYZaX4Ww_c/view?usp=drive_link' },
        { title: 'Euler\'s Method', href: 'https://drive.google.com/file/d/1jwvM73WOfk8uOqsACLloLnw2jj50EbYg/view?usp=drive_link' },
        { title: 'Newton-Raphson Method', href: 'https://drive.google.com/file/d/1aYjO7oRF1t3Wsj6fsDJZj68mv5yF7J8D/view?usp=drive_link' },
        { title: 'Simpson’s 1/3 Rule & Trapezoidal Rule', href: 'https://drive.google.com/file/d/1dFU1O-K6TRTw0jQ8rzjFFn6JiSZJD7mf/view?usp=drive_link' },
      ],
    },
  ],
};

export const videosData: ResourceCategory = {
  id: 'videos',
  title: 'Video Lectures',
  icon: '🎥',
  subCategories: [
    {
      title: 'Surface Mining',
      links: [{ title: 'Surface Mining - Intro Video', href: 'https://www.youtube.com/watch?v=xyz123' }],
    },
    {
      title: 'Rock Mechanics',
      links: [{ title: 'Rock Mechanics - Stress-Strain Video', href: 'https://www.youtube.com/watch?v=abc456' }],
    },
  ],
};

export const pyqsData: ResourceCategory = {
  id: 'pyq',
  title: 'Solved PYQs',
  icon: '📝',
  subCategories: [
    { title: 'GATE 2024', links: [{ title: 'GATE 2024 Solved PYQs (YouTube)', href: 'https://youtu.be/Y5RTBGh-uM8?si=l53yXCqxkaUEfnmH' }] },
    { title: 'GATE 2023', links: [{ title: 'GATE 2023 Solved PYQs (YouTube)', href: 'https://youtu.be/UR3Z64b2DN4?si=Xoww50zQVOZqwyBc' }] },
    { title: 'GATE 2022', links: [{ title: 'GATE 2022 Solved PYQs (YouTube)', href: 'https://youtu.be/9k8YfNDmxi4?si=-J3gYQAZVdEP_Yx0' }] },
    { title: 'GATE 2021', links: [{ title: 'GATE 2021 Solved PYQs (YouTube)', href: 'https://youtu.be/tQ_qbNJ5bhM?si=ud7gmZ98Ao8PAva9' }] },
    { title: 'GATE 2020', links: [{ title: 'GATE 2020 Solved PYQs (YouTube)', href: 'https://youtu.be/mfZl6eym6aQ?si=2rP0hATmQf_3F-9I' }] },
    { title: 'GATE 2019', links: [{ title: 'GATE 2019 Solved PYQs (YouTube)', href: 'https://youtu.be/I1yfDN_lPJk?si=u4PKCb5Jc9jjumRD' }] },
    { title: 'GATE 2018', links: [{ title: 'GATE 2018 Solved PYQs (YouTube)', href: 'https://youtu.be/h3jipSt-fi8?si=9mirjL5wRGr6sFKy' }] },
    { title: 'GATE 2017', links: [{ title: 'GATE 2017 Solved PYQs (YouTube)', href: 'https://youtu.be/xz-ULkoMBpc?si=xTx-RTypm85NXQw9' }] },
    { title: 'GATE 2016', links: [{ title: 'GATE 2016 Solved PYQs (YouTube)', href: 'https://youtu.be/knfcr3O7dTA?si=ZRm0yNEUrNOViLTZ' }] },
    { title: 'GATE 2015', links: [{ title: 'GATE 2015 Solved PYQs (YouTube)', href: 'https://youtu.be/ZpAmnKMTxFY?si=lH6JRd9f94llnEPu' }] },
    { title: 'GATE 2014', links: [{ title: 'GATE 2014 Solved PYQs (YouTube)', href: 'https://youtu.be/hnpwGOEccvQ?si=IPIjQ_f12pchyEt_' }] },
    { title: 'GATE 2013', links: [{ title: 'GATE 2013 Solved PYQs (YouTube)', href: 'https://youtu.be/lGMzhzip1rQ?si=gFHEyPOJhzJaxXr2' }] },
    { title: 'GATE 2012', links: [{ title: 'GATE 2012 Solved PYQs (YouTube)', href: '#' }] },
    { title: 'GATE 2011', links: [{ title: 'GATE 2011 Solved PYQs (YouTube)', href: 'https://youtu.be/KWf9JAjeuag?si=TgW3miH6dhnDlrjQ' }] },
    { title: 'GATE 2010', links: [{ title: 'GATE 2010 Solved PYQs (YouTube)', href: 'https://youtu.be/lfh3srBvo0M?si=KGDyZZVLirSM_cfv' }] },
    { title: 'GATE 2009', links: [{ title: 'GATE 2009 Solved PYQs (YouTube)', href: 'https://youtu.be/AdomDAF3oE8?si=TnpzyYXsgdgBdvqP' }] },
    { title: 'GATE 2008', links: [{ title: 'GATE 2008 Solved PYQs (YouTube)', href: 'https://youtu.be/1lsb7CRsKMc?si=5CLdyLTIkoeCWSBE' }] },
    { title: 'GATE 2007', links: [{ title: 'GATE 2007 Solved PYQs (YouTube)', href: 'https://youtu.be/evejB44vugw?si=bQ-FnCkklgOZcQKF' }] },
  ],
};
