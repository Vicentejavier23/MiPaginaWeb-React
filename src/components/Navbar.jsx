function Navbar (){
    return(
        <>
            <nav className=" border-b  bg-[#0a0f1e]/80 backdrop-blur-md ">
                <div className=" flex flex-row justify-between px-2 py-2 font-medium ">
                <a href="#servicio">Servicios</a>
                <a href="#portafolio">Portafolio</a>
                <a href="#contacto">Contacto</a>
                </div>
            </nav>
        </>
    )
}
export default Navbar