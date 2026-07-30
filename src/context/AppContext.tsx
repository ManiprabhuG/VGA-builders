"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Language = "en" | "ta";
export type Theme = "light" | "dark";

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  t: (key: string) => string;
}

export const translations: Record<Language, Record<string, string>> = {
  en: {
    brand_name: "VGA Builders",
    tagline: "Building With Responsibility",
    hero_title: "Building With Responsibility & Complete Transparency",
    hero_subtitle: "Tamil Nadu's trusted construction partner for Residential & Commercial projects. We document every brick, RCC slab, and curing process on site.",
    nav_home: "Home",
    nav_about: "About Us",
    nav_services: "Services",
    nav_why: "Why Choose Us",
    nav_projects: "Projects",
    nav_process: "Our Process",
    nav_curing: "Curing Guide",
    nav_gallery: "Gallery",
    nav_videos: "Video Showcase",
    nav_testimonials: "Testimonials",
    nav_team: "Our Team",
    nav_contact: "Contact Us",
    cta_site_visit: "Request Site Visit",
    cta_consultation: "Get Free Consultation",
    cta_call: "Call Now",
    cta_whatsapp: "WhatsApp Us",
    
    // Stats
    stat_projects: "150+ Projects Completed",
    stat_clients: "120+ Happy Clients",
    stat_experience: "12+ Years Experience",
    stat_workers: "80+ Skilled Workers",
    
    // Profile
    profile_title: "Crafting Strong Foundations Across Tamil Nadu",
    profile_desc: "VGA Builders is a premier construction firm based in Tamil Nadu, specializing in residential villas, G+1 houses, multi-story buildings, and commercial complexes. Unlike traditional contractors, we emphasize complete site transparency, proper curing techniques, and real-time progress documentation.",
    mission_title: "Our Mission",
    mission_desc: "To build safe, durable, and high-quality homes and commercial structures by following industry best practices, maintaining transparency, and keeping clients informed throughout the construction journey.",
    vision_title: "Our Vision",
    vision_desc: "To become the most trusted construction partner in Tamil Nadu by delivering responsible construction, quality workmanship, proper curing practices, and transparent project management.",

    // Services
    services_title: "Our Core Construction Services",
    services_subtitle: "End-to-end expertise from foundation excavation to key handover",
    s_residential: "Residential Construction",
    s_residential_sub: "Individual Homes, Villas, Duplex Houses, G+1 & Custom Residences",
    s_commercial: "Commercial Construction",
    s_commercial_sub: "Commercial Complexes, Office Spaces, Retail Outlets & Warehouses",
    s_brickwork: "Brick Work & Masonry",
    s_brickwork_sub: "Precision Brick Wall Construction, Partition Walls & Structural Masonry",
    s_structural: "Structural Construction (RCC)",
    s_structural_sub: "RCC Frame Work, Heavy Columns, Beams, Slabs & Monolithic Staircases",
    s_plastering: "Plastering & Finishing",
    s_plastering_sub: "Internal & External Smooth Plastering, Wall Finishing & Surface Prep",
    s_curing: "Quality Curing Process",
    s_curing_sub: "Ponding, Hessian Cloth Wrapping & Extended Curing for Peak Durability",

    // Why Choose Us
    why_title: "Why Choose VGA Builders?",
    why_subtitle: "We show our work, not just our words",
    why_transparency_title: "On-Site Transparency",
    why_transparency_desc: "Regular project updates with actual site photos and video documentation.",
    why_quality_title: "Quality First Approach",
    why_quality_desc: "Strict adherence to cement-water ratios, proper curing schedules, and structural durability.",
    why_team_title: "Responsible Team",
    why_team_desc: "Experienced civil engineers, site supervisors, and certified skilled workers.",
    why_docs_title: "Real Progress Tracking",
    why_docs_desc: "Live site photos & progress reports instead of stock showcase images.",
    why_delivery_title: "Timely Delivery",
    why_delivery_desc: "Efficient project scheduling and milestone-driven completion.",
    why_expertise_title: "Tamil Nadu Local Expertise",
    why_expertise_desc: "Strong local presence in Thanjavur, Madurai, and surrounding regions.",

    // Projects
    projects_title: "Featured Projects",
    projects_subtitle: "Real progress documentation from ongoing & completed sites",
    project_1_title: "Thanjavur G+1 Residential House",
    project_1_location: "Thanjavur, Tamil Nadu",
    project_1_status: "Ongoing - Brick Work & RCC Stage",
    project_2_title: "Madurai Multi-Story Commercial Complex",
    project_2_location: "Madurai, Tamil Nadu",
    project_2_status: "Ongoing - Exterior Plastering & Scaffolding",
    project_3_title: "Tamil Nadu Luxury Residential Villa",
    project_3_location: "Tamil Nadu",
    project_3_status: "Completed - Turnkey Handover",

    // Process
    process_title: "Our 8-Step Construction Process",
    process_subtitle: "A systematic workflow engineered for structural perfection",
    curing_quote: '"Cement and Steel are Important, but Curing is Like Gold."',

    // Curing Education
    curing_title: "Why Proper Curing Matters",
    curing_subtitle: "Educating clients on the cornerstone of long-lasting construction",
    curing_wall: "Wall Curing",
    curing_wall_desc: "Brick walls require continuous moistening for 7-10 days to achieve maximum mortar binding strength.",
    curing_slab: "Roof Slab Curing",
    curing_slab_desc: "Ponding method with water bunds ensures zero shrinkage cracks in concrete slabs.",
    curing_stairs: "Staircase Curing",
    curing_stairs_desc: "Hessian cloth wrapping prevents rapid moisture loss during high load-bearing hydration.",
    curing_concrete: "Concrete Column Curing",
    curing_concrete_desc: "Continuous watering for RCC columns guarantees optimal compressive strength.",

    // Contact & Enquiry
    contact_title: "Get In Touch With Our Engineers",
    office_thanjavur: "Thanjavur Office",
    office_madurai: "Madurai Office",
    address_thanjavur: "Thanjavur, Tamil Nadu",
    address_madurai: "Madurai, Tamil Nadu",
    phone_label: "Phone / WhatsApp",
    email_label: "Email Address",
    instagram_label: "Instagram Page",
    form_title: "Plan Your Dream Construction Project",
    form_name: "Full Name",
    form_phone: "Phone Number",
    form_email: "Email Address",
    form_location: "Project Location (e.g., Thanjavur, Madurai)",
    form_type: "Project Type",
    form_budget: "Estimated Budget",
    form_message: "Project Requirements / Message",
    form_submit: "Submit Enquiry",
    form_success: "Thank you! Our site engineer will contact you shortly.",

    // Footer
    footer_rights: "© VGA Builders. All Rights Reserved. Building With Responsibility.",
  },
  ta: {
    brand_name: "விஜிஏ பில்டர்ஸ்",
    tagline: "பொறுப்புடன் கட்டமைக்கிறோம்",
    hero_title: "பொறுப்புடன் மற்றும் முழு வெளிப்படைத்தன்மையுடன் கட்டுமானம்",
    hero_subtitle: "தமிழ்நாட்டின் நம்பகமான குடியிருப்பு மற்றும் வணிக கட்டிட கட்டுமான நிறுவனம். தளத்தின் ஒவ்வொரு கட்டத்தையும் வெளிப்படையாக காட்டுகிறோம்.",
    nav_home: "முகப்பு",
    nav_about: "எங்களைப் பற்றி",
    nav_services: "சேவைகள்",
    nav_why: "ஏன் எங்களை தேர்வு செய்ய வேண்டும்?",
    nav_projects: "திட்டங்கள்",
    nav_process: "எமது முறை",
    nav_curing: "Curing வழிகாட்டி",
    nav_gallery: "புகைப்படங்கள்",
    nav_videos: "வீடியோக்கள்",
    nav_testimonials: "மதிப்புரைகள்",
    nav_team: "எங்கள் குழு",
    nav_contact: "தொடர்புகொள்ள",
    cta_site_visit: "தளப் பார்வை பதிவு செய்ய",
    cta_consultation: "இலவச ஆலோசனை பெற",
    cta_call: "அழைக்கவும்",
    cta_whatsapp: "வாட்ஸ்அப் செய்ய",
    
    // Stats
    stat_projects: "150+ முடிந்த திட்டங்கள்",
    stat_clients: "120+ மகிழ்ச்சியான வாடிக்கையாளர்கள்",
    stat_experience: "12+ ஆண்டுகள் அனுபவம்",
    stat_workers: "80+ திறமையான தொழிலாளர்கள்",
    
    // Profile
    profile_title: "தமிழ்நாடு முழுவதும் உறுதியான அடித்தளத்தை அமைக்கிறோம்",
    profile_desc: "விஜிஏ பில்டர்ஸ் தமிழ்நாட்டின் முன்னணி கட்டுமான நிறுவனமாகும். நாங்கள் வீடுகள், வில்லாக்கள், G+1 வீடுகள் மற்றும் வணிக கட்டிடங்களை உயர்தர தரநிலைகளுடன் கட்டுகிறோம். நீர் ஊற்றும் முறை (Curing) மற்றும் நேரடி கட்டுமான புகைப்படங்களை வாடிக்கையாளர்களுக்கு தொடர்ந்து வழங்குகிறோம்.",
    mission_title: "எங்கள் நோக்கம்",
    mission_desc: "உயர்தரப் பொருட்களைப் பயன்படுத்தி, சரியான கட்டுமான முறைகளைப் பின்பற்றி வாடிக்கையாளர்களுக்கு பாதுகாப்பான மற்றும் உறுதியான வீடுகளை வழங்குவது.",
    vision_title: "எங்கள் தொலைநோக்கு",
    vision_desc: "தமிழ்நாட்டின் மிகவும் நம்பகமான மற்றும் வெளிப்படையான கட்டுமான நிறுவனமாக திகழ்வது.",

    // Services
    services_title: "எங்களின் முதன்மை கட்டுமான சேவைகள்",
    services_subtitle: "அடித்தளம் முதல் சாவி ஒப்படைப்பு வரை அனைத்து சேவைகளும்",
    s_residential: "குடியிருப்பு கட்டுமானம்",
    s_residential_sub: "தனி வீடுகள், வில்லாக்கள், டியூப்ளக்ஸ் வீடுகள் மற்றும் G+1 வீடுகள்",
    s_commercial: "வணிக வளாக கட்டுமானம்",
    s_commercial_sub: "வணிக வளாகங்கள், கடைகள், அலுவலகங்கள் மற்றும் குடோன்கள்",
    s_brickwork: " செங்கல் மற்றும் மேசன்றி வேலைகள்",
    s_brickwork_sub: "துல்லியமான செங்கல் கட்டுமானம், தடுப்பு சுவர்கள் மற்றும் கட்டமைப்பு செங்கல் வேலைகள்",
    s_structural: "RCC கட்டமைப்பு வேலைகள்",
    s_structural_sub: "RCC கான்கிரீட் தூண்கள், பீம்கள், ஸ்லாப்கள் மற்றும் படிக்கட்டுகள்",
    s_plastering: "பூச்சு மற்றும் ஃபினிஷிங் வேலைகள்",
    s_plastering_sub: "உள் மற்றும் வெளி சுவர் பூச்சு வேலைகள்",
    s_curing: "உயர்தர Curing நீர் ஊற்றும் செயல்முறை",
    s_curing_sub: "ஸ்லாப் மற்றும் சுவர்களுக்கு சரியான முறையில் நீர் பாய்ச்சி பலப்படுத்துதல்",

    // Why Choose Us
    why_title: "ஏன் விஜிஏ பில்டர்ஸ்?",
    why_subtitle: "வார்த்தைகளில் மட்டுமல்ல, வேலையில் காட்டுகிறோம்",
    why_transparency_title: "நேரடி வெளிப்படைத்தன்மை",
    why_transparency_desc: "கட்டுமான தளத்தின் நேரடி புகைப்படங்கள் மற்றும் வீடியோக்கள்.",
    why_quality_title: "தரத்திற்கு முதலிடம்",
    why_quality_desc: "முறையான Curing மற்றும் உறுதியான கட்டுமான நடைமுறைகள்.",
    why_team_title: "பொறுப்பான பொறியாளர்கள் குழு",
    why_team_desc: "அனுபவம் வாய்ந்த சிவில் பொறியாளர்கள் மற்றும் தொழிலாளர்கள்.",
    why_docs_title: "உண்மையான முன்னேற்ற ஆவணங்கள்",
    why_docs_desc: "போலி படங்கள் இல்லாமல் உண்மையான தள முன்னேற்றத்தை பகிர்கிறோம்.",
    why_delivery_title: "சரியான நேரத்தில் ஒப்படைப்பு",
    why_delivery_desc: "திட்டமிட்ட நேரத்தில் துல்லியமான கட்டிடம் ஒப்படைப்பு.",
    why_expertise_title: "உள்ளூர் அனுபவம்",
    why_expertise_desc: "தஞ்சாவூர், மதுரை மற்றும் சுற்றுவட்டாரப் பகுதிகளில் வலுவான தளம்.",

    // Projects
    projects_title: "சிறந்த திட்டங்கள்",
    projects_subtitle: "நாங்கள் செய்து கொண்டிருக்கும் மற்றும் முடித்த திட்டங்களின் விவரங்கள்",
    project_1_title: "தஞ்சாவூர் G+1 குடியிருப்பு வீடு",
    project_1_location: "தஞ்சாவூர், தமிழ்நாடு",
    project_1_status: "செங்கல் மற்றும் RCC வேலைகள் நடைபெறுகின்றன",
    project_2_title: "மதுரை வணிக வளாக கட்டிடம்",
    project_2_location: "மதுரை, தமிழ்நாடு",
    project_2_status: "வெளிப்புற பூச்சு வேலைகள் நடைபெறுகின்றன",
    project_3_title: "தமிழ்நாடு லக்ஸரி வில்லா",
    project_3_location: "தமிழ்நாடு",
    project_3_status: "வெற்றிகரமாக ஒப்படைக்கப்பட்டது",

    // Process
    process_title: "எங்களது 8-படி கட்டுமான முறை",
    process_subtitle: "முறையான திட்டம் மற்றும் தரமான கட்டமைப்பு நடைமுறை",
    curing_quote: '"சிமெண்ட்டும் கம்பியும் முக்கியம், ஆனால் நீர் ஊற்றுதல் (Curing) தங்கத்திற்கு சமம்."',

    // Curing Education
    curing_title: "ஏன் Curing (நீர் ஊற்றுதல்) மிக முக்கியம்?",
    curing_subtitle: "கட்டிடத்தின் ஆயுளை அதிகரிக்கும் மிக முக்கியமான நிலை",
    curing_wall: "சுவர் நீர் ஊற்றுதல்",
    curing_wall_desc: "செங்கல் சுவர்களுக்கு 7-10 நாட்கள் தொடர்ந்து நீர் பாய்ச்சுவது அவசியம்.",
    curing_slab: "ரூஃப் ஸ்லாப் Curing",
    curing_slab_desc: "ஸ்லாபில் நீர் தேக்கி வைப்பதன் மூலம் விரிசல்கள் ஏற்படுவது தடுக்கப்படுகிறது.",
    curing_stairs: "படிக்கட்டு Curing",
    curing_stairs_desc: "ஈரப்பதம் குறையாமல் சணல் துணி சுற்றி நீர் ஊற்றுதல்.",
    curing_concrete: "கான்கிரீட் தூண் Curing",
    curing_concrete_desc: "தூண்களுக்கு தினமும் நீர் பாய்ச்சி அதிகபட்ச பலம் பெறுதல்.",

    // Contact & Enquiry
    contact_title: "எங்கள் பொறியாளர்களை தொடர்பு கொள்ளவும்",
    office_thanjavur: "தஞ்சாவூர் அலுவலகம்",
    office_madurai: "மதுரை அலுவலகம்",
    address_thanjavur: "தஞ்சாவூர், தமிழ்நாடு",
    address_madurai: "மதுரை, தமிழ்நாடு",
    phone_label: "தொலைபேசி / வாட்ஸ்அப்",
    email_label: "மின்னஞ்சல் முகவரி",
    instagram_label: "இன்ஸ்டாகிராம் பக்கம்",
    form_title: "உங்கள் கனவு இல்லத்தை திட்டமிடுங்கள்",
    form_name: "முழு பெயர்",
    form_phone: "தொலைபேசி எண்",
    form_email: "மின்னஞ்சல்",
    form_location: "இடம் (எ.கா. தஞ்சாவூர், மதுரை)",
    form_type: "கட்டிட வகை",
    form_budget: "மதிப்பிடப்பட்ட பட்ஜெட்",
    form_message: "உங்கள் தேவைகள் / செய்தி",
    form_submit: "அனுப்பவும்",
    form_success: "நன்றி! எங்கள் பொறியாளர் விரைவில் உங்களை தொடர்புகொள்வார்.",

    // Footer
    footer_rights: "© விஜிஏ பில்டர்ஸ். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை. பொறுப்புடன் கட்டமைக்கிறோம்.",
  },
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("en");
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    const savedLang = localStorage.getItem("vga_lang") as Language;
    if (savedLang === "en" || savedLang === "ta") {
      setLanguageState(savedLang);
    }

    const savedTheme = localStorage.getItem("vga_theme") as Theme;
    if (savedTheme === "light" || savedTheme === "dark") {
      setThemeState(savedTheme);
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("vga_lang", lang);
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("vga_theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const t = (key: string): string => {
    return translations[language][key] || translations["en"][key] || key;
  };

  return (
    <AppContext.Provider value={{ language, setLanguage, theme, setTheme, t }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
