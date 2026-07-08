import { useEffect, useMemo, useRef, useState } from "react";
import logoGrey from "../logo-grey.svg";
import logoWhite from "../logo-white.svg";
import {
  ArrowRight,
  Bank,
  Broadcast,
  Briefcase,
  Buildings,
  Code,
  Cpu,
  Flask,
  GearSix,
  GraduationCap,
  Handshake,
  Heartbeat,
  InstagramLogo,
  Leaf,
  LinkedinLogo,
  List,
  MagnifyingGlass,
  Money,
  PaperPlaneTilt,
  RocketLaunch,
  Sun,
  Target,
  UsersThree,
  X,
} from "@phosphor-icons/react";

const pathways = [
  { icon: RocketLaunch, title: "Quero empreender", text: "Tenho apoio para criar e escalar sua startup." },
  { icon: UsersThree, title: "Quero fazer parte", text: "Conecte-se ao ecossistema e participe." },
  { icon: Briefcase, title: "Vagas e trabalho", text: "Encontre oportunidades no Tecnosinos." },
  { icon: Flask, title: "Inovação aberta", text: "Busque parceiros para inovar com propósito." },
];

const partnerLogos = ["EMPRESA 01", "EMPRESA 02", "EMPRESA 03", "EMPRESA 04", "EMPRESA 05", "EMPRESA 06", "EMPRESA 07"];

const ecosystem = [
  { icon: Code, title: "Tecnologia da informação" },
  { icon: Cpu, title: "Semicondutores" },
  { icon: GearSix, title: "Automação e engenharias" },
  { icon: Broadcast, title: "Comunicação e convergência digital" },
  { icon: Heartbeat, title: "Tecnologias para a saúde" },
  { icon: Sun, title: "Energias renováveis" },
  { icon: Leaf, title: "Tecnologias socioambientais" },
];

const events = [
  { day: "18", month: "JUL", type: "CONEXÕES", title: "Conexões: ideias que viram parceria", meta: "Unitec • 18h30" },
  { day: "25", month: "JUL", type: "WORKSHOP", title: "Projetos de inovação aberta: da estratégia à prática", meta: "Auditório • 14h" },
  { day: "07", month: "AGO", type: "DEMO DAY", title: "Demo Day Unitec", meta: "Unitec • 17h" },
  { day: "21", month: "AGO", type: "INTERNACIONALIZAÇÃO", title: "Encontro Softlanding & Take Off", meta: "Online • 19h" },
];

const jobs = [
  { title: "Desenvolvedor(a) full stack sênior", company: "Tridel", mode: "HÍBRIDO", area: "tecnologia" },
  { title: "Engenheiro(a) de automação", company: "Altus", mode: "PRESENCIAL", area: "engenharia" },
  { title: "Especialista em cibersegurança", company: "Empresa residente", mode: "REMOTO", area: "tecnologia" },
  { title: "Product designer", company: "Empresa residente", mode: "HÍBRIDO", area: "design" },
];

const publications = [
  { image: "/assets/campus-community.png", label: "INOVAÇÃO", title: "Parceria internacional leva IA aplicada à saúde digital", featured: true },
  { image: "/assets/workshop.png", label: "ECOSSISTEMA", title: "Novas empresas reforçam o hub de automação" },
  { image: "/assets/coworking.png", label: "TALENTOS", title: "Carreiras em tecnologia: onde começar" },
  { image: "/assets/workshop.png", label: "PESQUISA", title: "Pesquisadores desenvolvem biofármaco" },
  { image: "/assets/campus-community.png", label: "EVENTOS", title: "Semana da Tecnologia reúne mais de 2 mil participantes" },
];

const ecosystemNumbers = [
  { icon: Buildings, value: 110, prefix: "+", label: "empresas residentes" },
  { icon: UsersThree, value: 6000, prefix: "+", label: "talentos e profissionais" },
  { icon: Briefcase, value: 10000, prefix: "+", label: "empregos" },
  { icon: Money, value: 1, prefix: "R$ ", suffix: " bi", precision: 1, label: "movimentados" },
  { icon: Flask, value: 10, label: "áreas tecnológicas" },
  { icon: Target, value: 25, suffix: "+", label: "anos de impacto global" },
];

const numberFormatter = new Intl.NumberFormat("pt-BR", { maximumFractionDigits: 1 });

function AnimatedNumber({ value, prefix = "", suffix = "", precision = 0 }) {
  const numberRef = useRef(null);
  const animationFrameRef = useRef(null);
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      setCurrentValue(value);
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;

      const duration = 1400;
      let startedAt;

      const animate = (timestamp) => {
        if (!startedAt) startedAt = timestamp;
        const progress = Math.min((timestamp - startedAt) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const nextValue = value * easedProgress;
        const steppedValue = precision
          ? Math.floor(nextValue * 10) / 10
          : Math.round(nextValue);

        setCurrentValue(progress === 1 ? value : steppedValue);

        if (progress < 1) animationFrameRef.current = requestAnimationFrame(animate);
      };

      animationFrameRef.current = requestAnimationFrame(animate);
      observer.disconnect();
    }, { threshold: 0.45 });

    observer.observe(numberRef.current);

    return () => {
      observer.disconnect();
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [precision, value]);

  const formattedValue = numberFormatter.format(currentValue);
  const accessibleValue = `${prefix}${numberFormatter.format(value)}${suffix}`;

  return (
    <strong ref={numberRef} aria-label={accessibleValue}>
      <span aria-hidden="true">{prefix}{formattedValue}{suffix}</span>
    </strong>
  );
}

function Brand({ inverse = false }) {
  return (
    <a className={`brand ${inverse ? "brand--inverse" : ""}`} href="#top" aria-label="Tecnosinos — página inicial">
      <img className="brand__logo" src={inverse ? logoWhite : logoGrey} alt="Tecnosinos — Parque Tecnológico São Leopoldo" />
    </a>
  );
}

function SectionTitle({ eyebrow, children, description }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{children}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

const governanceForces = [
  { icon: Bank, position: "public", title: "Poder público", text: "Prefeitura de São Leopoldo" },
  { icon: UsersThree, position: "companies", title: "Empresas", text: "ACIS-SL + Polo de Informática" },
  { icon: GraduationCap, position: "academia", title: "Academia", text: "Universidades" },
];

function TripleHelixConnections() {
  const routes = [
    { path: "M365 210 C315 264 284 354 275 430", duration: "4.8s", begin: "0s" },
    { path: "M535 210 C585 264 616 354 625 430", duration: "4.8s", begin: "1.6s" },
    { path: "M320 520 C404 574 496 574 580 520", duration: "4.8s", begin: "3.2s" },
  ];

  return (
    <svg className="helix-connections" viewBox="0 0 900 780" aria-hidden="true">
      <defs>
        <marker id="helix-arrow" viewBox="0 0 12 12" refX="6" refY="6" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
          <path d="M2 2 L10 6 L2 10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
      </defs>
      {routes.map(({ path, duration, begin }, index) => (
        <g key={path}>
          <path className="helix-route" d={path} markerStart="url(#helix-arrow)" markerEnd="url(#helix-arrow)" />
          <circle className="helix-route-dot" r="5">
            <animateMotion dur={duration} begin={begin} repeatCount="indefinite" path={path} />
          </circle>
        </g>
      ))}
    </svg>
  );
}

function TripleHelixDiagram() {
  return (
    <div className="triple-helix" role="img" aria-label="Tríplice hélice formada por poder público, empresas e academia conectados entre si">
      <img className="triple-helix__background" src="/assets/triple-helix-background.svg" alt="" />
      <TripleHelixConnections />
      {governanceForces.map(({ icon: Icon, position, title, text }) => (
        <div className={`helix-node helix-node--${position}`} key={title}>
          <div className="helix-node__icon"><Icon weight="regular" /></div>
          <strong>{title}</strong>
          <span>{text}</span>
        </div>
      ))}
    </div>
  );
}

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [jobFilter, setJobFilter] = useState("todas");
  const [searchOpen, setSearchOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const visibleJobs = useMemo(
    () => jobFilter === "todas" ? jobs : jobs.filter((job) => job.area === jobFilter),
    [jobFilter],
  );

  useEffect(() => {
    const revealTargets = document.querySelectorAll("[data-reveal]");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      revealTargets.forEach((target) => target.classList.add("is-visible"));
      return undefined;
    }

    document.documentElement.classList.add("motion-ready");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -10%", threshold: 0.12 });

    revealTargets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  const submitNewsletter = (event) => {
    event.preventDefault();
    if (email.trim()) setSubscribed(true);
  };

  return (
    <div id="top">
      <header className="site-header">
        <div className="container header-inner">
          <Brand />
          <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Navegação principal">
            <a href="#sobre" onClick={() => setMenuOpen(false)}>O parque</a>
            <a href="#ecossistema" onClick={() => setMenuOpen(false)}>Incubadora e Unitec</a>
            <a href="#talentos" onClick={() => setMenuOpen(false)}>Talentos</a>
            <a href="#publicacoes" onClick={() => setMenuOpen(false)}>Pesquisa e inovação</a>
            <a href="#contato" onClick={() => setMenuOpen(false)}>Sobre</a>
          </nav>
          <div className="header-actions">
            <button className="icon-button search-button" onClick={() => setSearchOpen((value) => !value)} aria-label="Abrir busca"><MagnifyingGlass /></button>
            <a className="button button--small" href="#contato">Quero fazer parte</a>
            <button className="icon-button menu-button" onClick={() => setMenuOpen((value) => !value)} aria-label="Abrir menu">{menuOpen ? <X /> : <List />}</button>
          </div>
          {searchOpen && <div className="search-popover"><input autoFocus aria-label="Buscar no site" placeholder="O que você procura?" /><button aria-label="Buscar"><ArrowRight /></button></div>}
        </div>
      </header>

      <main>
        <section className="hero" id="sobre">
          <div className="container hero-grid" data-reveal>
            <div className="hero-copy">
              <h1>Inovação<br />transforma<br />o mundo</h1>
              <p>O Tecnosinos conecta empresas,<br className="hero-break" />startups, talentos, pesquisa e poder público<br className="hero-break" />para transformar conhecimento em impacto.</p>
            </div>
            <div className="hero-art">
              <img src="/heroimg.png" alt="Pessoas, ideias e espaços que formam o parque de inovação" />
            </div>
          </div>

          <div className="container pathway-grid" data-reveal>
            {pathways.map(({ icon: Icon, title, text }) => (
              <a href="#contato" className="pathway" key={title}>
                <Icon weight="bold" />
                <span><strong>{title}</strong><small>{text}</small></span>
                <ArrowRight weight="bold" className="pathway__arrow" />
              </a>
            ))}
          </div>
        </section>

        <section className="partners" aria-label="Organizações que fazem parte">
          <div className="partners-viewport" data-reveal>
            <div className="partners-track">
              <div className="partners-group">
                {partnerLogos.map((logo) => <div className="partner-placeholder" key={logo}>{logo}</div>)}
              </div>
              <div className="partners-group" aria-hidden="true">
                {partnerLogos.map((logo) => <div className="partner-placeholder" key={`duplicate-${logo}`}>{logo}</div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="numbers" aria-label="Números do ecossistema">
          <div className="container numbers-grid" data-reveal>
            {ecosystemNumbers.map(({ icon: Icon, label, ...number }) => (
              <div className="number" key={label}>
                <Icon weight="duotone" />
                <AnimatedNumber {...number} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section ecosystem" id="ecossistema">
          <div className="container" data-reveal>
            <SectionTitle eyebrow="Inovação aplicada" description="Explore as competências do ecossistema e acesse cada frente de atuação.">Um ecossistema de possibilidades.</SectionTitle>
            <div className="ecosystem-grid">
              {ecosystem.map(({ icon: Icon, title }) => <a className="ecosystem-card" href="#contato" key={title}><Icon className="ecosystem-card__icon" weight="regular" aria-hidden="true" /><strong>{title}</strong><ArrowRight className="ecosystem-card__arrow" /></a>)}
            </div>
          </div>
        </section>

        <section className="section governance" id="governanca">
          <div className="container governance-grid" data-reveal>
            <div className="governance-copy">
              <SectionTitle eyebrow="Governança compartilhada">Três forças.<br />Um mesmo futuro.</SectionTitle>
              <p>Empresas, academia e poder público compartilham decisões para impulsionar inovação e desenvolvimento sustentável.</p>
              <a className="text-link" href="#contato">Conheça nossa governança <ArrowRight /></a>
            </div>
            <TripleHelixDiagram />
          </div>
        </section>

        <section className="section global-section" id="global">
          <div className="container global-grid" data-reveal>
            <div>
              <SectionTitle eyebrow="Internacionalização">Tecnologia local.<br />Conexões globais.</SectionTitle>
              <p>Conectamos empresas e startups a mercados, parceiros e redes internacionais.</p>
              <a className="text-link text-link--light" href="#contato">Conheça nossa atuação <ArrowRight /></a>
            </div>
            <div className="globe-visual"><img src="/map.svg" alt="Mapa-múndi com conexões internacionais animadas" /></div>
            <div className="countries"><strong>Países presentes no parque</strong>{["Brasil", "Alemanha", "Coreia do Sul", "Holanda", "Índia", "Suécia", "Suíça"].map((country, index) => <span key={country}><b>{String(index + 1).padStart(2, "0")}</b>{country}</span>)}</div>
          </div>
          <div className="container programs" data-reveal><div><Buildings /><span><strong>Softlanding</strong><small>Apoio para empresas estrangeiras.</small></span></div><div><RocketLaunch /><span><strong>Take off</strong><small>Preparação para novos mercados.</small></span></div><div><Handshake /><span><strong>Redes internacionais</strong><small>Parcerias e conexões globais.</small></span></div></div>
        </section>

        <section className="section agenda-careers" id="talentos">
          <div className="container split-grid" data-reveal>
            <div>
              <div className="block-heading"><SectionTitle eyebrow="Acontece no parque">Próximos eventos</SectionTitle><a href="#contato">Ver agenda completa <ArrowRight /></a></div>
              <div className="event-list">{events.map((event, index) => <a className={`event ${index === 0 ? "is-highlighted" : ""}`} href="#contato" key={event.title}><time><b>{event.day}</b><span>{event.month}</span></time><span><small>{event.type}</small><strong>{event.title}</strong><em>{event.meta}</em></span><ArrowRight /></a>)}</div>
            </div>
            <div>
              <div className="block-heading"><SectionTitle eyebrow="Carreiras">Vagas no ecossistema</SectionTitle><a href="#contato">Ver todas <ArrowRight /></a></div>
              <p className="jobs-intro">Oportunidades em empresas residentes.</p>
              <div className="filter-tabs" aria-label="Filtrar vagas">{["todas", "tecnologia", "engenharia", "design"].map((filter) => <button className={jobFilter === filter ? "is-active" : ""} onClick={() => setJobFilter(filter)} key={filter}>{filter}</button>)}</div>
              <div className="job-list">{visibleJobs.map((job) => <a className="job" href="#contato" key={job.title}><span><strong>{job.title}</strong><small>{job.company} • São Leopoldo</small></span><em>{job.mode}</em><ArrowRight /></a>)}</div>
            </div>
          </div>
        </section>

        <section className="section publications" id="publicacoes">
          <div className="container" data-reveal>
            <div className="block-heading block-heading--publications"><SectionTitle eyebrow="Conteúdo e conhecimento">Publicações</SectionTitle><a href="#contato">Ver todas as publicações <ArrowRight /></a></div>
            <div className="publication-grid">
              {publications.map((post) => {
                const needsInsetCrop = post.image.includes("workshop") || post.image.includes("coworking");
                return <a className={`publication-card ${post.featured ? "publication-card--featured" : ""}`} href="#contato" key={post.title}><span className={`publication-media ${needsInsetCrop ? "publication-media--inset" : ""}`}><img src={post.image} alt="" /></span><span className="publication-body"><small>{post.label}</small><strong>{post.title}</strong><em>12 de maio, 2024</em></span></a>;
              })}
            </div>
          </div>
        </section>

        <section className="join" id="contato" data-reveal>
          <img src="/assets/campus-community.png" alt="Comunidade reunida no parque de inovação" />
          <div className="join-panel"><h2>Faça parte de algo maior</h2><p>Conecte-se ao ecossistema que transforma ideias em impacto e futuros em realidade.</p><a className="button button--dark" href="mailto:contato@example.com">Quero fazer parte <ArrowRight /></a></div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid" data-reveal>
          <div><Brand inverse /><p>Um ecossistema de inovação que conecta conhecimento, tecnologia e mercado para transformar o futuro.</p><div className="socials"><a href="#" aria-label="LinkedIn"><LinkedinLogo /></a><a href="#" aria-label="Instagram"><InstagramLogo /></a></div></div>
          <div><strong>Plataforma</strong><a href="#sobre">O parque</a><a href="#ecossistema">Ecossistema</a><a href="#talentos">Talentos</a></div>
          <div><strong>Contato</strong><a href="mailto:contato@example.com">Fale conosco</a><a href="#publicacoes">Sala de imprensa</a><a href="#talentos">Trabalhe conosco</a></div>
          <form className="newsletter" onSubmit={submitNewsletter}><strong>Newsletter</strong><p>Receba novidades sobre inovação, eventos e oportunidades.</p>{subscribed ? <div className="success">Inscrição confirmada. Até breve!</div> : <label><input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Seu e-mail" required /><button aria-label="Assinar newsletter"><PaperPlaneTilt /></button></label>}</form>
        </div>
        <div className="container footer-bottom"><span>© 2026 Tecnosinos — Parque Tecnológico São Leopoldo.</span><a href="#">Privacidade</a></div>
      </footer>
    </div>
  );
}
