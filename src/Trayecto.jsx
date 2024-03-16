import imgArtech1 from './assets/img-Trayectoria/Artech-Trabajo.jpg'
import imgArtech2 from './assets/img-Trayectoria/Artech-Team.jpg'
import imgArtech3 from './assets/img-Trayectoria/Artech-Amigas.png'
import imgPescar1 from './assets/img-Trayectoria/Pescar-Final.jpg'
import imgPescar2 from './assets/img-Trayectoria/Pescar-Grupal.jpeg'
import imgPescar3 from './assets/img-Trayectoria/Personal-Pescar.png'
import imgSAP1 from './assets/img-Trayectoria/SAP-Clase.jpg'
import imgSAP2 from './assets/img-Trayectoria/SAP-Grupo.jpg'
import imgSAP3 from './assets/img-Trayectoria/SAP-Detalle.jpg'
import GradienteCeleste from './assets/img-Trayectoria/Gradient-Celeste.png'
import GradienteVioleta from './assets/img-Trayectoria/Gradient-Violeta.png'
import GradienteNaranja from './assets/img-Trayectoria/Gradient-Naranja.png'
import GradienteVerde from './assets/img-Trayectoria/Gradient-Verde.png'

export default function Trayecto() {

    const Momentos = [
        {
            Titulo: "Artech Capacitacion .Net y SQL",
            texto1: "Durante mi capacitación de 6 meses en la consultora de software Artech, me sumergí en un entorno colaborativo de toma de decisiones en tiempo real y constante intercambio de ideas. Mi enfoque se centró en tecnologías .NET para la creación de APIs seguras y eficientes, así como en la comprensión de diversas arquitecturas y prácticas recomendadas asociadas.",
            img1: imgArtech1,
            img2: imgArtech2,
            img3: imgArtech3,
            imgG: GradienteCeleste
        },
        {
            Titulo: "Fundacion Pescar Capacitacion para el Trabajo",
            texto1: "Durante 6 meses, me capacité en la Fundación Pescar para desarrollar habilidades blandas esenciales para el entorno laboral. Me enfoqué en gestionar el tiempo, controlar emociones, trabajar en equipo, diplomacia laboral, toma de decisiones, seguridad en mí mismo y espíritu emprendedor. Además, participé en proyectos de equipo para simular situaciones cotidianas del entorno corporativo, fortaleciendo así mis habilidades prácticas y mi adaptabilidad.",
            img1: imgPescar2,
            img2: imgPescar1,
            img3: imgPescar3,
            imgG: GradienteVioleta

        },
        {
            Titulo: "Artech Capacitacion interna SAP ABAP",
            texto1: "Durante dos meses, participé en la capacitación interna de la consultora Artech para convertirme en consultor técnico de SAP ABAP. Aprendí junto a profesionales experimentados, completando proyectos con esta tecnología líder en el mercado. Esta experiencia me equipó con habilidades sólidas para abordar desafíos empresariales complejos.",
            img1: imgSAP1,
            img2: imgSAP2,
            img3: imgSAP3,
            imgG: GradienteNaranja
        },
    ]

    return (
        <section id='Trayectos' className="gap-20 flex flex-col">
            <article className="flex flex-col justify-center items-center">
                <p className="font-text text-primarioD text-xl">Mi trayecto</p>
                <p className="font-title text-6xl text-white text-center">¿Donde he estado?</p>
            </article>
            <article className="flex flex-col justify-center items-center gap-32">

                {Momentos.map((data, index) => (
                    <div key={index} className='flex flex-col gap-5 py-5 pl-[5%] sm:flex-row'>
                        <div className='grid grid-cols-3 h-[80%] grid-rows-[50%_50%] w-[70%] max-w-[630px] self-center sm:w-[50%]'>
                            <img src={data.img1} alt=""
                                className='z-10 row-start-1 row-span-1 col-start-2 col-span-2 justify-self-end self-center object-contain rounded-lg' />
                            <img src={data.img2} alt=""
                                className='z-10 row-start-1 row-span-2 col-start-1 col-span-2 self-center object-contain rounded-lg' />
                            <img src={data.img3} alt=""
                                className='z-10 row-start-2 row-span-2 col-start-2 col-span-2 object-contain self-start justify-self-end rounded-lg' />
                            <img src={data.imgG} alt=""
                                className='z-0 row-start-1 row-span-3 col-start-1 col-span-3 w-full' />
                        </div>

                        <div className='flex flex-row w-full self-center sm:w-[50%]'>
                            <div className="flex flex-col items-start gap-5 px-[5%]">
                                <p className="text-white text-3xl text-center font-title self-start"> {data.Titulo} </p>
                                <p className='text-white font-Text text-lg '><span className="text-primarioP">* </span> {data.texto1} </p>
                            </div>
                        </div>
                    </div>
                ))}

            </article>
        </section>
    )
}