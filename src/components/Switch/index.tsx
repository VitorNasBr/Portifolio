'use client'

import { useTheme } from '@/context/Theme';
import * as Switch from '@radix-ui/react-switch'

export function SwitchTheme() {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === "dark";


    return(
        <Switch.Root id="switchTheme" checked={isDark} onCheckedChange={toggleTheme} className='w-14 h-7 leading-none pr-5 bg-zinc-900 dark:bg-zinc-100 rounded-xl pl-1'>
            <Switch.Thumb className='bg-zinc-100 dark:bg-zinc-900 rounded-full w-5 h-5 block shadow-[0_2px_2px] transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[25px]'>

            </Switch.Thumb>
        </Switch.Root>
    )
}