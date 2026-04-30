import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
function Footer(){
    return(
        <section className="bg-[#0a0f1e] border-t border-slate-800 py-8">
            <div className="text-white flex flex-col justify-center items-center gap-2 ">
                <p>Vicente Bueno - Desarrollador Web</p>
                <p>"¿Tienes un proyecto en mente?"</p>
                <a href="https://wa.me/56937450359?text=Hola%20quiero%20más%20información" className="border-2 border-emerald-500/30 text-emerald-400 rounded-full px-6 py-2 hover:bg-emerald-500/20 transition">Contactame</a>
                <div className="flex flex-row gap-6">
                <a href="https://www.linkedin.com/in/vicente-javier-bueno-gret/" target="_blank"> <FaLinkedin className="text-2xl hover:text-cyan-400 transition"/></a>
                <a href="https://github.com/Vicentejavier23?tab=repositories" target="_blank"> <FaGithub className="text-2xl hover:text-cyan-400 transition"/></a>
                </div>
            </div>
        </section>
    )
}
export default Footer