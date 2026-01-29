
import React from 'react';
import { 
  Instagram, 
  Mail, 
  MapPin, 
  Phone, 
  ArrowRight, 
  CheckCircle2, 
  Clock,
  Star,
  ShieldCheck,
  Heart
} from 'lucide-react';
import { CONFIG } from './config';
import { Accordion } from './components/Accordion';
import { TestimonialCarousel } from './components/TestimonialCarousel';
// @ts-ignore
const imagensGaleria = import.meta.glob('/src/assets/img/*.{png,jpg,jpeg,PNG,JPG,jpeg}', { eager: true });
const listaDeFotos = Object.values(imagensGaleria).map((mod: any) => mod.default);

// Debug: Isso vai nos mostrar no console se ele achou algo
console.log("Arquivos detectados:", Object.keys(imagensGaleria));

// LINHA DE TESTE: Adicione isso para vermos o erro no navegador
console.log("Fotos encontradas:", listaDeFotos);

const App: React.FC = () => {
  const handleWhatsApp = () => {
    const phone = "5562992491155"; 
    const message = encodeURIComponent("eu quero solicitar um bordado personalizado para mim");
    
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-charcoal bg-cream">
      {/* Hero Section */}
      <header className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-[-10%] left-[-5%] w-64 h-64 rounded-full bg-taupe/10 blur-3xl"></div>
        <div className="absolute bottom-[20%] right-[-5%] w-96 h-96 rounded-full bg-taupe/5 blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center fade-in">
          {/* Logo Placeholder / Brand Name */}
          <div className="mb-8 inline-block">
            <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tighter text-charcoal mb-2">
              {CONFIG.brandName}
            </h1>
            <div className="h-px w-24 bg-taupe mx-auto mb-4"></div>
            <p className="font-sans text-sm md:text-base uppercase tracking-[0.3em] text-taupe font-medium">
              {CONFIG.brandTagline}
            </p>
          </div>

          <div className="glass max-w-2xl mx-auto p-8 rounded-2xl shadow-sm border border-white/40">
            <h2 className="font-serif text-2xl md:text-3xl italic mb-6 leading-snug">
              Transformando fios em afeto  e exclusividade para os momentos mais sublimes.
            </h2>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={handleWhatsApp}
                className="w-full sm:w-auto bg-charcoal text-cream px-8 py-4 rounded-full flex items-center justify-center gap-3 hover:bg-taupe transition-all duration-500 group"
              >
                Solicitar Orçamento <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="https://www.instagram.com/claudia_teles_bordados/"
                className="w-full sm:w-auto border border-taupe text-taupe px-8 py-4 rounded-full hover:bg-taupe hover:text-cream transition-all duration-500"
              >
                Ver Portfólio
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="bg-charcoal text-cream py-16">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <span className="block text-4xl font-serif text-taupe">+{CONFIG.yearsOfExperience}</span>
            <span className="block text-xs uppercase tracking-widest opacity-70">Anos de Experiência</span>
          </div>
          <div className="space-y-2">
            <span className="block text-4xl font-serif text-taupe">15k+</span>
            <span className="block text-xs uppercase tracking-widest opacity-70">Peças Bordadas</span>
          </div>
          <div className="space-y-2">
            <span className="block text-4xl font-serif text-taupe">100%</span>
            <span className="block text-xs uppercase tracking-widest opacity-70">Personalizado</span>
          </div>
          <div className="space-y-2">
            <span className="block text-4xl font-serif text-taupe">2k+</span>
            <span className="block text-xs uppercase tracking-widest opacity-70">Clientes Satisfeitos</span>
          </div>
        </div>
      </section>

      {/* Main Services / Digital Showroom */}
      <section className="py-12 px-4">
  <h2 className="text-3xl font-serif text-center mb-8">Explore a Galeria</h2>
  
  {listaDeFotos.length > 0 ? (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {listaDeFotos.map((url, index) => (
        <div key={index} className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
          <img src={url} className="w-full h-72 object-cover" alt={`Bordado ${index}`} />
        </div>
      ))}
    </div>
  ) : (
    /* Se as fotos sumirem, este texto vai aparecer para te avisar */
    <p className="text-center text-red-500 font-bold">
      ERRO TÉCNICO: Nenhuma imagem detectada na pasta src/assets/img. 
      Verifique se os nomes dos arquivos estão corretos.
    </p>
  )}
</section>

      {/* Services List */}
      <section className="py-24 bg-taupe/5 border-y border-taupe/10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h3 className="font-serif text-4xl text-charcoal leading-tight">Nossa Especialidade em <br/><span className="italic text-taupe">Precisão e Arte</span></h3>
            <p className="text-charcoal/70 leading-relaxed">
              Diferente do bordado industrial em massa, cada matriz de bordado da Cláudia Teles é testada e ajustada manualmente para garantir que a tensão da linha e a densidade dos pontos sejam perfeitas para o tecido escolhido.
            </p>
            <ul className="space-y-4">
              {CONFIG.services.map((service, idx) => (
                <li key={idx} className="flex items-center gap-4 text-charcoal/80">
                  <CheckCircle2 className="text-taupe w-5 h-5 flex-shrink-0" />
                  <span className="font-medium">{service}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-taupe/10">
              <h4 className="font-serif text-2xl text-charcoal mb-6">Vantagens Exclusivas</h4>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-taupe/10 flex items-center justify-center flex-shrink-0">
                    <Star className="w-5 h-5 text-taupe" />
                  </div>
                  <div>
                    <h5 className="font-bold text-charcoal text-sm uppercase tracking-wide mb-1">Design Único</h5>
                    <p className="text-sm text-charcoal/70">Criações originais que refletem sua personalidade.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-taupe/10 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5 text-taupe" />
                  </div>
                  <div>
                    <h5 className="font-bold text-charcoal text-sm uppercase tracking-wide mb-1">Alta Durabilidade</h5>
                    <p className="text-sm text-charcoal/70">Materiais de alta qualidade que garantem beleza por anos.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-taupe/10 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-taupe" />
                  </div>
                  <div>
                    <h5 className="font-bold text-charcoal text-sm uppercase tracking-wide mb-1">Feito com Amor</h5>
                    <p className="text-sm text-charcoal/70">Acabamento artesanal com atenção a cada detalhe.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <h3 className="font-serif text-3xl text-center text-charcoal mb-12 italic">O que dizem nossas clientes</h3>
          <TestimonialCarousel testimonials={CONFIG.testimonials} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white border-t border-taupe/10">
        <div className="container mx-auto px-6 flex flex-col items-center">
          <div className="text-center mb-16">
            <h3 className="font-serif text-4xl text-charcoal mb-4">Dúvidas Frequentes</h3>
            <p className="text-taupe">Tudo o que você precisa saber sobre nosso processo criativo.</p>
          </div>
          <Accordion items={CONFIG.faq} />
        </div>
      </section>

      {/* Integration & Footer */}
      <section className="py-24 bg-cream overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h3 className="font-serif text-4xl text-charcoal mb-6">Visite Nosso Atelier</h3>
              <p className="text-charcoal/70 mb-8 max-w-md">Será um prazer recebê-la para uma consultoria personalizada. Trabalhamos com atendimento agendado para sua total exclusividade.</p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-taupe w-6 h-6 mt-1" />
                  <div>
                    <h5 className="font-bold text-sm uppercase tracking-widest mb-1">Endereço</h5>
                    <p className="text-charcoal/70">{CONFIG.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="text-taupe w-6 h-6 mt-1" />
                  <div>
                    <h5 className="font-bold text-sm uppercase tracking-widest mb-1">Horário de Atendimento</h5>
                    <p className="text-charcoal/70">Segunda a Sexta: 09h às 18h<br/>Sábados: 09h às 13h (Com agendamento)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-taupe w-6 h-6 mt-1" />
                  <div>
                    <h5 className="font-bold text-sm uppercase tracking-widest mb-1">Contato Direto</h5>
                    <p className="text-charcoal/70">{CONFIG.whatsappNumber}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a 
                href={`https://instagram.com/${CONFIG.instagramHandle.replace('@', '')}`}
                className="p-4 bg-charcoal text-cream rounded-full hover:bg-taupe transition-colors"
                title="Siga no Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href={`mailto:${CONFIG.email}`}
                className="p-4 bg-charcoal text-cream rounded-full hover:bg-taupe transition-colors"
                title="Envie um Email"
              >
                <Mail className="w-6 h-6" />
              </a>
              <button 
                onClick={handleWhatsApp}
                className="p-4 bg-charcoal text-cream rounded-full hover:bg-taupe transition-colors"
                title="Chame no WhatsApp"
              >
                <Phone className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Map Integration */}
          <div className="w-full h-[400px] lg:h-full rounded-3xl overflow-hidden shadow-xl border border-taupe/20">
            <iframe 
              src={CONFIG.googleMapsEmbedUrl}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Atelier"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Final Footer Bar */}
      <footer className="py-12 bg-charcoal text-cream text-center border-t border-white/5">
        <div className="container mx-auto px-6">
          <p className="font-serif text-xl italic mb-4">{CONFIG.brandName}</p>
          <p className="text-xs tracking-[0.3em] opacity-40 uppercase mb-8">Eternizando afetos através do bordado</p>
          <div className="h-px w-full max-w-xs bg-white/10 mx-auto mb-8"></div>
          <p className="text-[10px] opacity-30 uppercase tracking-widest">
            © {new Date().getFullYear()} {CONFIG.brandName}. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Floating CTA for Mobile */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <button 
          onClick={handleWhatsApp}
          className="bg-charcoal text-cream p-5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all animate-bounce"
          style={{ animationDuration: '3s' }}
        >
          <Phone className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default App;
