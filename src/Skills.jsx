import TeamWork from './assets/img-Skills/img-TeamWork.png'
import Analisis from './assets/img-Skills/img-Analisis.png'
import NET from './assets/img-Skills/img-.Net.png'
import UXUI from './assets/img-Skills/img-uxui.png'
import MERN from './assets/img-Skills/img-Merm.png'
import SAP from './assets/img-Skills/img-SAP.png'


export default function Skills() {

    const Habilidad = [
        {
            titulo: "Trabajo en equipo",
            subTitulo: "Excelente habilidad para la adaptación dinámica a diversos entornos de equipo, demostrando proactividad y liderazgo con un enfoque empático y eficiente en la consecución de objetivos.",
            descripcion: "",
            img: TeamWork,
        },
        {
            titulo: "Analisis de datos",
            subTitulo: "Manejo integral de bases de datos, ciclo de vida completo de los datos, análisis avanzado, generación de informes y visualización de datos. Dominio de herramientas como R con RStudio, Tableau, Excel y SQL para el procesamiento y análisis eficiente de conjuntos de datos complejos.",
            descripcion: "",
            img: Analisis,
        }, {
            titulo: "Framework .NET",
            subTitulo: "Conocimiento práctico y profundo del principal framework de Microsoft para la creación y gestión de diversas arquitecturas de software, así como el desarrollo de API y la implementación de métodos de seguridad robustos para garantizar la integridad y confidencialidad de los datos en entornos empresariales críticos.",
            descripcion: "",
            img: NET,
        },
        {
            titulo: "Diseño UX/UI",
            subTitulo: "Destacada competencia en el diseño web, con un enfoque en la creación de interfaces intuitivas y atractivas que optimizan la experiencia del usuario y cumplen con los estándares actuales de diseño web.",
            descripcion: "",
            img: UXUI,
        },
        {
            titulo: "Stack MERN",
            subTitulo: "Amplio conocimiento y comprensión profunda de las tecnologías más avanzadas para el desarrollo web, abarcando desde frameworks front-end y back-end hasta herramientas de gestión de versiones y metodologías ágiles, con el objetivo de asegurar un desarrollo web eficiente y de alta calidad.",
            descripcion: "",
            img: MERN,
        },
        {
            titulo: "Analista SAP ABAP",
            subTitulo: "comprensión integral del Gestor de Recursos Empresariales (ERP) SAP, incluyendo un conocimiento tanto funcional como técnico de sus módulos, componentes y datos críticos. Capacidad para implementar y personalizar soluciones SAP que optimizan los procesos empresariales y mejoran la eficiencia operativa en diversos entornos empresariales.",
            descripcion: "",
            img: SAP,
        },
    ]

    return (
        <section className="gap-20 flex flex-col">
            <article className="flex flex-col justify-center items-center">
                <p className="font-text text-primarioP text-xl">Mis habilidades</p>
                <p className="font-title text-6xl text-white text-center">¿Como puedo ayudarte?</p>
            </article>
            <article className="flex flex-wrap  justify-center items gap-10">
                {Habilidad.map((data, index) => (
                    <div key={index} className="grid grid-cols-3 grid-rows-[10%_10%_40%_30%] gap-5 p-3 py-5 items-center min-w-[300px] w-[80%] h-[900px] min-h-[700px] mx-[10px] sm:h-[700px md:h-[900px] lg:h-[600px] sm:w-[50%] md:w-[30%]">
                        <img src={data.img} alt=""
                            className="z-10 object-contain w-[80%] rounded-lg bg-primarioP col-start-2 col-span-1 row-start-1 row-span-2 self-center sm:w-[60%]" />
                        <div className='z-0 row-start-2 row-span-3 col-start-1 col-span-3 rounded-lg border-2 border-primarioP h-full py-8 p-5 flex flex-col gap-5 sm:py-10 lg:py-28'>
                            <p className="text-white text-5xl font-title text-center "> {data.titulo} </p>
                            <p className="text-white w-[80%] text-lg font-text h-full m-auto"> {data.subTitulo} </p>
                        </div>
                    </div>
                ))}
            </article>
        </section>
    )
}

{/*
        <section className="gap-20 flex flex-col">
            <article className="flex flex-col justify-center items-center">
                <p className="font-text text-primarioP text-xl">Mis habilidades</p>
                <p className="font-title text-6xl text-white text-center">¿Como puedo ayudarte?</p>
            </article>
            <article className="flex flex-wrap  justify-center items gap-10">
                {Habilidad.map((data, index) => (
                    <div key={index} className="flex flex-col gap-5 p-3 items-center justify-evenly rounded-lg border-2 w-[300px] h-[500px] mx-[10px]">
                        <p className="text-white text-3xl font-title"> {data.titulo} </p>
                        <p className="text-white w-[80%] text-xl font-text"> {data.subTitulo} </p>
                        <img src={data.img} alt=""
                            className="object-contain w-[70%] rounded-lg" />
                    </div>
                ))}
            </article>
        </section>
*/}