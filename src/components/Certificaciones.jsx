const certificaciones = [
    {
      nombre: "React Essential Training",
      emisor: "LinkedIn",
      año: "2026",
      link: "https://www.linkedin.com/learning/certificates/62294608d1805edb7c1f790bced6e300b95e033c2b9e871873ef3d92a705b16d"
    },
    {
      nombre: "JavaScript Essentials",
      emisor: "Cisco Networking Academy",
      año: "2026",
      link: "https://www.credly.com/badges/d597de56-deb0-49d2-8723-fe4960ed19af"
    },
    {
      nombre: "Introducción a Ciberseguridad",
      emisor: "Cisco Networking Academy",
      año: "2026",
      link: "https://www.credly.com/badges/9ec2a44b-74de-4d3d-9caf-19cbc4d6a2d9"
    },
    {
      nombre: "Critical Infrastructure Protection",
      emisor: "OPSWAT Academy",
      año: "2026",
      link: "https://learn.opswatacademy.com/certificate/NNTvtzV6-g"
    },
    {
      nombre: "IA y Productividad",
      emisor: "Google",
      año: "2025",
      link: "https://www.linkedin.com/in/vicente-javier-bueno-gret/overlay/Certifications/2080872733/treasury/?profileId=ACoAAFbcTXYB9PWZW2WPoY4xs6dhy_kcWTU_3wA"
    },
    {
      nombre: "Certificación Cybersecurity Awareness CAPC",
      emisor: "Certiprof",
      año: "2026",
      link: "https://www.credly.com/earner/earned/badge/bd1b2bec-2e0f-4069-a532-49a03a832b4a"
    }
  ]
function Certificaciones(){
    return(
        <section className="bg-[#0a0f1e] py-16 px-8 text-center">
            <h1 className="text-white text-4xl font-medium ">Certificaciones</h1>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  text-center gap-6 p-8 text-white">
            {certificaciones.map((certificacion) =>(
            <div key={certificacion.nombre} className=" border-2 border-emerald-500/20 rounded-2xl  m-2">
                <p className="text-xl font-bold text-white">{certificacion.nombre}</p>
                
                <div>
                    <p>{certificacion.emisor}</p>
                    <p>{certificacion.año}</p>
                    <div className="m-2">
                    {certificacion.link && (
                        <a href={certificacion.link} target="_blank" className="text-xl font-medium text-slate-400 border-2 rounded-2xl px-2 hover:border-emerald-500/20">Ver credencial</a>
                    )}
                    </div>
                </div>
            </div>
            ))}
            </ul>
        </section>
    )
}
export default Certificaciones