
const sections = [
  {
    title: "1. Responsable del tratamiento",
    content: (
      <>
        <p>
          El responsable del tratamiento de los datos personales recogidos a
          través de esta web es:
        </p>
        <ul>
          <li><strong>Nombre o razón social:</strong> [Transport AI]</li>
          <li><strong>NIF:</strong> [51556813J]</li>
          <li><strong>Domicilio profesional:</strong> [Calle Asuncion Balaguer, Madrid, 28521 ]</li>
          <li>
            <strong>Correo electrónico de contacto:</strong>{" "}
            [contacto@transportai.es]
          </li>
        </ul>
        <p>
          Transport AI es la denominación comercial del proyecto. Debe
          identificarse aquí a la persona física o jurídica que actúe realmente
          como responsable del tratamiento.
        </p>
      </>
    ),
  },
  {
    title: "2. Datos personales que podemos recoger",
    content: (
      <>
        <p>En función del servicio utilizado, podemos tratar los siguientes datos:</p>
        <ul>
          <li>Nombre y apellidos.</li>
          <li>Dirección de correo electrónico y número de teléfono.</li>
          <li>Empresa, cargo profesional y datos de contacto profesionales.</li>
          <li>Información incluida en las consultas que nos envíes.</li>
          <li>Datos técnicos de navegación, cuando corresponda.</li>
        </ul>
        <p>
          Solo solicitaremos los datos adecuados y necesarios para la finalidad
          correspondiente. No envíes información personal sensible que no sea
          necesaria para tu consulta.
        </p>
      </>
    ),
  },
  {
    title: "3. Finalidades del tratamiento",
    content: (
      <>
        <p>Los datos podrán utilizarse para:</p>
        <ul>
          <li>Responder a consultas y solicitudes de información.</li>
          <li>Organizar demostraciones de los servicios de Transport AI.</li>
          <li>Preparar propuestas comerciales y atender solicitudes de presupuesto.</li>
          <li>Gestionar la relación precontractual o contractual, cuando exista.</li>
          <li>Atender obligaciones legales y proteger la seguridad de los servicios.</li>
        </ul>
        <p>
          Los datos no se utilizarán para finalidades incompatibles con aquellas
          para las que fueron recogidos.
        </p>
      </>
    ),
  },
  {
    title: "4. Base jurídica",
    content: (
      <>
        <p>El tratamiento se realizará, según cada caso, sobre las siguientes bases:</p>
        <ul>
          <li>
            <strong>Medidas precontractuales:</strong> cuando sean necesarias
            para responder a una solicitud o preparar una propuesta solicitada.
          </li>
          <li>
            <strong>Consentimiento:</strong> cuando sea necesario y se haya
            otorgado válidamente para una finalidad concreta, como determinadas
            comunicaciones comerciales.
          </li>
          <li>
            <strong>Obligación legal:</strong> para cumplir las obligaciones
            exigidas por la normativa aplicable.
          </li>
          <li>
            <strong>Interés legítimo:</strong> cuando proceda legalmente, tras
            valorar los derechos e intereses de las personas afectadas.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "5. Conservación de los datos",
    content: (
      <p>
        Los datos se conservarán durante el tiempo necesario para atender la
        solicitud y gestionar la posible relación comercial. Posteriormente,
        podrán mantenerse bloqueados durante los plazos legalmente exigibles
        para atender responsabilidades o reclamaciones. Cuando dejen de ser
        necesarios, se eliminarán de forma segura.
      </p>
    ),
  },
  {
    title: "6. Destinatarios y proveedores",
    content: (
      <p>
        Los datos podrán ser tratados por proveedores tecnológicos que presten
        servicios necesarios para el funcionamiento de la web, la gestión de
        solicitudes, el alojamiento, la comunicación o la publicidad, siempre
        que corresponda y con las garantías legales aplicables. También podrán
        comunicarse a autoridades públicas cuando exista una obligación legal.
        No se venderán los datos personales a terceros.
      </p>
    ),
  },
  {
    title: "7. Formularios de Google Ads",
    content: (
      <p>
        Si envías tus datos a través de un formulario de clientes potenciales
        de Google Ads, estos podrán ser facilitados a Transport AI para atender
        tu solicitud y contactar contigo en relación con ella. Google también
        tratará los datos conforme a sus propias condiciones y políticas.
        Puedes consultar la{" "}
        <a
          href="https://policies.google.com/privacy?hl=es"
          target="_blank"
          rel="noopener noreferrer"
        >
          Política de privacidad de Google
        </a>
        . El tratamiento concreto dependerá de la configuración del formulario
        y de los servicios utilizados.
      </p>
    ),
  },
  {
    title: "8. Transferencias internacionales",
    content: (
      <p>
        Si alguno de los proveedores utilizados trata datos fuera del Espacio
        Económico Europeo, se comprobará que la transferencia cumple los
        requisitos de la normativa de protección de datos, mediante una
        decisión de adecuación u otra garantía válida cuando sea necesaria.
      </p>
    ),
  },
  {
    title: "9. Derechos de las personas usuarias",
    content: (
      <>
        <p>
          Puedes solicitar el acceso a tus datos, su rectificación o supresión,
          la limitación del tratamiento, la portabilidad cuando proceda y
          oponerte a determinados tratamientos. Cuando el tratamiento se base
          en el consentimiento, podrás retirarlo sin que ello afecte a la
          licitud del tratamiento anterior a su retirada.
        </p>
        <p>
          Para ejercer tus derechos, escribe al correo de contacto indicado en
          el apartado 1, identificando el derecho que deseas ejercer. Cuando
          sea necesario, podremos solicitar información adicional para
          verificar tu identidad.
        </p>
        <p>
          También puedes presentar una reclamación ante la{" "}
          <a
            href="https://www.aepd.es/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agencia Española de Protección de Datos (AEPD)
          </a>
          .
        </p>
      </>
    ),
  },
  {
    title: "10. Seguridad",
    content: (
      <p>
        Se adoptarán medidas técnicas y organizativas adecuadas al riesgo para
        proteger los datos frente al acceso no autorizado, la pérdida, la
        alteración o la divulgación indebida. Ningún sistema puede garantizar
        una seguridad absoluta.
      </p>
    ),
  },
  {
    title: "11. Cookies y tecnologías similares",
    content: (
      <p>
        Esta web puede utilizar cookies o tecnologías similares. Las cookies
        no necesarias, cuando se utilicen, se gestionarán de acuerdo con la
        normativa aplicable y los mecanismos de información y consentimiento
        que correspondan. Consulta la información sobre cookies disponible en
        la web, si existe.
      </p>
    ),
  },
  {
    title: "12. Cambios en esta política",
    content: (
      <p>
        Esta política podrá actualizarse para reflejar cambios normativos,
        técnicos o en los tratamientos de datos. La versión publicada en esta
        página será la aplicable desde su fecha de actualización.
      </p>
    ),
  },
];

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-[#080b12] px-5 py-16 text-slate-200 sm:px-8">
      <article className="mx-auto max-w-4xl">
        <a
          href="/"
          className="text-sm font-medium text-cyan-400 hover:text-cyan-300"
        >
          ← Volver a Transport AI
        </a>

        <header className="mb-12 mt-10 border-b border-white/10 pb-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            TRANSPORT AI
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Política de privacidad
          </h1>
          <p className="mt-5 text-sm text-slate-400">
            Última actualización: 19 de octubre de 2026
          </p>
          <p className="mt-5 max-w-3xl leading-7 text-slate-300">
            En Transport AI respetamos la privacidad y nos comprometemos a
            tratar los datos personales de forma responsable, transparente
            y conforme a la normativa aplicable.
          </p>
        </header>

        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.title} className="space-y-4">
              <h2 className="text-xl font-semibold text-white">
                {section.title}
              </h2>
              <div className="space-y-4 leading-7 text-slate-300 [&_a]:text-cyan-400 [&_a]:underline [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-2">
                {section.content}
              </div>
            </section>
          ))}
        </div>

        <footer className="mt-16 border-t border-white/10 pt-6 text-sm text-slate-500">
          © {new Date().getFullYear()} Transport AI. Todos los derechos reservados.
        </footer>
      </article>
    </main>
  );
}
