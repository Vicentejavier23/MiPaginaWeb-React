import Marquee from "../components/Marquee"; 
function Home() {
  return (
    <section id="inicio" className="bg-[#0a0f1e] min-h-screen flex flex-col justify-center items-center gap-2 overflow-x-hidden">
      <div className="text-base md:text-5xl  font-medium bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full px-4 py-1.5 text-center mx-4">
        <p >
          Disponible para proyectos y empleo
        </p>
      </div>
      <div className="">
        <h1 className="text-3xl md:text-5xl font-medium text-white text-center px-4">Hola, soy Vicente Bueno</h1>
      </div>
      <div>
        <p className="text-xl font-medium text-slate-400">
          Desarrolador Frontend : React & NextJs
        </p>
      </div>
      <div className="text-center">
        <p className="text-xl font-medium  text-slate-400 max-w-xl text-center mx-auto">
          Estudiante de Análisis Programador en DuocUC, Santiago. Construyo
          interfaces modernas con React y Next.js — enfocado en código limpio y
          experiencia de usuario real.
        </p>
        <div className="flex items-center justify-center flex-col lg:flex-row gap-2">
          <a href="#portafolio" className="border-2 border-emerald-900/50  rounded-2xl text-xl  hover:cursor-pointer font-medium text-white px-4 py-3 m-2">Ver Portafolio</a>
          <a href="#servicio" className="border-2 border-emerald-900/50 rounded-2xl text-xl  hover:cursor-pointer font-medium text-white px-4 py-3 m-2">Servicios</a>
        </div>
      </div>
      <div className="w-full mt-5">
      <Marquee/>
      </div>
      
    </section>
  );
}
export default Home;
