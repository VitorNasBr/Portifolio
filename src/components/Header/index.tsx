'use client'

import Image from "next/image";
import { SwitchTheme } from "../Switch";
import { HeaderTabs } from "../Tabs";
import * as Collapsible from '@radix-ui/react-collapsible'
import { CircleX, Menu } from "lucide-react";

export function Header() {
    return(
        <Collapsible.Root className="flex flex-row justify-between lg:h-14 border-b border-zinc-400 items-center lg:p-5 ">
            <div>
                <h1 className="font-extrabold text-2xl dark:text-zinc-100">Vitor Medina</h1>
            </div>


            <Collapsible.Content className="absolute top-0 left-0 bottom-0 right-0 bg-zinc-100 dark:bg-zinc-800 z-20 p-10">
                <div className="flex flex-col justify-center items-start gap-6">
                    <nav >
                        <HeaderTabs />
                    </nav>

                    <div className="flex flex-col lg:flex-row gap-6">
                        <button>
                            <Image src="/github.png" alt="" width={20} height={20}/>
                        </button>

                        <button>
                            <Image src="/BrazilFlag.png" alt="" width={30} height={30}/>
                        </button>

                        <button>
                            <Image src="/UnitedStatesFlag.png" alt="" width={35} height={35}/>
                        </button>

                        <SwitchTheme />
                    </div>
                    <Collapsible.Trigger className="">
                        <CircleX className="text-zinc-800 dark:text-zinc-100"/>
                    </Collapsible.Trigger>
                </div>

            </Collapsible.Content>

            <Collapsible.Trigger asChild className="cursor-pointer">
                <Menu className="text-zinc-800 dark:text-zinc-100"/>
            </Collapsible.Trigger>
        </Collapsible.Root>
    )
}