import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CaretDown,
  Check,
  LinkedinLogo,
  LinkSimple,
  MagnifyingGlass,
} from "@phosphor-icons/react";

export const featuredPublication = {
  slug: "conexoes-internacionais-negocios-tecnologia",
  image: "/assets/campus-community.png",
  category: "INOVAÇÃO",
  date: "24 de julho de 2026",
  shortDate: "24 jul 2026",
  readingTime: "6 min de leitura",
  title: "Tecnosinos amplia conexões internacionais para acelerar negócios de base tecnológica",
  lead: "Nova agenda conecta empresas e startups a mercados, especialistas e oportunidades de colaboração em diferentes países.",
  summary: "Nova agenda aproxima empresas e startups do parque de mercados, parceiros e redes estratégicas na Europa e na América Latina.",
};

export const archivePublications = [
  {
    ...featuredPublication,
    imagePosition: "center 42%",
  },
  {
    slug: featuredPublication.slug,
    image: "/assets/workshop.png",
    imagePosition: "center",
    category: "PARQUE",
    shortDate: "18 jul 2026",
    title: "Novas empresas reforçam o hub de automação e engenharias",
    summary: "Competências complementares ampliam as possibilidades de colaboração dentro do parque.",
  },
  {
    slug: featuredPublication.slug,
    image: "/assets/coworking.png",
    imagePosition: "center",
    category: "TALENTOS",
    shortDate: "10 jul 2026",
    title: "Carreiras em tecnologia: caminhos para começar e evoluir",
    summary: "Empresas do parque compartilham experiências e oportunidades para novos talentos.",
  },
  {
    slug: featuredPublication.slug,
    image: "/assets/workshop.png",
    imagePosition: "70% center",
    category: "PESQUISA",
    shortDate: "02 jul 2026",
    title: "Pesquisa aplicada desenvolve soluções para a saúde digital",
    summary: "Conhecimento científico e desafios reais se encontram em projetos de impacto.",
  },
  {
    slug: featuredPublication.slug,
    image: "/assets/campus-community.png",
    imagePosition: "30% center",
    category: "EVENTOS",
    shortDate: "26 jun 2026",
    title: "Semana da Tecnologia conecta mais de 2 mil participantes",
    summary: "Programação reuniu empresas, estudantes, pesquisadores e lideranças públicas.",
  },
  {
    slug: featuredPublication.slug,
    image: "/assets/coworking.png",
    imagePosition: "62% center",
    category: "INOVAÇÃO",
    shortDate: "18 jun 2026",
    title: "Startups da Unitec avançam em novos mercados",
    summary: "Novas parcerias apoiam a validação e o crescimento de negócios inovadores.",
  },
  {
    slug: featuredPublication.slug,
    image: "/assets/campus-community.png",
    imagePosition: "76% center",
    category: "SUSTENTABILIDADE",
    shortDate: "09 jun 2026",
    title: "Greentech Park transforma desafios ambientais em oportunidades",
    summary: "Tecnologia e colaboração impulsionam soluções para um futuro mais sustentável.",
  },
  {
    slug: featuredPublication.slug,
    image: "/assets/workshop.png",
    imagePosition: "35% center",
    category: "INTERNACIONALIZAÇÃO",
    shortDate: "29 mai 2026",
    title: "Softlanding aproxima empresas globais do ecossistema gaúcho",
    summary: "Programa facilita conexões locais e a entrada de negócios estrangeiros no Brasil.",
  },
  {
    slug: featuredPublication.slug,
    image: "/assets/coworking.png",
    imagePosition: "25% center",
    category: "SOCIEDADE",
    shortDate: "20 mai 2026",
    title: "Programa aproxima estudantes das profissões do futuro",
    summary: "Vivências no parque despertam novas perspectivas de carreira em tecnologia.",
  },
];

const categories = ["Todas", "Inovação", "Parque", "Talentos", "Pesquisa", "Eventos"];

function PublicationCard({ publication, onRoute, compact = false }) {
  const route = `/publicacoes/${publication.slug}`;

  return (
    <a
      className={`archive-card ${compact ? "archive-card--compact" : ""}`}
      href={route}
      onClick={(event) => onRoute(event, route)}
    >
      <span className="archive-card__media">
        <img
          src={publication.image}
          alt=""
          style={{ objectPosition: publication.imagePosition || "center" }}
        />
      </span>
      <span className="archive-card__body">
        <span className="archive-card__meta">
          <small>{publication.category}</small>
          <em>{publication.shortDate}</em>
        </span>
        <strong>{publication.title}</strong>
        {!compact && <p>{publication.summary}</p>}
        <span className="archive-card__action">Ler publicação <ArrowRight /></span>
      </span>
    </a>
  );
}

export function PublicationsPage({ onRoute }) {
  const [activeCategory, setActiveCategory] = useState("Todas");
  const [searchQuery, setSearchQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");
  const [year, setYear] = useState("2026");

  const visiblePublications = useMemo(() => {
    const normalizedQuery = submittedQuery.trim().toLocaleLowerCase("pt-BR");

    return archivePublications.filter((publication) => {
      const matchesCategory = activeCategory === "Todas"
        || publication.category.toLocaleLowerCase("pt-BR") === activeCategory.toLocaleLowerCase("pt-BR");
      const searchableContent = `${publication.title} ${publication.summary} ${publication.category}`.toLocaleLowerCase("pt-BR");
      return matchesCategory && (!normalizedQuery || searchableContent.includes(normalizedQuery));
    });
  }, [activeCategory, submittedQuery]);

  const hasFilters = activeCategory !== "Todas" || submittedQuery || year !== "2026";

  const clearFilters = () => {
    setActiveCategory("Todas");
    setSearchQuery("");
    setSubmittedQuery("");
    setYear("2026");
  };

  const submitSearch = (event) => {
    event.preventDefault();
    setSubmittedQuery(searchQuery);
  };

  const articleRoute = `/publicacoes/${featuredPublication.slug}`;

  return (
    <main className="publications-page">
      <section className="publications-page-hero">
        <div className="container publications-page-hero__inner" data-reveal>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="/" onClick={(event) => onRoute(event, "/")}>Início</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Publicações</span>
          </nav>
          <p className="eyebrow">Conteúdo e conhecimento</p>
          <h1>Publicações</h1>
          <p>Notícias, pesquisas, histórias e conexões que movimentam o Tecnosinos.</p>
        </div>
      </section>

      <section className="container publication-tools-wrap" data-reveal aria-label="Ferramentas de busca e filtro">
        <form className="publication-tools" onSubmit={submitSearch}>
          <label className="publication-search">
            <span className="sr-only">Buscar publicações</span>
            <MagnifyingGlass aria-hidden="true" />
            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Buscar por título, tema ou palavra-chave"
            />
          </label>
          <label className="publication-year">
            <span className="sr-only">Filtrar por ano</span>
            <select value={year} onChange={(event) => setYear(event.target.value)}>
              <option value="2026">Todos os anos</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
            </select>
            <CaretDown aria-hidden="true" />
          </label>
          <button className="button publication-search-button" type="submit">Buscar <ArrowRight /></button>
        </form>
        <div className="publication-category-row">
          <div className="publication-categories" aria-label="Filtrar por categoria">
            {categories.map((category) => (
              <button
                className={activeCategory === category ? "is-active" : ""}
                type="button"
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
                key={category}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="publication-results">
            <span>{visiblePublications.length} {visiblePublications.length === 1 ? "publicação encontrada" : "publicações encontradas"}</span>
            {hasFilters && <button type="button" onClick={clearFilters}>Limpar filtros</button>}
          </div>
        </div>
      </section>

      <section className="container publication-feature" data-reveal aria-labelledby="publication-feature-title">
        <a className="publication-feature__media" href={articleRoute} onClick={(event) => onRoute(event, articleRoute)}>
          <img src={featuredPublication.image} alt="Comunidade do Tecnosinos reunida em uma atividade de conexão" />
        </a>
        <div className="publication-feature__content">
          <div className="publication-feature__meta">
            <span>{featuredPublication.category}</span>
            <time>{featuredPublication.date}</time>
            <span aria-hidden="true">•</span>
            <span>{featuredPublication.readingTime}</span>
          </div>
          <h2 id="publication-feature-title">
            <a href={articleRoute} onClick={(event) => onRoute(event, articleRoute)}>{featuredPublication.title}</a>
          </h2>
          <p>{featuredPublication.summary}</p>
          <a className="publication-feature__link" href={articleRoute} onClick={(event) => onRoute(event, articleRoute)}>
            Ler publicação <ArrowRight />
          </a>
        </div>
      </section>

      <section className="container publication-archive" data-reveal>
        <div className="publication-archive__heading">
          <div>
            <p className="eyebrow">Arquivo Tecnosinos</p>
            <h2>Últimas publicações</h2>
          </div>
          <span>Atualizado em julho de 2026</span>
        </div>

        {visiblePublications.length ? (
          <div className="publication-list-grid">
            {visiblePublications.map((publication, index) => (
              <PublicationCard
                publication={publication}
                onRoute={onRoute}
                key={`${publication.title}-${index}`}
              />
            ))}
          </div>
        ) : (
          <div className="publication-empty">
            <strong>Nenhuma publicação encontrada</strong>
            <p>Tente buscar por outro tema ou remova os filtros aplicados.</p>
            <button className="button" type="button" onClick={clearFilters}>Limpar filtros</button>
          </div>
        )}

        <nav className="publication-pagination" aria-label="Paginação de publicações">
          <button type="button" disabled aria-label="Página anterior"><ArrowLeft /></button>
          <button className="is-active" type="button" aria-current="page">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button type="button" aria-label="Próxima página"><ArrowRight /></button>
        </nav>
      </section>
    </main>
  );
}

export function PublicationArticlePage({ onRoute }) {
  const [copied, setCopied] = useState(false);
  const archiveRoute = "/publicacoes";

  const copyLink = () => {
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <main className="article-page">
      <article>
        <header className="article-header">
          <div className="container article-header__inner" data-reveal>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <a href="/" onClick={(event) => onRoute(event, "/")}>Início</a>
              <span aria-hidden="true">/</span>
              <a href={archiveRoute} onClick={(event) => onRoute(event, archiveRoute)}>Publicações</a>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Inovação</span>
            </nav>
            <div className="article-header__meta">
              <span>{featuredPublication.category}</span>
              <span>{featuredPublication.readingTime}</span>
            </div>
            <h1>{featuredPublication.title}</h1>
            <p className="article-lead">{featuredPublication.lead}</p>
            <div className="article-byline">
              <span>{featuredPublication.date}</span>
              <span>Por equipe Tecnosinos</span>
            </div>
            <div className="article-share article-share--top" aria-label="Compartilhar publicação">
              <a href="#" aria-label="Compartilhar no LinkedIn"><LinkedinLogo weight="fill" /></a>
              <button type="button" onClick={copyLink} aria-label="Copiar link da publicação">
                {copied ? <Check weight="bold" /> : <LinkSimple />}
              </button>
              {copied && <span role="status">Link copiado</span>}
            </div>
          </div>
        </header>

        <div className="container article-cover" data-reveal>
          <img src={featuredPublication.image} alt="Pessoas conectadas em uma atividade do Tecnosinos" />
        </div>

        <div className="container article-layout" data-reveal>
          <div className="article-content">
            <p className="article-intro">A internacionalização faz parte da estratégia do Tecnosinos para aproximar conhecimento, tecnologia e mercado. A partir de uma agenda contínua de conexões, o parque abre caminhos para que empresas e startups encontrem parceiros, validem soluções e reconheçam novas oportunidades de atuação.</p>

            <h2 id="conexoes">Conexões que encurtam caminhos</h2>
            <p>Os programas Softlanding e Take Off organizam uma jornada de entrada e expansão em novos mercados. O trabalho começa pelo entendimento do negócio e avança com encontros direcionados, apoio local e acesso a uma rede de especialistas que conhece as particularidades de cada região.</p>
            <p>Ao mesmo tempo, parcerias com parques tecnológicos, universidades e hubs internacionais ampliam o alcance das iniciativas criadas em São Leopoldo. Essa rede torna a inovação mais aberta e aproxima competências complementares para responder a desafios reais.</p>

            <blockquote className="article-quote">
              <p>“Internacionalizar é criar pontes para que conhecimento, tecnologia e mercado avancem juntos.”</p>
              <cite>Equipe Tecnosinos</cite>
            </blockquote>

            <h2 id="beneficios">O que muda para empresas e startups</h2>
            <p>Na prática, a nova agenda internacional transforma relacionamentos em possibilidades concretas de desenvolvimento. Entre os principais benefícios estão:</p>
            <ul>
              <li><strong>Acesso a redes e mercados</strong><span>Conexões qualificadas com ecossistemas, potenciais clientes e parceiros estratégicos.</span></li>
              <li><strong>Apoio para validar soluções</strong><span>Leitura de cenário, aproximação cultural e suporte para testar propostas de valor.</span></li>
              <li><strong>Integração com talentos e pesquisa</strong><span>Projetos que combinam conhecimento acadêmico, capacidade técnica e visão de mercado.</span></li>
            </ul>

            <h2 id="proximos-passos">Próximos passos</h2>
            <p>A agenda segue com missões, encontros de negócios e novas chamadas para empresas interessadas em internacionalização. O objetivo é fazer com que cada conexão ajude a construir uma trajetória sustentável de crescimento.</p>
            <a className="article-inline-cta" href="/#global" onClick={(event) => onRoute(event, "/#global")}>Conheça os programas de internacionalização <ArrowRight /></a>

            <div className="article-tags" aria-label="Temas relacionados">
              <span>Inovação</span>
              <span>Internacionalização</span>
              <span>Parque</span>
            </div>
            <a className="article-back-link" href={archiveRoute} onClick={(event) => onRoute(event, archiveRoute)}><ArrowLeft /> Voltar para publicações</a>
          </div>

          <aside className="article-aside">
            <div className="article-toc">
              <strong>Neste artigo</strong>
              <a href="#conexoes">Conexões que encurtam caminhos</a>
              <a href="#beneficios">O que muda para empresas e startups</a>
              <a href="#proximos-passos">Próximos passos</a>
            </div>
            <div className="article-aside__share">
              <strong>Compartilhe</strong>
              <div className="article-share">
                <a href="#" aria-label="Compartilhar no LinkedIn"><LinkedinLogo weight="fill" /></a>
                <button type="button" onClick={copyLink} aria-label="Copiar link da publicação">
                  {copied ? <Check weight="bold" /> : <LinkSimple />}
                </button>
              </div>
            </div>
            <div className="article-contact-card">
              <small>Conexões globais</small>
              <strong>Quer conectar sua empresa a novos mercados?</strong>
              <a className="button" href="/#contato" onClick={(event) => onRoute(event, "/#contato")}>Fale com a equipe <ArrowRight /></a>
            </div>
          </aside>
        </div>
      </article>

      <section className="related-publications" data-reveal>
        <div className="container">
          <div className="related-publications__heading">
            <div>
              <p className="eyebrow">Conteúdo relacionado</p>
              <h2>Continue explorando</h2>
            </div>
            <a href={archiveRoute} onClick={(event) => onRoute(event, archiveRoute)}>Ver todas <ArrowRight /></a>
          </div>
          <div className="related-publications__grid">
            {archivePublications.slice(1, 4).map((publication) => (
              <PublicationCard compact publication={publication} onRoute={onRoute} key={publication.title} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
