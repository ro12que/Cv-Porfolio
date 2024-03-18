"use client"
import { motion } from "framer-motion"
import { useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import Particles, { initParticlesEngine } from "@tsparticles/react";

export default function Stela() {

    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    return (
        init &&
        <div className="w-[0px]">
            <Particles
                id="tsparticles"
                options={{
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: ["#ba72e2", "#39ffb1", "#73bdfd", "#fb896f", "#ba72e2"],
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.1,
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,

                }}

            />
        </div>

        /*     <motion.span
                 initial={{ opacity: 0, top: -50 }}
                 animate={{
                     opacity: 1,
                     top: positionArray,
                     scale: [1, 1.5, 1, 1.5, 1],
                     rotate: [180, 180, 180, 180, 180],
                     borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                     backgroundColor: ["#ba72e2", "#3eb29a", "#73bdfd", "#fb896f", "#ba72e2"],
                 }}
                 transition={{
                     duration: 10,
                     ease: "easeInOut",
                     times: [0, 0.2, 0.5, 0.8, 1],
                     repeat: Infinity,
                     repeatDelay: 1
                 }}
                 className='absolute hidden top-10 right-1/2 w-20 h-20 blur-xl bg-primarioP sm:block'>
             </motion.span>*/

    )

}
