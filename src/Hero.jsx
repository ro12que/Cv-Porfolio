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
        <section className='bg-img flex flex-col gap-3 max-h-[1200px]'>
            <nav className="h-[80px] flex items-center justify-between flex-wrap  p-4">
                <div className="block sm:hidden ">
                    <button id='boton' onClick={toggleMenu} className="flex items-center px-3 py-2 text-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div id='menu' className={` w-3/4 block flex-grow sm:flex sm:items-evenly  ${menuVisible ? 'bg-black' : 'hidden'}`}>
                    <div className="text-sm sm:flex-grow">
                        <a href="#" className="block mt-4 sm:inline-block sm:mt-0 text-white mr-4">
                            Inicio
                        </a>
                        <a href="#" className="block mt-4 sm:inline-block sm:mt-0 text-white mr-4">
                            Proyectos
                        </a>
                        <a href="#" className="block mt-4 sm:inline-block sm:mt-0 text-white mr-4">
                            Trayecto
                        </a>
                        <a href="#" className="block mt-4 sm:inline-block sm:mt-0 text-white mr-4">
                            Habilidades
                        </a>
                    </div>
                </div>
                <a href="#" className="inline-block text-xs px-2 py-2 leading-none border rounded-lg text-white border-white mt-0">contactame</a>
            </nav>



            <section className="flex flex-wrap h-[800px] items-center justify-center gap-10">

                <div className="min-w-[300px] px-[5%] flex flex-col w-full gap-5 text-start sm:w-[45%]">
                    <p className="font-Text text-xl text-terciarioP">Morel Roque</p>
                    <p className="font-title text-6xl text-white">Hola! Soy tu nuevo programador web full stack</p>
                    <p className="w-[60%] font-Text text-base text-white ">Diseño Web y Front End? Servidores y BackEnd? Analisis y reportes de datos? Better Call Roque</p>
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