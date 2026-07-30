import { Fragment, useEffect, useMemo, useRef, useState } from "react";
import logoGrey from "../logo-grey.svg";
import logoWhite from "../logo-white.svg";
import {
  ArrowRight,
  Bank,
  Broadcast,
  Briefcase,
  Buildings,
  CaretDown,
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
import { PublicationArticlePage, PublicationsPage } from "./PublicationsPages.jsx";
import {
  CompaniesPage,
  CompanyProfilePage,
  JobsPage,
  OpenInnovationPage,
  StudyVisitPage,
  TalentsProgramPage,
  UnitecPage,
} from "./InternalPages.jsx";

const featuredPublicationRoute = "/publicacoes/conexoes-internacionais-negocios-tecnologia";

const megaMenus = {
  park: {
    columns: [
      {
        title: "Conheça o ecossistema",
        links: [
          ["Visão geral", "O parque, sua atuação e seus números", "#sobre"],
          ["Áreas de atuação", "Competências que movem o ecossistema", "#ecossistema"],
          ["Conexões globais", "Redes, mercados e internacionalização", "#global"],
        ],
      },
      {
        title: "Empresas",
        links: [
          ["Diretório de empresas", "Conheça quem faz parte do parque", "/empresas"],
          ["Empresas consolidadas", "Negócios de base tecnológica", "#ecossistema"],
          ["Startups", "Incubadas, graduadas e residentes", "#ecossistema"],
          ["Buscar por área", "Encontre competências e parceiros", "/empresas"],
        ],
      },
      {
        title: "Espaços e infraestrutura",
        links: [
          ["Laboratórios e institutos", "Pesquisa, testes e prototipagem", "#ecossistema"],
          ["Auditórios e salas", "Estrutura para encontros e eventos", "#talentos"],
          ["Condomínios empresariais", "Espaços para instalar sua empresa", "#contato"],
        ],
      },
      {
        title: "Visite o parque",
        links: [
          ["Localização e estrutura", "Parque, prédios e pontos de referência", "#contato"],
          ["Como chegar", "Acessos, transporte e estacionamento", "#contato"],
          ["Mapa dos prédios", "Oriente-se dentro do ecossistema", "#contato"],
        ],
      },
    ],
    spotlight: {
      eyebrow: "Explore o ecossistema",
      title: "Mais de 110 empresas conectadas",
      text: "Encontre organizações, startups e competências por área de atuação.",
      link: "Ver diretório de empresas",
      href: "/empresas",
    },
  },
  unitec: {
    columns: [
      {
        title: "Conheça a Unitec",
        links: [
          ["Sobre a incubadora", "Inovação e tecnologia da Unisinos", "/unitec"],
          ["Benefícios para startups", "Estrutura, conexões e desenvolvimento", "/unitec"],
          ["Processo de incubação", "Da candidatura à graduação", "/unitec#modalidades"],
        ],
      },
      {
        title: "Comece sua jornada",
        links: [
          ["Pré-incubação", "Transforme uma ideia em oportunidade", "/unitec#modalidades"],
          ["Incubação local", "Espaço e acompanhamento no parque", "/unitec#modalidades"],
          ["Incubação híbrida", "Flexibilidade com presença no ecossistema", "/unitec#modalidades"],
          ["Incubação a distância", "Desenvolvimento conectado de onde estiver", "/unitec#modalidades"],
        ],
      },
      {
        title: "Comunidade",
        links: [
          ["Startups incubadas", "Negócios que estão em desenvolvimento", "#ecossistema"],
          ["Startups graduadas", "Empresas que cresceram com a Unitec", "#ecossistema"],
          ["Mentores voluntários", "Experiência que impulsiona negócios", "#contato"],
          ["Parceiros da Unitec", "Uma rede para inovar em conjunto", "#contato"],
        ],
      },
      {
        title: "Outras unidades",
        secondary: true,
        links: [
          ["Unitec Esteio", "Conheça a unidade", "#contato"],
          ["Unitec Canela", "Conheça a unidade", "#contato"],
        ],
      },
    ],
    spotlight: {
      eyebrow: "Para empreendedores",
      title: "Sua startup pode começar aqui",
      text: "Descubra a modalidade mais adequada para o estágio do seu negócio.",
      link: "Conhecer o programa",
      href: "/unitec",
    },
  },
  talents: {
    columns: [
      {
        title: "Oportunidades",
        links: [
          ["Vagas no ecossistema", "Trabalhe em empresas inovadoras", "/vagas"],
          ["Bolsas e pesquisa", "Oportunidades de desenvolvimento", "/vagas"],
          ["Trabalhe no parque", "Conecte sua carreira à inovação", "/vagas"],
        ],
      },
      {
        title: "Formação e desenvolvimento",
        links: [
          ["Programa Talentos", "Tecnologia, carreira e futuro", "/programa-talentos"],
          ["Projeto 3.000 Talentos", "Formação para a economia digital", "/estudar-ou-visitar"],
          ["Oficinas e capacitações", "Aprendizado conectado à prática", "/estudar-ou-visitar"],
          ["Atividades para escolas", "Experiências para jovens estudantes", "/programa-talentos"],
        ],
      },
      {
        title: "Participação",
        links: [
          ["Visitas ao parque", "Conheça ambientes e empresas", "/estudar-ou-visitar"],
          ["Empresas parceiras", "Aproxime talentos do mercado", "#contato"],
          ["Seja mentor", "Compartilhe conhecimento e experiência", "#contato"],
        ],
      },
    ],
    spotlight: {
      eyebrow: "Carreiras",
      title: "Oportunidades em todo o ecossistema",
      text: "Encontre vagas em tecnologia, engenharia, design e outras áreas.",
      link: "Ver vagas abertas",
      href: "/vagas",
    },
  },
  research: {
    columns: [
      {
        title: "Competências",
        links: [
          ["Áreas tecnológicas", "Conhecimento aplicado a desafios reais", "#ecossistema"],
          ["Institutos tecnológicos", "Pesquisa avançada com a Unisinos", "#ecossistema"],
          ["Laboratórios", "Teste, validação e prototipagem", "#ecossistema"],
          ["Pesquisa aplicada", "Da descoberta à solução", "#publicacoes"],
        ],
      },
      {
        title: "Projetos e parcerias",
        links: [
          ["Inovação aberta", "Conecte desafios a especialistas", "/inovacao-aberta"],
          ["Desenvolva um projeto", "Construa soluções com o ecossistema", "/inovacao-aberta#desafio"],
          ["Encontre competências", "Acesse empresas, talentos e pesquisa", "/empresas"],
          ["Resultados e conhecimento", "Veja o impacto de projetos realizados", "#publicacoes"],
        ],
      },
      {
        title: "Programas e conexões",
        links: [
          ["Prêmio Roser", "Ideias que respondem a problemas reais", "#publicacoes"],
          ["Greentech Park", "Tecnologia para futuros sustentáveis", "#ecossistema"],
          ["Conexões Tecnosinos", "Redes colaborativas para inovar", "#talentos"],
          ["Internacionalização", "Softlanding, Take Off e redes globais", "#global"],
        ],
      },
    ],
    spotlight: {
      eyebrow: "Inovação aberta",
      title: "Transforme um desafio em projeto",
      text: "Aproxime sua empresa das competências certas para pesquisar, testar e inovar.",
      link: "Encontrar parceiros",
      href: "/inovacao-aberta",
    },
  },
  about: {
    columns: [
      {
        title: "Institucional",
        links: [
          ["Institucional", "Missão, visão, valores, gestão e contatos", "#sobre"],
          ["Governança", "A força da tríplice hélice", "#governanca"],
          ["História", "Uma trajetória construída em conjunto", "#sobre"],
          ["Reconhecimento", "Premiações e certificações", "#publicacoes"],
        ],
      },
      {
        title: "Parque + Sociedade",
        links: [
          ["Visão geral", "Impacto para além do parque", "#contato"],
          ["Sustentabilidade e ESG", "Compromissos ambientais, sociais e de governança", "#contato"],
          ["Mulheres Empreendedoras", "Conexões e protagonismo feminino", "#contato"],
          ["Diversidade e Inclusão", "Um ecossistema plural e acessível", "#contato"],
          ["Ações Solidárias", "Mobilização que transforma comunidades", "#contato"],
        ],
      },
      {
        title: "Rede e relacionamento",
        links: [
          ["Parceiros", "Organizações que constroem o ecossistema", "#contato"],
          ["Sala de imprensa", "Informações e materiais institucionais", "#publicacoes"],
          ["Contato", "Fale com a equipe Tecnosinos", "#contato"],
        ],
      },
    ],
    spotlight: {
      eyebrow: "Tecnosinos",
      title: "Inovação com impacto na sociedade",
      text: "Conheça os compromissos e as pessoas que dão forma ao parque.",
      link: "Conhecer o Tecnosinos",
      href: "#sobre",
    },
  },
};

const joinOptions = [
  [RocketLaunch, "Criar uma startup", "Tire uma ideia do papel com a Unitec", "/unitec"],
  [Buildings, "Instalar minha empresa", "Faça parte do ecossistema Tecnosinos", "/empresas"],
  [Briefcase, "Trabalhar no ecossistema", "Encontre vagas e oportunidades", "/vagas"],
  [GraduationCap, "Estudar ou visitar", "Conheça programas, espaços e atividades", "/estudar-ou-visitar"],
  [Flask, "Desenvolver um projeto", "Encontre competências para inovar", "/inovacao-aberta"],
  [Handshake, "Investir ou apoiar", "Conecte-se a negócios e iniciativas", "#contato"],
];

const languageOptions = [
  { code: "pt-BR", short: "PT", label: "Português" },
  { code: "en", short: "EN", label: "English" },
];

const pathways = [
  { icon: RocketLaunch, title: "Quero empreender", text: "Tenha apoio para criar e escalar sua startup.", href: "/unitec" },
  { icon: UsersThree, title: "Quero fazer parte", text: "Conecte-se ao ecossistema e participe.", href: "/empresas" },
  { icon: Briefcase, title: "Vagas e trabalho", text: "Encontre oportunidades no Tecnosinos.", href: "/vagas" },
  { icon: Flask, title: "Inovação aberta", text: "Busque parceiros para inovar com propósito.", href: "/inovacao-aberta" },
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

function Brand({ inverse = false, onNavigate }) {
  return (
    <a className={`brand ${inverse ? "brand--inverse" : ""}`} href="/" onClick={onNavigate} aria-label="Tecnosinos — página inicial">
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

function MegaMenu({ menu, onNavigate }) {
  return (
    <div className="mega-menu" role="region">
      <div className="mega-menu__columns">
        {menu.columns.map((column) => (
          <div className={`mega-menu__column ${column.secondary ? "is-secondary" : ""}`} key={column.title}>
            <strong className="mega-menu__heading">{column.title}</strong>
            <div className="mega-menu__links">
              {column.links.map(([label, description, href]) => (
                <a href={href} onClick={onNavigate} key={label}>
                  <span>{label}</span>
                  <small>{description}</small>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <aside className="mega-menu__spotlight">
        <small>{menu.spotlight.eyebrow}</small>
        <strong>{menu.spotlight.title}</strong>
        <p>{menu.spotlight.text}</p>
        <a href={menu.spotlight.href} onClick={onNavigate}>{menu.spotlight.link} <ArrowRight /></a>
      </aside>
    </div>
  );
}

function JoinOptions({ onNavigate, mobile = false }) {
  return (
    <div className={`join-menu ${mobile ? "join-menu--mobile" : ""}`} role="region" aria-label="Escolha como fazer parte">
      <div className="join-menu__intro">
        <small>Quero fazer parte</small>
        <strong>Como podemos conectar você ao ecossistema?</strong>
      </div>
      <div className="join-menu__grid">
        {joinOptions.map(([Icon, title, description, href]) => (
          <a href={href} onClick={onNavigate} key={title}>
            <Icon weight="regular" />
            <span><strong>{title}</strong><small>{description}</small></span>
            <ArrowRight />
          </a>
        ))}
      </div>
    </div>
  );
}

const governanceForces = [
  { icon: Bank, position: "public", title: "Poder público", text: "Prefeitura de São Leopoldo" },
  { icon: UsersThree, position: "companies", title: "Empresas", text: "Iniciativa Privada" },
  { icon: GraduationCap, position: "academia", title: "Academia", text: "Unisinos" },
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
  const [currentPath, setCurrentPath] = useState(() => window.location.pathname);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [joinMenuOpen, setJoinMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [language, setLanguage] = useState(languageOptions[0]);
  const [jobFilter, setJobFilter] = useState("todas");
  const [searchOpen, setSearchOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const headerRef = useRef(null);

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
  }, [currentPath]);

  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    if (currentPath === "/publicacoes") {
      document.title = "Publicações — Tecnosinos";
    } else if (currentPath.startsWith("/publicacoes/")) {
      document.title = "Tecnosinos amplia conexões internacionais — Tecnosinos";
    } else if (currentPath === "/empresas") {
      document.title = "Empresas do ecossistema — Tecnosinos";
    } else if (currentPath.startsWith("/empresas/")) {
      document.title = "Altus — Ecossistema Tecnosinos";
    } else if (currentPath === "/unitec") {
      document.title = "Incubadora Unitec — Tecnosinos";
    } else if (currentPath === "/inovacao-aberta") {
      document.title = "Inovação aberta — Tecnosinos";
    } else if (currentPath === "/vagas") {
      document.title = "Vagas no ecossistema — Tecnosinos";
    } else if (currentPath === "/estudar-ou-visitar") {
      document.title = "Estudar ou visitar — Tecnosinos";
    } else if (currentPath === "/programa-talentos") {
      document.title = "Programa Talentos — Tecnosinos";
    } else {
      document.title = "Tecnosinos — Parque Tecnológico São Leopoldo";
    }
  }, [currentPath]);

  useEffect(() => {
    const closeOnOutsideClick = (event) => {
      if (!headerRef.current?.contains(event.target)) {
        setActiveMegaMenu(null);
        setJoinMenuOpen(false);
        setLanguageMenuOpen(false);
      }
    };
    const closeOnEscape = (event) => {
      if (event.key !== "Escape") return;
      setActiveMegaMenu(null);
      setJoinMenuOpen(false);
      setLanguageMenuOpen(false);
      setMenuOpen(false);
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const closeNavigation = () => {
    setActiveMegaMenu(null);
    setJoinMenuOpen(false);
    setLanguageMenuOpen(false);
    setMenuOpen(false);
  };

  const toggleMegaMenu = (menuKey) => {
    setJoinMenuOpen(false);
    setLanguageMenuOpen(false);
    setSearchOpen(false);
    setActiveMegaMenu((current) => current === menuKey ? null : menuKey);
  };

  const toggleJoinMenu = () => {
    setActiveMegaMenu(null);
    setLanguageMenuOpen(false);
    setSearchOpen(false);
    setJoinMenuOpen((value) => !value);
  };

  const toggleLanguageMenu = () => {
    setActiveMegaMenu(null);
    setJoinMenuOpen(false);
    setSearchOpen(false);
    setLanguageMenuOpen((value) => !value);
  };

  const selectLanguage = (option) => {
    setLanguage(option);
    document.documentElement.lang = option.code;
    setLanguageMenuOpen(false);
  };

  const submitNewsletter = (event) => {
    event.preventDefault();
    if (email.trim()) setSubscribed(true);
  };

  const navigate = (target) => {
    const url = new URL(target, window.location.href);
    window.history.pushState({}, "", `${url.pathname}${url.hash}`);
    setCurrentPath(url.pathname);
    closeNavigation();

    window.setTimeout(() => {
      if (url.hash) {
        document.querySelector(url.hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "auto" });
      }
    }, 0);
  };

  const handleRoute = (event, target) => {
    if (
      event.defaultPrevented
      || event.button !== 0
      || event.metaKey
      || event.ctrlKey
      || event.shiftKey
      || event.altKey
    ) return;

    event.preventDefault();
    navigate(target);
  };

  const handleNavigationLink = (event) => {
    const href = event.currentTarget.getAttribute("href");
    if (href?.startsWith("#")) {
      handleRoute(event, `/${href}`);
      return;
    }
    if (href?.startsWith("/")) {
      handleRoute(event, href);
      return;
    }
    closeNavigation();
  };

  return (
    <div id="top">
      <header className="site-header" ref={headerRef}>
        <div className="container header-inner">
          <Brand onNavigate={(event) => handleRoute(event, "/")} />
          <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Navegação principal">
            {[
              ["park", "O parque"],
              ["unitec", "Incubadora e Unitec"],
              ["talents", "Talentos"],
              ["research", "Pesquisa e inovação"],
            ].map(([menuKey, label]) => (
              <Fragment key={menuKey}>
                <button
                  className={`nav-trigger ${activeMegaMenu === menuKey ? "is-active" : ""}`}
                  type="button"
                  aria-expanded={activeMegaMenu === menuKey}
                  onClick={() => toggleMegaMenu(menuKey)}
                  onMouseEnter={() => {
                    if (activeMegaMenu) {
                      setJoinMenuOpen(false);
                      setActiveMegaMenu(menuKey);
                    }
                  }}
                >
                  {label}<CaretDown weight="bold" />
                </button>
                {activeMegaMenu === menuKey && (
                  <div className="mobile-mega-wrapper">
                    <MegaMenu menu={megaMenus[menuKey]} onNavigate={handleNavigationLink} />
                  </div>
                )}
              </Fragment>
            ))}
            <a
              className="nav-direct-link"
              href="/publicacoes"
              aria-current={currentPath.startsWith("/publicacoes") ? "page" : undefined}
              onMouseEnter={() => setActiveMegaMenu(null)}
              onFocus={() => setActiveMegaMenu(null)}
              onClick={(event) => handleRoute(event, "/publicacoes")}
            >
              Publicações
            </a>
            <button
              className={`nav-trigger ${activeMegaMenu === "about" ? "is-active" : ""}`}
              type="button"
              aria-expanded={activeMegaMenu === "about"}
              onClick={() => toggleMegaMenu("about")}
              onMouseEnter={() => {
                if (activeMegaMenu) {
                  setJoinMenuOpen(false);
                  setActiveMegaMenu("about");
                }
              }}
            >
              Sobre<CaretDown weight="bold" />
            </button>
            {activeMegaMenu === "about" && (
              <div className="mobile-mega-wrapper">
                <MegaMenu menu={megaMenus.about} onNavigate={handleNavigationLink} />
              </div>
            )}
            <button className="mobile-join-trigger" type="button" aria-expanded={joinMenuOpen} onClick={toggleJoinMenu}>Quero fazer parte <CaretDown weight="bold" /></button>
            {joinMenuOpen && <JoinOptions mobile onNavigate={handleNavigationLink} />}
          </nav>
          <div className="header-actions">
            <button className="icon-button search-button" onClick={() => setSearchOpen((value) => !value)} aria-label="Abrir busca"><MagnifyingGlass /></button>
            <div className="language-switcher">
              <button className={`language-trigger ${languageMenuOpen ? "is-active" : ""}`} type="button" aria-expanded={languageMenuOpen} aria-haspopup="menu" onClick={toggleLanguageMenu}>
                {language.short}<CaretDown weight="bold" />
              </button>
              {languageMenuOpen && (
                <div className="language-menu" role="menu" aria-label="Selecionar idioma">
                  {languageOptions.map((option) => (
                    <button className={option.code === language.code ? "is-selected" : ""} type="button" role="menuitemradio" aria-checked={option.code === language.code} onClick={() => selectLanguage(option)} key={option.code}>
                      <span>{option.short}</span>{option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button className={`button button--small join-trigger ${joinMenuOpen ? "is-active" : ""}`} type="button" aria-expanded={joinMenuOpen} onClick={toggleJoinMenu}>Quero fazer parte <CaretDown weight="bold" /></button>
            <button className="icon-button menu-button" onClick={() => setMenuOpen((value) => !value)} aria-label="Abrir menu">{menuOpen ? <X /> : <List />}</button>
          </div>
          {activeMegaMenu && <div className="desktop-mega-wrapper"><MegaMenu menu={megaMenus[activeMegaMenu]} onNavigate={handleNavigationLink} /></div>}
          {joinMenuOpen && <JoinOptions onNavigate={handleNavigationLink} />}
          {searchOpen && <div className="search-popover"><input autoFocus aria-label="Buscar no site" placeholder="O que você procura?" /><button aria-label="Buscar"><ArrowRight /></button></div>}
        </div>
      </header>

      {currentPath === "/publicacoes" ? (
        <PublicationsPage onRoute={handleRoute} />
      ) : currentPath.startsWith("/publicacoes/") ? (
        <PublicationArticlePage onRoute={handleRoute} />
      ) : currentPath === "/empresas" ? (
        <CompaniesPage onRoute={handleRoute} />
      ) : currentPath.startsWith("/empresas/") ? (
        <CompanyProfilePage onRoute={handleRoute} />
      ) : currentPath === "/unitec" ? (
        <UnitecPage onRoute={handleRoute} />
      ) : currentPath === "/inovacao-aberta" ? (
        <OpenInnovationPage onRoute={handleRoute} />
      ) : currentPath === "/vagas" ? (
        <JobsPage onRoute={handleRoute} />
      ) : currentPath === "/estudar-ou-visitar" ? (
        <StudyVisitPage onRoute={handleRoute} />
      ) : currentPath === "/programa-talentos" ? (
        <TalentsProgramPage onRoute={handleRoute} />
      ) : (
      <main>
        <section className="hero" id="sobre">
          <div className="container hero-grid" data-reveal>
            <div className="hero-copy">
              <h1>Inovação<br />transforma<br />o mundo</h1>
              <p>O Tecnosinos conecta empresas,<br className="hero-break" />startups, talentos, pesquisa e poder público<br className="hero-break" />para transformar conhecimento em impacto.</p>
            </div>
            <div className="hero-art">
              <video autoPlay muted loop playsInline preload="metadata" aria-label="Pessoas, ideias e espaços que formam o parque de inovação">
                <source src="/hero-video-2026.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="container pathway-grid" data-reveal>
            {pathways.map(({ icon: Icon, title, text, href }) => (
              <a href={href} className="pathway" onClick={(event) => handleNavigationLink(event)} key={title}>
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
              {ecosystem.map(({ icon: Icon, title }) => <a className="ecosystem-card" href="/empresas" onClick={(event) => handleRoute(event, "/empresas")} key={title}><Icon className="ecosystem-card__icon" weight="regular" aria-hidden="true" /><strong>{title}</strong><ArrowRight className="ecosystem-card__arrow" /></a>)}
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
              <div className="block-heading"><SectionTitle eyebrow="Carreiras">Vagas no ecossistema</SectionTitle><a href="/vagas" onClick={(event) => handleRoute(event, "/vagas")}>Ver todas <ArrowRight /></a></div>
              <p className="jobs-intro">Oportunidades em empresas residentes.</p>
              <div className="filter-tabs" aria-label="Filtrar vagas">{["todas", "tecnologia", "engenharia", "design"].map((filter) => <button className={jobFilter === filter ? "is-active" : ""} onClick={() => setJobFilter(filter)} key={filter}>{filter}</button>)}</div>
              <div className="job-list">{visibleJobs.map((job) => <a className="job" href="/vagas" onClick={(event) => handleRoute(event, "/vagas")} key={job.title}><span><strong>{job.title}</strong><small>{job.company} • São Leopoldo</small></span><em>{job.mode}</em><ArrowRight /></a>)}</div>
            </div>
          </div>
        </section>

        <section className="section publications" id="publicacoes">
          <div className="container" data-reveal>
            <div className="block-heading block-heading--publications"><SectionTitle eyebrow="Conteúdo e conhecimento">Publicações</SectionTitle><a href="/publicacoes" onClick={(event) => handleRoute(event, "/publicacoes")}>Ver todas as publicações <ArrowRight /></a></div>
            <div className="publication-grid">
              {publications.map((post) => {
                const needsInsetCrop = post.image.includes("workshop") || post.image.includes("coworking");
                return <a className={`publication-card ${post.featured ? "publication-card--featured" : ""}`} href={featuredPublicationRoute} onClick={(event) => handleRoute(event, featuredPublicationRoute)} key={post.title}><span className={`publication-media ${needsInsetCrop ? "publication-media--inset" : ""}`}><img src={post.image} alt="" /></span><span className="publication-body"><small>{post.label}</small><strong>{post.title}</strong><em>12 de maio, 2024</em></span></a>;
              })}
            </div>
          </div>
        </section>

        <section className="join" id="contato" data-reveal>
          <img src="/assets/campus-community.png" alt="Comunidade reunida no parque de inovação" />
          <div className="join-panel"><h2>Faça parte de algo maior</h2><p>Conecte-se ao ecossistema que transforma ideias em impacto e futuros em realidade.</p><a className="button button--dark" href="mailto:contato@example.com">Quero fazer parte <ArrowRight /></a></div>
        </section>
      </main>
      )}

      <footer className="footer">
        <div className="container footer-grid" data-reveal>
          <div><Brand inverse onNavigate={(event) => handleRoute(event, "/")} /><p>Um ecossistema de inovação que conecta conhecimento, tecnologia e mercado para transformar o futuro.</p><div className="socials"><a href="#" aria-label="LinkedIn"><LinkedinLogo /></a><a href="#" aria-label="Instagram"><InstagramLogo /></a></div></div>
          <div><strong>Plataforma</strong><a href="/#sobre" onClick={(event) => handleRoute(event, "/#sobre")}>O parque</a><a href="/#ecossistema" onClick={(event) => handleRoute(event, "/#ecossistema")}>Ecossistema</a><a href="/#talentos" onClick={(event) => handleRoute(event, "/#talentos")}>Talentos</a></div>
          <div><strong>Contato</strong><a href="mailto:contato@example.com">Fale conosco</a><a href="/publicacoes" onClick={(event) => handleRoute(event, "/publicacoes")}>Sala de imprensa</a><a href="/vagas" onClick={(event) => handleRoute(event, "/vagas")}>Trabalhe conosco</a></div>
          <form className="newsletter" onSubmit={submitNewsletter}><strong>Newsletter</strong><p>Receba novidades sobre inovação, eventos e oportunidades.</p>{subscribed ? <div className="success">Inscrição confirmada. Até breve!</div> : <label><input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Seu e-mail" required /><button aria-label="Assinar newsletter"><PaperPlaneTilt /></button></label>}</form>
        </div>
        <div className="container footer-bottom"><span>© 2026 Tecnosinos — Parque Tecnológico São Leopoldo.</span><a href="#">Privacidade</a></div>
      </footer>
    </div>
  );
}
