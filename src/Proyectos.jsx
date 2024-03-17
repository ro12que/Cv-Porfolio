import ArtechTeam from './assets/img-Proyectos/Artech-Team.png'
import ComidaSegura from './assets/img-Proyectos/img-LandPageComidaSegura.png'
import WaramTeam from './assets/img-Proyectos/Waram-Team.jpg'
import VDS from './assets/img-Proyectos/Visual-Reporte.png'
import Waram from './assets/img-Proyectos/Waram-LandingPage.png'
import Tegnonet from './assets/icons-Tegnologias/icon-.net.svg'
import Tegnoc from './assets/icons-Tegnologias/icon-c.svg'
import Tegnocss from './assets/icons-Tegnologias/icon-css.svg'
import Tegnojs from './assets/icons-Tegnologias/icon-javascript.svg'
import Tegnomongo from './assets/icons-Tegnologias/icon-mongodb.svg'
import Tegnosql from './assets/icons-Tegnologias/icon-mysql.svg'
import Tegnonode from './assets/icons-Tegnologias/icon-nodejs.svg'
import Tegnoreact from './assets/icons-Tegnologias/icon-react.svg'
import Tegnotailwind from './assets/icons-Tegnologias/icon-tailwind.svg'
import Tegnovite from './assets/icons-Tegnologias/icon-vite.svg'

export default function Proyecto() {

    const TRabajos = [
        {
            titulo: "Visualizador de Datos",
            subTitulo: "Interfaz amigable para usuarios donde pueden consultar una base de datos sql usando Nodejs y Typescript",
            Descripcion: "Como parte de un equipo colaborativo, contribuí al desarrollo de una interfaz de usuario que les permite consultar una base de datos SQL de manera eficiente.",
            imgAd: WaramTeam,
            imgPrincipal: VDS,
            Tegnos: [
                Tegnoc,
                Tegnotailwind,
                Tegnoreact,
                Tegnonet,
                Tegnosql
            ]

        },
        {
            titulo: "Comida Segura",
            subTitulo: "Buscador Web para personas con necesidades alimenticias diferentes",
            Descripcion: "Participé en un equipo que desarrolló un buscador de comida para personas con dietas especificas. Utilizando una base de datos global, nuestra aplicación permite a los usuarios filtrar opciones de comida de manera personalizada según sus necesidades dietéticas.",
            imgAd: ArtechTeam,
            imgPrincipal: ComidaSegura,
            Tegnos: [
                Tegnojs,
                Tegnomongo,
                Tegnonode,
                Tegnocss,
            ]

        },
        {
            titulo: "Waram StartUp LandingPage",
            subTitulo: "Landing Page para Startup de servicios it",
            Descripcion: "Participé en la creación de una Landing Page para una startup de servicios IT con un estilo creativo y moderno. Nuestro objetivo fue diseñar una página web impactante y funcional que reflejara la innovación y el enfoque revolucionario de la empresa.",
            imgAd: WaramTeam,
            imgPrincipal: Waram,
            Tegnos: [
                Tegnoreact,
                Tegnotailwind,
                Tegnojs,
                Tegnocss,
            ]

        },

    ]

    return (

        <section id='Proyectos' className='gap-20 flex flex-col items-center'>
            <article className="flex flex-col items-center">
                <p className="font-text text-primarioW text-xl">Mis proyectos</p>
                <p className="font-title text-6xl text-white text-center max-w-[80%]">Creo soluciones y las transformo en codigo</p>
            </article>
            <div className='flex flex-wrap gap-20 justify-center'>

                {TRabajos.map((data, index) => (
                    <article key={index} className='grid grid-rows-[30%_40%_25%] grid-cols-3 gap-5 px-5 pt-5 max-w-[500px] h-[1050px] border-b-4 border-t-4 border-primarioD telf:h-[790px]'>
                        <img src={data.imgPrincipal} alt=""
                            className='row-start-1 row-span-1 col-start-1 col-span-3 h-full object-contain self-center justify-self-center ' />
                        <div className='row-start-2 row-span-1 col-start-1 col-span-3 flex flex-col gap-5 h-fit items-center mb-5'>
                            <p className='text-white text-6xl text-center font-title'> {data.titulo} </p>
                            <p className='text-white text-xl font-text text-center w-[80%]'> {data.subTitulo} </p>
                            <p className='text-white font-Text text-lg'> {data.Descripcion} </p>
                        </div>
                        <img src={data.imgAd} alt=""
                            className='row-start-3 row-span-1 col-start-1 col-span-3 self-end justify-self-end w-full telf:col-start-2 telf:col-span-2' />
                        <div className='flex justify-between w-full row-start-3 row-span-1 col-start-1 col-span-2 self-end bg-slate-800 rounded-lg m-5'>
                            {data.Tegnos.map((tegno, index) => (
                                <img key={index} src={tegno} alt=""
                                    className='w-[20%]' />
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )

}