import Image from "next/image";
import { SwitchTheme } from "../Switch";
import { HeaderTabs } from "../Tabs";

export function Header() {
    return(
        <header className="flex flex-row justify-between h-14 border-b border-zinc-400 items-center p-5">
            <div>
                <h1 className="font-extrabold text-2xl">Vitor Medina</h1>
            </div>

            <nav>
                <HeaderTabs />
            </nav>

            <div className="flex flex-row gap-2">
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
        </header>
    )
}