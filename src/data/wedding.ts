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
  instagram: string

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
  groomName: "Mohamed",
  brideName: "Asmaa",
  weddingDate: "2026-07-21",
  weddingTime: "18:00",
  monogram: "M♡A",
  groomImage: "/assets/elsafty.png",
  brideImage: "/assets/asmaa.jpeg",
  musicPath: "/music/music.mp3",
  heroImage: "/assets/Hero.jpeg",

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
        date: "21 يوليو 2026",
        scrollDown: "اسفل للأسفل",
      },
      invitation: {
        title: "بسم الله الرحمن الرحيم",
        message: "نحن سعداء بدعوتكم لمشاركتنا أسعد أيام حياتنا، يوم زفافنا المبارك. نسأل الله أن يجمعنا بكم في هذا اليوم المميز، وأن يديم المحبة والفرح في قلوبنا جميعاً.",
        message2: "وقال تعالى: {وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً}",
      },
      couple: {
        groomName: "محمد",
        brideName: "اسماء",
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
        date: "July 21, 2026",
        scrollDown: "Scroll Down",
      },
      invitation: {
        title: "In the Name of Allah, the Most Gracious, the Most Merciful",
        message: "With hearts full of joy and gratitude, we invite you to share in the happiest day of our lives. Your presence will bless our union and make this celebration truly complete.",
        message2: "“And among His signs is that He created for you from yourselves mates that you may find tranquility in them, and He placed between you affection and mercy.” — Quran 30:21",
      },
      couple: {
        groomName: "Mohamed",
        brideName: "Asmaa",
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
      year: "2023",
      title: "First Meeting",
      description: "Our paths crossed at a mutual friend's gathering. Little did we know, this was the beginning of our forever.",
    },
    {
      year: "2024",
      title: "The Proposal",
      description: "Under a sky full of stars, a question was asked that changed everything. The answer was an overwhelming yes.",
    },
    {
      year: "2024",
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
    { src: "/assets/image1.jpeg", alt: "Elegant wedding ceremony setup with golden decorations", span: "md:col-span-2 md:row-span-1" },
    { src: "/assets/image2.jpeg", alt: "Beautiful wedding arch with white flowers", span: "md:col-span-1 md:row-span-2" },
    { src: "/assets/image9.jpg", alt: "Romantic couple portrait in golden hour", span: "md:col-span-1 md:row-span-1" },
    { src: "/assets/image4.jpeg", alt: "Intertwined wedding rings on silk", span: "md:col-span-1 md:row-span-1" },
    { src: "/assets/image8.jpg", alt: "Luxury floral arrangements in gold vases", span: "md:col-span-2 md:row-span-1" },
    { src: "/assets/image6.jpg", alt: "Elegant wedding reception table setup", span: "md:col-span-1 md:row-span-1" },
    { src: "/assets/image5.jpeg", alt: "Bride and groom hands with wedding rings", span: "md:col-span-1 md:row-span-1" },
    { src: "/assets/image9.jpg", alt: "Luxury wedding cake with gold details", span: "md:col-span-1 md:row-span-1" },
    { src: "/assets/image3.jpeg", alt: "Sunset wedding ceremony by the beach", span: "md:col-span-2 md:row-span-1" },
  ],

  eventDetails: [
    {
      title: "Wedding Ceremony",
      time: "20:00",
      description: "The main ceremony followed by dinner and celebrations",
      icon: "heart",
    },
    {
      title: "Henna Night",
      time: "21:00",
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
    name: "Elite Hall",
    address: "Elite Hall , ,Talkha City, Egypt",
    mapUrl: "https://maps.app.goo.gl/UwyvuKzxTVQ6up6Q6",
  },

  socialLinks: {
    email: "abdelftahshkal.com",
    whatsapp: "https://wa.me/201559359590",
    instagram: "https://instagram.com/abdelftahshkal/",
  },

  developer: {
    name: "Abdelftah Shkal",
    title: "Designed & Developed by Abdelftah Shkal",
  },
}
