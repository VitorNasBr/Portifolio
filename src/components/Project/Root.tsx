import { ComponentProps } from "react";

type RootProjectProps = ComponentProps<'div'> 


export function Root(props : RootProjectProps) {
    return(
        <div 
            {...props} 
            className="w-60 lg:w-80 h-full bg-zinc-200 dark:bg-zinc-800 flex flex-col items-center text-zinc-900 dark:text-zinc-100 gap-3 pb-4 rounded-bl-lg rounded-br-lg"
        />
    )
}