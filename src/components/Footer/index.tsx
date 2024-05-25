import { ChevronUp } from 'lucide-react'

export function Footer() {
    return(
        <footer className="flex flex-row items-center bg-zinc-200 h-24 justify-between p-6">
            <h1 className="font-bold text-2xl">Vitor Medina</h1>

            <div className='flex flex-row gap-6'>
                <button className='text-zinc-900 hover:text-zinc-600 transition-all duration-200'>Inicial</button>
                <button className='text-zinc-900 hover:text-zinc-600 transition-all duration-200'>Projetos</button>
                <button className='text-zinc-900 hover:text-zinc-600 transition-all duration-200'>Habilidades</button>
                <button className='text-zinc-900 hover:text-zinc-600 transition-all duration-200'>Contato</button>
                <button className='text-zinc-900 hover:text-zinc-600 transition-all duration-200'>Sobre mim</button>
            </div>

            <div>
                <button className='w-10 h-10 bg-zinc-300 flex items-center justify-center rounded-xl hover:bg-zinc-400 transition-all duration-200'>
                    <ChevronUp className='w-8 h-8'/>
                </button>
            </div>
        </footer>
    )
}