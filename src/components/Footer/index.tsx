'use client'

import { ChevronUp } from 'lucide-react'
import React from 'react'

interface FooterProps {
    scrollBarRef: React.RefObject<HTMLElement>
}

export function Footer({scrollBarRef} : FooterProps) {

    const handleClickScrollBarIntoView = () => {
        if(scrollBarRef.current !== null) {
            scrollBarRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return(
        <footer className="flex flex-row items-center bg-zinc-200 h-24 justify-between p-6 dark:bg-zinc-800">
            <h1 className="font-bold text-2xl text-zinc-900 dark:text-zinc-100">Vitor Medina</h1>

            <div className='lg:grid grid-cols-3 lg:grid-cols-5 gap-6 text-zinc-900 dark:text-zinc-100 hidden'>
                <button className='transition-all duration-200 hover:text-zinc-600 dark:hover:text-zinc-300'>Inicial</button>
                <button className='transition-all duration-200 hover:text-zinc-600 dark:hover:text-zinc-300'>Projetos</button>
                <button className='transition-all duration-200 hover:text-zinc-600 dark:hover:text-zinc-300'>Habilidades</button>
                <button className='transition-all duration-200 hover:text-zinc-600 dark:hover:text-zinc-300'>Contato</button>
                <button className='transition-all duration-200 hover:text-zinc-600 dark:hover:text-zinc-300'>Sobre mim</button>
            </div>

            <div>
                <button onClick={handleClickScrollBarIntoView} className='w-10 h-10 bg-zinc-300 dark:bg-zinc-500 flex items-center justify-center rounded-xl hover:bg-zinc-400 transition-all duration-200'>
                    <ChevronUp className='w-8 h-8'/>
                </button>
            </div>
        </footer>
    )
}