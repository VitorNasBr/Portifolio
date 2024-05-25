import { ReactNode } from "react";

interface TriggerProps{
    name: string;
    description: string;
    children: ReactNode
}

export function Trigger(props : TriggerProps) {
    return(
        <>
            <h1 className="font-medium ">{props.name}</h1>
            <span className="text-center">{props.description}</span>

            <div className="flex flex-row gap-2">
                {props.children}
            </div>
        </>
    )
}