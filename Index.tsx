import { motion } from "framer-motion";
import { Play, Tv, Smartphone, Monitor, RefreshCw, DollarSign, Zap, Users, MonitorSmartphone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const AFFILIATE_LINK = "#SEU-LINK-DE-AFILIADO-AQUI";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30">
    <div className="container flex items-center justify-between h-16">
      <h1 className="text-2xl font-black tracking-tight">
        <span className="text-primary">Cine</span>
        <span className="text-foreground">Flix</span>
      </h1>
      <a href={AFFILIATE_LINK} className="btn-cta !py-2 !px-5 !text-sm rounded-md">
        Assinar agora
      </a>
    </div>
  </header>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    />
    <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
    <motion.div
      className="relative z-10 container text-center py-20"
      initial="hidden"
      animate="visible"
      variants={stagger}
    >
      <motion.h2
        variants={fadeUp}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 text-gradient"
      >
        Assista milhares de filmes e séries por um preço acessível
      </motion.h2>
      <motion.p
        variants={fadeUp}
        className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
      >
        Acesse conteúdo ilimitado direto no seu celular, TV ou computador
      </motion.p>
      <motion.a
        variants={fadeUp}
        href={AFFILIATE_LINK}
        className="btn-cta inline-flex items-center gap-3 text-xl animate-pulse-glow"
      >
        <Play className="w-5 h-5 fill-current" />
        COMEÇAR AGORA
      </motion.a>
    </motion.div>
  </section>
);

const benefits = [
  { icon: Zap, title: "Acesso Ilimitado", desc: "Assista o que quiser, quando quiser, sem limites." },
  { icon: MonitorSmartphone, title: "Qualquer Dispositivo", desc: "Funciona no celular, tablet, notebook e Smart TV." },
  { icon: RefreshCw, title: "Conteúdo Atualizado", desc: "Novos filmes e séries adicionados toda semana." },
  { icon: DollarSign, title: "Melhor Custo-Benefício", desc: "Entretenimento premium pelo menor preço do mercado." },
];

const Benefits = () => (
  <section className="py-24 relative">
    <div className="container">
      <motion.h3
        className="text-3xl sm:text-4xl font-black text-center mb-16 text-gradient"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        Por que escolher a CineFlix?
      </motion.h3>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
      >
        {benefits.map((b) => (
          <motion.div
            key={b.title}
            variants={fadeUp}
            className="glass-card p-8 text-center group hover:border-primary/40 transition-colors duration-300"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
              <b.icon className="w-7 h-7 text-primary" />
            </div>
            <h4 className="text-lg font-bold mb-2 text-foreground">{b.title}</h4>
            <p className="text-muted-foreground text-sm">{b.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

const devices = [
  { icon: Smartphone, name: "Celular" },
  { icon: Tv, name: "Smart TV" },
  { icon: Monitor, name: "Notebook" },
  { icon: Tv, name: "TV Box" },
];

const Devices = () => (
  <section className="py-24 bg-secondary/30">
    <div className="container">
      <motion.h3
        className="text-3xl sm:text-4xl font-black text-center mb-6 text-gradient"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        Assista onde quiser
      </motion.h3>
      <motion.p
        className="text-muted-foreground text-center mb-16 max-w-xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        Compatível com todos os seus dispositivos favoritos
      </motion.p>
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
      >
        {devices.map((d) => (
          <motion.div
            key={d.name}
            variants={fadeUp}
            className="flex flex-col items-center gap-4 group"
          >
            <div className="w-20 h-20 rounded-2xl bg-card border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-300">
              <d.icon className="w-9 h-9 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <span className="text-sm font-semibold text-foreground">{d.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

const SocialProof = () => (
  <section className="py-24">
    <div className="container">
      <motion.div
        className="glass-card p-12 md:p-16 text-center max-w-3xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <Users className="w-12 h-12 text-primary mx-auto mb-6" />
        <h3 className="text-3xl sm:text-4xl font-black mb-4 text-gradient">
          +10.000 usuários
        </h3>
        <p className="text-muted-foreground text-lg">
          já estão assistindo seus filmes e séries favoritos na CineFlix
        </p>
      </motion.div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
    <motion.div
      className="container relative z-10 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}
    >
      <motion.h3
        variants={fadeUp}
        className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 text-gradient"
      >
        Comece a assistir agora mesmo
      </motion.h3>
      <motion.p
        variants={fadeUp}
        className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto"
      >
        Não perca mais tempo. Acesse milhares de conteúdos com o melhor preço.
      </motion.p>
      <motion.a
        variants={fadeUp}
        href={AFFILIATE_LINK}
        className="btn-cta inline-flex items-center gap-3 text-xl animate-pulse-glow"
      >
        <Play className="w-5 h-5 fill-current" />
        ASSINAR AGORA
      </motion.a>
    </motion.div>
  </section>
);

const Footer = () => (
  <footer className="py-8 border-t border-border/30">
    <div className="container text-center">
      <p className="text-muted-foreground text-sm">
        © 2026 CineFlix - Todos os direitos reservados
      </p>
    </div>
  </footer>
);

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <Hero />
    <Benefits />
    <Devices />
    <SocialProof />
    <FinalCTA />
    <Footer />
  </div>
);

export default Index;
