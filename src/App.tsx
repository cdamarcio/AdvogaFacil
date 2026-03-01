import { useState, useEffect } from 'react';
import { 
  Scale, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight, 
  Menu, 
  X,
  Gavel,
  FileText,
  Users,
  Building2,
  Shield,
  Briefcase,
  Clock,
  Award,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const services = [
    {
      icon: <Gavel className="w-8 h-8" />,
      title: 'Direito Civil',
      description: 'Contratos, responsabilidade civil, direito das obrigações e direito de família.'
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Direito Empresarial',
      description: 'Constituição de empresas, contratos comerciais e recuperação judicial.'
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Direito Trabalhista',
      description: 'Reclamações trabalhistas, acordos e consultoria preventiva.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Direito Previdenciário',
      description: 'Aposentadorias, benefícios INSS e revisão de cálculos.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Direito de Família',
      description: 'Divórcios, guarda de filhos, pensão alimentícia e inventários.'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Direito Tributário',
      description: 'Defesa fiscal, recuperação de créditos e planejamento tributário.'
    }
  ];

  const differentials = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Atendimento 24h',
      description: 'Disponibilidade para emergências jurídicas'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Experiência',
      description: 'Anos de atuação no direito'
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: 'Compromisso',
      description: 'Dedicação total aos clientes'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl font-serif">JC</span>
              </div>
              <div className="hidden sm:block">
                <h1 className={`font-serif font-bold text-lg leading-tight transition-colors ${
                  isScrolled ? 'text-slate-900' : 'text-white'
                }`}>
                  José Carlos
                </h1>
                <p className={`text-xs transition-colors ${
                  isScrolled ? 'text-slate-600' : 'text-white/80'
                }`}>
                  Advocacia
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {[
                { label: 'Início', id: 'hero' },
                { label: 'Serviços', id: 'services' },
                { label: 'Sobre', id: 'about' },
                { label: 'Contato', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-all hover:text-amber-500 ${
                    isScrolled ? 'text-slate-700' : 'text-white/90'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-lg"
              >
                Consulta Gratuita
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-slate-900' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <nav className="flex flex-col p-4 gap-2">
              {[
                { label: 'Início', id: 'hero' },
                { label: 'Serviços', id: 'services' },
                { label: 'Sobre', id: 'about' },
                { label: 'Contato', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('contact')}
                className="mt-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white"
              >
                Consulta Gratuita
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/40"></div>
        </div>

        {/* Content */}
        <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20 pt-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 border border-amber-500/30 rounded-full mb-6 animate-fade-in">
              <Scale className="w-4 h-4 text-amber-400" />
              <span className="text-amber-300 text-sm font-medium">Escritório de Advocacia</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white leading-tight mb-6 animate-slide-up">
              Defendendo seus <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">direitos</span> com excelência
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Escritório de Advocacia José Carlos, localizado em Floresta do Araguuaia - PA. 
              Oferecemos soluções jurídicas personalizadas com compromisso e dedicação.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-6 text-lg shadow-xl shadow-amber-500/25"
              >
                <Phone className="w-5 h-5 mr-2" />
                Fale Conosco
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('services')}
                className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg"
              >
                Nossos Serviços
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* TJPA Integration Badge */}
            <div className="mt-12 inline-flex items-center gap-3 px-5 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <ExternalLink className="w-5 h-5 text-amber-400" />
              <span className="text-slate-300 text-sm">Integrado com os sistemas do</span>
              <span className="text-amber-400 font-semibold text-sm">TJPA</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-amber-400 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-32 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-4">
              Áreas de Atuação
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-4">
              Serviços Jurídicos
            </h2>
            <p className="text-slate-600 text-lg">
              Oferecemos assistência jurídica completa nas mais diversas áreas do direito, 
              sempre com foco na melhor solução para nossos clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-amber-200 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-32 bg-slate-50">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="inline-block px-4 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-4">
                Sobre Nós
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-6">
                Escritório de Advocacia <span className="text-amber-600">José Carlos</span>
              </h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Localizado em Floresta do Araguuaia - Pará, nosso escritório se destaca 
                pela excelência no atendimento e pela busca constante das melhores soluções 
                jurídicas para nossos clientes.
              </p>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Com anos de experiência e integração direta com os sistemas do Tribunal 
                de Justiça do Pará (TJPA), oferecemos um serviço ágil, transparente e 
                eficiente, acompanhando cada processo de perto.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {differentials.map((diff, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 flex-shrink-0">
                      {diff.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{diff.title}</h4>
                      <p className="text-sm text-slate-600">{diff.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&q=80" 
                  alt="Escritório de Advocacia"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-lg font-serif">JC</span>
                      </div>
                      <div>
                        <p className="font-serif font-bold text-slate-900">José Carlos</p>
                        <p className="text-sm text-slate-600">Advogado</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-slate-900/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-32 bg-slate-900">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <span className="inline-block px-4 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm font-medium mb-4">
                Entre em Contato
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
                Pronto para ajudar você
              </h2>
              <p className="text-slate-400 text-lg mb-8">
                Entre em contato conosco para uma consulta inicial gratuita. 
                Estamos prontos para ouvir seu caso e oferecer a melhor solução jurídica.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center text-amber-400">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Telefone / WhatsApp</p>
                    <p className="text-white font-semibold">(94) 98433-9662</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center text-amber-400">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">E-mail</p>
                    <p className="text-white font-semibold">contato@josecarlos.adv.br</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center text-amber-400">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Endereço</p>
                    <p className="text-white font-semibold">Floresta do Araguuaia - PA</p>
                  </div>
                </div>
              </div>

              {/* TJPA Badge */}
              <div className="mt-8 p-4 bg-white/5 border border-white/10 rounded-xl">
                <div className="flex items-center gap-3">
                  <ExternalLink className="w-5 h-5 text-amber-400" />
                  <span className="text-slate-300 text-sm">Integração com sistemas do</span>
                  <span className="text-amber-400 font-semibold text-sm">TJPA</span>
                </div>
                <p className="text-slate-500 text-xs mt-2">
                  Acompanhamento processual em tempo real através dos sistemas do Tribunal de Justiça do Pará.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 lg:p-10">
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">
                Solicite uma Consulta
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Nome</label>
                    <input 
                      type="text"
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Telefone</label>
                    <input 
                      type="tel"
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                      placeholder="(94) 00000-0000"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">E-mail</label>
                  <input 
                    type="email"
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Área de Interesse</label>
                  <select className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all">
                    <option value="">Selecione uma área</option>
                    <option value="civil">Direito Civil</option>
                    <option value="empresarial">Direito Empresarial</option>
                    <option value="trabalhista">Direito Trabalhista</option>
                    <option value="previdenciario">Direito Previdenciário</option>
                    <option value="familia">Direito de Família</option>
                    <option value="tributario">Direito Tributário</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Mensagem</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Descreva brevemente seu caso..."
                  ></textarea>
                </div>
                <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white py-6 text-lg shadow-lg">
                  Enviar Solicitação
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg font-serif">JC</span>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-white">José Carlos</h3>
                  <p className="text-xs text-slate-400">Advocacia</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm">
                Escritório de Advocacia localizado em Floresta do Araguuaia - PA, 
                oferecendo serviços jurídicos de excelência.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                {[
                  { label: 'Início', id: 'hero' },
                  { label: 'Serviços', id: 'services' },
                  { label: 'Sobre', id: 'about' },
                  { label: 'Contato', id: 'contact' }
                ].map((item) => (
                  <li key={item.id}>
                    <button 
                      onClick={() => scrollToSection(item.id)}
                      className="text-slate-400 hover:text-amber-400 text-sm transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Contato</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-500" />
                  (94) 98433-9662
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-amber-500" />
                  contato@josecarlos.adv.br
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-500" />
                  Floresta do Araguuaia - PA
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-500 text-sm text-center md:text-left">
                © {new Date().getFullYear()} Escritório de Advocacia José Carlos. Todos os direitos reservados.
              </p>
              <p className="text-slate-500 text-sm">
                Desenvolvido por: <span className="text-amber-500 font-semibold">RAZGO Software</span>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5594984339662"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25"></div>
          <div className="relative w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-xl shadow-green-500/30 hover:scale-110 transition-transform">
            <Phone className="w-8 h-8 text-white" />
          </div>
          <div className="absolute -top-10 right-0 bg-white px-3 py-1 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            <span className="text-sm font-medium text-slate-700">(94) 98433-9662</span>
          </div>
        </div>
      </a>
    </div>
  );
}

export default App;
