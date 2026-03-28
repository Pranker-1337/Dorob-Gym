import React, { useState, useEffect, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Dumbbell, 
  Waves, 
  Clock, 
  MapPin, 
  Phone, 
  Star, 
  ChevronRight, 
  Menu, 
  X, 
  Award, 
  Zap, 
  ShieldCheck,
  Instagram,
  Facebook,
  Twitter,
  Globe
} from 'lucide-react';
import { cn } from './lib/utils';
import { translations, Language } from './translations';

// --- Context ---

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof translations.ENG;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useTranslation must be used within LanguageProvider');
  return context;
};

// --- Components ---

const LanguageSwitcher = () => {
  const { lang, setLang } = useTranslation();
  const languages: Language[] = ['TJ', 'RU', 'ENG'];

  return (
    <div className="flex items-center bg-white/5 p-1 rounded-full border border-white/10">
      {languages.map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={cn(
            "px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-300",
            lang === l 
              ? "bg-amber-500 text-black shadow-lg shadow-amber-500/20" 
              : "text-white/40 hover:text-white"
          )}
        >
          {l}
        </button>
      ))}
    </div>
  );
};

const Navbar = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.membership, href: '#membership' },
    { name: t.nav.reviews, href: '#reviews' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-black/90 backdrop-blur-md border-b border-white/10" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Dumbbell className="text-amber-500 w-8 h-8" />
          <span className="text-2xl font-bold tracking-tighter text-white uppercase">
            Dorob <span className="text-amber-500 italic">Gym</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-white/70 hover:text-amber-500 transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <LanguageSwitcher />
          <button className="bg-amber-500 text-black px-6 py-2 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-amber-400 transition-colors">
            {t.nav.join}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <LanguageSwitcher />
          <button className="text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium text-white/70 hover:text-amber-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-amber-500 text-black px-6 py-3 rounded-full font-bold text-sm uppercase tracking-widest">
              {t.nav.join}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/gym-luxury/1920/1080" 
          alt="Luxury Gym" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-amber-500 font-mono text-sm uppercase tracking-[0.3em] mb-4 block">
            {t.hero.subtitle}
          </span>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tighter leading-none uppercase">
            {t.hero.title} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-200 italic">
              {t.hero.titleAccent}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            {t.hero.desc}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-amber-500 text-black px-10 py-4 rounded-full font-bold text-lg uppercase tracking-widest hover:bg-amber-400 transition-all transform hover:scale-105">
              {t.hero.ctaPrimary}
            </button>
            <button className="w-full sm:w-auto border border-white/20 text-white px-10 py-4 rounded-full font-bold text-lg uppercase tracking-widest hover:bg-white/10 transition-all">
              {t.hero.ctaSecondary}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Floating Stats */}
      <div className="absolute bottom-10 left-0 w-full px-6 hidden lg:block">
        <div className="max-w-7xl mx-auto flex justify-between border-t border-white/10 pt-8">
          {[
            { label: t.hero.stats.rating, value: '4.2/5', icon: Star },
            { label: t.hero.stats.hours, value: '06:00 - 23:00', icon: Clock },
            { label: t.hero.stats.location, value: 'S. Ayni 48', icon: MapPin },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-4">
              <stat.icon className="text-amber-500 w-6 h-6" />
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest">{stat.label}</p>
                <p className="text-white font-medium">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-24 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden border border-white/10">
              <img 
                src="https://picsum.photos/seed/gym-interior/800/800" 
                alt="Dorob Gym Interior" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-amber-500 p-8 rounded-2xl hidden md:block">
              <p className="text-black font-bold text-4xl mb-1">10+</p>
              <p className="text-black/70 text-xs uppercase font-bold tracking-widest">{t.about.years}</p>
            </div>
          </div>
          <div>
            <span className="text-amber-500 font-mono text-sm uppercase tracking-[0.3em] mb-4 block">
              {t.about.subtitle}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6">
              {t.about.title} <span className="text-amber-500 italic">{t.about.titleAccent}</span>
            </h2>
            <div className="space-y-6 text-white/60 text-lg leading-relaxed">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-10">
              <div>
                <p className="text-3xl font-bold text-white mb-1">500+</p>
                <p className="text-white/40 text-xs uppercase tracking-widest">{t.about.members}</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white mb-1">20+</p>
                <p className="text-white/40 text-xs uppercase tracking-widest">{t.about.trainers}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const { t } = useTranslation();
  const serviceIcons = [Dumbbell, Waves, Award, ShieldCheck];
  const serviceImages = [
    'https://picsum.photos/seed/gym-equip/600/800',
    'https://picsum.photos/seed/pool-luxury/600/800',
    'https://picsum.photos/seed/trainer/600/800',
    'https://picsum.photos/seed/spa-luxury/600/800'
  ];

  return (
    <section id="services" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">
              {t.services.title} <span className="text-amber-500 italic">{t.services.titleAccent}</span>
            </h2>
            <p className="text-white/50 text-lg">
              {t.services.desc}
            </p>
          </div>
          <button className="text-amber-500 flex items-center gap-2 font-bold uppercase tracking-widest hover:gap-4 transition-all">
            {t.services.viewAll} <ChevronRight />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.services.items.map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group relative h-[500px] overflow-hidden rounded-2xl bg-zinc-900"
            >
              <img 
                src={serviceImages[i]} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                {React.createElement(serviceIcons[i], { className: "text-amber-500 w-10 h-10 mb-4" })}
                <h3 className="text-2xl font-bold uppercase mb-2">{service.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Membership = () => {
  const { t } = useTranslation();

  return (
    <section id="membership" className="py-24 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">
            {t.membership.title} <span className="text-amber-500 italic">{t.membership.titleAccent}</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            {t.membership.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.membership.tiers.map((tier, i) => (
            <div 
              key={i} 
              className={cn(
                "relative p-10 rounded-3xl border transition-all hover:border-amber-500/50",
                i === 1 ? "border-amber-500/50 bg-amber-500/5" : "border-zinc-800"
              )}
            >
              {i === 1 && (
                <span className="absolute top-0 right-10 -translate-y-1/2 bg-amber-500 text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  {t.membership.popular}
                </span>
              )}
              <h3 className="text-xl font-bold uppercase tracking-widest mb-2">{tier.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-bold text-amber-500">{tier.price}</span>
                <span className="text-white/40 uppercase text-sm">{t.membership.currency}</span>
              </div>
              <ul className="space-y-4 mb-10">
                {tier.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-white/70">
                    <Zap className="w-4 h-4 text-amber-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={cn(
                "w-full py-4 rounded-full font-bold uppercase tracking-widest transition-all",
                i === 1 ? "bg-amber-500 text-black hover:bg-amber-400" : "bg-white/5 text-white hover:bg-white/10"
              )}>
                {t.membership.select}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const { t } = useTranslation();
  return (
    <section id="reviews" className="py-24 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">
            {t.reviews.title} <span className="text-amber-500 italic">{t.reviews.titleAccent}</span>
          </h2>
          <div className="flex items-center gap-2 bg-zinc-900 px-6 py-3 rounded-full border border-white/5">
            <Star className="text-amber-500 fill-amber-500" />
            <span className="text-2xl font-bold">4.2</span>
            <span className="text-white/40">/ 5.0 {t.reviews.rating}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.reviews.items.map((review, i) => (
            <div key={i} className="bg-zinc-900/50 p-8 rounded-3xl border border-white/5 hover:border-amber-500/20 transition-all">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className={cn("w-4 h-4", j < (review.rating || 5) ? "text-amber-500 fill-amber-500" : "text-white/10")} />
                ))}
              </div>
              <p className="text-lg italic text-white/80 mb-6 leading-relaxed">"{review.text}"</p>
              <div className="flex justify-between items-center border-t border-white/5 pt-6">
                <div>
                  <p className="font-bold uppercase tracking-widest text-sm">{review.name}</p>
                  <p className="text-white/40 text-xs">{review.date}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 font-bold">
                  {review.name[0]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const { t } = useTranslation();
  return (
    <section className="py-24 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-8">
              {t.contact.title} <span className="text-amber-500 italic">{t.contact.titleAccent}</span>
            </h2>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-amber-500" />
                </div>
                <div>
                  <p className="text-white/40 uppercase tracking-widest text-xs mb-1">{t.contact.address}</p>
                  <p className="text-xl font-medium">Душанбе, ул. Садриддина Айни, 48</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center shrink-0">
                  <Phone className="text-amber-500" />
                </div>
                <div>
                  <p className="text-white/40 uppercase tracking-widest text-xs mb-1">{t.contact.phone}</p>
                  <p className="text-xl font-medium">+992 446 60 55 55</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center shrink-0">
                  <Clock className="text-amber-500" />
                </div>
                <div>
                  <p className="text-white/40 uppercase tracking-widest text-xs mb-1">{t.contact.hours}</p>
                  <p className="text-xl font-medium">{t.contact.monSat}</p>
                  <p className="text-white/40 text-sm italic">{t.contact.sun}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] rounded-3xl overflow-hidden border border-white/10">
            {/* Placeholder for Map */}
            <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                <p className="text-white font-bold uppercase tracking-widest">{t.contact.map}</p>
                <p className="text-white/40 text-sm">Sadriddin Ayni St, 48, Dushanbe</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Dumbbell className="text-amber-500 w-8 h-8" />
              <span className="text-2xl font-bold tracking-tighter uppercase">
                Dorob <span className="text-amber-500 italic">Gym</span>
              </span>
            </div>
            <p className="text-white/40 max-w-sm leading-relaxed mb-8">
              {t.footer.desc}
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6">{t.footer.links}</h4>
            <ul className="space-y-4 text-white/40 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition-colors">{t.nav.about}</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">{t.nav.services}</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">{t.nav.membership}</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">{t.nav.reviews}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6">{t.footer.newsletter}</h4>
            <p className="text-white/40 text-sm mb-4">{t.footer.newsDesc}</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-zinc-900 border border-white/5 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-amber-500 w-full"
              />
              <button className="bg-amber-500 text-black p-2 rounded-full hover:bg-amber-400 transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/20 text-xs uppercase tracking-[0.2em]">
          <p>© 2026 Dorob Gym Созидание. {t.footer.rights}</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a>
            <a href="#" className="hover:text-white transition-colors">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [lang, setLang] = useState<Language>('RU');

  const value = {
    lang,
    setLang,
    t: translations[lang]
  };

  return (
    <LanguageContext.Provider value={value}>
      <div className="min-h-screen bg-black font-sans selection:bg-amber-500 selection:text-black">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Membership />
          <Reviews />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
}
