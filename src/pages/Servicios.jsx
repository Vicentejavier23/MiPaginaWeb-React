const servicios = [
    {
      icono: "🎨",
      titulo: "Diseño y Desarrollo Frontend",
      descripcion: "Interfaces modernas, responsivas y optimizadas con React y Next.js. Código limpio, componentes reutilizables y enfoque en experiencia de usuario.",
    },
    {
      icono: "📱",
      titulo: "Landing Pages",
      descripcion: "Páginas de aterrizaje rápidas y atractivas, diseñadas para convertir visitantes en clientes. Ideal para negocios que necesitan presencia web rápida.",
    },
    {
      icono: "⚡",
      titulo: "Optimización de Rendimiento",
      descripcion: "Auditoría y mejora de velocidad en sitios web existentes. Carga rápida, buenas métricas en Lighthouse y mejor posicionamiento SEO.",
    },
    {
      icono: "🔗",
      titulo: "Integración de APIs",
      descripcion: "Conexión de tu frontend con APIs externas o backends existentes. Experiencia con REST, autenticación JWT y servicios de terceros.",
    },
  ]
function Servicio(){
    return(
        < section id="servicio" className="bg-[#0a0f1e] py-16 px-8">
         <h1 className="text-4xl font-bold text-white text-center mb-10">Servicios</h1>
            <ul className="grid grid-cols-1 md:grid-cols-2 text-center gap-6 p-8">
                {servicios.map((servicio) => (
                    <div key={servicio.titulo} >
                        <div className="border-2 border-emerald-500/20 rounded-2xl">
                        <p>{servicio.icono}</p>
                            <h1 className="text-2xl font-medium text-white">{servicio.titulo}</h1>
                            <p className="text-xl font-medium text-slate-400">{servicio.descripcion}</p>
                            
                        </div>
                    </div>
                ))}
                
            </ul>
            <p className="text-center text-slate-400 mt-10">Precios a convenir según el proyecto. Escríbeme y conversamos.</p>
        </section>
    )
}
export default Servicio