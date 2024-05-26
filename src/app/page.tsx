import { Skills } from "@/components/Skills";
import Image from "next/image";

import * as Project from '@/components/Project'

export default function Home() {
  return (
    <>
      <section className="flex xl:flex-row flex-col justify-center items-center xl:p-52 xl:gap-40 gap-10 h-screen">

        <div className="w-screen p-10">
          <div className="flex flex-col xl:w-[700px] text-zinc-900 dark:text-zinc-100">
            <p className="font-semibold">
              Olá, eu sou o Vitor Medina do Nascimento 👋
            </p>

            <p>
              Tenho 17 anos e comecei minha jornada na programação em 2020. Desde então, já trabalhei com diversas linguagens, incluindo Lua, C#, Java, JavaScript, HTML e CSS. Atualmente, meu foco está em React, onde estou desenvolvendo projetos dinâmicos e interativos. Além disso, estou me aprofundando no desenvolvimento de APIs, buscando sempre expandir minhas habilidades e conhecimentos. Vamos construir algo incrível juntos?
            </p>
            <button className="w-full h-12 bg-violet-700 rounded-lg text-zinc-100 font-medium mt-6 hover:bg-violet-600 transition duration-200">Veja meus projetos:</button>
          </div>

        </div>
          <Image src="/VitorIcon.png" alt="" width={300} height={300}/>
      </section>

      <section className="flex flex-col items-center gap-6 mb-16 text-zinc-900 dark:text-zinc-100">
        <h1 className="font-bold text-xl">Sobre mim</h1>
          <p className="xl:w-[1200px] p-10 text-center">
            Tenho 17 anos e comecei minha jornada na programação em 2020. Desde então, já trabalhei com diversas linguagens, incluindo Lua, C#, Java, JavaScript, HTML e CSS. Atualmente, meu foco está em React, onde estou desenvolvendo projetos dinâmicos e interativos. Além disso, estou me aprofundando no desenvolvimento de APIs, buscando sempre expandir minhas habilidades e conhecimentos. Vamos construir algo incrível juntos?
          </p>
      </section>

      <section className="flex flex-col items-center gap-6 mb-16 text-zinc-900 dark:text-zinc-100">
        <h1 className="font-bold text-xl">Habilidades</h1>

        <div className="grid grid-cols-3 xl:grid-cols-9 gap-6">
          <Skills img={"/skills/react.png"} alt={""} />
          <Skills img={"/skills/next.png"} alt={""} />
          <Skills img={"/skills/typescript.png"} alt={""} />
          <Skills img={"/skills/javascript.png"} alt={""} />
          <Skills img={"/skills/css.png"} alt={""} />
          <Skills img={"/skills/html.png"} alt={""} />
          <Skills img={"/skills/tailwind.png"} alt={""} />
          <Skills img={"/skills/nodejs.png"} alt={""} />
          <Skills img={"/skills/styled-components.png"} alt={""} />
        </div>
      </section>

      <section className="flex items-center justify-center flex-col gap-10 mb-16 text-zinc-900 dark:text-zinc-100">
        <h1 className="text-xl font-bold">Projetos</h1>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
          <Project.Root>
            <Project.Prefix img="/projectImg.png" alt=""/>
            <Project.Trigger name="Site Nexus Advanced Analytics" description="desenvolvimento com Next usando stitches para estilização">
              <Skills img={"/skills/next.png"} alt={""} />
              <Skills img={"/skills/typescript.png"} alt={""} />
              <Skills img={"/skills/styled-components.png"} alt={""} />
            </Project.Trigger>
            <Project.Control />
          </Project.Root>
          <Project.Root>
            <Project.Prefix img="/projectImg.png" alt=""/>
            <Project.Trigger name="Site Nexus Advanced Analytics" description="desenvolvimento com Next usando stitches para estilização">
              <Skills img={"/skills/next.png"} alt={""} />
              <Skills img={"/skills/typescript.png"} alt={""} />
              <Skills img={"/skills/styled-components.png"} alt={""} />
            </Project.Trigger>
            <Project.Control />
          </Project.Root>
          <Project.Root>
            <Project.Prefix img="/projectImg.png" alt=""/>
            <Project.Trigger name="Site Nexus Advanced Analytics" description="desenvolvimento com Next usando stitches para estilização">
              <Skills img={"/skills/next.png"} alt={""} />
              <Skills img={"/skills/typescript.png"} alt={""} />
              <Skills img={"/skills/styled-components.png"} alt={""} />
            </Project.Trigger>
            <Project.Control />
          </Project.Root>
        </div>

      </section>

      <section className="flex items-center justify-center flex-col gap-6 mb-16 text-zinc-900 dark:text-zinc-100">
        <h1 className="font-bold text-xl">Experiência Profissional</h1>

        <div className="xl:w-[1200px] xl:h-[400px] h-full w-auto bg-zinc-200 dark:bg-zinc-800 rounded-xl flex flex-col items-center p-5">
          <h1 className="font-semibold text-lg">Nexus Advanced Analytics</h1>
          <span>Desenvolvedor Fullstack</span>
          <span>Agosto 2023 - Presente</span>

          <div className="grid grid-cols-2 grid-rows-2 gap-6 mt-10 text-center">
            <p>Manutenção e atualização de documentação técnica para facilitar a colaboração e o onboarding de novos membros da equipe.</p>
            <p>Desenvolvimento de sites e aplicações web dinâmicas utilizando Next.js, garantindo alta performance e SEO otimizado.</p>
            <p>Otimização de carregamento de páginas e recursos para melhorar a experiência do usuário, reduzindo o tempo de resposta e latência.</p>
            <p>Utilização de práticas de testes automatizados, incluindo testes unitários e de integração, para garantir a qualidade e estabilidade do código.</p>
            <p>Criação e manutenção de APIs RESTful e Docker, assegurando a integração eficiente entre frontend e backend. </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center gap-6 mb-16 text-zinc-900 dark:text-zinc-100">
        <h1 className="font-bold text-xl">Contato</h1>

        <form className="flex flex-col bg-zinc-200 dark:bg-zinc-800 h-[550px] w-[500px] p-5 gap-6 rounded-3xl">
          <input type="text" placeholder="Nome:" className="w-full h-10 rounded-lg p-2 dark:bg-zinc-600 dark:placeholder:text-zinc-100 focus:outline-none focus:border-2 focus:border-violet-600 focus:shadow-md"/>
          <input type="text" placeholder="Email:" className="w-full h-10 rounded-lg p-2 dark:bg-zinc-600 dark:placeholder:text-zinc-100 focus:outline-none focus:border-2 focus:border-violet-600 focus:shadow-md"/>
          <input type="text" placeholder="Telefone:" className="w-full h-10 rounded-lg p-2 dark:bg-zinc-600 dark:placeholder:text-zinc-100 focus:outline-none focus:border-2 focus:border-violet-600 focus:shadow-md"/>
          <textarea placeholder="Menssagem:" className="h-56 rounded-xl p-1 dark:bg-zinc-600 dark:placeholder:text-zinc-100 focus:outline-none focus:border-2 focus:border-violet-600 focus:shadow-md"></textarea>
          <button className="bg-violet-600 w-full rounded-lg h-10 text-zinc-100 hover:bg-violet-700 transition-all duration-200 focus:outline-none focus:border-2 focus:border-violet-600 focus:shadow-md">Enviar</button>
        </form>
      </section>
    </>
  );
}
