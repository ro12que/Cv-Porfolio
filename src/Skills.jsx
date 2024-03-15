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
            subTitulo: "Liderazgo, Extroversion y Empatia dice mi DNI",
            descripcion: "",
            img: TeamWork,
        },
        {
            titulo: "Analisis de datos",
            subTitulo: "Manejo de bases de datos, ciclo de vida de datos, analisis, reportes y vizualizacion usando lenguaje R con RStudio, Tableu, Excel y SQL",
            descripcion: "",
            img: Analisis,
        }, {
            titulo: "Framework .NET",
            subTitulo: "Conocimiento practico del Framework mas importante de Microsoft",
            descripcion: "",
            img: NET,
        },
        {
            titulo: "Diseño UX/UI",
            subTitulo: "Mejores practicas del diseño WEB",
            descripcion: "",
            img: UXUI,
        },
        {
            titulo: "Stack MERN",
            subTitulo: "Profundo entendimiento de las tegnologias para el mas eficiente desarrollo web",
            descripcion: "",
            img: MERN,
        },
        {
            titulo: "Analista SAP ABAP",
            subTitulo: "Conocimineto funcionla y tecnico del ERP y sus modulos mas importantes",
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
                    <div key={index} className="flex flex-col gap-5 p-3 items-center justify-evenly rounded-lg border-2 w-[300px] h-[500px] mx-[10px]">
                        <p className="text-white text-3xl font-title"> {data.titulo} </p>
                        <p className="text-white w-[80%] text-xl font-text"> {data.subTitulo} </p>
                        <img src={data.img} alt=""
                            className="object-contain w-[70%] rounded-lg" />
                    </div>
                ))}
            </article>
        </section>
    )
}