"use client";

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Menu, X, Code, Palette, Database, Smartphone, ChevronRight, Monitor, Zap, Users, Target, MessageCircle, Bot, Globe } from 'lucide-react';

export default function LettreNumerique() {
  const [activeSection, setActiveSection] = useState('accueil');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // État pour le formulaire
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const navItems = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'apropos', label: 'À propos' },
    { id: 'services', label: 'Services' },
    { id: 'realisations', label: 'Réalisations' },
    { id: 'equipe', label: 'Notre Équipe' },
    { id: 'contact', label: 'Contact' }
  ];

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      titre: "Développement Web",
      description: "Création de sites web et applications web performantes et sur mesure",
      features: ["Sites vitrine modernes", "Applications web complexes", "E-commerce", "CMS personnalisés"],
      color: "#4CAF50"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      titre: "Développement Mobile",
      description: "Applications mobiles natives et cross-platform pour iOS et Android",
      features: ["Apps Flutter", "Applications natives", "PWA", "Maintenance et support"],
      color: "#FFA726"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      titre: "Automatisme IA",
      description: "Solutions d'intelligence artificielle pour automatiser vos processus",
      features: ["Chatbots intelligents", "Automatisation de tâches", "Analyse prédictive", "Machine Learning"],
      color: "#4CAF50"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      titre: "Communication Digitale",
      description: "Stratégies digitales pour booster votre présence en ligne",
      features: ["Gestion réseaux sociaux", "Content marketing", "SEO/SEA", "Community management"],
      color: "#FFA726"
    }
  ];

  const realisations = [
    {
      titre: "Plateforme E-learning",
      description: "Plateforme complète de formation en ligne avec système de paiement intégré",
      technologies: ["Next.js", "Supabase", "Stripe"],
      image: "/images/project1.jpg",
      categorie: "Web",
      color: "#4CAF50"
    },
    {
      titre: "Application Delivery",
      description: "Application mobile de livraison avec tracking en temps réel",
      technologies: ["Flutter", "Firebase", "Google Maps"],
      image: "/images/project2.jpg",
      categorie: "Mobile",
      color: "#FFA726"
    },
    {
      titre: "Chatbot Service Client",
      description: "Assistant virtuel intelligent pour automatiser le support client",
      technologies: ["Python", "TensorFlow", "NLP"],
      image: "/images/project3.jpg",
      categorie: "IA",
      color: "#4CAF50"
    },
    {
      titre: "Campagne Social Media",
      description: "Stratégie digitale complète ayant généré +200% d'engagement",
      technologies: ["Instagram", "Facebook", "LinkedIn"],
      image: "/images/project4.jpg",
      categorie: "Communication",
      color: "#FFA726"
    }
  ];

  const equipe = [
    {
      nom: "Christian Kouassi",
      role: "CEO & Founder",
      photo: "/images/team1.jpg",
      linkedin: "#",
      color: "#4CAF50"
    },
    {
      nom: "Desire Yeo",
      role: "CTO",
      photo: "/images/profil.png",
      linkedin: "#",
      color: "#FFA726"
    },
    {
      nom: "Ibrahima Coulibaly",
      role: "Charger rélations clients",
      photo: "/images/team3.jpg",
      linkedin: "#",
      color: "#4CAF50"
    },
    {
      nom: "Franck Kouassi",
      role: "Marketing Director",
      photo: "/images/team4.jpg",
      linkedin: "#",
      color: "#FFA726"
    }
  ];

  const contactInfo = {
    email: "contact@lettrenumerique.com",
    facebook: "https://facebook.com/lettrenumerique",
    linkedin: "https://linkedin.com/company/lettrenumerique"
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    setTimeout(() => {
      setFormStatus({ 
        type: 'success', 
        message: 'Message envoyé avec succès ! Nous vous répondrons bientôt.' 
      });
      setFormData({ name: '', email: '', service: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          style={{
            background: '#4CAF50',
            top: `${mousePosition.y / 10}px`,
            left: `${mousePosition.x / 10}px`,
          }}
        />
        <div className="absolute w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 top-0 right-0" style={{background: '#4CAF50'}} />
        <div className="absolute w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 bottom-0 left-0" style={{background: '#FFA726'}} />
      </div>

      {/* Navigation simplifiée avec trait coloré */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/95 border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <img 
                src="/images/logo.png" 
                alt="Lettre Numérique Logo" 
                className="w-12 h-12 rounded-lg object-cover shadow-md"
              />
            </div>

            {/* Desktop Menu - Trait en bas */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.id;
                const colors = ['#4CAF50', '#FFA726'];
                const color = colors[index % colors.length];
                
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium ${
                      isActive 
                        ? 'text-gray-900' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <div 
                        className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full shadow-sm"
                        style={{backgroundColor: color}}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-xl backdrop-blur-sm hover:bg-gray-100/50 transition-all"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden backdrop-blur-2xl bg-white/95 border-t border-gray-200/50 shadow-2xl">
            {navItems.map((item, index) => {
              const colors = ['#4CAF50', '#FFA726'];
              const color = colors[index % colors.length];
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-6 py-4 hover:bg-gray-50/50 transition-all border-l-4 border-transparent hover:border-green-500 text-gray-700 hover:text-gray-900 font-medium relative"
                >
                  {item.label}
                  <div 
                    className="absolute right-6 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full"
                    style={{backgroundColor: color}}
                  />
                </button>
              );
            })}
          </div>
        )}
      </nav>

      {/* Hero Section - Bouton couleur unique */}
      <section id="accueil" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-6xl w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="mt-25 space-y-8 text-center lg:text-left">
              <div className="inline-block px-6 py-3 rounded-full border-2 border-green-200/50 backdrop-blur-sm bg-green-50/80 shadow-lg">
                <span className="text-green-600 text-sm font-semibold" style={{fontFamily: 'monospace'}}>🚀 Innovation Digitale</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{fontFamily: 'monospace'}}>
                Transformez vos
                <span className="block mt-2" style={{
                  background: 'linear-gradient(135deg, #4CAF50 0%, #FFA726 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  idées digitales
                </span>
                en réalité
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Startup tech spécialisée en développement web, mobile, automatisme IA et communication digitale.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 rounded-2xl font-semibold text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border border-green-200/30"
                  style={{backgroundColor: '#4CAF50'}}
                >
                  Démarrer un projet
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 backdrop-blur-xl bg-white/70 rounded-3xl p-8 border border-gray-200/50 shadow-2xl">
                <div className="space-y-4">
                  <div className="h-4 rounded bg-green-400 w-3/4 shadow-sm"></div>
                  <div className="h-4 rounded bg-gray-200/50 w-full shadow-sm"></div>
                  <div className="h-4 rounded bg-gray-200/50 w-5/6 shadow-sm"></div>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="h-32 rounded-2xl bg-green-50/50 border-2 border-green-200/50 flex items-center justify-center shadow-lg hover:shadow-xl transition-all">
                      <Code className="w-12 h-12 text-green-600" />
                    </div>
                    <div className="h-32 rounded-2xl bg-orange-50/50 border-2 border-orange-200/50 flex items-center justify-center shadow-lg hover:shadow-xl transition-all">
                      <Smartphone className="w-12 h-12 text-orange-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* À propos - Couleurs uniques */}
      <section id="apropos" className="min-h-screen flex items-center justify-center px-4 py-16 bg-gray-50/50">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 rounded-full border-2 mb-4 backdrop-blur-sm shadow-lg" style={{borderColor: '#4CAF50', backgroundColor: 'rgba(76, 175, 80, 0.08)'}}>
              <span style={{color: '#4CAF50'}} className="text-sm font-semibold">À PROPOS</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{fontFamily: 'monospace'}}>
              Qui sommes-nous ?
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="backdrop-blur-xl bg-white/70 rounded-3xl p-8 border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg" style={{backgroundColor: '#4CAF50'}}>
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">Notre Mission</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Démocratiser l'accès aux technologies digitales en Afrique en créant des solutions innovantes, accessibles et adaptées aux besoins locaux.
                    </p>

                  </div>
                </div>
              </div>

              <div className="backdrop-blur-xl bg-white/70 rounded-3xl p-8 border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg" style={{backgroundColor: '#FFA726'}}>
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">Notre Vision</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Devenir le leader africain des solutions digitales innovantes et accompagner la transformation numérique des entreprises du continent.
                    </p>                  </div>
                </div>
              </div>
            </div>

           {/* Valeurs */}
           <div className="backdrop-blur-xl bg-white/70 rounded-3xl p-8 border border-gray-200/50 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Nos Valeurs</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full mt-2 shadow-sm flex-shrink-0" style={{background: '#4CAF50'}}></div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-gray-900">Innovation</h4>
                    <p className="text-gray-600 text-sm">Nous repoussons constamment les limites du possible avec les dernières technologies</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full mt-2 shadow-sm flex-shrink-0" style={{background: '#FFA726'}}></div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-gray-900">Excellence</h4>
                    <p className="text-gray-600 text-sm">Qualité irréprochable dans chaque ligne de code et chaque pixel de design</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full mt-2 shadow-sm flex-shrink-0" style={{background: '#4CAF50'}}></div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-gray-900">Collaboration</h4>
                    <p className="text-gray-600 text-sm">Partenariats solides avec nos clients pour des résultats exceptionnels</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full mt-2 shadow-sm flex-shrink-0" style={{background: '#FFA726'}}></div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-gray-900">Impact</h4>
                    <p className="text-gray-600 text-sm">Créer des solutions qui transforment réellement les entreprises et la société</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Couleurs uniques par service */}
      <section id="services" className="min-h-screen flex items-center justify-center px-4 py-16">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 rounded-full border-2 mb-4 backdrop-blur-sm shadow-lg" style={{borderColor: '#FFA726', backgroundColor: 'rgba(255, 167, 38, 0.08)'}}>
              <span style={{color: '#FFA726'}} className="text-sm font-semibold">NOS SERVICES</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{fontFamily: 'monospace'}}>
              Ce que nous faisons
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="backdrop-blur-xl bg-white/70 rounded-3xl p-8 border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl transition-all duration-300 group-hover:scale-110" style={{backgroundColor: service.color}}>
                    {React.cloneElement(service.icon as React.ReactElement, { style: { color: 'white' } })}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">{service.titre}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-gray-700 group-hover:text-gray-900 transition-colors">
                      <ChevronRight className="w-5 h-5 flex-shrink-0" style={{color: service.color}} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Réalisations - Couleurs uniques */}
      <section id="realisations" className="min-h-screen flex items-center justify-center px-4 py-16 bg-gray-50/50">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 rounded-full border-2 mb-4 backdrop-blur-sm shadow-lg" style={{borderColor: '#4CAF50', backgroundColor: 'rgba(76, 175, 80, 0.08)'}}>
              <span style={{color: '#4CAF50'}} className="text-sm font-semibold">PORTFOLIO</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{fontFamily: 'monospace'}}>
              Nos Réalisations
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {realisations.map((projet, i) => (
              <div
                key={i}
                className="backdrop-blur-xl bg-white/70 rounded-3xl border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden group"
              >
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden shadow-inner">
                  <img 
                    src={projet.image} 
                    alt={projet.titre}
                    className="w-full h-full object-cover shadow-lg"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden absolute inset-0 flex items-center justify-center text-6xl opacity-20 bg-white/70">🚀</div>
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold shadow-md text-white" style={{backgroundColor: projet.color}}>
                    {projet.categorie}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{projet.titre}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{projet.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {projet.technologies.map((tech, j) => (
                      <span key={j} className="px-3 py-1 rounded-full bg-gray-100/50 backdrop-blur-sm text-gray-700 text-xs shadow-sm border border-gray-200/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe - Couleurs uniques */}
      <section id="equipe" className="min-h-screen flex items-center justify-center px-4 py-16">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 rounded-full border-2 mb-4 backdrop-blur-sm shadow-lg" style={{borderColor: '#FFA726', backgroundColor: 'rgba(255, 167, 38, 0.08)'}}>
              <span style={{color: '#FFA726'}} className="text-sm font-semibold">L'ÉQUIPE</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{fontFamily: 'monospace'}}>
              Notre Équipe
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipe.map((membre, i) => (
              <div
                key={i}
                className="backdrop-blur-xl bg-white/70 rounded-3xl p-6 border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center group"
              >
                <div className="relative w-32 h-32 mx-auto mb-4 shadow-2xl group-hover:shadow-3xl transition-all">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 group-hover:border-green-500 transition-all duration-300 shadow-2xl" style={{borderColor: membre.color}}>
                    <img 
                      src={membre.photo} 
                      alt={membre.nom}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <div className="hidden w-full h-full flex items-center justify-center text-5xl backdrop-blur-sm" style={{backgroundColor: membre.color}}>
                      👤
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-1 text-gray-900">{membre.nom}</h3>
                <p className="text-gray-600 text-sm mb-4">{membre.role}</p>
                
                <a
                  href={membre.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gray-100/50 backdrop-blur-sm hover:shadow-xl hover:scale-110 transition-all duration-300 mx-auto border-2 border-transparent hover:border-green-300"
                  style={{color: membre.color}}
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact - Couleurs uniques */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-16 bg-gray-50/50">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-3 rounded-full border-2 mb-4 backdrop-blur-sm shadow-lg" style={{borderColor: '#4CAF50', backgroundColor: 'rgba(76, 175, 80, 0.08)'}}>
              <span style={{color: '#4CAF50'}} className="text-sm font-semibold">CONTACT</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{fontFamily: 'monospace'}}>
              Discutons de votre projet
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="backdrop-blur-xl bg-white/70 rounded-3xl p-8 border border-gray-200/50 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Contactez-nous</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50/50 hover:bg-gray-100/50 transition-all shadow-sm hover:shadow-md">
                    <div className="p-3 rounded-xl shadow-lg flex-shrink-0" style={{backgroundColor: '#4CAF50'}}>
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Localisation</p>
                      <p className="text-gray-900 font-semibold">Abidjan, Côte d'Ivoire</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50/50 hover:bg-gray-100/50 transition-all shadow-sm hover:shadow-md">
                    <div className="p-3 rounded-xl shadow-lg flex-shrink-0" style={{backgroundColor: '#FFA726'}}>
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Email</p>
                      <a href={`mailto:${contactInfo.email}`} className="text-gray-900 hover:text-green-600 font-semibold hover:underline" style={{color: '#4CAF50'}}>
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50/50 hover:bg-gray-100/50 transition-all shadow-sm hover:shadow-md">
                    <div className="p-3 rounded-xl shadow-lg flex-shrink-0" style={{backgroundColor: '#4CAF50'}}>
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Facebook</p>
                      <a href={contactInfo.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-green-600 font-semibold hover:underline" style={{color: '#FFA726'}}>
                        Lettre Numérique
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50/50 hover:bg-gray-100/50 transition-all shadow-sm hover:shadow-md">
                    <div className="p-3 rounded-xl shadow-lg flex-shrink-0" style={{backgroundColor: '#FFA726'}}>
                      <Linkedin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">LinkedIn</p>
                      <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-green-600 font-semibold hover:underline" style={{color: '#4CAF50'}}>
                        Lettre Numérique
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-white/70 rounded-3xl p-8 border border-gray-200/50 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Envoyez-nous un message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                {formStatus.message && (
                  <div className={`p-4 rounded-2xl border-2 backdrop-blur-sm shadow-lg ${
                    formStatus.type === 'success' 
                      ? 'bg-green-50/80 border-green-200/50 text-green-800' 
                      : 'bg-red-50/80 border-red-200/50 text-red-800'
                  }`}>
                    {formStatus.message}
                  </div>
                )}

                <div>
                  <label className="block text-sm text-gray-700 mb-2 font-medium">Nom complet</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Votre nom"
                    className="w-full px-4 py-3 rounded-2xl backdrop-blur-sm bg-white/60 border-2 border-gray-200/50 focus:border-green-400 outline-none transition-all shadow-sm text-gray-900 placeholder-gray-500 hover:border-gray-300"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="votre@email.com"
                    className="w-full px-4 py-3 rounded-2xl backdrop-blur-sm bg-white/60 border-2 border-gray-200/50 focus:border-green-400 outline-none transition-all shadow-sm text-gray-900 placeholder-gray-500 hover:border-gray-300"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2 font-medium">Service</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-2xl backdrop-blur-sm bg-white/60 border-2 border-gray-200/50 focus:border-green-400 outline-none transition-all shadow-sm text-gray-900 hover:border-gray-300"
                  >
                    <option value="">Sélectionnez un service</option>
                    <option value="web">Développement Web</option>
                    <option value="mobile">Développement Mobile</option>
                    <option value="ia">Automatisme IA</option>
                    <option value="communication">Communication Digitale</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2 font-medium">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Parlez-nous de votre projet..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-2xl backdrop-blur-sm bg-white/60 border-2 border-gray-200/50 focus:border-green-400 outline-none transition-all resize-none shadow-sm text-gray-900 placeholder-gray-500 hover:border-gray-300"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 rounded-2xl text-white font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 backdrop-blur-sm"
                  style={{backgroundColor: '#4CAF50'}}
                >
                  <Mail className="w-5 h-5" />
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="backdrop-blur-xl bg-white/80 border-t border-gray-200/50 py-12 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="border-t border-gray-200/30 pt-8 text-gray-500 text-sm">
            <p>&copy; 2026 Lettre Numérique. Tous droits réservés.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
      `}</style>
    </div>
  );
}
