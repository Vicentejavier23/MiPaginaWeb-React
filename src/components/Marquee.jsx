import { FaReact } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { SiTypescript } from 'react-icons/si'
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'

const techs = [
    { nombre: "React", icono: <FaReact /> },
    { nombre: "JavaScript", icono: <IoLogoJavascript /> },
    { nombre: "TypeScript", icono: <SiTypescript /> },
    { nombre: "Next.js", icono: <SiNextdotjs /> },
    { nombre: "Node.js", icono: <FaNodeJs /> },
    { nombre: "Tailwind", icono: <SiTailwindcss /> },
  ]
function Marquee(){
    return(
        <div className='overflow-hidden  border-y border-emerald-700/30 py-4 bg-emerald-400/20 w-full'>
            <div className='flex animate-marquee whitespace-nowrap'>
        {[... techs,...techs, ...techs].map((tech ,index)=>(
            <span key={index} className='flex items-center gap-2 px-10 text-white text-xl '>{tech.icono} {tech.nombre}</span> 
        ))}
        </div>
        </div>
    )
}
export default Marquee