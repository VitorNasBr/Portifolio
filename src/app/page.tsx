import { Skills } from "@/components/Skills";
import Image from "next/image";

import * as Project from '@/components/Project'

export default function Home() {
  return (
    <>
      <div className="flex flex-row justify-center items-center p-52 gap-40 h-screen">

        <div className="w-screen">
          <div className="flex flex-col w-[700px]">
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
      </div>

      <div className="flex flex-col items-center gap-6 mb-16">
        <h1 className="font-bold text-xl">Sobre mim</h1>
          <p className="w-[1200px] text-center">
            Tenho 17 anos e comecei minha jornada na programação em 2020. Desde então, já trabalhei com diversas linguagens, incluindo Lua, C#, Java, JavaScript, HTML e CSS. Atualmente, meu foco está em React, onde estou desenvolvendo projetos dinâmicos e interativos. Além disso, estou me aprofundando no desenvolvimento de APIs, buscando sempre expandir minhas habilidades e conhecimentos. Vamos construir algo incrível juntos?
          </p>
      </div>

      <div className="flex flex-col items-center gap-6 mb-16">
        <h1 className="font-bold text-xl">Habilidades</h1>

        <div className="flex flex-row gap-6">
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
      </div>

      <div className="flex items-center justify-center flex-col gap-10 mb-16">
        <h1 className="text-xl font-bold">Projetos</h1>

        <div className="flex-row flex gap-6">
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

      </div>

      <div className="flex items-center justify-center flex-col gap-6 mb-16">
        <h1 className="font-bold text-xl">Experiência Profissional</h1>

        <div className="w-[1200px] h-[400px] bg-zinc-200 rounded-xl flex flex-col items-center p-2">
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
      </div>

      <div className="flex flex-col items-center gap-6 mb-16">
        <h1 className="font-bold text-xl">Contato</h1>

        <form className="flex flex-col bg-zinc-200 h-[550px] w-[500px] p-5 gap-6 rounded-3xl">
          <input type="text" placeholder="Nome:" className="w-full h-10 rounded-lg p-2"/>
          <input type="text" placeholder="Email:" className="w-full h-10 rounded-lg p-2"/>
          <input type="text" placeholder="Telefone:" className="w-full h-10 rounded-lg p-2"/>
          <textarea placeholder="Menssagem:" className="h-56 rounded-xl p-1"></textarea>
          <button className="bg-violet-600 w-full rounded-lg h-10 text-zinc-100 hover:bg-violet-700 transition-all duration-200">Enviar</button>
        </form>
      </div>
    </>
  );
}
