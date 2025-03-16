export const FONTS = [
  { id: 'caveat', name: 'Caveat', className: 'handwriting' },
  { id: 'homemade-apple', name: 'Homemade Apple', className: 'handwriting-apple' },
  { id: 'indie-flower', name: 'Indie Flower', className: 'handwriting-indie' },
  { id: 'dancing-script', name: 'Dancing Script', className: 'handwriting-dancing' },
  { id: 'sacramento', name: 'Sacramento', className: 'handwriting-sacramento' },
  { id: 'kalam', name: 'Kalam', className: 'handwriting-kalam' },
  { id: 'satisfy', name: 'Satisfy', className: 'handwriting-satisfy' },
  { id: 'architects-daughter', name: 'Architects Daughter', className: 'handwriting-architect' },
  { id: 'schoolbell', name: 'Schoolbell', className: 'handwriting-schoolbell' },
  { id: 'just-me-again', name: 'Just Me Again Down Here', className: 'handwriting-just-me' },
  { id: 'nanum-pen', name: 'Nanum Pen Script', className: 'handwriting-nanum' },
  { id: 'sriracha', name: 'Sriracha', className: 'handwriting-sriracha' },
  { id: 'patrick-hand', name: 'Patrick Hand', className: 'handwriting-patrick' },
  { id: 'gloria-hallelujah', name: 'Gloria Hallelujah', className: 'handwriting-gloria' },
  { id: 'my-handwriting', name: 'My Handwriting', className: 'handwriting-my' },
  { id: 'kids-handwriting', name: 'Kids Handwriting', className: 'handwriting-kids' },
  { id: 'professional-script', name: 'Professional Script', className: 'handwriting-professional' },
];

export const PAPER_COLORS = [
  { id: 'white', name: 'White', value: 'paper-white' },
  { id: 'cream', name: 'Cream', value: 'paper-cream' },
  { id: 'blue', name: 'Light Blue', value: 'paper-blue' },
  { id: 'yellow', name: 'Light Yellow', value: 'paper-yellow' },
  { id: 'green', name: 'Light Green', value: 'paper-green' },
];

export const INK_COLORS = [
  { id: 'black', name: 'Black', value: 'ink-black' },
  { id: 'blue', name: 'Blue', value: 'ink-blue' },
  { id: 'red', name: 'Red', value: 'ink-red' },
  { id: 'green', name: 'Green', value: 'ink-green' },
  { id: 'purple', name: 'Purple', value: 'ink-purple' },
];

export const PAGE_TYPES = [
  { id: 'ruled', name: 'Ruled' },
  { id: 'plain', name: 'Plain' },
  { id: 'graph', name: 'Graph' },
];

export const LETTER_SPACING_OPTIONS = [
  { id: 'tight', name: 'Tight', value: 0 },
  { id: 'normal', name: 'Normal', value: 1 },
  { id: 'wide', name: 'Wide', value: 2 },
  { id: 'extra-wide', name: 'Extra Wide', value: 3 },
];

export const getSelectedFont = (fontId: string) => {
  return FONTS.find(f => f.id === fontId)?.className || FONTS[0].className;
};

export const getSelectedInkColor = (inkColor: string, customInkColor: string) => {
  if (inkColor === 'custom') {
    return customInkColor;
  }
  
  const colorMap = {
    'black': '#000000',
    'blue': '#0046b5',
    'red': '#cb0000',
    'green': '#007d1b',
    'purple': '#6b08a5'
  };
  
  return colorMap[inkColor as keyof typeof colorMap] || '#000000';
};

export const getSelectedPageColor = (pageColor: string) => {
  const colorMap = {
    'white': '#ffffff',
    'cream': '#f8f5e6',
    'blue': '#f5f9ff',
    'yellow': '#fffaec',
    'green': '#f0fff0'
  };
  
  return colorMap[pageColor as keyof typeof colorMap] || '#ffffff';
};

export const getLetterSpacing = (spacingId: string) => {
  const spacing = LETTER_SPACING_OPTIONS.find(s => s.id === spacingId);
  return spacing ? spacing.value : 1;
};

export const DEVELOPER_INFO = {
  name: "Aayush Sharma",
  role: "Full Stack Developer",
  bio: "Passionate about creating intuitive web applications that solve real-world problems. Specializing in React, TypeScript, and UI/UX design with experience building modern web applications.",
  profiles: [
    { platform: "GitHub", url: "https://github.com/aayushsh2003", icon: "github" },
    { platform: "LinkedIn", url: "https://in.linkedin.com/in/aayush-sharma-a44062299", icon: "linkedin" },
    { platform: "Twitter", url: "https://twitter.com/aayushSh2003", icon: "twitter" },
    { platform: "Instagram", url: "https://instagram.com/aayushsh2003", icon: "instagram" }
  ],
  skills: [
    "Frontend Development (React, TypeScript)",
    "UI/UX Design",
    "Full Stack Development",
    "Web Accessibility",
    "Performance Optimization"
  ],
  experience: [
    {
      role: "SAS Certified Specialist: Visual Business Analytics Using SAS Viya",
      company: "R-CAT · Apprenticeship",
      period: "Jan 2025 to Feb 2025 · 2 mos",
      location: "Jaipur, Rajasthan, India · On-site"
    }
  ],
  education: [
    {
      degree: "B.Tech in Computer Science and Engineering (Artificial Intelligence)",
      institution: "Poornima College of Engineering",
      period: "2022 - 2026"
    },
    {
      degree: "PCM with Computer Science and Physical Education",
      institution: "Kendriya Vidyalaya No 5 Jaipur",
      location: "Rajasthan",
      period: "2010 - 2022"
    }
  ],
  portfolio: "https://aayush-linktree.vercel.app/",
  email: "aayushsharma4437@gmail.com",
  location: "Jaipur, Rajasthan",
  photoUrl: "/lovable-uploads/6ff01a22-a01b-4d8e-a814-eacd9bc698a4.png"
};

export const FAQ_ITEMS = [
  {
    question: "How can I add my own Handwriting?",
    answer: "Check out the Guide to add your own Handwriting in the customization panel. We've provided a step-by-step process to help you create and upload your personal handwriting font."
  },
  {
    question: "Where can I get more fonts?",
    answer: "You can download additional handwriting fonts from <a href='https://www.quantumenterprises.co.uk/handwriting-fonts/fontvault.htm' target='_blank' rel='noopener noreferrer'>Quantum Enterprises Font Vault</a> which offers a variety of handwriting styles."
  },
  {
    question: "There are gaps between letters in custom fonts",
    answer: "This is a known issue that we haven't figured out the solution for yet. As a temporary workaround, use the letter spacing and word spacing options in the customization panel to adjust the gap between characters."
  },
  {
    question: "Where can I request features and report bugs?",
    answer: "You can report bugs and request features on our <a href='https://github.com/aayushsh2003/canvas-calligraphy' target='_blank' rel='noopener noreferrer'>GitHub repository</a>. This project is being actively developed and there will be continuous improvements in the future."
  },
  {
    question: "Is it safe to use this for school assignments?",
    answer: "While we've designed this tool to be helpful for learning and presentation purposes, using it to deceive teachers may be considered academic dishonesty. Use it responsibly and at your own risk. If you get caught, we're not responsible, but hey - at least ask your teacher to star our GitHub repository! 😉"
  },
  {
    question: "Will my custom fonts be saved for future use?",
    answer: "Currently, custom fonts are only available for the current session and will need to be re-uploaded if you refresh the page or return later. We're working on adding font persistence in future updates."
  }
];

export const DOCUMENTATION = {
  privacyPolicy: {
    title: "Privacy Policy",
    content: `
      <h2 class="text-2xl font-bold mb-6 text-indigo-700">Privacy Policy</h2>
      <p class="text-slate-600 mb-8">Last updated: ${new Date().toLocaleDateString()}</p>
      
      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-3 text-indigo-600">1. Information We Collect</h3>
        <p class="mb-4">We don't collect any personal information when you use the Text to Handwriting Converter. Any text you input or images you generate remain in your browser and are not transmitted to our servers.</p>
      </div>
      
      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-3 text-indigo-600">2. Custom Fonts</h3>
        <p class="mb-4">When you upload custom fonts, they are stored locally in your browser for the current session only and are not transmitted to our servers.</p>
      </div>
      
      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-3 text-indigo-600">3. Cookies</h3>
        <p class="mb-4">We may use cookies to improve your experience. You can set your browser to refuse all or some browser cookies, but this may limit functionality.</p>
      </div>
      
      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-3 text-indigo-600">4. Third-Party Services</h3>
        <p class="mb-4">We may use third-party services like Google Fonts for font loading, which may collect usage data according to their own privacy policies.</p>
      </div>
      
      <div class="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
        <h3 class="text-xl font-semibold mb-3 text-indigo-700">Contact Us</h3>
        <p>If you have questions about this Privacy Policy, please contact us at <a href="mailto:aayushsharma4437@gmail.com" class="text-indigo-600 hover:text-indigo-800 transition-colors font-medium">aayushsharma4437@gmail.com</a>.</p>
      </div>
    `
  },
  termsOfService: {
    title: "Terms of Service",
    content: `
      <h2 class="text-2xl font-bold mb-6 text-blue-700">Terms of Service</h2>
      <p class="text-slate-600 mb-8">Last updated: ${new Date().toLocaleDateString()}</p>
      
      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-3 text-blue-600">1. Acceptance of Terms</h3>
        <p class="mb-4">By using the Text to Handwriting Converter, you agree to these Terms of Service.</p>
      </div>
      
      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-3 text-blue-600">2. Description of Service</h3>
        <p class="mb-4">The Text to Handwriting Converter allows users to convert digital text into handwriting-like output for various purposes.</p>
      </div>
      
      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-3 text-blue-600">3. Responsible Use</h3>
        <p class="mb-4">Users are responsible for how they use this service. While we designed this tool to help with legitimate needs like creating personalized content, we don't endorse using it for deception or academic dishonesty.</p>
      </div>
      
      <div class="mb-8 bg-amber-50 p-6 rounded-lg border border-amber-100">
        <h3 class="text-xl font-semibold mb-3 text-amber-700">4. Student Disclaimer</h3>
        <p class="mb-4">Attention students! If you're using this to convert your homework, just remember: it's all fun and games until your teacher recognizes Times New Roman disguised as "handwriting." Use at your own risk, and if you get caught, please tell your teacher our app needs more stars on GitHub. 😅</p>
        
        <p class="italic border-l-4 border-amber-300 pl-4 py-2">If you're thinking of submitting that "handwritten" essay that took you 2 minutes to generate, just remember - teachers were students once too. They know all the tricks, probably better than you do!</p>
      </div>
      
      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-3 text-blue-600">5. Intellectual Property</h3>
        <p class="mb-4">All content, design, and functionality of the Text to Handwriting Converter are the property of the developer and are protected by copyright laws.</p>
      </div>
      
      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-3 text-blue-600">6. Limitations of Liability</h3>
        <p class="mb-4">The developer is not responsible for any consequences resulting from the use of this service, including but not limited to academic penalties for misrepresentation of work.</p>
      </div>
      
      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-3 text-blue-600">7. Changes to Terms</h3>
        <p class="mb-4">We reserve the right to modify these terms at any time. Your continued use of the service constitutes acceptance of any changes.</p>
      </div>
      
      <div class="bg-blue-50 p-6 rounded-lg border border-blue-100">
        <h3 class="text-xl font-semibold mb-3 text-blue-700">Contact Us</h3>
        <p>If you have questions about these Terms, please contact us at <a href="mailto:aayushsharma4437@gmail.com" class="text-blue-600 hover:text-blue-800 transition-colors font-medium">aayushsharma4437@gmail.com</a>.</p>
      </div>
    `
  }
};
