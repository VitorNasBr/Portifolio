'use client'

import Image from "next/image";
import { SwitchTheme } from "../Switch";
import { HeaderTabs } from "../Tabs";
import * as Collapsible from '@radix-ui/react-collapsible'
import { CircleX, Menu } from "lucide-react";
import Link from "next/link";

interface HeaderTabsProps {
    initialRef: React.RefObject<HTMLElement>;
    projectsRef: React.RefObject<HTMLElement>;
    skillsRef: React.RefObject<HTMLElement>;
    contactRef: React.RefObject<HTMLElement>;
    aboutRef: React.RefObject<HTMLElement>;
    expirenceRef: React.RefObject<HTMLElement>;
}

export function Header(props : HeaderTabsProps) {
    
    return(
        <Collapsible.Root className="flex bg-zinc-100 dark:bg-zinc-800 border-b border-zinc-300 h-14 p-6 mb-10">

            <div className="flex items-center justify-between w-full lg:justify-start lg:w-48">
                <h1 className="font-extrabold text-2xl dark:text-zinc-100 w-[200px]">Vitor Medina</h1>
                <Collapsible.Trigger asChild className="lg:hidden">
                    <button className="rounded-full w-[25px] h-[25px] bg-zinc-900 dark:bg-zinc-100 flex items-center justify-center">
                        <Menu className="text-zinc-100 dark:text-zinc-900 h-4 w-4"/>
                    </button>
                </Collapsible.Trigger>
            </div>


            <Collapsible.Content forceMount className="flex flex-row justify-between w-full items-center data-[state=closed]:hidden lg:data-[state=closed]:flex data-[state=open]:absolute data-[state=open]:top-0 data-[state=open]:left-0 data-[state=open]:right-0 data-[state=open]:bg-zinc-100 dark:data-[state=open]:bg-zinc-800 data-[state=open]:w-full data-[state=open]:h-full data-[state=open]:z-20 data-[state=open]:flex data-[state=open]:flex-col data-[state=open]:justify-start data-[state=open]:items-start data-[state=open]:p-10 data-[state=open]:gap-10" >
                <nav>
                    <HeaderTabs initialRef={props.initialRef} projectsRef={props.projectsRef} skillsRef={props.skillsRef} contactRef={props.contactRef} aboutRef={props.aboutRef} expirenceRef={props.expirenceRef} />
                </nav>

                <div className="flex flex-col lg:flex-row gap-6">
                    <Link href="https://github.com//VitorNasBr">
                        <Image src="/github.png" alt="" width={30} height={30}/>
                    </Link>
                    <SwitchTheme />
                </div>
                <Collapsible.Trigger className="data-[state=closed]:hidden">
                    <CircleX className="text-zinc-800 dark:text-zinc-100"/>
                </Collapsible.Trigger>

            </Collapsible.Content>

        </Collapsible.Root>
    )
}