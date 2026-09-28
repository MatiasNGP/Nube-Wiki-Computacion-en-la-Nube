import sourcePdf from './informacion/5_gsi_nube_responsabilidad_rubensch.pdf?url'
import './App.css'

const sections = [
  { id: 'que-es-la-nube', number: '01', label: 'Qué es la nube' },
  { id: 'responsabilidades', number: '02', label: 'Quién responde por qué' },
  { id: 'seguridad-azure', number: '03', label: 'Seguridad en Azure' },
]

const responsibilityRows = [
  { name: 'Datos e información', customer: [1, 1, 1] },
  { name: 'Identidades y accesos', customer: [1, 1, 1] },
  { name: 'Aplicaciones', customer: [1, 1, 0] },
  { name: 'Sistema operativo', customer: [1, 0, 0] },
  { name: 'Red y controles', customer: [1, 0, 0] },
]

function ArrowIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M10 5l5 5-5 5" /></svg>
}

function App() {
  return (
    <div className="wiki-shell">
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Nube Wiki, inicio">
          <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
          <span>NUBE<span className="brand-light">/WIKI</span></span>
        </a>
        <nav className="top-nav" aria-label="Navegación principal">
          <a href="#que-es-la-nube">Conceptos</a>
          <a href="#responsabilidades">Responsabilidad</a>
          <a href="#seguridad-azure">Azure</a>
        </nav>
        <a className="source-link" href={sourcePdf} target="_blank" rel="noreferrer">
          <span>DOCUMENTO BASE</span><ArrowIcon />
        </a>
      </header>

      <main id="inicio">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> GUÍA ESENCIAL · COMPUTACIÓN EN LA NUBE</p>
            <h1 id="hero-title">La nube,<br /><em>sin niebla.</em></h1>
            <p className="hero-intro">Una guía para entender dónde viven tus servicios, quién cuida cada capa y cómo construir seguridad en Azure.</p>
            <a className="hero-cta" href="#que-es-la-nube">Explorar la guía <ArrowIcon /></a>
            <p className="hero-note">3 TEMAS <span /> LECTURA CLARA <span /> FUENTE: GSI</p>
          </div>
          <div className="cloud-visual" role="img" aria-label="Diagrama de servicios conectados a una plataforma en la nube">
            <div className="visual-topline"><span>ARQUITECTURA EN LA NUBE</span><span>01 — 03</span></div>
            <div className="cloud-stage">
              <div className="orbit orbit-one" /><div className="orbit orbit-two" />
              <div className="cloud-core">
                <span className="cloud-spark">✳</span>
                <svg viewBox="0 0 96 64" aria-hidden="true"><path d="M25 50h45a15 15 0 0 0 1-30A24 24 0 0 0 25 24a13 13 0 0 0 0 26Z" /></svg>
                <span>AZURE CLOUD</span>
              </div>
              <div className="node node-data"><b>01</b><span>DATOS</span></div>
              <div className="node node-identity"><b>02</b><span>IDENTIDAD</span></div>
              <div className="node node-app"><b>03</b><span>APLICACIONES</span></div>
              <div className="node node-infra"><b>04</b><span>INFRAESTRUCTURA</span></div>
              <span className="connector connector-a" /><span className="connector connector-b" />
              <span className="connector connector-c" /><span className="connector connector-d" />
            </div>
            <div className="visual-caption"><span>UNA RESPONSABILIDAD COMPARTIDA</span><span className="caption-line" /><span>CLIENTE + PROVEEDOR</span></div>
          </div>
          <div className="hero-index">01<span> / </span>03</div>
        </section>

        <div className="content-layout">
          <aside className="sidebar">
            <p className="sidebar-label">EN ESTA GUÍA</p>
            <nav aria-label="Índice de la guía">
              {sections.map((section) => <a key={section.id} href={`#${section.id}`}><span>{section.number}</span>{section.label}</a>)}
            </nav>
            <div className="sidebar-source">
              <span className="source-icon">↗</span>
              <p>Contenido basado en el material de GSI sobre nube y responsabilidad.</p>
              <a href={sourcePdf} target="_blank" rel="noreferrer">Abrir PDF fuente <ArrowIcon /></a>
            </div>
          </aside>

          <div className="article-content">
            <section className="article-section cloud-definition" id="que-es-la-nube">
              <div className="section-heading"><span className="section-number">01</span><div><p className="eyebrow">EL CONCEPTO</p><h2>¿Qué es la nube?</h2></div></div>
              <div className="definition-grid">
                <p className="definition-lead">Es tecnología disponible <em>cuando la necesitas</em>, sin tener que construir ni mantener el centro de datos por tu cuenta.</p>
                <div className="definition-detail">
                  <p>La computación en la nube ofrece recursos informáticos a través de internet: servidores, almacenamiento, redes, bases de datos y software. Se aprovisionan bajo demanda y se pueden ampliar o reducir según el uso.</p>
                  <p>En vez de comprar y operar toda la infraestructura, una organización consume servicios de un proveedor y paga según el modelo contratado.</p>
                </div>
              </div>
              <div className="cloud-types" aria-label="Modelos de servicio en la nube">
                <article><span className="type-index">A</span><div><h3>IaaS</h3><p>Infraestructura como servicio</p></div><span className="type-arrow">↗</span></article>
                <article><span className="type-index">B</span><div><h3>PaaS</h3><p>Plataforma como servicio</p></div><span className="type-arrow">↗</span></article>
                <article><span className="type-index">C</span><div><h3>SaaS</h3><p>Software como servicio</p></div><span className="type-arrow">↗</span></article>
              </div>
              <p className="micro-note"><span /> CUANTO MÁS GESTIONA EL PROVEEDOR, MENOS INFRAESTRUCTURA OPERA EL CLIENTE.</p>
            </section>

            <section className="article-section responsibility-section" id="responsabilidades">
              <div className="section-heading"><span className="section-number">02</span><div><p className="eyebrow">EL MODELO COMPARTIDO</p><h2>¿Quién responde por qué?</h2></div></div>
              <p className="section-intro">Migrar a la nube no elimina la responsabilidad: la redistribuye. El proveedor protege la nube; el cliente protege lo que ejecuta y configura en ella.</p>
              <div className="matrix-wrap">
                <div className="matrix-title"><span>CAPA / RESPONSABLE</span><span className="matrix-legend"><i className="customer-key" /> Cliente <i className="provider-key" /> Proveedor</span></div>
                <div className="matrix-table" role="table" aria-label="Responsabilidades por modelo de servicio">
                  <div className="matrix-row matrix-header" role="row"><span role="columnheader">Responsabilidad</span><span role="columnheader">IaaS</span><span role="columnheader">PaaS</span><span role="columnheader">SaaS</span></div>
                  {responsibilityRows.map((row) => <div className="matrix-row" role="row" key={row.name}><span className="layer-name" role="rowheader">{row.name}</span>{[0, 1, 2].map((index) => <span className="matrix-cell" role="cell" key={index}><i className={row.customer[index] ? 'customer-cell' : 'provider-cell'} title={row.customer[index] ? 'Cliente' : 'Proveedor'} /></span>)}</div>)}
                  <div className="matrix-row physical-row" role="row"><span className="layer-name" role="rowheader">Centro de datos físico</span>{[0, 1, 2].map((index) => <span className="matrix-cell" role="cell" key={index}><i className="provider-cell" title="Proveedor" /></span>)}</div>
                </div>
                <div className="matrix-footer"><span>EL CLIENTE SIEMPRE RESPONDE POR SUS DATOS Y ACCESOS.</span><span>← MÁS CONTROL · MÁS GESTIÓN →</span></div>
              </div>
              <p className="table-note">Vista simplificada del modelo de responsabilidad compartida. Los límites exactos dependen del servicio y la configuración contratada.</p>
            </section>

            <section className="article-section security-section" id="seguridad-azure">
              <div className="section-heading"><span className="section-number">03</span><div><p className="eyebrow">AZURE WELL-ARCHITECTED</p><h2>El pilar de seguridad</h2></div></div>
              <div className="security-intro">
                <p className="security-lead">La seguridad no es una casilla al final. Es una práctica continua que protege cargas de trabajo frente a ataques y errores.</p>
                <p>El pilar de seguridad del Azure Well-Architected Framework orienta el diseño, la operación y la mejora de las soluciones. Su objetivo: confidencialidad, integridad y disponibilidad, con controles adecuados al riesgo.</p>
              </div>
              <div className="security-grid">
                <article><span className="security-code">01 / IDENTIDAD</span><h3>Verifica cada acceso</h3><p>Aplica mínimo privilegio, autenticación sólida y control de identidades para que cada persona y servicio tenga solo el acceso que necesita.</p></article>
                <article><span className="security-code">02 / PROTECCIÓN</span><h3>Reduce la superficie</h3><p>Protege redes, aplicaciones y datos; cifra la información y limita la exposición de los recursos.</p></article>
                <article><span className="security-code">03 / OPERACIONES</span><h3>Detecta y responde</h3><p>Registra la actividad, identifica amenazas y prepara una respuesta para contener incidentes y recuperar el servicio.</p></article>
                <article><span className="security-code">04 / GOBIERNO</span><h3>Mantén el control</h3><p>Define políticas y estándares, revisa la postura de seguridad y corrige desviaciones durante todo el ciclo de vida.</p></article>
              </div>
              <div className="security-callout"><span className="callout-mark">+</span><p><strong>Idea clave</strong> La plataforma aporta herramientas; una configuración segura y su uso responsable siguen siendo parte del trabajo del cliente.</p></div>
            </section>

            <footer className="article-footer"><span>NUBE/WIKI · FUNDAMENTOS</span><a href={sourcePdf} target="_blank" rel="noreferrer">Consultar el documento fuente <ArrowIcon /></a></footer>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
