export interface TimelineEvent {
  year: string
  title: string
  description: string
}

export interface GalleryImage {
  src: string
  alt: string
  span: string
}

export interface EventDetail {
  title: string
  time: string
  description: string
  icon: string
}

export interface VenueInfo {
  name: string
  address: string
  mapUrl: string
}

export interface SocialLinks {
  email: string
  whatsapp: string
  linkedin: string
  github: string
  instagram: string
  portfolio: string
}

export interface LanguageContent {
  opening: {
    subtitle: string
    subtitle2: string
    button: string
  }
  nav: {
    home: string
    ourStory: string
    gallery: string
    events: string
    rsvp: string
  }
  hero: {
    subtitle: string
    date: string
    scrollDown: string
  }
  invitation: {
    title: string
    message: string
    message2: string
  }
  couple: {
    groomName: string
    brideName: string
    groomDesc: string
    brideDesc: string
    together: string
  }
  timeline: {
    title: string
    subtitle: string
  }
  countdown: {
    title: string
    days: string
    hours: string
    minutes: string
    seconds: string
  }
  gallery: {
    title: string
    subtitle: string
  }
  events: {
    title: string
    subtitle: string
  }
  location: {
    title: string
    subtitle: string
    viewMap: string
  }
  rsvp: {
    title: string
    subtitle: string
    name: string
    phone: string
    guests: string
    attendance: string
    attending: string
    notAttending: string
    message: string
    messagePlaceholder: string
    submit: string
    success: string
  }
  thankYou: {
    title: string
    message: string
  }
  footer: {
    tagline: string
    cta: string
  }
  music: {
    label: string
  }
}

export interface WeddingData {
  groomName: string
  brideName: string
  weddingDate: string
  weddingTime: string
  monogram: string
  musicPath: string
  heroImage: string
  groomImage: string
  brideImage: string
  openingSubtitle: string
  language: {
    ar: LanguageContent
    en: LanguageContent
  }
  timelineEvents: TimelineEvent[]
  galleryImages: GalleryImage[]
  eventDetails: EventDetail[]
  venue: VenueInfo
  socialLinks: SocialLinks
  developer: {
    name: string
    title: string
  }
}

export const weddingData: WeddingData = {
  groomName: "Ahmed",
  brideName: "Fatima",
  weddingDate: "2026-12-15",
  weddingTime: "18:00",
  monogram: "A♡F",
  groomImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
  brideImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80",
  musicPath: "/music/romantic-piano.wav",
  heroImage: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80",

  openingSubtitle: "Together with their families, request the honor of your presence",
  language: {
    ar: {
      opening: {
        subtitle: "نحن ندعوكم لمشاركتنا فرحتنا",
        subtitle2: "نتشرف بدعوتكم لحضور حفل زفافنا",
        button: "افتح الدعوة",
      },
      nav: {
        home: "الرئيسية",
        ourStory: "قصتنا",
        gallery: "معرض الصور",
        events: "الفعاليات",
        rsvp: "تأكيد الحضور",
      },
      hero: {
        subtitle: "نحن ندعوكم لمشاركتنا فرحتنا",
        date: "15 ديسمبر 2026",
        scrollDown: "اسفل للأسفل",
      },
      invitation: {
        title: "بسم الله الرحمن الرحيم",
        message: "نحن سعداء بدعوتكم لمشاركتنا أسعد أيام حياتنا، يوم زفافنا المبارك. نسأل الله أن يجمعنا بكم في هذا اليوم المميز، وأن يديم المحبة والفرح في قلوبنا جميعاً.",
        message2: "وقال تعالى: {وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً}",
      },
      couple: {
        groomName: "أحمد",
        brideName: "فاطمة",
        groomDesc: "العريس",
        brideDesc: "العروس",
        together: "معاً نبدأ قصة حب جديدة",
      },
      timeline: {
        title: "قصتنا",
        subtitle: "رحلة الحب",
      },
      countdown: {
        title: "العد التنازلي",
        days: "يوم",
        hours: "ساعة",
        minutes: "دقيقة",
        seconds: "ثانية",
      },
      gallery: {
        title: "معرض الصور",
        subtitle: "لحظات من ذكرياتنا",
      },
      events: {
        title: "الفعاليات",
        subtitle: "تفاصيل الحفل",
      },
      location: {
        title: "مكان الحفل",
        subtitle: "نتشرف بحضوركم",
        viewMap: "عرض الخريطة",
      },
      rsvp: {
        title: "تأكيد الحضور",
        subtitle: "نرجو تأكيد حضوركم قبل 1 ديسمبر 2026",
        name: "الاسم الكامل",
        phone: "رقم الهاتف",
        guests: "عدد الضيوف",
        attendance: "الحضور",
        attending: "سأحضر",
        notAttending: "لن أحضر",
        message: "رسالة",
        messagePlaceholder: "اكتب رسالة للعروسين...",
        submit: "تأكيد الحضور",
        success: "شكراً لتأكيد حضوركم! نحن متشوقون لرؤيتكم.",
      },
      thankYou: {
        title: "شكراً لكم",
        message: "نتقدم بجزيل الشكر والامتنان لكل من شاركنا فرحتنا. حضوركم هو أجمل هدية. نسأل الله أن يجمعنا بكم في أفراح قادمة.",
      },
      footer: {
        tagline: "نصنع مواقع زفاف فاخرة وتجارب رقمية متميزة",
        cta: "اطلب موقع زفافك الآن",
      },
      music: {
        label: "الموسيقى",
      },
    },
    en: {
      opening: {
        subtitle: "We invite you to share our joy",
        subtitle2: "Together with their families, request the honor of your presence",
        button: "Open Invitation",
      },
      nav: {
        home: "Home",
        ourStory: "Our Story",
        gallery: "Gallery",
        events: "Events",
        rsvp: "RSVP",
      },
      hero: {
        subtitle: "We invite you to share our joy",
        date: "December 15, 2026",
        scrollDown: "Scroll Down",
      },
      invitation: {
        title: "In the Name of Allah, the Most Gracious, the Most Merciful",
        message: "With hearts full of joy and gratitude, we invite you to share in the happiest day of our lives. Your presence will bless our union and make this celebration truly complete.",
        message2: "“And among His signs is that He created for you from yourselves mates that you may find tranquility in them, and He placed between you affection and mercy.” — Quran 30:21",
      },
      couple: {
        groomName: "Ahmed",
        brideName: "Fatima",
        groomDesc: "The Groom",
        brideDesc: "The Bride",
        together: "Together we begin a new love story",
      },
      timeline: {
        title: "Our Story",
        subtitle: "A Journey of Love",
      },
      countdown: {
        title: "Countdown",
        days: "Days",
        hours: "Hours",
        minutes: "Minutes",
        seconds: "Seconds",
      },
      gallery: {
        title: "Gallery",
        subtitle: "Moments of our journey",
      },
      events: {
        title: "Events",
        subtitle: "Celebration Details",
      },
      location: {
        title: "Venue",
        subtitle: "We are honored by your presence",
        viewMap: "View Map",
      },
      rsvp: {
        title: "RSVP",
        subtitle: "Please confirm your attendance before December 1, 2026",
        name: "Full Name",
        phone: "Phone Number",
        guests: "Number of Guests",
        attendance: "Attendance",
        attending: "Will Attend",
        notAttending: "Will Not Attend",
        message: "Message",
        messagePlaceholder: "Write a message to the couple...",
        submit: "Confirm Attendance",
        success: "Thank you for confirming! We look forward to seeing you.",
      },
      thankYou: {
        title: "Thank You",
        message: "We extend our deepest gratitude to everyone who shared our joy. Your presence is the greatest gift of all. May we gather again in future celebrations.",
      },
      footer: {
        tagline: "Creating premium wedding invitation websites and digital experiences",
        cta: "Build Your Wedding Website",
      },
      music: {
        label: "Music",
      },
    },
  },

  timelineEvents: [
    {
      year: "2020",
      title: "First Meeting",
      description: "Our paths crossed at a mutual friend's gathering. Little did we know, this was the beginning of our forever.",
    },
    {
      year: "2021",
      title: "First Adventure",
      description: "Our first trip together to the mountains. The breathtaking views matched the beauty of our growing bond.",
    },
    {
      year: "2022",
      title: "The Proposal",
      description: "Under a sky full of stars, a question was asked that changed everything. The answer was an overwhelming yes.",
    },
    {
      year: "2023",
      title: "Engagement",
      description: "Surrounded by family and friends, we celebrated our engagement. The journey to our forever had officially begun.",
    },
    {
      year: "2026",
      title: "The Wedding",
      description: "The day we've been waiting for. Two hearts, one love, one destiny. Our forever starts here.",
    },
  ],

  galleryImages: [
    { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80", alt: "Elegant wedding ceremony setup with golden decorations", span: "md:col-span-2 md:row-span-1" },
    { src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80", alt: "Beautiful wedding arch with white flowers", span: "md:col-span-1 md:row-span-2" },
    { src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80", alt: "Romantic couple portrait in golden hour", span: "md:col-span-1 md:row-span-1" },
    { src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80", alt: "Intertwined wedding rings on silk", span: "md:col-span-1 md:row-span-1" },
    { src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80", alt: "Luxury floral arrangements in gold vases", span: "md:col-span-2 md:row-span-1" },
    { src: "https://images.unsplash.com/photo-1507504031003-bc1cca1af1e9?w=800&q=80", alt: "Elegant wedding reception table setup", span: "md:col-span-1 md:row-span-1" },
    { src: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&q=80", alt: "Bride and groom hands with wedding rings", span: "md:col-span-1 md:row-span-1" },
    { src: "https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800&q=80", alt: "Luxury wedding cake with gold details", span: "md:col-span-1 md:row-span-1" },
    { src: "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=800&q=80", alt: "Sunset wedding ceremony by the beach", span: "md:col-span-2 md:row-span-1" },
  ],

  eventDetails: [
    {
      title: "Wedding Ceremony",
      time: "18:00",
      description: "The main ceremony followed by dinner and celebrations",
      icon: "heart",
    },
    {
      title: "Henna Night",
      time: "20:00",
      description: "Traditional henna celebration with family and friends",
      icon: "sparkles",
    },
    {
      title: "Wedding Reception",
      time: "21:30",
      description: "Dinner, music, and dancing under the stars",
      icon: "music",
    },
  ],

  venue: {
    name: "The Royal Palace Hotel",
    address: "123 Elegance Avenue, Garden City, Cairo, Egypt",
    mapUrl: "https://maps.google.com/?q=Royal+Palace+Hotel+Cairo",
  },

  socialLinks: {
    email: "hello@abdelftah.com",
    whatsapp: "https://wa.me/201234567890",
    linkedin: "https://linkedin.com/in/abdelftah-shkal",
    github: "https://github.com/abdelftah",
    instagram: "https://instagram.com/abdelftah",
    portfolio: "https://abdelftah.com",
  },

  developer: {
    name: "Abdelftah Shkal",
    title: "Designed & Developed by Abdelftah Shkal",
  },
}
