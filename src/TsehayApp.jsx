import React, { useState, useEffect, useRef } from 'react';
import tsehayImage from './assets/tsehay.png';
import doc from './assets/doc.jpeg';
import doc2 from './assets/doc2.jpeg';
import doc3 from './assets/doc3.jpeg';
import doc4 from './assets/doc4.jpeg';
import doc5 from './assets/doc5.jpeg';

// Isolated Email Input Component
const EmailInput = ({ value, onChange, error, placeholder, language }) => {
  const [localValue, setLocalValue] = useState(value);
  const inputRef = useRef(null);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setLocalValue(newValue);
    onChange(newValue);
  };

  return (
    <div>
      <input
        type="email"
        value={localValue}
        onChange={handleChange}
        placeholder={placeholder}
        className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
        ref={inputRef}
        required
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

// Isolated Message Input Component
const MessageInput = ({ value, onChange, error, placeholder, language }) => {
  const [localValue, setLocalValue] = useState(value);
  const textareaRef = useRef(null);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setLocalValue(newValue);
    onChange(newValue);
  };

  return (
    <div>
      <textarea
        value={localValue}
        onChange={handleChange}
        placeholder={placeholder}
        className={`w-full p-3 border rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
        ref={textareaRef}
        required
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

// Simple Static Feature Card Component - No Movement
const FeatureCard = ({ feature, index }) => {
  return (
    <div 
      className="relative overflow-hidden rounded-2xl shadow-lg bg-white border border-gray-100 hover:shadow-xl transition-all duration-300 group-hover:scale-105"
      data-aos="zoom-in"
      data-aos-delay={index * 100}
      data-aos-duration="800"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-5`}></div>
      <div className="relative p-6 z-10">
        <div className={`
          w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-4
          bg-gradient-to-br ${feature.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300
        `}>
          {feature.icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
      </div>
      
      {/* Static border */}
      <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${feature.color}`}></div>
    </div>
  );
};

// Animated Psychiatrist Card Component with Movement
const PsychiatristCard = ({ psychiatrist, index, isActive, totalCards }) => {
  return (
    <div 
      className={`
        absolute transition-all duration-700 ease-in-out bg-white rounded-2xl shadow-lg p-6 text-center
        ${isActive 
          ? 'scale-110 z-20 shadow-2xl transform translate-x-0 w-80' 
          : index === 0 
            ? 'scale-95 opacity-70 transform -translate-x-80 w-72' 
            : index === 2
              ? 'scale-95 opacity-70 transform translate-x-80 w-72'
              : 'scale-100 opacity-0 w-0'
        }
        h-96 flex flex-col items-center justify-center
      `}
    >
      <img
        src={psychiatrist.image}
        alt={psychiatrist.name}
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-md border-4 border-white transition-all duration-500"
      />
      <h3 className="text-xl font-bold text-gray-800 mb-2">{psychiatrist.name}</h3>
      <p className="text-gray-600 flex-1">{psychiatrist.description}</p>
      {isActive && (
        <button className="mt-4 bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600 transition-colors">
          Book Session
        </button>
      )}
    </div>
  );
};

// Animated Sun Icon Component with orbiting icons
const AnimatedSunWithIcons = () => {
  return (
    <div className="relative mx-auto w-80 h-80">
      {/* Main Sun */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 animate-ping bg-yellow-200 rounded-full opacity-75"></div>
          {/* Sun core with pulse animation */}
          <div className="relative w-40 h-40 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-2xl flex items-center justify-center animate-pulse">
            <span className="text-white text-4xl">🧠</span>
          </div>
        </div>
      </div>

      {/* Orbiting Icons */}
      <div className="absolute inset-0 animate-spin-slow">
        {/* Doctor Icon - Top Left Orbit */}
        <div className="absolute top-4 left-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center transform -translate-y-2 -translate-x-2">
          <span className="text-orange-500 text-2xl">👨‍⚕️</span>
        </div>
        
        {/* Headphone Icon - Top Right Orbit */}
        <div className="absolute top-4 right-4 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center transform -translate-y-2 translate-x-2">
          <span className="text-orange-500 text-xl">🎧</span>
        </div>
        
        {/* Chat Icon - Bottom Left Orbit */}
        <div className="absolute bottom-4 left-4 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center transform translate-y-2 -translate-x-2">
          <span className="text-orange-500 text-xl">💬</span>
        </div>
        
        {/* Heart Icon - Bottom Right Orbit */}
        <div className="absolute bottom-4 right-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center transform translate-y-2 translate-x-2">
          <span className="text-orange-500 text-2xl">❤️</span>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-8 left-1/4 w-4 h-4 bg-yellow-300 rounded-full animate-bounce"></div>
        <div className="absolute bottom-8 right-1/4 w-3 h-3 bg-orange-300 rounded-full animate-bounce animation-delay-1000"></div>
        <div className="absolute top-1/2 left-8 w-2 h-2 bg-yellow-200 rounded-full animate-bounce animation-delay-500"></div>
      </div>
    </div>
  );
};

// Sun Icon Component for Navbar
const SunIcon = ({ className = "" }) => (
  <div className={`relative ${className}`}>
    <div className="absolute inset-0 animate-ping bg-yellow-200 rounded-full opacity-75"></div>
    <svg 
      className="relative" 
      style={{ animation: 'spin 8s linear infinite' }}
      width="40" 
      height="40" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="5" className="fill-yellow-400" />
      <path d="M12 2V4M12 20V22M4 12H2M22 12H20M19.07 4.93L17.66 6.34M6.34 17.66L4.93 19.07M19.07 19.07L17.66 17.66M6.34 6.34L4.93 4.93" 
            stroke="orange" strokeWidth="2" strokeLinecap="round" />
    </svg>
  </div>
);

// Professional Footer Component
const ProfessionalFooter = ({ language }) => {
  const footerContent = {
    en: {
      tagline: 'Bridging mental health gaps in Ethiopia',
      support: 'You are not alone. Help is available.',
      quickLinks: 'Quick Links',
      services: 'Services',
      company: 'Company',
      supportText: 'Support',
      contact: 'Contact',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      developers: 'Developers',
      rights: 'All rights reserved.',
      developedBy: 'Developed by',
      techSolution: 'One Tech Solution',
      mission: 'Making mental healthcare accessible through technology',
      phone: '+251 921 119117',
      email: 'support@Nablis.com',
      address: 'Addis Ababa, Ethiopia'
    },
    am: {
      tagline: 'በኢትዮጵያ ውስጥ ያለውን የአእምሮ ጤና ልዩነት ማሟላት',
      support: 'ብቻዎ አይደሉም። ድጋፍ ይገኛል።',
      quickLinks: 'ፈጣን አገናኞች',
      services: 'አገልግሎቶች',
      company: 'ኩባንያ',
      supportText: 'ድጋፍ',
      contact: 'አግኙን',
      privacy: 'የግላዊነት ፖሊሲ',
      terms: 'የአገልግሎት ውሎች',
      developers: 'ደቪሎፐሮች',
      rights: 'ሁሉም መብቶች የተጠበቁ ናቸው።',
      developedBy: 'የተገነባው በ',
      techSolution: 'አንድ ቴክ ስልጠና',
      mission: 'የአእምሮ ጤና እንክብካቤ በቴክኖሎጂ ተደራሽ ማድረግ',
      phone: '+251 921 119117',
      email: 'support@Nablis.com',
      address: 'አዲስ አበባ፣ ኢትዮጵያ'
    }
  };

  const content = footerContent[language];

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <SunIcon className="text-yellow-400" />
              <span className="text-2xl font-bold text-white">Nablis</span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              {content.tagline}
            </p>
            <p className="text-orange-400 font-semibold text-sm mb-6">
              {content.support}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                <span className="text-2xl">📘</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                <span className="text-2xl">🐦</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                <span className="text-2xl">📷</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                <span className="text-2xl">💼</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">{content.quickLinks}</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">{language === 'en' ? 'Home' : 'መነሻ'}</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">{language === 'en' ? 'About' : 'ስለኛ'}</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">{language === 'en' ? 'Services' : 'አገልግሎቶች'}</a></li>
              <li><a href="#psychiatrists" className="text-gray-300 hover:text-white transition-colors">{language === 'en' ? 'Psychiatrists' : 'ሳይኮሎጂስቶች'}</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">{content.services}</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{language === 'en' ? 'Online Therapy' : 'ኦንላይን ሕክምና'}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{language === 'en' ? 'Crisis Support' : 'አደጋ ድጋፍ'}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{language === 'en' ? 'Mental Health Resources' : 'የአእምሮ ጤና ሀብቶች'}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{language === 'en' ? 'Community Forum' : 'ማህበረሰብ ፎረም'}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">{content.contact}</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <span className="text-orange-400">📞</span>
                <span>{content.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-orange-400">✉️</span>
                <span>{content.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-orange-400">📍</span>
                <span>{content.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright and Tech Solution */}
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-sm">
                © 2024 Nablis Mental Health. {content.rights}
              </p>
              <div className="flex items-center justify-center lg:justify-start space-x-1 mt-2">
                <span className="text-gray-400 text-sm">{content.developedBy}</span>
                <span className="text-orange-400 font-semibold text-sm">{content.techSolution}</span>
                <span className="text-gray-400 text-sm">•</span>
                <span className="text-gray-400 text-sm">{content.mission}</span>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center lg:justify-end space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {content.privacy}
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {content.terms}
              </a>
              <a href="#" className="text-orange-400 hover:text-orange-300 transition-colors font-semibold">
                {content.developers}
              </a>
            </div>
          </div>
        </div>

        {/* Tech Solution Badge */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full border border-orange-400/20">
            <span className="text-orange-400 text-sm">🚀</span>
            <span className="text-gray-300 text-sm">
              {language === 'en' ? 'Powered by Innovative Technology' : 'በፈጠራ ቴክኖሎጂ የተጎነጎነ'}
            </span>
            <span className="text-orange-400 font-semibold text-sm">One Tech Solution</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const TsehayApp = () => {
  const [language, setLanguage] = useState('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [showSupportModal, setShowSupportModal] = useState(false);
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailStatus, setEmailStatus] = useState('');
  const [activePsychiatristIndex, setActivePsychiatristIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState([0, 1, 2]);
  const heroRef = useRef(null);
  const psychiatristsRef = useRef(null);

  const [supportForm, setSupportForm] = useState({
    email: '',
    message: ''
  });

  const [downloadForm, setDownloadForm] = useState({
    email: ''
  });

  // Original 5 psychiatrists data
  const originalPsychiatrists = [
    {
      name: 'Dr. Abebe Kebede',
      description: 'Specialist in anxiety disorders with 10 years of experience.',
      image: doc
    },
    {
      name: 'Dr. Selamawit Tadesse',
      description: 'Expert in depression treatment and cognitive behavioral therapy.',
      image: doc2
    },
    {
      name: 'Dr. Yohannes Bekele',
      description: 'Trauma counselor with focus on PTSD recovery.',
      image: doc3
    },
    {
      name: 'Dr. Meskerem Assefa',
      description: 'Child psychology specialist helping young minds thrive.',
      image: doc4
    },
    {
      name: 'Dr. Dawit Girma',
      description: 'Addiction recovery expert with holistic approaches.',
      image: doc5
    }
  ];

  // Create 15 psychiatrists by adding more variations
  const allPsychiatrists = [
    ...originalPsychiatrists,
    {
      name: 'Dr. Helen Mohammed',
      description: 'Relationship and family therapy specialist.',
      image: doc
    },
    {
      name: 'Dr. Samuel Getachew',
      description: 'Sleep disorders and stress management expert.',
      image: doc2
    },
    {
      name: 'Dr. Tigist Hailu',
      description: 'Eating disorders and body image specialist.',
      image: doc3
    },
    {
      name: 'Dr. Michael Asrat',
      description: 'OCD and phobia treatment specialist.',
      image: doc4
    },
    {
      name: 'Dr. Sofia Alemayehu',
      description: 'Geriatric psychiatry and elder care expert.',
      image: doc5
    },
    {
      name: 'Dr. Nathan Daniel',
      description: 'Sports psychology and performance enhancement.',
      image: doc
    },
    {
      name: 'Dr. Rebecca Solomon',
      description: 'LGBTQ+ affirming therapy and support.',
      image: doc2
    },
    {
      name: 'Dr. Paulos Girma',
      description: 'Neuropsychology and brain behavior specialist.',
      image: doc3
    },
    {
      name: 'Dr. Martha Yohannes',
      description: 'Postpartum and maternal mental health expert.',
      image: doc4
    },
    {
      name: 'Dr. Benjamin Tesfaye',
      description: 'Crisis intervention and emergency psychiatry.',
      image: doc5
    }
  ];

  // Content based on language
  const content = {
    en: {
      nav: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        psychiatrists: 'Find Psychiatrists',
        blog: 'Blog',
        contact: 'Contact'
      },
      hero: {
        title: 'Nablis - Your Mental Wellness Companion',
        subtitle: 'Connecting you with qualified psychiatrists across Ethiopia',
        description: 'Nablis is a geez word, representing a sound of water splashing with a stone which cures . Our platform bridges the gap between mental health professionals and those seeking support.',
        cta: 'Find Support Now',
        download: 'Download Our App'
      },
      about: {
        title: 'About Nablis',
        mission: {
          title: 'Our Mission',
          text: 'To make mental healthcare accessible, affordable, and culturally relevant for all Ethiopians through innovative technology and compassionate service.'
        },
        vision: {
          title: 'Our Vision',
          text: 'A Ethiopia where mental wellness is prioritized, stigma is eliminated, and everyone has access to quality mental health support.'
        },
        leaders: {
          title: 'Founded by Brilliant Young Ethiopian Leaders',
          description: 'Nablis was developed by four brilliant young women in Ethiopia to solve the mental healthcare accessibility crisis through technology and innovation in 2024. Our founders bring together expertise in mental health, technology, medicine, and community outreach to create a comprehensive solution for mental wellness in Ethiopia.',
          groupImage: '/api/placeholder/600/400?text=Tsehay+Founders+2024'
        }
      },
      features: {
        title: 'How Nablis Helps You',
        items: [
          {
            title: 'Easy Access',
            description: 'Connect with licensed psychiatrists from anywhere in Ethiopia',
            icon: '🌐',
            color: 'from-blue-400 to-cyan-400'
          },
          {
            title: 'Confidential',
            description: 'Your sessions and information are completely private and secure',
            icon: '🔒',
            color: 'from-green-400 to-emerald-400'
          },
          {
            title: 'Cultural Understanding',
            description: 'Professionals who understand Ethiopian cultural context',
            icon: '🤝',
            color: 'from-purple-400 to-pink-400'
          },
          {
            title: 'Affordable Care',
            description: 'Mental health support at accessible prices for everyone',
            icon: '💲',
            color: 'from-yellow-400 to-orange-400'
          },
          {
            title: '24/7 Availability',
            description: 'Support available whenever you need it, day or night',
            icon: '⏰',
            color: 'from-red-400 to-rose-400'
          },
          {
            title: 'Holistic Approach',
            description: 'Addressing mental wellness through multiple therapeutic methods',
            icon: '🧠',
            color: 'from-indigo-400 to-violet-400'
          }
        ]
      },
      psychiatrists: {
        title: 'Meet Our Psychiatrists',
        items: allPsychiatrists
      },
      testimonials: {
        title: 'Stories of Hope and Healing',
        items: [
          {
            text: 'Nablis helped me find a therapist who understands my cultural background. For the first time, I feel truly heard.',
            author: 'Alem, Addis Ababa',
            role: 'Client for 6 months'
          },
          {
            text: 'As a busy professional, the convenience of online sessions has been life-changing. I can prioritize my mental health without disrupting my schedule.',
            author: 'Daniel, Hawassa',
            role: 'Client for 3 months'
          },
          {
            text: 'The stigma around mental health in our community made me hesitant to seek help. Nablis provided a safe, judgment-free space for my healing journey.',
            author: 'Meron, Dire Dawa',
            role: 'Client for 1 year'
          }
        ]
      },
      supportModal: {
        title: 'Get Support',
        phoneTitle: 'Call Us Directly',
        phoneNumber: '+251921119117',
        phoneText: 'Call us now for immediate support',
        emailTitle: 'Send us a Message',
        emailPlaceholder: 'What would you like to ask?',
        emailText: 'We\'ll respond within 24 hours',
        emailButton: 'Send Message',
        yourEmail: 'Your Email',
        emailInputPlaceholder: 'Enter your email address',
        submit: 'Send',
        cancel: 'Cancel',
        success: 'Thank you! Your message has been sent successfully. We will reach out to you soon.',
        error: 'Sorry, there was an error sending your message. Please try again.'
      },
      downloadModal: {
        title: 'Download Our App',
        underDevelopment: 'Our app is currently under development',
        notifyText: 'Enter your email to be notified when we launch',
        emailPlaceholder: 'Your email address',
        notifyButton: 'Notify Me',
        cancel: 'Cancel',
        success: 'Thank you! We\'ll notify you when the app is ready.',
        error: 'Sorry, there was an error. Please try again.'
      }
    },
    am: {
      nav: {
        home: 'መነሻ',
        about: 'ስለኛ',
        services: 'አገልግሎቶች',
        psychiatrists: 'ሳይኮሎጂስት ያግኙ',
        blog: 'ብሎግ',
        contact: 'አግኙን'
      },
      hero: {
        title: 'ናብሊስ - የአእምሮ ጤና ባልንጀራዎ',
        subtitle: 'በኢትዮጵያ ውስጥ ባለሙያ ሳይኮሎጂስቶች ከእርስዎ ጋር ያገናኛል',
        description: '"ናብሊስ" የግዕዝ ቃል ሲሆን የፈውስ ድምጽ (የከበረ ድንጋይ) ማለት ሲሆን፤ እርስ በእርሱ ሲጋጭ የሚወጣው ድምጽ በተፈጥሮው ሰዎችን ከህመም ይፈውሳል ። የእኛ መድረክ በአእምሮ ጤና ባለሙያዎች እና ድጋፍ ከሚፈልጉት መካከል ያለውን ልዩነት ያጠፋል። የአዕምሮ ጤና ፈውስን በቤቶ፡፡',
        cta: 'አሁን ድጋፍ ያግኙ',
        download: 'አፕልኬሷን ያውርዱ'
      },
      about: {
        title: 'ስለ ናብሊስ',
        mission: {
          title: 'ተልእኳችን',
          text: 'በፈጠራ አማራጭ ቴክኖሎጂ እና ለሁሉም ተደራሽ በሆነ አገልግሎት ለሁሉም ኢትዮጵያውያን የአእምሮ ጤና በተመጣጣኝ ዋጋ ያለው እና ባህላዊ እሴቶችን በጠበቀ መንገድ ማድረግ።'
        },
        vision: {
          title: 'ራዕያችን',
          text: 'አእምሮ ጤና ቅድሚያ የሚሰጥበት፣ ኋላ ቀር አስተሳሰብ የሚወገድበት እና ሁሉም ሰው ጥራት ያለው የአእምሮ ጤና ድጋፍ የሚገኝበት የኢትዮጵያ ዲጂታል ፕላትፎርም ማድረግ።'
        },
        leaders: {
          title: 'በኢትዮጵያዊ ብሩህ ወጣቶች የተመሠረተ',
          description: 'ናብሊስ በ2024 በኢትዮጵያ ውስጥ አራት ብሩህ ወጣት ሴቶች የቴክኖሎጂ ፈጠራን በመጠቀም የአእምሮ ጤና እንክብካቤ ችግር ለመፍታት ተመሠረተ። ወጣቶቹ በአእምሮ ጤና፣ ቴክኖሎጂ፣ ሕክምና እና በማህበረሰቡ ውስጥ ያለውን ልምድ በማጣመር ለኢትዮጵያ የተሟላ የአእምሮ ጤና መፍትሄ ይፈጥራሉ።',
          groupImage: '/api/placeholder/600/400?text=ፀሐይ+አመራሮች+2024'
        }
      },
      features: {
        title: 'ናብሊስ እንዴት ይርዳዎት?',
        items: [
          {
            title: 'ቀላል መዳረሻ',
            description: 'በኢትዮጵያ ውስጥ ከማንኛውም ቦታ፤ በማንኛውም ሰዓት ሳይኮሎጂስቶች ጋር ይገናኙ',
            icon: '🌐',
            color: 'from-blue-400 to-cyan-400'
          },
          {
            title: 'ሚስጥራዊ',
            description: 'የእርስዎ ክፍለ ጊዜዎች እና መረጃ ሙሉ በሙሉ የግል እና ደህንነቱ የተጠበቀ ነው',
            icon: '🔒',
            color: 'from-green-400 to-emerald-400'
          },
          {
            title: 'ባህላዊ ግንዛቤ',
            description: 'የኢትዮጵያን ባህላዊ አውድ የሚረዱ ባለሙያዎች',
            icon: '🤝',
            color: 'from-purple-400 to-pink-400'
          },
          {
            title: 'ተመጣጣኝ ዋጋ',
            description: 'ለሁሉም ሰው ተደራሽ ዋጋ ያለው የአእምሮ ጤና ድጋፍ',
            icon: '💲',
            color: 'from-yellow-400 to-orange-400'
          },
          {
            title: '24/7 አገልግሎት',
            description: 'በማንኛውም ጊዜ ያለዎትን ድጋፍ ያግኙ፣ ቀን ወይም ሌሊት',
            icon: '⏰',
            color: 'from-red-400 to-rose-400'
          },
          {
            title: 'ሙሉ አቀራረብ',
            description: 'በበርካታ የሕክምና ዘዴዎች የአእምሮ ጤና መፍትሄ ያግኙ',
            icon: '🧠',
            color: 'from-indigo-400 to-violet-400'
          }
        ]
      },
      psychiatrists: {
        title: 'እኛን ሳይኮሎጂስቶችን ይገናኙ',
        items: allPsychiatrists
      },
      testimonials: {
        title: 'የተስፋ እና የፈወስ ታሪኮች',
        items: [
          {
            text: 'ናብሊስ ባህላዊ ሁነቶችን የሚረዳ ሕክምና እንዳገኝ ረድቶኛል። ለመጀመሪያ ጊዜ በእውነት እንደምሰማ አስተዋልሁ።',
            author: 'አለም፣ አዲስ አበባ',
            role: '6 ወራት የሆነ ደንበኛ'
          },
          {
            text: 'ጊዜ እንደሌለው ሰራተኛ፣ የመስመር ላይ ክፍለ ጊዜዎች ህይወቴን ለውጠዋል። የእኔን የአእምሮ ጤና ስራዬን ያለማቋረጥ ማስኬድ እችላለሁ።',
            author: 'ዳንኤል፣ አዋሳ',
            role: '3 ወራት የሆነ ደንበኛ'
          },
          {
            text: 'በማህበረሰባችን ውስጥ በአእምሮ ጤና ላይ ያለው ሀሳብ እገዛ እንድፈልግ አዳጋች አድርጎብኝ ነበር። ናብሊስ ለፈወስ ጉዞዬ ደህንነቱ የተጠበቀ እና ያለፍርድ ህክምና ማገኝበትን ቦታ ሰጥታለች።',
            author: 'ሜሮን፣ ድሬ ዳዋ',
            role: '1 ዓመት የሆነ ደንበኛ'
          }
        ]
      },
      supportModal: {
        title: 'ድጋፍ ያግኙ',
        phoneTitle: 'በቀጥታ ይደውሉልን',
        phoneNumber: '+251921119117',
        phoneText: 'ለፈጣን ድጋፍ አሁን ይደውሉ',
        emailTitle: 'መልእክት ይጻፉልን',
        emailPlaceholder: 'ምን ማወቅ ይፈልጋሉ?',
        emailText: 'በ24 ሰዓት ውስጥ እንመልሳለን',
        emailButton: 'መልእክት ይላኩ',
        yourEmail: 'የእርስዎ ኢሜይል',
        emailInputPlaceholder: 'ኢሜይል አድራሻዎን ያስገቡ',
        submit: 'ይላኩ',
        cancel: 'ይቅር',
        success: 'አመሰግናለሁ! መልእክትዎ በተሳካ ሁኔታ ተልኳል። በቅርብ ጊዜ እንገናኝዎታለን።',
        error: 'ይቅርታ፣ መልእክትዎን ለማስተላለፍ ሲሞክሩ ስህተት ተፈጥሯል። እባክዎ እንደገና ይሞክሩ።'
      },
      downloadModal: {
        title: 'አፕሊኬሽኗን ያውርዱ',
        underDevelopment: 'አፕሊኬሽናችን በአሁኑ ጊዜ በማዘጋጀት ላይ ነው',
        notifyText: 'ሲጀምር ለማሳወቅ ኢሜይልዎን ያስገቡ',
        emailPlaceholder: 'የእርስዎ ኢሜይል አድራሻ',
        notifyButton: 'አሳውቀኝ',
        cancel: 'ይቅር',
        success: 'እናመሰናለን! አፕሊኬሽኑ ሲጠናቀቅ የማሳወቂያ መልዕክት ይደርሶታል።',
        error: 'ይቅርታ፣ ስህተት ተፈጥሯል። እባክዎ እንደገና ይሞክሩ።'
      }
    }
  };

  const currentContent = content[language];

  // Initialize AOS with bidirectional scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      
      // Enhanced AOS simulation that works in both directions
      const elements = document.querySelectorAll('[data-aos]');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const elementTop = rect.top;
        const elementBottom = rect.bottom;
        const windowHeight = window.innerHeight;
        
        // Trigger animation when element enters viewport from any direction
        if (elementTop < windowHeight * 0.85 && elementBottom > windowHeight * 0.15) {
          el.classList.add('aos-animate');
        } else {
          // Remove animation when element leaves viewport for bidirectional effect
          el.classList.remove('aos-animate');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle scroll for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) =>
        prev === currentContent.testimonials.items.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [currentContent.testimonials.items.length]);

  // Auto-scroll psychiatrists with 3 visible cards and movement
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePsychiatristIndex((prev) => {
        const nextIndex = (prev + 1) % allPsychiatrists.length;
        
        // Update visible cards - always show 3 cards
        const newVisibleCards = [];
        for (let i = 0; i < 3; i++) {
          newVisibleCards.push((nextIndex + i) % allPsychiatrists.length);
        }
        setVisibleCards(newVisibleCards);
        
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [allPsychiatrists.length]);

  // Initialize visible cards
  useEffect(() => {
    const initialVisibleCards = [];
    for (let i = 0; i < 3; i++) {
      initialVisibleCards.push(i % allPsychiatrists.length);
    }
    setVisibleCards(initialVisibleCards);
  }, [allPsychiatrists.length]);

  // Function to send email
  const sendEmail = async (emailData) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  // Support Modal Component
  const SupportModal = () => {
    const [formErrors, setFormErrors] = useState({});
    const emailInputRef = useRef(null);

    useEffect(() => {
      if (showSupportModal && emailInputRef.current) {
        emailInputRef.current.focus();
      }
    }, [showSupportModal]);

    const validateForm = () => {
      const errors = {};

      if (!supportForm.email.trim()) {
        errors.email = language === 'en' ? 'Email is required' : 'ኢሜይል ያስፈልጋል';
      } else if (!/\S+@\S+\.\S+/.test(supportForm.email)) {
        errors.email = language === 'en' ? 'Please enter a valid email address' : 'እባክዎ ትክክለኛ ኢሜይል አድራሻ ያስገቡ';
      }

      if (!supportForm.message.trim()) {
        errors.message = language === 'en' ? 'Message is required' : 'መልእክት ያስፈልጋል';
      } else if (supportForm.message.trim().length < 10) {
        errors.message = language === 'en' ? 'Message should be at least 10 characters long' : 'መልእክት ቢያንስ 10 ፊደሎች መሆን አለበት';
      }

      setFormErrors(errors);
      return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      if (!validateForm()) {
        return;
      }

      setIsSubmitting(true);
      setEmailStatus('');

      try {
        const result = await sendEmail({
          userEmail: supportForm.email,
          userMessage: supportForm.message,
          subject: `New Support Message from ${supportForm.email}`,
          type: 'support'
        });

        if (result.success) {
          setEmailStatus('success');
          setTimeout(() => {
            setSupportForm({ email: '', message: '' });
            setFormErrors({});
            setShowSupportModal(false);
            setEmailStatus('');
          }, 3000);
        } else {
          setEmailStatus('error');
        }
      } catch (error) {
        setEmailStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    };

    const handleEmailChange = (newValue) => {
      setSupportForm(prev => ({ ...prev, email: newValue }));
      if (formErrors.email) {
        setFormErrors(prev => ({ ...prev, email: '' }));
      }
    };

    const handleMessageChange = (newValue) => {
      setSupportForm(prev => ({ ...prev, message: newValue }));
      if (formErrors.message) {
        setFormErrors(prev => ({ ...prev, message: '' }));
      }
    };

    const handleCallClick = () => {
      window.open(`tel:${currentContent.supportModal.phoneNumber}`);
    };

    const handleCloseModal = () => {
      setShowSupportModal(false);
      setFormErrors({});
      setEmailStatus('');
    };

    const handleModalClick = (e) => {
      e.stopPropagation();
    };

    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end"
        onClick={handleCloseModal}
      >
        <div
          className={`
            bg-white w-full max-w-md h-full p-6 shadow-2xl
            transform transition-transform duration-300 ease-in-out
            ${showSupportModal ? 'translate-x-0' : 'translate-x-full'}
          `}
          onClick={handleModalClick}
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800">{currentContent.supportModal.title}</h3>
            <button
              onClick={handleCloseModal}
              className="text-gray-600 hover:text-gray-800 text-xl"
            >
              ✕
            </button>
          </div>

          {emailStatus === 'success' ? (
            <div className="flex flex-col items-center justify-center h-full">
              <div className="text-green-500 text-5xl mb-4">✓</div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {language === 'en' ? 'Message Sent Successfully!' : 'መልእክት ተልኳል!'}
              </h4>
              <p className="text-gray-700 mb-4 text-center">{currentContent.supportModal.success}</p>
            </div>
          ) : emailStatus === 'error' ? (
            <div className="flex flex-col items-center justify-center h-full">
              <div className="text-red-500 text-5xl mb-4">⚠️</div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {language === 'en' ? 'Sending Failed' : 'ማስተላለፍ አልተሳካም'}
              </h4>
              <p className="text-gray-700 mb-4 text-center">{currentContent.supportModal.error}</p>
              <button
                onClick={() => setEmailStatus('')}
                className="bg-orange-500 text-white py-2 px-6 rounded-lg hover:bg-orange-600 transition-colors"
              >
                {language === 'en' ? 'Try Again' : 'እንደገና ይሞክሩ'}
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-gray-700 mb-2">{currentContent.supportModal.phoneTitle}</h4>
                <p className="text-lg font-mono text-blue-600 mb-2">{currentContent.supportModal.phoneNumber}</p>
                <p className="text-gray-600 text-sm mb-3">{currentContent.supportModal.phoneText}</p>
                <button
                  onClick={handleCallClick}
                  className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors font-semibold flex items-center justify-center"
                >
                  <span className="mr-2">📞</span>
                  {language === 'en' ? 'Call Now' : 'አሁን ይደውሉ'}
                </button>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-700">{currentContent.supportModal.emailTitle}</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {currentContent.supportModal.yourEmail}
                    </label>
                    <EmailInput
                      value={supportForm.email}
                      onChange={handleEmailChange}
                      error={formErrors.email}
                      placeholder={currentContent.supportModal.emailInputPlaceholder}
                      language={language}
                      ref={emailInputRef}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {currentContent.supportModal.emailPlaceholder}
                    </label>
                    <MessageInput
                      value={supportForm.message}
                      onChange={handleMessageChange}
                      error={formErrors.message}
                      placeholder={currentContent.supportModal.emailPlaceholder}
                      language={language}
                    />
                  </div>
                  <p className="text-gray-600 text-sm">{currentContent.supportModal.emailText}</p>
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors font-semibold disabled:opacity-50 flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        {language === 'en' ? 'Sending...' : 'በማስተላለፍ ላይ...'}
                      </div>
                    ) : (
                      <>
                        <span className="mr-2">✉️</span>
                        {currentContent.supportModal.submit}
                      </>
                    )}
                  </button>
                  <button
                    onClick={handleCloseModal}
                    className="w-full text-gray-600 hover:text-gray-800 transition-colors py-2"
                  >
                    {currentContent.supportModal.cancel}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Download Modal Component
  const DownloadModal = () => {
    const [emailError, setEmailError] = useState('');

    const validateEmail = (email) => {
      return /\S+@\S+\.\S+/.test(email);
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      if (!downloadForm.email.trim()) {
        setEmailError(language === 'en' ? 'Email is required' : 'ኢሜይል ያስፈልጋል');
        return;
      }

      if (!validateEmail(downloadForm.email)) {
        setEmailError(language === 'en' ? 'Please enter a valid email address' : 'እባክዎ ትክክለኛ ኢሜይል አድራሻ ያስገቡ');
        return;
      }

      setIsSubmitting(true);
      setEmailError('');
      setEmailStatus('');

      try {
        const result = await sendEmail({
          userEmail: downloadForm.email,
          userMessage: 'Please notify me when the Nablis app launches!',
          subject: 'App Launch Notification Request',
          type: 'app_notification'
        });

        if (result.success) {
          setEmailStatus('success');
          setTimeout(() => {
            setDownloadForm({ email: '' });
            setShowDownloadModal(false);
            setEmailStatus('');
          }, 3000);
        } else {
          setEmailStatus('error');
        }
      } catch (error) {
        setEmailStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    };

    const handleEmailChange = (e) => {
      setDownloadForm({ email: e.target.value });
      if (emailError) setEmailError('');
    };

    const handleCloseModal = () => {
      setShowDownloadModal(false);
      setEmailError('');
      setEmailStatus('');
    };

    const handleModalClick = (e) => {
      e.stopPropagation();
    };

    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        onClick={handleCloseModal}
      >
        <div
          className="bg-white rounded-lg max-w-md w-full p-6"
          onClick={handleModalClick}
        >
          <h3 className="text-xl font-bold text-gray-800 mb-4">{currentContent.downloadModal.title}</h3>

          {emailStatus === 'success' ? (
            <div className="text-center py-8">
              <div className="text-green-500 text-6xl mb-4">✓</div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {language === 'en' ? 'You\'re on the list!' : 'በዝርዝር ላይ ነዎት!'}
              </h4>
              <p className="text-gray-700 mb-4">{currentContent.downloadModal.success}</p>
            </div>
          ) : emailStatus === 'error' ? (
            <div className="text-center py-8">
              <div className="text-red-500 text-6xl mb-4">⚠️</div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {language === 'en' ? 'Submission Failed' : 'ማስገባት አልተሳካም'}
              </h4>
              <p className="text-gray-700 mb-4">{currentContent.downloadModal.error}</p>
              <button
                onClick={() => setEmailStatus('')}
                className="bg-orange-500 text-white py-2 px-6 rounded-lg hover:bg-orange-600 transition-colors"
              >
                {language === 'en' ? 'Try Again' : 'እንደገና ይሞክሩ'}
              </button>
            </div>
          ) : (
            <>
              <div className="text-center mb-4">
                <div className="text-6xl mb-2">🚧</div>
                <p className="text-gray-600 font-semibold">{currentContent.downloadModal.underDevelopment}</p>
              </div>

              <div className="flex space-x-4 mb-6">
                <div className="flex-1 p-4 border-2 border-gray-300 rounded-lg text-center">
                  <span className="text-3xl block mb-2">🤖</span>
                  <span className="font-semibold text-gray-800">Android</span>
                </div>
                <div className="flex-1 p-4 border-2 border-gray-300 rounded-lg text-center">
                  <span className="text-3xl block mb-2">🍎</span>
                  <span className="font-semibold text-gray-800">iPhone</span>
                </div>
              </div>

              <p className="text-gray-700 mb-3 text-center">{currentContent.downloadModal.notifyText}</p>
              <div>
                <input
                  type="email"
                  name="email"
                  value={downloadForm.email}
                  onChange={handleEmailChange}
                  onFocus={() => setEmailError('')}
                  placeholder={currentContent.downloadModal.emailPlaceholder}
                  className={`w-full p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors ${
                    emailError ? 'border-red-500' : 'border-gray-300'
                  }`}
                  required
                />
                {emailError && (
                  <p className="text-red-500 text-xs mb-2">{emailError}</p>
                )}
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold disabled:opacity-50 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      {language === 'en' ? 'Submitting...' : 'በማስገባት ላይ...'}
                    </div>
                  ) : (
                    <>
                      <span className="mr-2">🔔</span>
                      {currentContent.downloadModal.notifyButton}
                    </>
                  )}
                </button>
              </div>
              <button
                onClick={handleCloseModal}
                className="w-full mt-4 text-gray-600 hover:text-gray-800 transition-colors py-2"
              >
                {currentContent.downloadModal.cancel}
              </button>
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-yellow-50 font-sans">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollPosition > 50 ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <SunIcon />
            <span className="text-2xl font-bold text-orange-600">Nablis</span>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <a href="#home" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">{currentContent.nav.home}</a>
            <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">{currentContent.nav.about}</a>
            <a href="#services" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">{currentContent.nav.services}</a>
            <a href="#psychiatrists" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">{currentContent.nav.psychiatrists}</a>
            <a href="#blog" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">{currentContent.nav.blog}</a>
            <a href="#contact" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">{currentContent.nav.contact}</a>

            <button
              onClick={() => setLanguage(language === 'en' ? 'am' : 'en')}
              className="flex items-center space-x-1 bg-yellow-100 hover:bg-yellow-200 px-3 py-1 rounded-full transition-colors"
            >
              <span className="text-orange-600 font-medium">{language === 'en' ? 'EN' : 'AM'}</span>
              <span className="text-orange-500">🌐</span>
            </button>
          </div>

          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="text-xl">{isMenuOpen ? '✕' : '☰'}</span>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg py-4 px-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">{currentContent.nav.home}</a>
              <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">{currentContent.nav.about}</a>
              <a href="#services" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">{currentContent.nav.services}</a>
              <a href="#psychiatrists" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">{currentContent.nav.psychiatrists}</a>
              <a href="#blog" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">{currentContent.nav.blog}</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">{currentContent.nav.contact}</a>

              <div className="pt-2 border-t border-gray-200">
                <button
                  onClick={() => setLanguage(language === 'en' ? 'am' : 'en')}
                  className="flex items-center space-x-2"
                >
                  <span className="text-orange-600 font-medium">
                    {language === 'en' ? 'Switch to Amharic' : 'Switch to English'}
                  </span>
                  <span className="text-orange-500">🌐</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with AOS animations */}
      <section 
        id="home" 
        className="pt-32 pb-20 px-4"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div 
              className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <h1 
                className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight"
                data-aos="fade-down"
                data-aos-delay="300"
              >
                {currentContent.hero.title}
              </h1>
              <p 
                className="text-xl text-gray-600 mb-6"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                {currentContent.hero.subtitle}
              </p>
              <p 
                className="text-gray-700 mb-8"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                {currentContent.hero.description}
              </p>
              
              <div 
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                data-aos="zoom-in"
                data-aos-delay="600"
                data-aos-duration="800"
              >
                <button
                  onClick={() => setShowSupportModal(true)}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all transform hover:scale-105"
                >
                  {currentContent.hero.cta}
                </button>
                <button
                  onClick={() => setShowDownloadModal(true)}
                  className="border-2 border-orange-500 text-orange-500 hover:bg-orange-50 font-semibold py-3 px-6 rounded-full transition-all transform hover:scale-105"
                >
                  {currentContent.hero.download}
                </button>
              </div>
            </div>
            
            <div 
              className="md:w-1/2 relative"
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              <AnimatedSunWithIcons />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        className="py-20 bg-gradient-to-b from-white to-amber-50"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="container mx-auto max-w-6xl px-4">
          <h2 
            className="text-4xl font-bold text-center text-gray-800 mb-16"
            data-aos="zoom-in"
            data-aos-duration="800"
          >
            {currentContent.about.title}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div 
              className="relative bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              data-aos="flip-left"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-yellow-500"></div>
              <h3 className="text-2xl font-bold text-orange-500 mb-4">{currentContent.about.mission.title}</h3>
              <p className="text-gray-700 text-lg leading-relaxed">{currentContent.about.mission.text}</p>
            </div>
            <div 
              className="relative bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              data-aos="flip-right"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-orange-500"></div>
              <h3 className="text-2xl font-bold text-orange-500 mb-4">{currentContent.about.vision.title}</h3>
              <p className="text-gray-700 text-lg leading-relaxed">{currentContent.about.vision.text}</p>
            </div>
          </div>

          <div 
            className="relative bg-white rounded-3xl p-8 md:p-12 overflow-hidden"
            data-aos="zoom-in-up"
            data-aos-delay="200"
            data-aos-duration="1200"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                {currentContent.about.leaders.title}
              </h3>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div 
                className="lg:w-2/5 relative"
                data-aos="fade-right"
                data-aos-delay="400"
                data-aos-duration="1000"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={tsehayImage}
                    alt={language === 'en' ? 'Nablis Founders 2024' : 'ናብሊስ አመራሮች 2024'}
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>

              <div 
                className="lg:w-3/5"
                data-aos="fade-left"
                data-aos-delay="600"
                data-aos-duration="1000"
              >
                <div className="relative bg-white rounded-xl p-8 shadow-lg">
                  <div className="absolute top-0 left-0 w-16 h-1 bg-orange-500 rounded-full"></div>
                  <p className="text-gray-700 text-lg leading-relaxed relative">
                    {currentContent.about.leaders.description}
                  </p>
                  <div className="mt-6 flex justify-center">
                    <button className="bg-orange-500 text-white py-2 px-6 rounded-lg hover:bg-orange-600 transition-colors">
                      {language === 'en' ? 'Learn More' : 'ተጨማሪ ይወቁ'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-float animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl animate-float animation-delay-4000"></div>
        </div>

        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16 animate-fade-in-up">
            {currentContent.features.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentContent.features.items.map((feature, index) => (
              <div key={index} className="group">
                <FeatureCard
                  feature={feature}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Psychiatrists Section with Very Close Cards */}
      <section 
        id="psychiatrists" 
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
        ref={psychiatristsRef}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="container mx-auto max-w-4xl px-4">
          <h2 
            className="text-4xl font-bold text-center text-gray-800 mb-16"
            data-aos="slide-down"
            data-aos-duration="800"
          >
            {currentContent.psychiatrists.title}
          </h2>

          <div className="relative h-96 flex items-center justify-center">
            <div className="relative w-full h-80 flex items-center justify-center">
              {visibleCards.map((cardIndex, positionIndex) => (
                <PsychiatristCard
                  key={cardIndex}
                  psychiatrist={allPsychiatrists[cardIndex]}
                  index={positionIndex}
                  isActive={positionIndex === 1} // Second card is always active/centered
                  totalCards={visibleCards.length}
                />
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {allPsychiatrists.slice(0, 8).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActivePsychiatristIndex(index);
                  const newVisibleCards = [];
                  for (let i = 0; i < 3; i++) {
                    newVisibleCards.push((index + i) % allPsychiatrists.length);
                  }
                  setVisibleCards(newVisibleCards);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activePsychiatristIndex ? 'bg-orange-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        className="py-16 bg-gradient-to-r from-blue-50 to-purple-50"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="container mx-auto max-w-6xl px-4">
          <h2 
            className="text-3xl font-bold text-center text-gray-800 mb-12"
            data-aos="zoom-in"
            data-aos-duration="800"
          >
            {currentContent.testimonials.title}
          </h2>

          <div 
            className="relative h-64 overflow-hidden rounded-xl bg-white shadow-lg"
            data-aos="slide-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            {currentContent.testimonials.items.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full p-8 transition-opacity duration-1000 ${
                  index === activeTestimonial ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="flex flex-col items-center text-center h-full justify-center">
                  <p className="text-xl text-gray-700 italic mb-6 max-w-3xl">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.author}</p>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {currentContent.testimonials.items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeTestimonial ? 'bg-orange-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section 
        id="contact" 
        className="py-16 bg-gradient-to-r from-orange-400 to-yellow-400 text-white"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h2 
            className="text-3xl font-bold mb-4"
            data-aos="zoom-in"
            data-aos-duration="800"
          >
            {currentContent.hero.download}
          </h2>
          <p 
            className="text-xl mb-8 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800"
          >
            {language === 'en'
              ? 'Download our app today and take the first step towards better mental health'
              : 'አፕልኬሷን ዛሬ ያውርዱ እና ወደ የተሻለ የአእምሮ ጤና የመጀመሪያውን እርምጃ ይውሰዱ'}
          </p>

          <div 
            className="flex justify-center space-x-6"
            data-aos="zoom-in-up"
            data-aos-delay="400"
            data-aos-duration="800"
          >
            <button
              onClick={() => setShowDownloadModal(true)}
              className="bg-white text-gray-800 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg flex items-center space-x-2 transition-all transform hover:scale-105 shadow-lg"
            >
              <span className="text-2xl">🤖</span>
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-lg">Google Play</div>
              </div>
            </button>

            <button
              onClick={() => setShowDownloadModal(true)}
              className="bg-white text-gray-800 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg flex items-center space-x-2 transition-all transform hover:scale-105 shadow-lg"
            >
              <span className="text-2xl">🍎</span>
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-lg">App Store</div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Professional Footer */}
      <ProfessionalFooter language={language} />

      {/* Modals */}
      {showSupportModal && <SupportModal />}
      {showDownloadModal && <DownloadModal />}

      {/* Enhanced AOS CSS with bidirectional support */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out;
        }

        [data-aos] {
          opacity: 0;
          transition-property: opacity, transform;
          transition-duration: 0.8s;
          transition-timing-function: ease;
        }
        
        [data-aos].aos-animate {
          opacity: 1;
          transform: none !important;
        }
        
        /* Bidirectional animations - work both up and down */
        [data-aos="fade-up"] {
          transform: translateY(30px);
        }
        
        [data-aos="fade-down"] {
          transform: translateY(-30px);
        }
        
        [data-aos="fade-left"] {
          transform: translateX(30px);
        }
        
        [data-aos="fade-right"] {
          transform: translateX(-30px);
        }
        
        [data-aos="zoom-in"] {
          transform: scale(0.9);
        }
        
        [data-aos="zoom-in-up"] {
          transform: translateY(30px) scale(0.9);
        }
        
        [data-aos="zoom-out"] {
          transform: scale(1.1);
        }
        
        [data-aos="slide-up"] {
          transform: translateY(100%);
        }
        
        [data-aos="slide-down"] {
          transform: translateY(-100%);
        }
        
        [data-aos="flip-left"] {
          transform: perspective(2500px) rotateY(-100deg);
        }
        
        [data-aos="flip-right"] {
          transform: perspective(2500px) rotateY(100deg);
        }
        
        [data-aos="flip-up"] {
          transform: perspective(2500px) rotateX(-100deg);
        }
      `}</style>
    </div>
  );
};

export default TsehayApp;