import doc from '../assets/doc.jpeg';
import doc2 from '../assets/doc2.jpeg';
import doc3 from '../assets/doc3.jpeg';
import doc4 from '../assets/doc4.jpeg';
import doc5 from '../assets/doc5.jpeg';

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

// Create 15 psychiatrists by repeating the original 5
const allPsychiatrists = [];
for (let i = 0; i < 3; i++) {
  allPsychiatrists.push(...originalPsychiatrists);
}

export const content = {
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
      weAreHere: 'We are here for you',
      title: 'Tsehay - Your Mental Wellness Companion',
      subtitle: 'Connecting you with qualified psychiatrists across Ethiopia',
      description: 'Tsehay means "sun" in Amharic, representing hope and new beginnings. Our platform bridges the gap between mental health professionals and those seeking support.',
      cta: 'Find Support Now',
      download: 'Download Our App'
    },
    about: {
      title: 'About Tsehay',
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
        description: 'Tsehay was developed by four brilliant young women in Ethiopia to solve the mental healthcare accessibility crisis through technology and innovation in 2024. Our founders bring together expertise in mental health, technology, medicine, and community outreach to create a comprehensive solution for mental wellness in Ethiopia.',
        groupImage: '/api/placeholder/600/400?text=Tsehay+Founders+2024'
      }
    },
    features: {
      title: 'How Tsehay Helps You',
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
          text: 'Tsehay helped me find a therapist who understands my cultural background. For the first time, I feel truly heard.',
          author: 'Alem, Addis Ababa',
          role: 'Client for 6 months'
        },
        {
          text: 'As a busy professional, the convenience of online sessions has been life-changing. I can prioritize my mental health without disrupting my schedule.',
          author: 'Daniel, Hawassa',
          role: 'Client for 3 months'
        },
        {
          text: 'The stigma around mental health in our community made me hesitant to seek help. Tsehay provided a safe, judgment-free space for my healing journey.',
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
      weAreHere: 'እኛ ለእርስዎ እዚህ ነን',
      title: 'ፀሐይ - የአእምሮ ጤና ባልንጀራዎ',
      subtitle: 'በኢትዮጵያ ውስጥ ባለሙያ ሳይኮሎጂስቶች ከእርስዎ ጋር ያገናኛል',
      description: '"ፀሐይ" በአማርኛ ማለት ተስፋ እና አዲስ ሁሉ የሚያስጀምር ነው። የእኛ መድረክ በአእምሮ ጤና ባለሙያዎች እና ድጋፍ ከሚፈልጉት መካከል ያለውን ልዩነት ያጠፋል።',
      cta: 'አሁን ድጋፍ ያግኙ',
      download: 'አፕልኬሷን ያውርዱ'
    },
    about: {
      title: 'ስለ ፀሐይ',
      mission: {
        title: 'ተልእኳችን',
        text: 'በፈጠራ አማራጭ ቴክኖሎጂ እና በርኅራኄ አገልግሎት ለሁሉም ኢትዮጵያውያን የአእምሮ ጤና እንክብካቤ ተደራሽ፣ ተመጣጣኝ ዋጋ ያለው እና ባህላዊ ግንኙነት ያለው ማድረግ።'
      },
      vision: {
        title: 'ራእያችን',
        text: 'አእምሮ ጤና ቅድሚያ የሚሰጥበት፣ ስድብ የሚወገድበት እና ሁሉም ሰው ጥራት ያለው የአእምሮ ጤና ድጋፍ የሚያገኝበት ኢትዮጵያ።'
      },
      leaders: {
        title: 'በኢትዮጵያ ውስጥ ብሩህ ወጣት አመራሮች የተመሠረተ',
        description: 'ፀሐይ በ2024 በኢትዮጵያ ውስጥ አራት ብሩህ ወጣት ሴቶች የቴክኖሎጂ እና ፈጠራ በመጠቀም የአእምሮ ጤና እንክብካቤ መድረሻ ችግር ለመፍታት ተመሠረተ። አመራሮቻችን በአእምሮ ጤና፣ ቴክኖሎጂ፣ ሕክምና እና የማህበረሰብ አገናኝ ውስጥ ያለውን ልምድ በማጣመር ለኢትዮጵያ የተሟላ የአእምሮ ጤና መፍትሄ ይፈጥራሉ።',
        groupImage: '/api/placeholder/600/400?text=ፀሐይ+አመራሮች+2024'
      }
    },
    features: {
      title: 'ፀሐይ እንዴት ይረዳዎታል',
      items: [
        {
          title: 'ቀላል መዳረሻ',
          description: 'በኢትዮጵያ ውስጥ ከማንኛውም ቦታ ባለፈውፊት ሳይኮሎጂስቶች ጋር ይገናኙ',
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
          description: 'በበርካታ የሕክምና ዘዴዎች የአእምሮ ጤና መፍትሄ',
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
          text: 'ፀሐይ ባህላዊ ዳራዬን የሚረዳ ሕክምና እንድፈልግ ረድታለች። ለመጀመሪያ ጊዜ በእውነት እንደምሰማ አስተዋልሁ።',
          author: 'አለም፣ አዲስ አበባ',
          role: '6 ወራት የሆነ ደንበኛ'
        },
        {
          text: 'እንደ ሰርተኛ ባለሙያ፣ የመስመር ላይ ክፍለ ጊዜዎች ህይወቴን ለውጠዋል። የእኔን የአእምሮ ጤና ያለስራዬን ማቋረጥ ማስቀደም እችላለሁ።',
          author: 'ዳንኤል፣ አዋሳ',
          role: '3 ወራት የሆነ ደንበኛ'
        },
        {
          text: 'በማህበረሰባችን ውስጥ በአእምሮ ጤና ላይ ያለው ስድብ እገዛ እንድፈልግ አዳጋች አድርጎኝ ነበር። ፀሐይ ለፈወስ ጉዞዬ ደህንነቱ የተጠበቀ እና ያለፍርድ ቦታ ሰጥታለች።',
          author: 'መሮን፣ ድሬ ዳዋ',
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
      error: 'ይቅርታ፣ መልእክትዎን ለማስተላለፍ ሲሉ ስህተት ተፈጥሯል። እባክዎ እንደገና ይሞክሩ።'
    },
    downloadModal: {
      title: 'አፕልኬሷን ያውርዱ',
      underDevelopment: 'አፕልኬሷችን በአሁኑ ጊዜ በማዘጋጀት ላይ ነው',
      notifyText: 'ሲጀምር ለማሳወቅ ኢሜይልዎን ያስገቡ',
      emailPlaceholder: 'የእርስዎ ኢሜይል አድራሻ',
      notifyButton: 'አሳውቀኝ',
      cancel: 'ይቅር',
      success: 'አመሰግናለሁ! አፕሉ ሲጠናቀቅ እንጠብቃለን።',
      error: 'ይቅርታ፣ ስህተት ተፈጥሯል። እባክዎ እንደገና ይሞክሩ።'
    }
  }
};