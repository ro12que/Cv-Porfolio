import imgArtech1 from './assets/img-Trayectoria/Artech-Trabajo.jpg'
import imgArtech2 from './assets/img-Trayectoria/Artech-Team.jpg'
import imgArtech3 from './assets/img-Trayectoria/Artech-Amigas.png'
import imgPescar1 from './assets/img-Trayectoria/Pescar-Final.jpg'
import imgPescar2 from './assets/img-Trayectoria/Pescar-Grupal.jpeg'
import imgPescar3 from './assets/img-Trayectoria/Personal-Pescar.png'
import imgSAP1 from './assets/img-Trayectoria/SAP-Clase.jpg'
import imgSAP2 from './assets/img-Trayectoria/SAP-Grupo.jpg'
import imgSAP3 from './assets/img-Trayectoria/SAP-Detalle.jpg'

import { motion } from "framer-motion"

export default function Trayecto() {

    const Momentos = [
        {
            Titulo: "Artech Capacitacion .Net y SQL",
            texto1: "Durante mi capacitación de 6 meses en la consultora de software Artech, me sumergí en un entorno colaborativo de toma de decisiones en tiempo real y constante intercambio de ideas. Mi enfoque se centró en tecnologías .NET para la creación de APIs seguras y eficientes, así como en la comprensión de diversas arquitecturas y prácticas recomendadas asociadas.",
            img1: imgArtech1,
            img2: imgArtech2,
            img3: imgArtech3,
        },
        {
            Titulo: "Fundacion Pescar Capacitacion para el Trabajo",
            texto1: "Durante 6 meses, me capacité en la Fundación Pescar para desarrollar habilidades blandas esenciales para el entorno laboral. Me enfoqué en gestionar el tiempo, controlar emociones, trabajar en equipo, diplomacia laboral, toma de decisiones, seguridad en mí mismo y espíritu emprendedor. Además, participé en proyectos de equipo para simular situaciones cotidianas del entorno corporativo, fortaleciendo así mis habilidades prácticas y mi adaptabilidad.",
            img1: imgPescar2,
            img2: imgPescar1,
            img3: imgPescar3,
        },
        {
            Titulo: "Artech Capacitacion interna SAP ABAP",
            texto1: "Durante dos meses, participé en la capacitación interna de la consultora Artech para convertirme en consultor técnico de SAP ABAP. Aprendí junto a profesionales experimentados, completando proyectos con esta tecnología líder en el mercado. Esta experiencia me equipó con habilidades sólidas para abordar desafíos empresariales complejos.",
            img1: imgSAP1,
            img2: imgSAP2,
            img3: imgSAP3,
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
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className='grid grid-cols-3 h-[80%] grid-rows-[50%_50%] w-[90%] max-w-[630px] self-center sm:w-[50%]'>
                            <motion.img
                                drag
                                dragConstraints={{
                                    top: -50,
                                    left: -50,
                                    right: 50,
                                    bottom: 50,
                                }}
                                src={data.img1} alt=""
                                className='z-10 row-start-1 row-span-1 col-start-1 col-span-2 justify-self-end self-center object-contain rounded-lg' />
                            <motion.img
                                drag
                                dragConstraints={{
                                    top: -50,
                                    left: -50,
                                    right: 50,
                                    bottom: 50,
                                }}
                                src={data.img2} alt=""
                                className='z-10 row-start-1 row-span-2 col-start-2 col-span-2 self-center object-contain rounded-lg' />
                            <motion.img
                                drag
                                dragConstraints={{
                                    top: -50,
                                    left: -50,
                                    right: 50,
                                    bottom: 50,
                                }}
                                src={data.img3} alt=""
                                className='z-10 row-start-2 row-span-2 col-start-1 col-span-2 object-contain self-start justify-self-end rounded-lg' />

                            <motion.span
                                animate={{
                                    scale: [1, 1.5, 1.5, 1, 1],
                                    rotate: [0, 0, 180, 180, 0],
                                    borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                                }}
                                transition={{
                                    duration: 10,
                                    ease: "easeInOut",
                                    times: [0, 0.2, 0.5, 0.8, 1],
                                    repeat: Infinity,
                                    repeatDelay: 1
                                }}
                                className='col-start-1 col-span-3 row-start-1 row-span-2 justify-self-center self-center z-0 h-1/2 w-1/2 rounded-full bg-primarioP blur-3xl'>
                            </motion.span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, }}
                            whileInView={{ opacity: 1, }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className='flex flex-row w-full self-center sm:w-[50%]'>
                            <div className="flex flex-col items-start gap-5 px-[5%]">
                                <p className="text-white text-3xl text-center font-title self-start"> {data.Titulo} </p>
                                <p className='text-white font-Text text-lg '><span className="text-primarioP">* </span> {data.texto1} </p>
                            </div>
                        </motion.div>
                    </div>
                ))}

            </article>
        </section>
    )
}