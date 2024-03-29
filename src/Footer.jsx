export default function Footer() {
    const Contacto = [
        {
            titulo: "Redes",
            primero: "Linkedin",
            primerLink: "https://www.linkedin.com/in/roque-morel/",
            segundo: "Github",
            segundoLink: "https://github.com/ro12que"
        },
        {
            titulo: "Contacto",
            primero: "Email",
            primerLink: "mailto:roquemorel128@gmail.com",
            segundo: "Calendly",
            segundoLink: "https://calendly.com/roquemorel"
        },
        {
            titulo: "Sponsors",
            primero: "Fundacion Pescar",
            primerLink: "https://www.pescar.org.ar/",
            segundo: "Artech",
            segundolink: "https://www.artech-consulting.com.ar/"
        },
    ]
    return (
        <footer id='Footer' className="bg-img-footer min-h-[300px]">
            <div className="flex flex-row flex-wrap p-20 gap-20 justify-around">
                {Contacto.map((data, index) => (
                    <div key={index} className="flex flex-col gap-5 items-start p-5">
                        <p className='font-subTitle text-3xl m-auto'> {data.titulo} </p>
                        <a className=' font-Text text-xl m-auto text-center'
                            href={data.primerLink}> {data.primero} </a>
                        <a className=' font-Text text-xl m-auto'
                            href={data.segundoLink}> {data.segundo} </a>
                    </div>
                ))}
            </div>
        </footer>
    )
}