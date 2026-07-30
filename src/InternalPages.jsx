import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Buildings,
  Check,
  Code,
  Cpu,
  CalendarBlank,
  ChalkboardTeacher,
  Flask,
  GearSix,
  GlobeHemisphereWest,
  GraduationCap,
  Handshake,
  Heartbeat,
  Leaf,
  Lightbulb,
  MagnifyingGlass,
  MapPin,
  Robot,
  RocketLaunch,
  Sparkle,
  Student,
  Target,
  UsersThree,
} from "@phosphor-icons/react";

const companies = [
  {
    name: "Altus",
    mark: "A",
    area: "Automação e engenharias",
    description: "Tecnologia para automação, controle e conectividade de operações industriais.",
    tags: ["Indústria 4.0", "IoT", "Automação"],
    accent: "navy",
  },
  {
    name: "Nexora",
    mark: "NX",
    area: "Tecnologia da informação",
    description: "Produtos digitais e inteligência de dados para decisões mais rápidas.",
    tags: ["Software", "Dados", "IA"],
    accent: "lime",
  },
  {
    name: "HT Solutions",
    mark: "HT",
    area: "Semicondutores",
    description: "Soluções avançadas em microeletrônica, sensores e sistemas embarcados.",
    tags: ["Chips", "Hardware", "P&D"],
    accent: "blue",
  },
  {
    name: "Arbo Tech",
    mark: "AR",
    area: "Tecnologias socioambientais",
    description: "Monitoramento ambiental para tornar cidades e empresas mais resilientes.",
    tags: ["ESG", "Clima", "Sensores"],
    accent: "green",
  },
  {
    name: "Vektor",
    mark: "VK",
    area: "Comunicação e convergência digital",
    description: "Infraestrutura segura para conectar pessoas, dispositivos e negócios.",
    tags: ["5G", "Cloud", "Cyber"],
    accent: "violet",
  },
  {
    name: "Lumina Health",
    mark: "LH",
    area: "Tecnologias para a saúde",
    description: "Plataformas que aproximam cuidado, pesquisa clínica e informação.",
    tags: ["Healthtech", "Dados", "Pesquisa"],
    accent: "coral",
  },
  {
    name: "Senda Energia",
    mark: "SE",
    area: "Energias renováveis",
    description: "Gestão inteligente de energia e soluções para a transição de baixo carbono.",
    tags: ["Energia", "Analytics", "Carbono"],
    accent: "yellow",
  },
  {
    name: "Tridel",
    mark: "TR",
    area: "Tecnologia da informação",
    description: "Times e produtos digitais que transformam operações complexas.",
    tags: ["Produto", "Software", "Cloud"],
    accent: "slate",
  },
];

const companyAreas = [
  "Todas as áreas",
  "Tecnologia da informação",
  "Automação e engenharias",
  "Semicondutores",
  "Tecnologias para a saúde",
  "Energias renováveis",
];

function Breadcrumb({ items, onRoute, inverse = false }) {
  return (
    <nav className={`breadcrumb internal-breadcrumb ${inverse ? "is-inverse" : ""}`} aria-label="Breadcrumb">
      {items.map((item, index) => (
        <span className="internal-breadcrumb__item" key={`${item.label}-${index}`}>
          {index > 0 && <span aria-hidden="true">/</span>}
          {item.href ? (
            <a href={item.href} onClick={(event) => onRoute(event, item.href)}>{item.label}</a>
          ) : (
            <span aria-current="page">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

function PageCta({ eyebrow, title, text, action, href, onRoute, secondaryAction, secondaryHref }) {
  return (
    <section className="internal-cta" data-reveal>
      <div className="container internal-cta__inner">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
        </div>
        <div>
          <p>{text}</p>
          <div className="internal-cta__actions">
            <a className="button" href={href} onClick={onRoute && href.startsWith("/") ? (event) => onRoute(event, href) : undefined}>
              {action}<ArrowRight />
            </a>
            {secondaryAction && (
              <a className="internal-text-link internal-text-link--light" href={secondaryHref} onClick={onRoute && secondaryHref.startsWith("/") ? (event) => onRoute(event, secondaryHref) : undefined}>
                {secondaryAction}<ArrowUpRight />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function CompanyCard({ company, onRoute }) {
  const route = "/empresas/altus";
  return (
    <a className="company-card" href={route} onClick={(event) => onRoute(event, route)}>
      <span className={`company-card__mark company-card__mark--${company.accent}`}>{company.mark}</span>
      <span className="company-card__area">{company.area}</span>
      <strong>{company.name}</strong>
      <p>{company.description}</p>
      <span className="company-card__tags">
        {company.tags.map((tag) => <small key={tag}>{tag}</small>)}
      </span>
      <span className="company-card__action">Ver perfil <ArrowRight /></span>
    </a>
  );
}

export function CompaniesPage({ onRoute }) {
  const [query, setQuery] = useState("");
  const [area, setArea] = useState(companyAreas[0]);

  const visibleCompanies = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("pt-BR");
    return companies.filter((company) => {
      const matchesArea = area === companyAreas[0] || company.area === area;
      const searchable = `${company.name} ${company.area} ${company.description} ${company.tags.join(" ")}`.toLocaleLowerCase("pt-BR");
      return matchesArea && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [area, query]);

  return (
    <main className="internal-page companies-page">
      <section className="internal-hero internal-hero--directory">
        <div className="container" data-reveal>
          <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Empresas" }]} onRoute={onRoute} />
          <div className="internal-hero__grid">
            <div>
              <p className="eyebrow">Parque Tecnológico Tecnosinos</p>
              <h1>Encontre quem faz a inovação acontecer.</h1>
            </div>
            <p>Empresas, startups e competências conectadas para transformar desafios em novas possibilidades de negócio.</p>
          </div>
        </div>
      </section>

      <section className="directory-summary" aria-label="Números do diretório">
        <div className="container directory-summary__grid" data-reveal>
          <div><strong>+110</strong><span>empresas residentes</span></div>
          <div><strong>10</strong><span>áreas tecnológicas</span></div>
          <div><strong>+6 mil</strong><span>talentos conectados</span></div>
          <p>Uma rede multidisciplinar preparada para colaborar, pesquisar e crescer.</p>
        </div>
      </section>

      <section className="container directory-content" data-reveal>
        <div className="directory-heading">
          <div>
            <p className="eyebrow">Diretório de empresas</p>
            <h2>Explore o parque</h2>
          </div>
          <span>{visibleCompanies.length} {visibleCompanies.length === 1 ? "empresa encontrada" : "empresas encontradas"}</span>
        </div>

        <div className="directory-tools">
          <label className="directory-search">
            <span className="sr-only">Buscar empresa ou competência</span>
            <MagnifyingGlass aria-hidden="true" />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Busque por empresa, tecnologia ou competência" type="search" />
          </label>
          <label className="directory-select">
            <span>Área de atuação</span>
            <select value={area} onChange={(event) => setArea(event.target.value)}>
              {companyAreas.map((option) => <option value={option} key={option}>{option}</option>)}
            </select>
          </label>
        </div>

        {visibleCompanies.length ? (
          <div className="company-grid">
            {visibleCompanies.map((company) => <CompanyCard company={company} onRoute={onRoute} key={company.name} />)}
          </div>
        ) : (
          <div className="directory-empty">
            <strong>Nenhuma empresa encontrada</strong>
            <p>Tente outro termo ou amplie a área selecionada.</p>
            <button type="button" className="button" onClick={() => { setQuery(""); setArea(companyAreas[0]); }}>Limpar filtros</button>
          </div>
        )}
      </section>

      <PageCta
        eyebrow="Faça parte"
        title="Sua empresa pode estar aqui."
        text="Instale sua operação em um ambiente feito para criar conexões, acessar conhecimento e acelerar resultados."
        action="Conhecer possibilidades"
        href="mailto:contato@tecnosinos.com.br"
        secondaryAction="Conhecer a Unitec"
        secondaryHref="/unitec"
        onRoute={onRoute}
      />
    </main>
  );
}

const capabilities = [
  { icon: GearSix, title: "Automação industrial", text: "Arquiteturas completas para controle, supervisão e integração de processos." },
  { icon: Cpu, title: "Sistemas embarcados", text: "Hardware e software preparados para operações críticas e alta disponibilidade." },
  { icon: GlobeHemisphereWest, title: "Conectividade", text: "Dados de campo conectados à gestão com segurança e inteligência operacional." },
];

export function CompanyProfilePage({ onRoute }) {
  return (
    <main className="internal-page company-profile-page">
      <section className="company-profile-hero">
        <div className="container" data-reveal>
          <Breadcrumb
            inverse
            items={[{ label: "Início", href: "/" }, { label: "Empresas", href: "/empresas" }, { label: "Altus" }]}
            onRoute={onRoute}
          />
          <div className="company-profile-hero__grid">
            <div className="company-profile-hero__mark">A</div>
            <div>
              <p className="eyebrow">Automação e engenharias</p>
              <h1>Altus</h1>
              <p>Tecnologia brasileira para tornar a indústria mais conectada, eficiente e preparada para o futuro.</p>
            </div>
            <div className="company-profile-hero__aside">
              <span><MapPin />São Leopoldo, RS</span>
              <span><Buildings />Empresa residente</span>
              <a className="button" href="https://www.altus.com.br" target="_blank" rel="noreferrer">Visitar site <ArrowUpRight /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="container company-overview" data-reveal>
        <div className="company-overview__copy">
          <p className="eyebrow">Sobre a empresa</p>
          <h2>Engenharia que transforma operações.</h2>
          <p>A Altus desenvolve soluções para automação e controle de processos, conectando equipamentos, pessoas e dados em ambientes industriais complexos.</p>
          <p>No Tecnosinos, a empresa encontra proximidade com talentos, pesquisa aplicada e parceiros capazes de ampliar o alcance de seus projetos.</p>
        </div>
        <aside className="company-facts">
          <div><small>Atuação</small><strong>Indústria e infraestrutura</strong></div>
          <div><small>Competências</small><strong>Hardware, software e serviços</strong></div>
          <div><small>Conexões de interesse</small><strong>P&D, talentos e novos mercados</strong></div>
          <div className="company-facts__tags"><span>Indústria 4.0</span><span>IoT</span><span>Automação</span></div>
        </aside>
      </section>

      <section className="company-capabilities">
        <div className="container" data-reveal>
          <div className="internal-section-heading">
            <div><p className="eyebrow">Competências</p><h2>Como podemos colaborar</h2></div>
            <p>Soluções integradas da camada de controle à inteligência de negócio.</p>
          </div>
          <div className="capability-grid">
            {capabilities.map(({ icon: Icon, title, text }, index) => (
              <article className="capability-card" key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <Icon />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container company-feature" data-reveal>
        <div className="company-feature__image"><img src="/assets/workshop.png" alt="Profissionais colaborando em um projeto de tecnologia" /></div>
        <div className="company-feature__content">
          <p className="eyebrow">Conexão em destaque</p>
          <h2>Da pesquisa à aplicação industrial.</h2>
          <p>Projetos colaborativos aproximam especialistas, laboratórios e desafios reais para acelerar validações e desenvolver novas soluções.</p>
          <a className="internal-text-link" href="/inovacao-aberta" onClick={(event) => onRoute(event, "/inovacao-aberta")}>Propor uma conexão <ArrowRight /></a>
        </div>
      </section>

      <PageCta
        eyebrow="Explore a rede"
        title="Mais de 110 empresas. Uma conexão pode mudar tudo."
        text="Descubra outras competências presentes no parque e encontre o parceiro certo para seu próximo projeto."
        action="Voltar ao diretório"
        href="/empresas"
        onRoute={onRoute}
      />
    </main>
  );
}

const unitecBenefits = [
  { icon: UsersThree, title: "Rede que abre portas", text: "Mentores, empresas, pesquisadores e investidores próximos da sua jornada." },
  { icon: Buildings, title: "Estrutura para crescer", text: "Ambientes de trabalho, laboratórios e serviços no coração do parque." },
  { icon: Target, title: "Acompanhamento estratégico", text: "Método, especialistas e conexões adequados a cada estágio do negócio." },
  { icon: GlobeHemisphereWest, title: "Acesso a mercados", text: "Programas e redes para validar soluções no Brasil e no exterior." },
];

const unitecJourney = [
  ["01", "Conecte", "Apresente sua ideia, seu time e o desafio que deseja resolver."],
  ["02", "Valide", "Teste hipóteses e construa uma proposta de valor relevante."],
  ["03", "Desenvolva", "Aprimore produto, estratégia, operação e modelo de negócio."],
  ["04", "Escale", "Acesse mercado, investimento e novas redes para crescer."],
];

export function UnitecPage({ onRoute }) {
  return (
    <main className="internal-page unitec-page">
      <section className="program-hero">
        <div className="container" data-reveal>
          <Breadcrumb inverse items={[{ label: "Início", href: "/" }, { label: "Unitec" }]} onRoute={onRoute} />
          <div className="program-hero__grid">
            <div className="program-hero__copy">
              <p className="eyebrow">Incubadora Unitec</p>
              <h1>Sua ideia pode transformar o futuro.</h1>
              <p>Um ambiente para validar, desenvolver e acelerar negócios de base tecnológica com uma rede completa de apoio.</p>
              <div className="program-hero__actions">
                <a className="button" href="#modalidades">Encontrar minha modalidade <ArrowRight /></a>
                <a className="internal-text-link internal-text-link--light" href="mailto:unitec@tecnosinos.com.br">Falar com a Unitec <ArrowUpRight /></a>
              </div>
            </div>
            <div className="program-hero__visual">
              <img src="/assets/coworking.png" alt="Empreendedores trabalhando em conjunto na Unitec" />
              <div><strong>25+</strong><span>anos transformando ideias em negócios</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="container program-intro" data-reveal>
        <div>
          <p className="eyebrow">Empreender conectado</p>
          <h2>Você não precisa construir tudo sozinho.</h2>
        </div>
        <p>A Unitec combina método, infraestrutura e relacionamentos para reduzir incertezas e aproximar cada startup das pessoas certas.</p>
      </section>

      <section className="container benefit-grid" data-reveal>
        {unitecBenefits.map(({ icon: Icon, title, text }) => (
          <article className="benefit-card" key={title}><Icon /><h3>{title}</h3><p>{text}</p></article>
        ))}
      </section>

      <section className="journey-section">
        <div className="container" data-reveal>
          <div className="internal-section-heading internal-section-heading--light">
            <div><p className="eyebrow">Jornada Unitec</p><h2>Da primeira hipótese ao próximo mercado.</h2></div>
            <p>Cada etapa combina objetivos claros, acompanhamento e acesso à rede.</p>
          </div>
          <div className="journey-grid">
            {unitecJourney.map(([number, title, text]) => (
              <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="container modalities-section" id="modalidades" data-reveal>
        <div className="internal-section-heading">
          <div><p className="eyebrow">Modalidades</p><h2>Um formato para cada momento.</h2></div>
          <p>Escolha a experiência que melhor acompanha o estágio e a dinâmica do seu negócio.</p>
        </div>
        <div className="modality-grid">
          <article className="modality-card modality-card--featured">
            <small>Para começar</small><RocketLaunch /><h3>Pré-incubação</h3><p>Transforme uma ideia em oportunidade e valide os fundamentos do negócio.</p><span>Ideação e validação</span><a href="mailto:unitec@tecnosinos.com.br">Quero saber mais <ArrowRight /></a>
          </article>
          <article className="modality-card">
            <small>Presença no parque</small><Buildings /><h3>Incubação local</h3><p>Estrutura, acompanhamento e conexões no centro do parque.</p><span>Operação presencial</span><a href="mailto:unitec@tecnosinos.com.br">Quero saber mais <ArrowRight /></a>
          </article>
          <article className="modality-card">
            <small>Mais flexibilidade</small><GlobeHemisphereWest /><h3>Incubação híbrida</h3><p>Proximidade quando importa, com uma rotina adaptada ao seu time.</p><span>Presencial + remoto</span><a href="mailto:unitec@tecnosinos.com.br">Quero saber mais <ArrowRight /></a>
          </article>
        </div>
      </section>

      <PageCta
        eyebrow="Próximo passo"
        title="Vamos descobrir até onde sua ideia pode chegar?"
        text="Conte um pouco sobre seu projeto e converse com a equipe da Unitec sobre o melhor caminho."
        action="Apresentar minha ideia"
        href="mailto:unitec@tecnosinos.com.br"
        secondaryAction="Explorar empresas"
        secondaryHref="/empresas"
        onRoute={onRoute}
      />
    </main>
  );
}

const challengeAreas = [
  { icon: Code, title: "Tecnologia da informação", text: "Software, dados, inteligência artificial e cibersegurança." },
  { icon: GearSix, title: "Indústria e engenharias", text: "Automação, manufatura avançada, sensores e novos materiais." },
  { icon: Heartbeat, title: "Saúde e bem-estar", text: "Saúde digital, biotecnologia e tecnologias assistivas." },
  { icon: Leaf, title: "Sustentabilidade", text: "Energia, clima, circularidade e tecnologias socioambientais." },
];

export function OpenInnovationPage({ onRoute }) {
  const [submitted, setSubmitted] = useState(false);
  const submitChallenge = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="internal-page innovation-page">
      <section className="innovation-hero">
        <div className="container" data-reveal>
          <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Pesquisa e inovação" }, { label: "Inovação aberta" }]} onRoute={onRoute} />
          <div className="innovation-hero__grid">
            <div>
              <p className="eyebrow">Inovação aberta</p>
              <h1>Seu desafio encontra muitas respostas aqui.</h1>
              <p>Conectamos empresas a startups, pesquisadores, laboratórios e especialistas para transformar necessidades reais em projetos de inovação.</p>
              <a className="button" href="#desafio">Conte seu desafio <ArrowRight /></a>
            </div>
            <div className="innovation-orbit" role="img" aria-label="Empresas, startups, academia e poder público conectados a um desafio central">
              <div className="innovation-orbit__core"><Lightbulb weight="duotone" /><strong>Seu<br />desafio</strong></div>
              <span className="innovation-orbit__node innovation-orbit__node--one"><Buildings />Empresas</span>
              <span className="innovation-orbit__node innovation-orbit__node--two"><RocketLaunch />Startups</span>
              <span className="innovation-orbit__node innovation-orbit__node--three"><Flask />Pesquisa</span>
              <span className="innovation-orbit__node innovation-orbit__node--four"><Handshake />Parceiros</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container innovation-steps" data-reveal>
        <div className="internal-section-heading">
          <div><p className="eyebrow">Como funciona</p><h2>Do desafio ao projeto.</h2></div>
          <p>Uma jornada objetiva para encontrar competências, testar caminhos e gerar impacto.</p>
        </div>
        <div className="innovation-step-grid">
          <article><span>01</span><Target /><h3>Entendemos</h3><p>Mapeamos o contexto, os objetivos e os critérios que definem o sucesso.</p></article>
          <article><span>02</span><UsersThree /><h3>Conectamos</h3><p>Identificamos competências e formamos a rede mais adequada para responder.</p></article>
          <article><span>03</span><Sparkle /><h3>Construímos</h3><p>Estruturamos experimentos e projetos com entregas e próximos passos claros.</p></article>
        </div>
      </section>

      <section className="challenge-areas">
        <div className="container" data-reveal>
          <div className="internal-section-heading">
            <div><p className="eyebrow">Competências conectadas</p><h2>Conhecimento para desafios complexos.</h2></div>
            <p>Uma rede multidisciplinar pronta para combinar diferentes perspectivas.</p>
          </div>
          <div className="challenge-area-grid">
            {challengeAreas.map(({ icon: Icon, title, text }) => <article key={title}><Icon /><h3>{title}</h3><p>{text}</p><ArrowRight /></article>)}
          </div>
        </div>
      </section>

      <section className="challenge-form-section" id="desafio">
        <div className="container challenge-form-grid" data-reveal>
          <div className="challenge-form-copy">
            <p className="eyebrow">Comece uma conexão</p>
            <h2>Conte o que sua organização precisa transformar.</h2>
            <p>Uma descrição inicial já é suficiente. A equipe Tecnosinos ajuda a qualificar a oportunidade e indicar os próximos passos.</p>
            <ul><li><Check />Conversa inicial com a equipe</li><li><Check />Mapeamento de competências</li><li><Check />Indicação de um caminho de projeto</li></ul>
          </div>
          {submitted ? (
            <div className="challenge-success" role="status">
              <span><Check weight="bold" /></span>
              <p className="eyebrow">Desafio recebido</p>
              <h3>Obrigado por começar essa conversa.</h3>
              <p>Nossa equipe entrará em contato para entender o contexto e combinar o próximo passo.</p>
              <button type="button" onClick={() => setSubmitted(false)}>Enviar outro desafio <ArrowRight /></button>
            </div>
          ) : (
            <form className="challenge-form" onSubmit={submitChallenge}>
              <label><span>Nome</span><input required placeholder="Como podemos chamar você?" /></label>
              <label><span>E-mail corporativo</span><input required type="email" placeholder="voce@empresa.com.br" /></label>
              <label><span>Organização</span><input required placeholder="Nome da empresa ou instituição" /></label>
              <label><span>Área do desafio</span><select required defaultValue=""><option value="" disabled>Selecione uma área</option><option>Tecnologia e dados</option><option>Indústria e engenharia</option><option>Saúde e bem-estar</option><option>Sustentabilidade</option><option>Outro</option></select></label>
              <label className="challenge-form__wide"><span>Qual desafio você quer resolver?</span><textarea required rows="5" placeholder="Descreva brevemente o contexto, a necessidade e o resultado esperado." /></label>
              <label className="challenge-form__consent"><input required type="checkbox" /><span>Concordo em ser contatado pela equipe Tecnosinos sobre esta oportunidade.</span></label>
              <button className="button challenge-form__wide" type="submit">Enviar desafio <ArrowRight /></button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}

const ecosystemJobs = [
  {
    title: "Desenvolvedor(a) full stack sênior",
    company: "Tridel",
    location: "São Leopoldo, RS",
    mode: "Híbrido",
    area: "Tecnologia",
    summary: "Desenvolvimento de produtos digitais com React, Node.js e arquitetura em nuvem.",
  },
  {
    title: "Engenheiro(a) de automação",
    company: "Altus",
    location: "São Leopoldo, RS",
    mode: "Presencial",
    area: "Engenharia",
    summary: "Projetos de automação, controle e conectividade para operações industriais.",
  },
  {
    title: "Especialista em cibersegurança",
    company: "Empresa residente",
    location: "Remoto",
    mode: "Remoto",
    area: "Tecnologia",
    summary: "Segurança de aplicações, análise de riscos e evolução de práticas de proteção.",
  },
  {
    title: "Product designer",
    company: "Empresa residente",
    location: "São Leopoldo, RS",
    mode: "Híbrido",
    area: "Design",
    summary: "Pesquisa, desenho de experiências e colaboração com times de produto.",
  },
  {
    title: "Analista de dados júnior",
    company: "Nexora",
    location: "São Leopoldo, RS",
    mode: "Híbrido",
    area: "Dados",
    summary: "Preparação de dados, dashboards e análises para apoiar decisões de negócio.",
  },
  {
    title: "Estágio em pesquisa e inovação",
    company: "Instituto tecnológico",
    location: "São Leopoldo, RS",
    mode: "Presencial",
    area: "Pesquisa",
    summary: "Apoio a experimentos, documentação técnica e projetos de pesquisa aplicada.",
  },
];

const jobAreas = ["Todas", "Tecnologia", "Engenharia", "Design", "Dados", "Pesquisa"];

export function JobsPage({ onRoute }) {
  const [query, setQuery] = useState("");
  const [area, setArea] = useState(jobAreas[0]);

  const visibleJobs = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("pt-BR");
    return ecosystemJobs.filter((job) => {
      const matchesArea = area === jobAreas[0] || job.area === area;
      const searchable = `${job.title} ${job.company} ${job.location} ${job.mode} ${job.area} ${job.summary}`.toLocaleLowerCase("pt-BR");
      return matchesArea && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [area, query]);

  return (
    <main className="internal-page jobs-page">
      <section className="internal-hero jobs-hero">
        <div className="container" data-reveal>
          <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Talentos" }, { label: "Vagas no Tecnosinos" }]} onRoute={onRoute} />
          <div className="internal-hero__grid">
            <div>
              <p className="eyebrow">Carreiras no Tecnosinos</p>
              <h1>Seu próximo desafio pode começar aqui.</h1>
            </div>
            <p>Encontre oportunidades em empresas que desenvolvem tecnologia, conhecimento e novos negócios.</p>
          </div>
        </div>
      </section>

      <section className="directory-summary" aria-label="Sobre as oportunidades">
        <div className="container directory-summary__grid" data-reveal>
          <div><strong>+110</strong><span>empresas residentes</span></div>
          <div><strong>10</strong><span>áreas tecnológicas</span></div>
          <div><strong>+10 mil</strong><span>empregos no parque</span></div>
          <p>Um ambiente onde diferentes competências se encontram para criar soluções de impacto.</p>
        </div>
      </section>

      <section className="container jobs-content" data-reveal>
        <div className="directory-heading">
          <div><p className="eyebrow">Oportunidades abertas</p><h2>Encontre uma vaga</h2></div>
          <span>{visibleJobs.length} {visibleJobs.length === 1 ? "oportunidade encontrada" : "oportunidades encontradas"}</span>
        </div>

        <div className="directory-tools">
          <label className="directory-search">
            <span className="sr-only">Buscar vaga, empresa ou competência</span>
            <MagnifyingGlass aria-hidden="true" />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Busque por vaga, empresa ou competência" type="search" />
          </label>
          <label className="directory-select">
            <span>Área de atuação</span>
            <select value={area} onChange={(event) => setArea(event.target.value)}>
              {jobAreas.map((option) => <option value={option} key={option}>{option}</option>)}
            </select>
          </label>
        </div>

        {visibleJobs.length ? (
          <div className="jobs-list">
            {visibleJobs.map((job) => (
              <article className="job-card" key={`${job.company}-${job.title}`}>
                <div className="job-card__number">{String(ecosystemJobs.indexOf(job) + 1).padStart(2, "0")}</div>
                <div className="job-card__main">
                  <div className="job-card__meta"><span>{job.area}</span><span>{job.mode}</span></div>
                  <h3>{job.title}</h3>
                  <p>{job.summary}</p>
                </div>
                <div className="job-card__company">
                  <strong>{job.company}</strong>
                  <span><MapPin />{job.location}</span>
                </div>
                <a href={`mailto:contato@tecnosinos.com.br?subject=${encodeURIComponent(`Interesse na vaga: ${job.title}`)}`}>
                  Ver oportunidade <ArrowUpRight />
                </a>
              </article>
            ))}
          </div>
        ) : (
          <div className="directory-empty">
            <strong>Nenhuma vaga encontrada</strong>
            <p>Tente outro termo ou selecione todas as áreas.</p>
            <button type="button" className="button" onClick={() => { setQuery(""); setArea(jobAreas[0]); }}>Limpar filtros</button>
          </div>
        )}
      </section>

      <PageCta
        eyebrow="Empresas do parque"
        title="Quer atrair novos talentos?"
        text="Converse com a equipe Tecnosinos para divulgar oportunidades e aproximar sua empresa de profissionais conectados ao parque."
        action="Divulgar uma vaga"
        href="mailto:contato@tecnosinos.com.br?subject=Divulgar uma vaga no Tecnosinos"
        secondaryAction="Conhecer as empresas"
        secondaryHref="/empresas"
        onRoute={onRoute}
      />
    </main>
  );
}

const studyPaths = [
  {
    icon: Student,
    eyebrow: "Para escolas",
    title: "Programa Talentos",
    text: "Uma experiência de tecnologia, carreira e futuro para estudantes do 9º ano, ensino médio e técnico.",
    href: "/programa-talentos",
    action: "Conhecer o programa",
  },
  {
    icon: MapPin,
    eyebrow: "Para grupos e instituições",
    title: "Visitas ao parque",
    text: "Conheça os ambientes, as empresas e as conexões que fazem parte do Tecnosinos.",
    href: "mailto:contato@tecnosinos.com.br?subject=Agendar visita ao Tecnosinos",
    action: "Agendar uma visita",
  },
  {
    icon: ChalkboardTeacher,
    eyebrow: "Para aprender fazendo",
    title: "Oficinas e atividades",
    text: "Participe de experiências práticas ligadas à programação, robótica, inovação e empreendedorismo.",
    href: "mailto:unitec@unisinos.br?subject=Oficinas e atividades no Tecnosinos",
    action: "Consultar atividades",
  },
];

export function StudyVisitPage({ onRoute }) {
  return (
    <main className="internal-page study-page">
      <section className="study-hero">
        <div className="container" data-reveal>
          <Breadcrumb inverse items={[{ label: "Início", href: "/" }, { label: "Estudar ou visitar" }]} onRoute={onRoute} />
          <div className="study-hero__grid">
            <div>
              <p className="eyebrow">Estudar ou visitar</p>
              <h1>Conhecimento para experimentar de perto.</h1>
              <p>Descubra programas, espaços e atividades que aproximam pessoas da tecnologia e das possibilidades de futuro.</p>
            </div>
            <div className="study-hero__image">
              <img src="/assets/campus-community.png" alt="Estudantes reunidos em um ambiente de inovação" />
            </div>
          </div>
        </div>
      </section>

      <section className="container study-paths" data-reveal>
        <div className="internal-section-heading">
          <div><p className="eyebrow">Escolha sua experiência</p><h2>Há muitas formas de conhecer o Tecnosinos.</h2></div>
          <p>Encontre o caminho que combina com seu grupo, sua escola ou sua curiosidade.</p>
        </div>
        <div className="study-path-grid">
          {studyPaths.map(({ icon: Icon, eyebrow, title, text, href, action }, index) => (
            <a className={index === 0 ? "is-featured" : ""} href={href} onClick={href.startsWith("/") ? (event) => onRoute(event, href) : undefined} key={title}>
              <small>{eyebrow}</small>
              <Icon />
              <h3>{title}</h3>
              <p>{text}</p>
              <span>{action}<ArrowRight /></span>
            </a>
          ))}
        </div>
      </section>

      <section className="study-experience">
        <div className="container study-experience__grid" data-reveal>
          <div className="study-experience__image"><img src="/assets/workshop.png" alt="Grupo participando de uma atividade colaborativa" /></div>
          <div className="study-experience__copy">
            <p className="eyebrow">Uma visita, muitas descobertas</p>
            <h2>Veja a inovação acontecendo.</h2>
            <p>O roteiro pode aproximar seu grupo dos ambientes do parque, laboratórios, empresas e pessoas que transformam conhecimento em soluções.</p>
            <ul>
              <li><Check />Conheça o Parque Tecnológico e sua estrutura</li>
              <li><Check />Entenda como empresas, academia e poder público colaboram</li>
              <li><Check />Converse sobre profissões, tecnologia e empreendedorismo</li>
            </ul>
            <a className="button" href="mailto:contato@tecnosinos.com.br?subject=Agendar visita ao Tecnosinos">Planejar uma visita <ArrowRight /></a>
          </div>
        </div>
      </section>

      <PageCta
        eyebrow="Programa Talentos"
        title="Tecnologia também se aprende vivendo."
        text="Leve sua turma para conhecer o parque e participar de experiências que ampliam horizontes profissionais."
        action="Conhecer o programa"
        href="/programa-talentos"
        secondaryAction="Falar com a equipe"
        secondaryHref="mailto:unitec@unisinos.br"
        onRoute={onRoute}
      />
    </main>
  );
}

const talentExperiences = [
  { icon: Buildings, title: "Conhecer o parque", text: "Uma visita guiada pelas estruturas e pelos ambientes do Tecnosinos." },
  { icon: Flask, title: "Explorar laboratórios", text: "Contato com espaços onde pesquisa e tecnologia se tornam soluções." },
  { icon: UsersThree, title: "Conversar com quem faz", text: "Trocas com empreendedores e profissionais de startups do parque." },
  { icon: Robot, title: "Aprender na prática", text: "Oficinas de programação, robótica e empreendedorismo tecnológico." },
];

export function TalentsProgramPage({ onRoute }) {
  return (
    <main className="internal-page talents-program-page">
      <section className="program-hero talents-program-hero">
        <div className="container" data-reveal>
          <Breadcrumb inverse items={[{ label: "Início", href: "/" }, { label: "Estudar ou visitar", href: "/estudar-ou-visitar" }, { label: "Programa Talentos" }]} onRoute={onRoute} />
          <div className="program-hero__grid">
            <div className="program-hero__copy">
              <p className="eyebrow">Programa Talentos</p>
              <h1>Despertar futuros pela tecnologia.</h1>
              <p>Uma experiência de transformação social que aproxima estudantes do ambiente de inovação do Tecnosinos.</p>
              <div className="program-hero__actions">
                <a className="button" href="mailto:unitec@unisinos.br?subject=Participar do Programa Talentos">Levar minha escola <ArrowRight /></a>
                <a className="internal-text-link internal-text-link--light" href="#como-funciona">Como funciona <ArrowRight /></a>
              </div>
            </div>
            <div className="program-hero__visual">
              <img src="/assets/workshop.png" alt="Estudantes participando de uma oficina colaborativa" />
              <div><strong>+4 mil</strong><span>estudantes já participaram do programa</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="container program-intro talent-program-intro" data-reveal>
        <div>
          <p className="eyebrow">Transformação social desde 2011</p>
          <h2>Aproximar jovens da tecnologia abre novos caminhos.</h2>
        </div>
        <div className="talent-program-intro__copy">
          <p>O Programa Talentos aproxima estudantes do Tecnosinos por meio de visitas, encontros e atividades práticas.</p>
          <p>O objetivo é sensibilizar os alunos para oportunidades de carreira em tecnologia, promover uma aproximação lúdica com a área e estimular o empreendedorismo tecnológico jovem.</p>
        </div>
      </section>

      <section className="container benefit-grid talent-experience-grid" id="como-funciona" data-reveal>
        {talentExperiences.map(({ icon: Icon, title, text }) => (
          <article className="benefit-card" key={title}><Icon /><h3>{title}</h3><p>{text}</p></article>
        ))}
      </section>

      <section className="talent-audience">
        <div className="container talent-audience__grid" data-reveal>
          <div>
            <p className="eyebrow">Para quem é</p>
            <h2>Uma experiência pensada para escolas e estudantes.</h2>
          </div>
          <div className="talent-audience__details">
            <article><span>01</span><div><h3>9º ano do ensino fundamental</h3><p>Desde 2017, estudantes do nono ano também podem participar das experiências.</p></div></article>
            <article><span>02</span><div><h3>Ensino médio e técnico</h3><p>Turmas de escolas públicas e privadas podem conhecer possibilidades de formação e carreira.</p></div></article>
            <article><span>03</span><div><h3>Empresas parceiras</h3><p>Empresas do parque podem receber grupos e realizar atividades com os alunos.</p></div></article>
          </div>
        </div>
      </section>

      <section className="container talent-contact" data-reveal>
        <div className="talent-contact__icon"><CalendarBlank /></div>
        <div>
          <p className="eyebrow">Como participar</p>
          <h2>Vamos construir uma experiência para sua turma?</h2>
          <p>Professores e coordenadores de escolas públicas e privadas podem entrar em contato para incluir seus alunos no programa. Empresas interessadas em receber ou desenvolver atividades com as turmas também são bem-vindas.</p>
        </div>
        <a className="button" href="mailto:unitec@unisinos.br?subject=Programa Talentos">Falar com o Programa Talentos <ArrowRight /></a>
      </section>

      <PageCta
        eyebrow="Programa Talentos"
        title="O próximo talento pode estar na sua turma."
        text="Converse com a equipe e descubra como aproximar seus estudantes do Tecnosinos."
        action="Entrar em contato"
        href="mailto:unitec@unisinos.br?subject=Programa Talentos"
        secondaryAction="Outras formas de visitar"
        secondaryHref="/estudar-ou-visitar"
        onRoute={onRoute}
      />
    </main>
  );
}
