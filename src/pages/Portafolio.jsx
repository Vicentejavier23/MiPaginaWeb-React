const proyectos = [
  {
    titulo: "LearnMore",
    subtitulo: "Plataforma de cursos online",
    descripcion:
      "Plataforma fullstack con autenticación JWT, catálogo de cursos, carrito de compras y panel de usuario. En producción.",
    stack: ["React", "Node.js", "PostgreSQL", "Prisma", "Vercel", "Render"],
    estado: "En producción - Proceso de Actualizacion",
    link: "https://learnmore-frontend-phi.vercel.app",
  },
  {
    titulo: "MindGuide",
    subtitulo: "Acompañamiento emocional con IA",
    descripcion:
      "Plataforma con agente IA empático (Llama 3.3), diario emocional y modelo freemium con derivación a psicólogos.",
    stack: ["Next.js 14 ", "TypeScript", "Groq SDK", "NestJS", "Stripe"],
    estado: "En Desarrollo",
    link: null,
  },
  {
    titulo: "Task Manager",
    subtitulo: "Gestión de tareas con autenticación",
    descripcion:
      "API REST completa con autenticación JWT, rutas protegidas, relaciones de base de datos y frontend vanilla.",
    stack: ["Node.js", "Express", "SQLite", "JWT", "bcrypt"],
    estado: "Completado",
    link: null,
  },
  {
    titulo: "Portafolio V1",
  subtitulo: "Primera versión de mi sitio personal",
    descripcion: "Landing page con integración de chatbot y formulario de contacto automatizado. Base del proyecto actual.",
      stack: ["HTML", "CSS", "JavaScript"],
    estado: "Completado",
    link: "https://mi-pagina-web-tawny.vercel.app/#inicio",
  },
];

function Portafolio() {
  return (
    <section id="portafolio" className="bg-[#0a0f1e] py-16 px-8">
        <h1 className="text-4xl font-bold text-white text-center mb-10">Portafolio</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  text-center gap-6 p-8">
        {proyectos.map((proyecto) => (
          <div
            key={proyecto.titulo}
           >
            <div className=" border-2 border-emerald-500/20 rounded-2xl  m-2">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white">
                {proyecto.titulo}
              </h1> 
              <p className="text-xl font-medium text-slate-400 flex flex-wrap justify-center gap-1">
                {proyecto.subtitulo}
              </p>
              <p className="text-xl font-medium text-slate-400">
                {proyecto.descripcion}
              </p>
              
              <div className="flex flex-wrap justify-center gap-1 p-2">
            
                {proyecto.stack.map((tech)=>(
                    <span key={tech} className="bg-slate-800 text-cyan-400 text-sm px-2 py-1 rounded-xl">{tech}</span>
                ))}
              
              </div>
              <p className="text-xl font-medium text-slate-400">
                {proyecto.estado}
              </p>
              <div className="m-2">
                {proyecto.link &&( <a href={proyecto.link} target="_blank" className="text-xl font-medium text-slate-400 border-2 rounded-2xl px-2 hover:border-emerald-500/20">Ver proyectos</a>)}
                </div>
            </div>
          </div>
        ))}
      </ul>
    </section>
  );
}
export default Portafolio
