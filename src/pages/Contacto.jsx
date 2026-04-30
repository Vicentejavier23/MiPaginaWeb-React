import { useState } from "react"
import emailjs from '@emailjs/browser'

function Contacto(){
    const [form, setForm] = useState({
        nombre: '',
        email:'',
        celular:'',
        asunto : '',
        mensaje: ''
    })
    const handleClick = () =>{
        if(!form.nombre || !form.mensaje || !form.email){
            alert("Por favor completar todo los campos obligatorios")
        return
    }
        emailjs.send(
            import.meta.env.VITE_TU_SERVICE_ID,
            import.meta.env.VITE_TU_TEMPLATE_ID,
            {nombre: form.nombre,email: form.email,celular: form.celular,mensaje: form.mensaje},
            import.meta.env.VITE_TU_PUBLIC_KEY,
            
        )
        emailjs.send(
            import.meta.env.VITE_TU_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_CLIENTE,
            {nombre: form.nombre,email: form.email,mensaje: form.mensaje},
            import.meta.env.VITE_TU_PUBLIC_KEY,
            
        )
        setForm({ nombre: '', email: '', celular: '', asunto: '', mensaje: '' })
    }
    
    return(
        
        <section id="contacto" className="bg-[#0a0f1e] py-16 px-8 text-center">
            <h1 className="text-white flex flex-col justify-center items-center font-medium text-4xl p-10">Formulario de contacto</h1>
            <div className="flex flex-col justify-center items-center text-white font-medium gap-2 py-2   ">
                <input  value={form.nombre} onChange={(e)=>setForm({... form, nombre: e.target.value})} placeholder="Ingrese Nombre"  className="border-2 border-emerald-500/20 rounded-2xl px-2"></input>
                <input value={form.email} onChange={(e)=>setForm({... form,email: e.target.value})} placeholder="Ingrese Email"  className="border-2 border-emerald-500/20 rounded-2xl px-2"></input>
                <input value={form.celular} onChange={(e)=>setForm({... form,celular: e.target.value})} placeholder="Ingrese Celular" className="border-2 border-emerald-500/20 rounded-2xl px-2"></input>
                <input value={form.asunto} onChange={(e)=>setForm({... form,asunto: e.target.value})} placeholder="Ingrese Asunto" className="border-2 border-emerald-500/20 rounded-2xl px-2"></input>
                <textarea value={form.mensaje} onChange={(e)=>setForm({... form,mensaje: e.target.value})} placeholder="Ingrese Mensaje"  className="border-2 border-emerald-500/20 rounded-2xl px-2"></textarea>
            </div>
            <button className="text-white font-medium border-2 border-blue-400 bg-blue-400/30 rounded-2xl px-2" onClick={handleClick} >Enviar</button>
        </section>
    )
}
export default  Contacto