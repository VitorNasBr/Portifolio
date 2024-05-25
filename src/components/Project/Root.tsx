import { ComponentProps } from "react";

type RootProjectProps = ComponentProps<'div'> 


export function Root(props : RootProjectProps) {
    return(
        <div {...props} className="w-96 h-full bg-zinc-200 flex flex-col items-center text-zinc-900 gap-3 pb-4 rounded-bl-lg rounded-br-lg"/>
    )
}