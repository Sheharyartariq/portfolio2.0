'use client'
import React from 'react'
import { motion } from 'framer-motion'

interface Props {
    
}

const ExperienceCard: React.FC<Props> = () => {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[600px]  xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img
            initial={{
                y: -100,
                opacity: 0
            }}
            transition={{duration: 1.2}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            className='h-32 w-32 rounded-full xl:h-[200px] xl:w-[200px] object-cover object-center' 
            src="https://avatars.githubusercontent.com/u/99352538?v=4" alt="" />

            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>Network Tecnician</h4>
                <p className='font-bold text-2xl mt-1'>Self-Employed</p>
                {/* <div className='flex space-x-2 my-2'>
                    <img className='h-10 w-10 rounded-full' 
                    src="https://avatars.githubusercontent.com/u/99352538?v=4" />
                    <img className='h-10 w-10 rounded-full' 
                    src="https://avatars.githubusercontent.com/u/99352538?v=4" />
                    <img className='h-10 w-10 rounded-full'
                    src="https://avatars.githubusercontent.com/u/99352538?v=4" />
                </div> */}
                     <p className='uppercase py-5 text-gray-300'>2021 - 2023</p>

                    <ul className='list-disc space-y-4 ml-5 text-lg'>
                        <li>Troubleshooting network or server problems</li>
                        <li>Testing and configuring software</li>
                        <li>Configuring network software</li>
                    </ul>
            </div>
        </article>
    )
}

export default ExperienceCard
