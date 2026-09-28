import { useEffect, useState } from 'react'
import sourcePdf from './informacion/5_gsi_nube_responsabilidad_rubensch.pdf?url'
import cloudImage from './assets/hero.png'
import './Wiki.css'

const categories = [
  { id: 'fundamentos', label: 'Fundamentos', description: 'Conceptos para entender qué ofrece la nube.' },
  { id: 'arquitectura', label: 'Arquitectura', description: 'Servicios, redes y diseño de plataformas.' },
  { id: 'seguridad', label: 'Seguridad', description: 'Identidades, controles y responsabilidad.' },
  { id: 'operacion', label: 'Operación', description: 'Disponibilidad, observabilidad y costes.' },
]

const articles = [
  {
    id: 'nube-computacion', title: 'Computación en la nube', category: 'fundamentos', readingTime: '6 min', featured: true,
    excerpt: 'Qué significa usar recursos informáticos por internet y qué cambia frente a operar un centro de datos propio.',
    sections: [
      { id: 'definicion', title: 'Una definición práctica', paragraphs: ['La computación en la nube es un modelo para acceder, a través de una red, a recursos compartidos como procesamiento, almacenamiento, redes, bases de datos y software. Se pueden aprovisionar y liberar con rapidez, sin comprar y montar cada equipo por adelantado.', 'El proveedor opera centros de datos y ofrece servicios mediante portales, APIs y herramientas de automatización. El cliente configura y consume esos servicios, y paga según el contrato: por uso, capacidad reservada, licencia u otras combinaciones.'], bullets: ['Autoservicio bajo demanda: los equipos pueden crear recursos sin esperar la compra de hardware.', 'Elasticidad: la capacidad puede crecer o reducirse según la carga.', 'Acceso por red: usuarios y sistemas consumen servicios desde ubicaciones autorizadas.', 'Medición del consumo: uso, capacidad y coste se pueden observar por recurso o cuenta.'] },
      { id: 'que-cambia', title: 'Qué cambia respecto al centro de datos propio', paragraphs: ['La nube no elimina la infraestructura física: cambia quién la compra y opera, y cómo se solicita. En un entorno tradicional, la organización planifica capacidad, adquiere equipos y mantiene instalaciones. En la nube, una parte de esas tareas pasa al proveedor y los equipos trabajan más mediante configuración y servicios.', 'El cambio también es organizativo. La rapidez para crear recursos facilita experimentar, pero exige control de acceso, estándares, presupuestos y procesos de retirada para evitar configuraciones inseguras o gasto olvidado.'], bullets: ['Menor inversión inicial en hardware, a cambio de gasto operativo recurrente.', 'Más automatización y repetibilidad, si los recursos se describen y despliegan como código.', 'Responsabilidades distintas según el tipo de servicio y el nivel de gestión contratado.'] },
      { id: 'cuando-conviene', title: 'Cuándo aporta valor', paragraphs: ['Es especialmente útil cuando la demanda fluctúa, se necesita desplegar en distintas regiones o un equipo quiere concentrarse en el producto sin administrar cada capa física. También puede ayudar a modernizar sistemas existentes, aunque una migración sin rediseño no garantiza por sí sola menor coste ni mejor rendimiento.'], callout: 'La nube es un modelo de operación, no una ubicación mágica: arquitectura, configuración y decisiones de negocio siguen importando.' },
    ],
  },
  {
    id: 'modelos-servicio', title: 'IaaS, PaaS y SaaS', category: 'fundamentos', readingTime: '7 min',
    excerpt: 'Compara los modelos de servicio según cuánto administra el proveedor y cuánto control conserva el cliente.',
    sections: [
      { id: 'tres-modelos', title: 'Tres niveles de gestión', paragraphs: ['Los modelos de servicio describen qué capas recibe listas para usar y cuáles debe administrar el cliente. No son categorías de calidad: cada modelo intercambia control por conveniencia y debe evaluarse según los requisitos del sistema.'], bullets: ['IaaS (infraestructura como servicio): máquinas virtuales, redes y discos; el cliente suele administrar el sistema operativo y lo que instala encima.', 'PaaS (plataforma como servicio): un entorno administrado para ejecutar aplicaciones; el proveedor gestiona más componentes de plataforma.', 'SaaS (software como servicio): una aplicación completa que se consume como servicio; el cliente administra usuarios, datos y configuración funcional.'] },
      { id: 'eleccion', title: 'Cómo elegir', paragraphs: ['Elige IaaS cuando necesitas control del sistema operativo o compatibilidad con una carga heredada. PaaS reduce el trabajo operativo cuando la aplicación encaja con las capacidades de la plataforma. SaaS suele ser adecuado para capacidades estándar que no justifican desarrollar y operar un producto propio.', 'En la práctica existen servicios intermedios. La etiqueta comercial no basta: revisa el contrato, la documentación del servicio y qué controles concretos quedan en manos de cada parte.'], bullets: ['Requisitos de personalización y compatibilidad.', 'Habilidades y capacidad operativa del equipo.', 'Portabilidad, integración, disponibilidad, seguridad y coste total.'] },
      { id: 'responsabilidad-por-capa', title: 'La responsabilidad se desplaza por capa', paragraphs: ['Al pasar de IaaS a PaaS y SaaS, el proveedor suele asumir más operación técnica. Esto no transfiere automáticamente la responsabilidad por los datos, las identidades o la configuración del cliente. Esos límites varían entre servicios y deben verificarse para cada carga.'] },
    ],
  },
  {
    id: 'modelos-despliegue', title: 'Nube pública, privada e híbrida', category: 'fundamentos', readingTime: '5 min',
    excerpt: 'Diferencias entre modelos de despliegue y escenarios donde se combinan entornos locales y servicios públicos.',
    sections: [
      { id: 'publica-privada', title: 'Pública y privada', paragraphs: ['En una nube pública, un proveedor ofrece servicios a múltiples clientes sobre infraestructura compartida y aislada lógicamente. Cada cliente consume sus recursos y configuraciones sin operar el centro de datos subyacente.', 'Una nube privada reserva el entorno para una organización. Puede estar en instalaciones propias o alojada por un proveedor; por sí sola no implica elasticidad, automatización ni buenas prácticas de nube. Esas capacidades dependen de cómo se diseñe y opere.'] },
      { id: 'hibrida', title: 'Arquitectura híbrida', paragraphs: ['Un entorno híbrido integra servicios públicos con infraestructura local o privada. Puede permitir mantener sistemas que no se migran todavía, cumplir restricciones específicas o acercar ciertos componentes a usuarios y equipos.', 'La integración añade trabajo: identidad coherente, conectividad, observabilidad, clasificación de datos y recuperación deben funcionar entre entornos. “Híbrido” no significa automáticamente más seguro ni más barato.'], bullets: ['Define qué sistema es autoridad para cada dato y configuración.', 'Diseña enlaces de red redundantes y controla sus costes.', 'Evita dependencias innecesarias entre entornos que compliquen la recuperación.'] },
      { id: 'multinube', title: 'Multinube', paragraphs: ['Usar dos o más proveedores puede responder a necesidades de producto, cobertura o resiliencia. También multiplica herramientas, contratos, modelos de identidad y competencias necesarias. Un diseño multinube tiene valor cuando existe un requisito concreto que compensa esa complejidad.'] },
    ],
  },
  {
    id: 'regiones-zonas', title: 'Regiones y zonas de disponibilidad', category: 'arquitectura', readingTime: '6 min',
    excerpt: 'Cómo se organiza geográficamente la infraestructura y qué significan resiliencia local y recuperación regional.',
    sections: [
      { id: 'region', title: 'Regiones geográficas', paragraphs: ['Una región es un área geográfica donde un proveedor ofrece uno o más centros de datos y servicios. Elegirla afecta latencia, disponibilidad de servicios, residencia de datos y precio. La cercanía suele reducir latencia, pero no es el único criterio.', 'Los requisitos legales y contractuales pueden limitar dónde se almacena o procesa información. Hay que revisar las condiciones del servicio y distinguir residencia de datos, ubicación de procesamiento y ubicación de respaldos.'] },
      { id: 'zonas', title: 'Zonas de disponibilidad', paragraphs: ['Las zonas son ubicaciones físicamente separadas dentro de ciertas regiones. Tienen infraestructura independiente, con servicios de energía, refrigeración y red diseñados para limitar fallos compartidos. Una aplicación debe distribuir sus componentes entre zonas para aprovechar esa separación.', 'La disponibilidad zonal no siempre se ofrece para cada servicio o región. También puede aumentar costes y complejidad; verifica compatibilidad y dependencias antes de diseñar.'] },
      { id: 'diseno-geografico', title: 'Elegir una estrategia geográfica', paragraphs: ['Una arquitectura multizona busca resistir fallos de una zona. La recuperación entre regiones aborda interrupciones de mayor alcance, pero necesita replicación, procedimientos probados y una decisión explícita sobre pérdida de datos aceptable.'], bullets: ['Selecciona una región compatible con requisitos regulatorios, técnicos y de latencia.', 'Identifica dependencias que podrían seguir siendo un punto único de fallo.', 'Prueba conmutación y recuperación; la topología por sí sola no demuestra que funcionen.'] },
    ],
  },
  {
    id: 'computo', title: 'Cómputo: máquinas virtuales y contenedores', category: 'arquitectura', readingTime: '7 min',
    excerpt: 'Opciones para ejecutar cargas de trabajo y criterios para decidir cuánto administrar.',
    sections: [
      { id: 'maquinas-virtuales', title: 'Máquinas virtuales', paragraphs: ['Una máquina virtual (VM) emula un equipo con sistema operativo, CPU, memoria, disco y red. Permite controlar el sistema operativo y ejecutar software existente, pero el equipo debe actualizarlo, endurecerlo, supervisarlo y planificar su capacidad.', 'El tamaño, la imagen base y el almacenamiento influyen en coste y rendimiento. Mantén imágenes aprobadas, parches al día y mecanismos para reconstruir la VM de forma consistente.'] },
      { id: 'contenedores', title: 'Contenedores y orquestación', paragraphs: ['Un contenedor empaqueta una aplicación con sus dependencias para ejecutarla de forma consistente. Comparte el kernel del sistema anfitrión y suele iniciarse con rapidez; Kubernetes y otros orquestadores coordinan despliegue, escalado y recuperación de muchos contenedores.', 'Los contenedores no reemplazan toda operación: imágenes, secretos, red, límites de recursos, actualizaciones y seguridad del clúster requieren gestión. Para una sola aplicación, una plataforma administrada puede ser más sencilla que operar un clúster propio.'] },
      { id: 'serverless', title: 'Funciones y cómputo serverless', paragraphs: ['En servicios serverless, el proveedor administra buena parte de servidores y escalado. El equipo despliega funciones o aplicaciones y paga según la unidad de consumo definida por el producto. “Sin servidor” describe el modelo operativo, no la ausencia de servidores.', 'Es útil para cargas eventuales o dirigidas por eventos, siempre que los límites de ejecución, latencia de arranque, observabilidad y dependencias se adapten al caso.'] },
    ],
  },
  {
    id: 'almacenamiento', title: 'Almacenamiento y bases de datos', category: 'arquitectura', readingTime: '7 min',
    excerpt: 'Almacenamiento de objetos, archivos y bloques, junto con las decisiones de persistencia y protección de datos.',
    sections: [
      { id: 'tipos-almacenamiento', title: 'Objetos, archivos y bloques', paragraphs: ['El almacenamiento de objetos organiza datos como elementos con metadatos y es habitual para imágenes, copias, registros y contenido no estructurado. El almacenamiento de archivos ofrece directorios compartidos y protocolos de acceso conocidos. El almacenamiento en bloques presenta volúmenes que suelen asociarse a máquinas y sistemas de archivos.', 'Cada opción tiene niveles de rendimiento, durabilidad, acceso y coste diferentes. Retención, redundancia geográfica y niveles de acceso frío o caliente cambian el precio y los tiempos de recuperación.'] },
      { id: 'bases-datos', title: 'Bases de datos administradas', paragraphs: ['Una base de datos como servicio puede automatizar parches, copias y mantenimiento, pero no decide por el equipo el esquema, el acceso, la retención ni la consistencia requerida. SQL relacional, documentos, clave-valor y otros modelos resuelven necesidades distintas.', 'Diseña índices y consultas según patrones reales; monitoriza latencia, conexiones y crecimiento. Evalúa límites de servicio y procedimientos de exportación para evitar sorpresas al escalar o migrar.'] },
      { id: 'proteccion-datos', title: 'Durabilidad no es una copia de seguridad', paragraphs: ['La redundancia protege frente a ciertos fallos de hardware, pero puede replicar borrados, corrupción o cifrado malicioso. Las copias de seguridad deben tener retención definida, protección frente a cambios no autorizados y pruebas periódicas de restauración.'], callout: 'Define qué datos recuperar, hasta qué punto en el tiempo y en cuánto tiempo. Luego prueba que la restauración cumple esos objetivos.' },
    ],
  },
  {
    id: 'redes', title: 'Redes virtuales y conectividad', category: 'arquitectura', readingTime: '6 min',
    excerpt: 'Subredes, enrutamiento, exposición pública y conexiones seguras entre recursos y usuarios.',
    sections: [
      { id: 'red-virtual', title: 'Redes virtuales', paragraphs: ['Una red virtual define un espacio de direcciones aislado donde se conectan recursos. Subredes permiten segmentar cargas y aplicar rutas o controles distintos. Planificar rangos IP desde el principio evita conflictos al conectar redes locales, otras nubes o sedes.', 'Las reglas de seguridad de red filtran tráfico según origen, destino, protocolo y puerto. Aplica denegación predeterminada cuando sea viable y documenta las excepciones necesarias para operar la aplicación.'] },
      { id: 'entrada-salida', title: 'Entrada, salida y nombres', paragraphs: ['Cada punto público aumenta la superficie de exposición. Publica solo los componentes que deben recibir conexiones externas; ubica bases de datos y servicios internos en redes privadas cuando el diseño lo permita.', 'DNS traduce nombres a direcciones y forma parte crítica de la disponibilidad. Equilibrios de carga, gateways y servicios de protección perimetral controlan cómo entra el tráfico; una configuración incorrecta puede anular el aislamiento previsto.'] },
      { id: 'conectividad-segura', title: 'Conectar redes de forma segura', paragraphs: ['VPN y conexiones privadas dedicadas pueden enlazar centros de datos, sucursales y nubes. Cifra el tráfico cuando corresponda, autentica extremos, limita rutas y monitoriza cambios. La conectividad privada reduce exposición a internet, pero no sustituye controles de identidad ni autorización.'] },
    ],
  },
  {
    id: 'responsabilidad-compartida', title: 'Responsabilidad compartida', category: 'seguridad', readingTime: '7 min', featured: true,
    excerpt: 'Qué protege el proveedor y qué debe configurar y proteger la organización que consume el servicio.',
    sections: [
      { id: 'modelo', title: 'Seguridad de la nube y en la nube', paragraphs: ['El proveedor protege la infraestructura física y las capas que opera. El cliente protege sus datos, identidades, configuración y cargas de trabajo según el servicio contratado. Este reparto se conoce como modelo de responsabilidad compartida.', 'El límite cambia entre IaaS, PaaS y SaaS: cuanto más administra el proveedor, menos capas técnicas opera directamente el cliente. Aun así, el cliente sigue siendo responsable de cómo usa el servicio, quién accede y qué información introduce.'] },
      { id: 'matriz-responsabilidad', title: 'Cómo suele cambiar el reparto', paragraphs: ['La tabla es orientativa: cada servicio tiene límites propios. Confirma las responsabilidades en la documentación del producto y en el contrato, sobre todo para copias, cifrado, registros y recuperación.'], matrix: true },
      { id: 'verificacion', title: 'Convertir el modelo en controles', paragraphs: ['Un diagrama no basta; asigna un responsable concreto a cada tarea. Las decisiones de seguridad deben aparecer en la arquitectura, los procedimientos y las alertas. Revisa el modelo cuando se cambia de servicio, se delega operación o se habilitan nuevas integraciones.'], bullets: ['Inventaría datos, sistemas, identidades y dependencias.', 'Asigna responsables para parches, copias, registros, respuesta y recuperación.', 'Valida accesos, configuración y cumplimiento de políticas de forma continua.', 'Prueba restauración e incidentes con los equipos que realmente responderán.'] },
    ],
  },
  {
    id: 'seguridad-cloud', title: 'Principios de seguridad en la nube', category: 'seguridad', readingTime: '8 min', featured: true,
    excerpt: 'Defensa en profundidad, protección de datos, configuración segura y respuesta ante incidentes.',
    sections: [
      { id: 'defensa-profundidad', title: 'Diseñar en capas', paragraphs: ['La defensa en profundidad combina controles de identidad, red, aplicación, datos y operación. Ningún control aislado es suficiente: un error de configuración, una credencial filtrada o una vulnerabilidad pueden atravesar una capa.', 'Parte de una clasificación de datos y un modelo de amenazas. Protege recursos desde su creación con configuraciones base, segmentación, cifrado apropiado y políticas que detecten desviaciones.'] },
      { id: 'datos-cifrado', title: 'Proteger información', paragraphs: ['Cifra datos en tránsito y en reposo con mecanismos adecuados a su sensibilidad. Decide quién administra claves, cómo se rotan y cómo se recuperan; el cifrado mal gestionado puede volver inaccesibles los datos o no aportar protección efectiva.', 'Reduce la información almacenada al mínimo necesario, define retención y elimina datos cuando dejan de tener propósito. Evita incluir secretos en repositorios, imágenes, registros o scripts.'] },
      { id: 'postura-seguridad', title: 'Medir y mejorar la postura', paragraphs: ['Mantén inventario de activos, análisis de vulnerabilidades y configuración esperada. Prioriza hallazgos por exposición, explotabilidad e impacto, y asigna plazos de corrección. Las herramientas de seguridad ayudan a detectar riesgos, pero requieren responsables y procesos de respuesta.'], bullets: ['Aplica políticas y configuraciones base revisadas.', 'Centraliza registros de seguridad y conserva evidencia según el requisito.', 'Prepara procedimientos para contener credenciales y recursos comprometidos.', 'Ensaya la respuesta y actualiza controles después de incidentes.'] },
    ],
  },
  {
    id: 'identidad-accesos', title: 'Identidad y control de acceso', category: 'seguridad', readingTime: '6 min',
    excerpt: 'Autenticación, autorización y privilegios mínimos para personas, aplicaciones y servicios.',
    sections: [
      { id: 'identidad-autenticacion', title: 'Quién eres y qué puedes hacer', paragraphs: ['La autenticación verifica una identidad; la autorización determina qué acciones puede realizar. Separa identidades humanas de identidades de aplicaciones y servicios, y evita compartir cuentas para poder atribuir acciones a una persona o carga concreta.', 'Usa autenticación multifactor para accesos sensibles, métodos resistentes a phishing cuando estén disponibles y políticas de acceso condicional según riesgo. Las cuentas de emergencia deben estar protegidas, supervisadas y probadas.'] },
      { id: 'minimo-privilegio', title: 'Mínimo privilegio y privilegios temporales', paragraphs: ['Concede únicamente los permisos necesarios para la tarea y el tiempo requerido. Agrupa permisos en roles según funciones reales, limita administradores permanentes y revisa periódicamente asignaciones heredadas o inactivas.', 'Las identidades administradas o equivalentes evitan guardar credenciales en código para comunicación entre servicios. Protege también las credenciales de automatización y rota o revoca secretos expuestos de inmediato.'] },
      { id: 'ciclo-identidad', title: 'Ciclo de vida de acceso', paragraphs: ['El control de acceso empieza al crear una identidad y termina al retirarla. Automatiza altas y bajas, registra aprobaciones y revisa accesos cuando cambian los equipos o responsabilidades. Integra alertas ante inicios de sesión anómalos y cambios de privilegios.'] },
    ],
  },
  {
    id: 'alta-disponibilidad', title: 'Disponibilidad, copias y recuperación', category: 'operacion', readingTime: '8 min',
    excerpt: 'Objetivos de servicio, redundancia, RPO y RTO para diseñar sistemas recuperables.',
    sections: [
      { id: 'disponibilidad', title: 'Definir qué significa estar disponible', paragraphs: ['Disponibilidad es la capacidad de ofrecer una función acordada durante un período. Define indicadores desde la perspectiva del usuario, como solicitudes correctas y latencia, no solo si una máquina está encendida.', 'Un objetivo de nivel de servicio (SLO) traduce las expectativas en una meta medible. Un SLA contractual puede ofrecer compensación si no se cumple, pero no sustituye un diseño que responda a las necesidades del negocio.'] },
      { id: 'rpo-rto', title: 'RPO y RTO', paragraphs: ['El objetivo de punto de recuperación (RPO) expresa cuánta información puede perderse, medido como tiempo desde el último dato recuperable. El objetivo de tiempo de recuperación (RTO) expresa cuánto puede tardar el servicio en volver.', 'Metas más estrictas suelen exigir más redundancia, replicación y automatización, y por tanto más coste. Cada sistema necesita objetivos aprobados por sus responsables de negocio, no valores elegidos solo por el equipo técnico.'] },
      { id: 'pruebas-recuperacion', title: 'Recuperar y demostrarlo', paragraphs: ['Diseña para los fallos probables: error de instancia, zona, región, dependencia externa o cambio defectuoso. Copias aisladas ayudan ante borrado y corrupción; redundancia ayuda ante fallos de infraestructura. No son medidas intercambiables.', 'Prueba restauraciones, conmutación, dependencias, permisos y comunicaciones. Registra el resultado y corrige diferencias entre los tiempos observados y los objetivos acordados.'], callout: 'Una copia de seguridad solo es útil si puede restaurarse dentro del tiempo y con la integridad que el negocio necesita.' },
    ],
  },
  {
    id: 'observabilidad', title: 'Monitorización y observabilidad', category: 'operacion', readingTime: '6 min',
    excerpt: 'Métricas, registros y trazas para conocer el estado de una carga y resolver problemas con rapidez.',
    sections: [
      { id: 'senales', title: 'Tres señales complementarias', paragraphs: ['Las métricas resumen valores numéricos a lo largo del tiempo, como latencia, errores, saturación o consumo. Los registros describen eventos discretos. Las trazas muestran el recorrido de una solicitud entre componentes distribuidos.', 'Juntas permiten pasar de detectar un síntoma a localizar su causa. Correlaciona señales con identificadores de solicitud y despliegue, pero evita registrar contraseñas, tokens u otros datos sensibles.'] },
      { id: 'alertas', title: 'Alertas que sirven para actuar', paragraphs: ['Una alerta debe señalar una condición que necesita atención y vincularse con una acción conocida. Prioriza síntomas que afectan al usuario y define umbrales, duración, severidad y responsable para reducir ruido.', 'Cada alerta crítica necesita un procedimiento de diagnóstico o escalamiento. Revisa el volumen de notificaciones y elimina señales que no llevan a decisiones.'] },
      { id: 'operacion-mejora', title: 'Cerrar el ciclo operativo', paragraphs: ['Usa paneles para audiencias distintas: equipos técnicos, responsables de servicio y negocio. Compara resultados con SLO, analiza incidentes sin buscar culpables y convierte hallazgos recurrentes en cambios de arquitectura o automatización.'], bullets: ['Centraliza observabilidad sin perder contexto por componente.', 'Define retención, acceso y costes de ingestión de datos.', 'Ensaya procedimientos de guardia y respuesta antes de una interrupción real.'] },
    ],
  },
  {
    id: 'costos-cloud', title: 'Costes y optimización en la nube', category: 'operacion', readingTime: '6 min',
    excerpt: 'Cómo entender el consumo, asignar gasto a responsables y optimizar sin perjudicar la fiabilidad.',
    sections: [
      { id: 'modelo-costes', title: 'El gasto depende del diseño y el uso', paragraphs: ['El precio puede combinar tiempo de cómputo, capacidad reservada, almacenamiento, solicitudes, licencias y transferencia de datos. Una solución elástica reduce capacidad ociosa solo si el escalado y la retirada de recursos están configurados correctamente.', 'El coste total incluye operación, soporte, migración y cambios de arquitectura. Compara alternativas para el mismo nivel de rendimiento, seguridad y resiliencia, no solo el precio unitario de una máquina.'] },
      { id: 'visibilidad-presupuestos', title: 'Visibilidad y responsabilidad', paragraphs: ['Organiza cuentas, proyectos y etiquetas para relacionar el consumo con equipos, productos y entornos. Define presupuestos y alertas tempranas; una alerta informa, pero no detiene automáticamente el gasto salvo que se configure una acción explícita.', 'Revisa anomalías con datos recientes y entiende qué generó el cambio: tráfico, almacenamiento, recursos olvidados, licencias o transferencia.'] },
      { id: 'optimizacion', title: 'Optimizar con criterio', paragraphs: ['Apaga entornos de prueba fuera del horario necesario, elimina recursos sin propietario y ajusta capacidad con métricas reales. Los compromisos de uso pueden bajar precios previsibles, pero no conviene adquirirlos antes de entender la demanda y el riesgo de infrautilización.', 'No reduzcas redundancia, copias o monitorización de forma ciega: el ahorro puede aumentar el impacto de una interrupción. Trata la optimización como un ciclo continuo entre finanzas, arquitectura y operación.'], bullets: ['Etiqueta y asigna propietario a cada recurso.', 'Ajusta tamaños y escalado usando consumo observado.', 'Revisa almacenamiento y transferencia entre regiones.', 'Mide el impacto de cada cambio en coste, rendimiento y riesgo.'] },
    ],
  },
]

const responsibilityRows = [
  { name: 'Datos y contenido', owners: ['Cliente', 'Cliente', 'Cliente'] },
  { name: 'Identidades y accesos', owners: ['Cliente', 'Cliente', 'Cliente'] },
  { name: 'Aplicación', owners: ['Cliente', 'Cliente', 'Proveedor'] },
  { name: 'Sistema operativo', owners: ['Cliente', 'Proveedor', 'Proveedor'] },
  { name: 'Red y virtualización', owners: ['Compartida', 'Proveedor', 'Proveedor'] },
  { name: 'Centro de datos físico', owners: ['Proveedor', 'Proveedor', 'Proveedor'] },
]

function ArrowIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M10 5l5 5-5 5" /></svg>
}

function SearchIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="8.8" cy="8.8" r="5.5" /><path d="m13 13 4 4" /></svg>
}

function Icon({ name }) {
  const paths = {
    book: <><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H18v15H6.5A2.5 2.5 0 0 0 4 19.5z" /><path d="M4 4.5v15M8 6h6M8 9h6" /></>,
    grid: <><rect x="3" y="3" width="5" height="5" /><rect x="12" y="3" width="5" height="5" /><rect x="3" y="12" width="5" height="5" /><rect x="12" y="12" width="5" height="5" /></>,
    layers: <><path d="m10 2 8 4-8 4-8-4z" /><path d="m2 10 8 4 8-4M2 14l8 4 8-4" /></>,
    shield: <><path d="M10 2 17 5v5c0 4.2-2.8 6.7-7 8-4.2-1.3-7-3.8-7-8V5z" /><path d="m7 10 2 2 4-4" /></>,
    activity: <><path d="M2 10h3l2-6 4 12 2-6h5" /></>,
    home: <><path d="m2 9 8-7 8 7" /><path d="M4 8v10h12V8M8 18v-6h4v6" /></>,
    close: <><path d="m5 5 10 10M15 5 5 15" /></>,
  }
  return <svg className="ui-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}

function getRoute() {
  const [, type, id] = window.location.hash.match(/^#\/(article|index)\/?([^/]*)/) || []
  if (type === 'article') return { type, id }
  if (type === 'index') return { type: 'index' }
  return { type: 'home' }
}

function App() {
  const [route, setRoute] = useState(getRoute)
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('todas')

  useEffect(() => {
    const updateRoute = () => setRoute(getRoute())
    window.addEventListener('hashchange', updateRoute)
    return () => window.removeEventListener('hashchange', updateRoute)
  }, [])

  const normalizedQuery = query.trim().toLocaleLowerCase('es')
  const visibleArticles = articles.filter((article) => {
    const categoryMatches = activeCategory === 'todas' || article.category === activeCategory
    const searchableText = [article.title, article.excerpt, ...article.sections.flatMap((section) => [section.title, ...section.paragraphs, ...(section.bullets || [])])].join(' ').toLocaleLowerCase('es')
    return categoryMatches && searchableText.includes(normalizedQuery)
  })
  const selectedArticle = articles.find((article) => article.id === route.id)
  const categoryCounts = Object.fromEntries(categories.map((category) => [category.id, articles.filter((article) => article.category === category.id).length]))
  const selectedCategory = categories.find((category) => category.id === activeCategory)

  return (
    <div className="wiki-app">
      <header className="wiki-topbar">
        <a className="wiki-brand" href="#/" aria-label="Nube Wiki, biblioteca">
          <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
          <span>NUBE<span className="brand-light">/WIKI</span></span>
        </a>
        <nav className="top-nav" aria-label="Navegación principal">
          <a href="#/">Biblioteca</a>
          <a href="#/index">Índice A–Z</a>
        </nav>
        <a className="source-link" href={sourcePdf} target="_blank" rel="noreferrer">DOCUMENTO BASE <ArrowIcon /></a>
      </header>

      <div className="wiki-layout">
        <aside className="wiki-sidebar" aria-label="Navegación de la biblioteca">
          <a className="sidebar-home" href="#/"><Icon name="home" /> Inicio de la wiki</a>
          <p className="sidebar-label">EXPLORAR POR TEMA</p>
          <button className={`category-link ${activeCategory === 'todas' ? 'is-active' : ''}`} type="button" onClick={() => { setActiveCategory('todas'); window.location.hash = '#/' }}>
            <Icon name="grid" /><span>Todos los artículos</span><b>{articles.length}</b>
          </button>
          {categories.map((category) => (
            <button className={`category-link ${activeCategory === category.id ? 'is-active' : ''}`} key={category.id} type="button" onClick={() => { setActiveCategory(category.id); window.location.hash = '#/' }}>
              <Icon name={category.id === 'fundamentos' ? 'book' : category.id === 'arquitectura' ? 'layers' : category.id === 'seguridad' ? 'shield' : 'activity'} />
              <span>{category.label}</span><b>{categoryCounts[category.id]}</b>
            </button>
          ))}
          <div className="sidebar-reference">
            <span className="reference-kicker">LECTURA DE REFERENCIA</span>
            <p>Material base sobre nube y responsabilidad compartida.</p>
            <a href={sourcePdf} target="_blank" rel="noreferrer">Abrir documento <ArrowIcon /></a>
          </div>
          <div className="sidebar-mark">NUBE/WIKI <span>·</span> EDICIÓN 01</div>
        </aside>

        <main className="wiki-main">
          {route.type === 'article' && selectedArticle ? (
            <ArticlePage article={selectedArticle} onCategory={(category) => { setActiveCategory(category); window.location.hash = '#/' }} />
          ) : route.type === 'article' ? (
            <div className="not-found"><span>404 / ARTÍCULO NO ENCONTRADO</span><h1>Esta página no está en el índice.</h1><a href="#/">Volver a la biblioteca <ArrowIcon /></a></div>
          ) : (
            <LibraryPage
              articles={visibleArticles}
              allArticles={articles}
              category={selectedCategory}
              query={query}
              setQuery={setQuery}
              indexMode={route.type === 'index'}
            />
          )}
          <footer className="wiki-footer"><span>NUBE/WIKI <i /> CONOCIMIENTO PARA DISEÑAR Y OPERAR EN LA NUBE</span><a href={sourcePdf} target="_blank" rel="noreferrer">Documento base <ArrowIcon /></a></footer>
        </main>
      </div>
    </div>
  )
}

function LibraryPage({ articles: visibleArticles, allArticles, category, query, setQuery, indexMode }) {
  const featuredArticles = allArticles.filter((article) => article.featured)

  return (
    <div className="library-view">
      <div className="library-heading">
        <div>
          <p className="eyebrow"><span className="eyebrow-dot" /> WIKI ABIERTA · COMPUTACIÓN EN LA NUBE</p>
          <h1>{indexMode ? 'Índice de artículos' : category ? category.label : 'Todo sobre la nube'}</h1>
          <p className="library-intro">{indexMode ? 'Consulta los temas por orden alfabético y entra directamente al artículo que necesitas.' : category ? category.description : 'Conceptos, arquitectura, seguridad y operación, explicados para construir una visión completa de la nube.'}</p>
        </div>
        <div className="library-count"><b>{visibleArticles.length.toString().padStart(2, '0')}</b><span>ARTÍCULOS<br />DISPONIBLES</span></div>
      </div>

      <label className="search-box">
        <SearchIcon />
        <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar en títulos y contenido..." aria-label="Buscar artículos" />
        {query && <button type="button" onClick={() => setQuery('')} aria-label="Limpiar búsqueda"><Icon name="close" /></button>}
        <kbd>BUSCAR</kbd>
      </label>

      {indexMode ? (
        <div className="index-panel">
          <div className="list-heading"><div><p className="eyebrow">CONSULTA RÁPIDA</p><h2>A–Z <span>· {visibleArticles.length} entradas</span></h2></div><a className="text-link" href="#/">Ver biblioteca <ArrowIcon /></a></div>
          {visibleArticles.length ? <div className="az-list">{visibleArticles.slice().sort((a, b) => a.title.localeCompare(b.title, 'es')).map((article, index) => <ArticleRow article={article} index={index} key={article.id} />)}</div> : <EmptyState query={query} />}
        </div>
      ) : (
        <>
          {!category && !query && <section className="featured-section" aria-labelledby="featured-title">
            <div className="list-heading"><div><p className="eyebrow">PARA EMPEZAR</p><h2 id="featured-title">Lecturas esenciales</h2></div><span className="quiet-count">SELECCIÓN EDITORIAL</span></div>
            <div className="featured-grid">
              {featuredArticles.map((article, index) => <FeaturedCard article={article} index={index} key={article.id} />)}
            </div>
          </section>}
          <section className="article-list-section" aria-labelledby="article-list-title">
            <div className="list-heading"><div><p className="eyebrow">{category ? 'COLECCIÓN TEMÁTICA' : 'BIBLIOTECA'}</p><h2 id="article-list-title">{query ? 'Resultados de búsqueda' : category ? `Artículos de ${category.label}` : 'Explorar todos los artículos'}</h2></div><span className="quiet-count">{visibleArticles.length} {visibleArticles.length === 1 ? 'ARTÍCULO' : 'ARTÍCULOS'}</span></div>
            {visibleArticles.length ? <div className="article-grid">{visibleArticles.map((article, index) => <ArticleCard article={article} index={index} key={article.id} />)}</div> : <EmptyState query={query} />}
          </section>
          <div className="index-prompt"><span className="index-symbol">A–Z</span><div><strong>¿Buscas un tema concreto?</strong><p>Recorre el índice completo por orden alfabético.</p></div><a href="#/index" aria-label="Abrir el índice alfabético"><ArrowIcon /></a></div>
        </>
      )}
    </div>
  )
}

function FeaturedCard({ article, index }) {
  return (
    <a className={`featured-card featured-card-${index + 1}`} href={`#/article/${article.id}`}>
      {index === 0 && <img className="featured-image" src={cloudImage} alt="Cielo nuboso sobre un paisaje" />}
      <span className="feature-number">LECTURA 0{index + 1}</span>
      <div className="feature-body"><span className="category-tag">{categories.find((category) => category.id === article.category)?.label}</span><h3>{article.title}</h3><p>{article.excerpt}</p><span className="feature-link">Leer artículo <ArrowIcon /></span></div>
    </a>
  )
}

function ArticleCard({ article, index }) {
  const category = categories.find((item) => item.id === article.category)
  return (
    <a className="article-card" href={`#/article/${article.id}`}>
      <div className="card-topline"><span className={`category-dot dot-${article.category}`} /><span>{category.label}</span><span className="card-index">{String(index + 1).padStart(2, '0')}</span></div>
      <h3>{article.title}</h3><p>{article.excerpt}</p>
      <div className="card-bottom"><span>{article.readingTime} de lectura</span><ArrowIcon /></div>
    </a>
  )
}

function ArticleRow({ article, index }) {
  const category = categories.find((item) => item.id === article.category)
  return <a className="article-row" href={`#/article/${article.id}`}><span className="row-index">{String(index + 1).padStart(2, '0')}</span><span className={`category-dot dot-${article.category}`} /><span className="row-title">{article.title}<small>{article.excerpt}</small></span><span className="row-category">{category.label}</span><span className="row-time">{article.readingTime}</span><ArrowIcon /></a>
}

function EmptyState({ query }) {
  return <div className="empty-state"><span>NO HAY COINCIDENCIAS</span><h3>No encontramos artículos con “{query}”.</h3><p>Prueba con otra palabra o explora una categoría desde el índice.</p></div>
}

function ArticlePage({ article, onCategory }) {
  const category = categories.find((item) => item.id === article.category)
  return (
    <article className="article-page">
      <div className="breadcrumbs"><a href="#/">Biblioteca</a><span>/</span><button type="button" onClick={() => onCategory(article.category)}>{category.label}</button><span>/</span><span>{article.title}</span></div>
      <div className="article-heading">
        <div className="article-kicker"><span className={`category-dot dot-${article.category}`} /> {category.label.toUpperCase()} <i /> ARTÍCULO DE REFERENCIA</div>
        <h1>{article.title}</h1><p>{article.excerpt}</p>
        <div className="article-meta"><span><Icon name="book" /> {article.readingTime} de lectura</span><span>ACTUALIZADO · SEPTIEMBRE 2026</span></div>
      </div>
      <div className="article-layout">
        <div className="article-body">
          {article.sections.map((section, index) => <section className="prose-section" id={section.id} key={section.id}>
            <div className="prose-heading"><span>{String(index + 1).padStart(2, '0')}</span><h2>{section.title}</h2></div>
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
            {section.matrix && <ResponsibilityMatrix />}
            {section.callout && <aside className="article-callout"><span>IDEA CLAVE</span><p>{section.callout}</p></aside>}
          </section>)}
          <aside className="source-note"><span>PARA AMPLIAR</span><div><strong>Documento base: nube y responsabilidad compartida</strong><p>Material de referencia relacionado con los conceptos de esta wiki.</p></div><a href={sourcePdf} target="_blank" rel="noreferrer" aria-label="Abrir documento base"><ArrowIcon /></a></aside>
          <a className="back-to-library" href="#/"><span>←</span> Volver a todos los artículos</a>
        </div>
        <aside className="article-toc"><p className="sidebar-label">EN ESTE ARTÍCULO</p>{article.sections.map((section, index) => <a href={`#${section.id}`} key={section.id}><span>{String(index + 1).padStart(2, '0')}</span>{section.title}</a>)}<a className="toc-index" href="#/index"><Icon name="grid" /> Índice A–Z</a></aside>
      </div>
    </article>
  )
}

function ResponsibilityMatrix() {
  return <div className="responsibility-table-wrap"><table className="responsibility-table"><thead><tr><th scope="col">Capa</th><th scope="col">IaaS</th><th scope="col">PaaS</th><th scope="col">SaaS</th></tr></thead><tbody>{responsibilityRows.map((row) => <tr key={row.name}><th scope="row">{row.name}</th>{row.owners.map((owner, index) => <td key={index}><span className={`owner owner-${owner.toLocaleLowerCase('es')}`}>{owner}</span></td>)}</tr>)}</tbody></table><p>Modelo orientativo. Las responsabilidades exactas dependen del servicio, el contrato y la configuración utilizada.</p></div>
}

export default App
