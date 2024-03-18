import HeroPersonal from './assets/img-Hero/Hero-Personal.png'
import HeroBg from './assets/img-Hero/BG-Hero.png'
import HeroDeatil from './assets/img-Hero/Hero-Detail.gif'
import Menu from './assets/img-Hero/menu-Icon.svg'
import close from './assets/img-Hero/x-icon.svg'
import './index.css'
import React, { useState } from 'react';

import { motion } from "framer-motion"

export default function Hero() {

    const Links = [
        { nombre: "Home", link: "#Hero" },
        { nombre: "Proyectos", link: "#Proyectos" },
        { nombre: "Trayecto", link: "#Trayectos" },
        { nombre: "Habilidades", link: "#Habilidades" },
    ]

    let [open, setOpen] = useState(false);

    return (
        <section id='Hero' className='flex flex-col gap-3 max-h-[1200px]'>
            <motion.nav
                initial={{ opacity: 0, top: -50 }}
                animate={{ opacity: 1, top: 0, transition: { duration: 1.5, ease: "easeOut" } }}
                options={{ root: null, threshold: 0.5 }}
                className='fixed top-0 left-0 w-full h-[80px]'>
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
            </motion.nav>

            <div className="flex flex-wrap h-[800px] items-center justify-center gap-10 mt-28">

                <motion.div
                    initial={{ opacity: 0, }}
                    animate={{ opacity: 1, transition: { duration: 1.5, ease: "easeOut" } }}
                    options={{ root: null, threshold: 0.5 }}
                    className="min-w-[300px] px-[5%] flex flex-col w-full gap-5 text-start sm:w-[45%]">
                    <p className="font-Text text-xl text-primarioP">
                        Diseño Web, <span className='text-primarioC'>Desarrollo de Software</span> y <span className='text-primarioD'>Analisis de datos</span>
                    </p>
                    <p className="font-title text-6xl text-white">
                        Hola! Soy <span className='text-primarioW'>Roque</span>  tu nuevo programador web full stack
                    </p>
                    <p className="w-[60%] font-Text text-base text-white ">
                        Soy un joven <span className='text-primarioW'>entusiasta</span>  de la tecnología que sabe perfectamente cómo <span className='text-primarioD'>agregar valor</span> a tu empresa, idea o proyecto.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, }}
                    animate={{ opacity: 1, transition: { duration: 1.5, ease: "easeOut" } }}
                    options={{ root: null, threshold: 0.5 }}
                    whileHover={{ scale: 1.1 }}
                    className=" m-auto h-[64hv] w-[56%] sm:w-[20%]">


                    <div className='imgPersonal grid grid-rows-[1fr_4fr] grid-cols-[1fr_1fr] z-20 self-end border-4 rounded-lg'>
                        <span className='h-full w-full row-start-1 row-span-2 col-start-1 col-span-2 z-40'></span>
                        <img src={HeroPersonal} alt=""
                            className=' object-contain z-30 row-start-2 row-span-2 col-start-1 col-span-2 self-end' />
                        <img src={HeroDeatil} alt=""
                            className='z-20 w-full object-contain row-start-1 row-span-2 col-start-1 col-span-2 self-center justify-self-center' />
                    </div>
                </motion.div>

            </div>
        </section >
    )
}