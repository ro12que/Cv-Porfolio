import HeroPersonal from './assets/img-Hero/Hero-Personal.png'
import HeroBg from './assets/img-Hero/BG-Hero.png'
import HeroDeatil from './assets/img-Hero/Hero-Detail.gif'
import './index.css'
import React, { useState } from 'react';

export default function Hero() {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    }
    return (
        <section id='Hero' className='bg-img flex flex-col gap-3 max-h-[1200px]'>
            <nav className="h-[80px] w-full flex items-center justify-between flex-wrap  p-4 fixed">
                <div className="block sm:hidden ">
                    <button id='boton' onClick={toggleMenu} className="flex items-center px-3 py-2 text-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div id='menu' className={` w-3/4 block flex-grow sm:flex sm:items-evenly  ${menuVisible ? 'bg-black' : 'hidden'}`}>
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
                <div className="grid grid-rows-[1fr_2fr_1fr] grid-cols-[4fr_4fr] m-auto h-1/2 w-[66%] sm:w-[30%]">
                    <span className='z-20 imgPersonal w-full h-full row-start-1 row-span-2 col-start-1 col-span-2 self-end border-4 rounded-lg'></span>
                    <img src={HeroPersonal} alt=""
                        className='p-1 z-30 w-full row-start-2 row-span-2 col-start-1 col-span-2 self-end' />

                    <img src={HeroDeatil} alt=""
                        className='z-20 w-[45%] row-start-1 row-span-2 col-start-1 col-span-2 self-end' />
                </div>
*/}