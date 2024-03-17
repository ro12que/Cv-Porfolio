import HeroPersonal from './assets/img-Hero/Hero-Personal.png'
import HeroBg from './assets/img-Hero/BG-Hero.png'
import HeroDeatil from './assets/img-Hero/Hero-Detail.gif'
import Menu from './assets/img-Hero/menu-Icon.svg'
import close from './assets/img-Hero/x-Icon.svg'
import './index.css'
import React, { useState } from 'react';

export default function Hero() {

    const Links = [
        { nombre: "Home", link: "#Hero" },
        { nombre: "Proyectos", link: "#Proyectos" },
        { nombre: "Trayecto", link: "#Trayectos" },
        { nombre: "Habilidades", link: "#Habilidades" },
    ]

    let [open, setOpen] = useState(false);

    return (
        <section id='Hero' className='bg-img flex flex-col gap-3 max-h-[1200px]'>

            <nav className='fixed top-0 left-0 w-full h-[80px]'>
                <div className='flex items-center justify-between py-4 px-7 md:px-10'>


                    <div onClick={() => setOpen(!open)} className='w-7 h-7 md:hidden absolute left-8 top-6' >

                        {
                            open ? <img src={close} alt="" /> : <img src={Menu} alt="" />
                        }

                    </div>

                    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static z-50 left-0 w-fit md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12 bg-[#0d0d0d] rounded-lg w-fit h-fit border-4 border-[#0d0d0d]' : 'left-[-490px]'}`}>
                        {
                            Links.map((data, index) => (
                                <li key={index} className='my-7 md:my0 md:ml-8 '>
                                    <a href={data.link} className='text-white '> {data.nombre} </a>
                                </li>
                            ))
                        }
                    </ul>

                    <a className='flex text-xl text-Text bg-secundarioD rounded-lg w-fit h-fit border-8 border-secundarioD absolute right-7 top-6 md:right-10 md:top-8' href='#Footer'>
                        Contactame!
                    </a>

                </div>
            </nav>


            <section className="flex flex-wrap h-[800px] items-center justify-center gap-10 mt-28">

                <div className="min-w-[300px] px-[5%] flex flex-col w-full gap-5 text-start sm:w-[45%]">
                    <p className="font-Text text-xl text-primarioP">
                        Diseño Web, <span className='text-primarioC'>Desarrollo de Software</span> y <span className='text-primarioD'>Analisis de datos</span>
                    </p>
                    <p className="font-title text-6xl text-white">
                        Hola! Soy <span className='text-primarioW'>Roque</span>  tu nuevo programador web full stack
                    </p>
                    <p className="w-[60%] font-Text text-base text-white ">
                        Soy un joven <span className='text-primarioW'>entusiasta</span>  de la tecnología que sabe perfectamente cómo <span className='text-primarioD'>agregar valor</span> a tu empresa, idea o proyecto.
                    </p>
                </div>

                <div className=" m-auto h-[64hv] w-[56%] sm:w-[20%]">
                    <div className='imgPersonal grid grid-rows-[1fr_4fr] grid-cols-[1fr_1fr] z-20 self-end border-4 rounded-lg'>
                        <img src={HeroPersonal} alt=""
                            className=' object-contain z-30 row-start-2 row-span-2 col-start-1 col-span-2 self-end' />

                        <img src={HeroDeatil} alt=""
                            className='z-20 w-full object-contain row-start-1 row-span-2 col-start-1 col-span-2 self-center justify-self-center' />
                    </div>
                </div>

            </section>
        </section >
    )
}

{/*
            <nav className="h-[80px] w-full flex items-center justify-between flex-wrap  p-4 fixed">
                <div className="block sm:hidden ">
                    <button id='boton' onClick={toggleMenu} className="flex items-center px-3 py-2 text-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div id='menu' className={` w-1/2 block flex-grow justify-start sm:flex sm:items-evenly  ${menuVisible ? 'bg-[#0d0d0d]' : 'hidden'}`}>
                    <div className="text-sm sm:flex-grow">
                        <a href='Hero' className="block mt-4 sm:inline-block sm:mt-0 text-white mr-4">
                            Inicio
                        </a>
                        <a href="Proyectos" className="block mt-4 sm:inline-block sm:mt-0 text-white mr-4">
                            Proyectos
                        </a>
                        <a href="Trayectos" className="block mt-4 sm:inline-block sm:mt-0 text-white mr-4">
                            Trayecto
                        </a>
                        <a href="Habilidades" className="block mt-4 sm:inline-block sm:mt-0 text-white mr-4">
                            Habilidades
                        </a>
                    </div>
                </div>
                <a href="Footer" className="inline-block text-lg px-2 py-2 leading-none border-4 border-primarioD rounded-lg bg-primarioD text-black mt-0">contactame</a>
            </nav>
*/}