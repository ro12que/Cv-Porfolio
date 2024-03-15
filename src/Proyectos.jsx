import ArtechTeam from './assets/img-Proyectos/Artech-Team.png'
import ComidaSegura from './assets/img-Proyectos/img-LandPageComidaSegura.png'
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
import VSDDetail from './assets/img-Proyectos/img_VSD.png'


export default function Proyecto() {

    const TRabajos = [
        {
            titulo: "Comida Segura",
            subTitulo: "Buscador Web para personas con necesidades alimenticias diferentes",
            Descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, soluta voluptatibus. Enim dignissimos culpa ea reprehenderit minus expedita neque consequuntur earum quas? Excepturi autem voluptate minus cumque reiciendis officia culpa!",
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
            titulo: "Visualizador de Datos",
            subTitulo: "Interfaz para usuarios donde se puede consultar data de una base de datos sql usando asp .net",
            Descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, soluta voluptatibus. Enim dignissimos culpa ea reprehenderit minus expedita neque consequuntur earum quas? Excepturi autem voluptate minus cumque reiciendis officia culpa!",
            imgAd: null,
            imgPrincipal: "",
            Tegnos: [
                Tegnoc,
                Tegnosql,
                Tegnotailwind,
                Tegnoreact,
                Tegnonet
            ]

        },
        {
            titulo: "Land Page Autoservico RM",
            subTitulo: "Land Page de Maximercado Local totalmente para el cliente",
            Descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, soluta voluptatibus. Enim dignissimos culpa ea reprehenderit minus expedita neque consequuntur earum quas? Excepturi autem voluptate minus cumque reiciendis officia culpa!",
            imgAd: "",
            imgPrincipal: "",
            Tegnos: [
                Tegnoreact,
                Tegnotailwind,
                Tegnojs,
                Tegnocss,
            ]

        },

    ]

    return (

        <section className='gap-20 flex flex-col items-center'>
            <article className="flex flex-col items-center">
                <p className="font-text text-primarioW text-xl">Mis proyectos</p>
                <p className="font-title text-6xl text-white text-center max-w-[80%]">Creo soluciones y las transformo en codigo</p>
            </article>
            <div className='flex flex-wrap gap-20 justify-center'>

                {TRabajos.map((data, index) => (
                    <article className='grid grid-rows-[30%_40%_25%] grid-cols-3 gap-5 px-5 pt-5 max-w-[500px] h-[1000px] rounded-lg border-2 border-primarioC telf:h-[720px]'>
                        <img src={data.imgPrincipal} alt=""
                            className='row-start-1 row-span-1 col-start-1 col-span-3 h-full object-cover self-center justify-self-center' />
                        <div className='row-start-2 row-span-1 col-start-1 col-span-3 flex flex-col gap-5 h-fit items-center mb-5'>
                            <p className='text-white text-6xl text-center font-title'> {data.titulo} </p>
                            <p className='text-white text-xl font-text text-center w-[80%]'> {data.subTitulo} </p>
                            <p className='text-white font-Text text-lg'> {data.Descripcion} </p>
                        </div>
                        <img src={data.imgAd} alt=""
                            className='row-start-3 row-span-1 col-start-2 col-span-2 self-end justify-self-end w-full' />
                        <div className='flex justify-center w-[95%] row-start-3 row-span-1 col-start-1 col-span-2 self-end bg-slate-800 rounded-lg m-5'>
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