"use client"
import { ArrowCircleLeft, GithubLogo, House } from "@phosphor-icons/react";
import Contato from "../components/contato";
import Link from "next/link";

export default function Sobre(){
    return(
        <main className="flex justify-center p-2 flex-col items-center">
            <Link href={"/"} className="flex flex-col  justify-center items-center mb-5 md:hidden"><House size={32} color="#29bc55" /> Voltar para Home</Link>
            <h1 className="text-xl">Sobre o Projeto</h1>
            <h2 className="mt-10 mb-2 text-lg">Introdução</h2>
            <p className="flex-wrap max-w-[30rem] bg-[#121212] p-2 text-white rounded-md mb-5">Essa aplicação foi construída como projeto para a matéria de Sistemas operacionais do curso de Ciência da computação da Unifeso.</p>
            <h2 className="mt-5 mb-2 text-lg">Objetivo</h2>
            <p className="flex-wrap max-w-[30rem] bg-[#121212] p-2 text-white rounded-md">O objetivo da aplicação é simular a técnica de alocação em disco de forma contígua, mas ao invés de alocar em memória secundária, criamos uma lista com N posições para alocar e simular as operações do sistema operacional</p>

            <h2 className="mt-5 text-lg ">Time</h2>
            <div className="mt-5 flex flex-wrap gap-3 justify-center items-center">
                <Contato nome={"André Felipe Melo"} avatarUrl={"https://media.licdn.com/dms/image/C4E03AQGMl0qv1FfpKA/profile-displayphoto-shrink_800_800/0/1657507403336?e=1706745600&v=beta&t=aNAbCwss-TL6PG-z0ID70I7BCH8CH6zSGr_whvBdAe8"} matricula={"06003175"}></Contato>
                <Contato nome={"Emanuel Cunha"} avatarUrl={"https://avatars.githubusercontent.com/u/103298591?v=4"} matricula={"06003365"}></Contato>
                <Contato nome={"Eduardo cabral"} avatarUrl={"https://media-gig4-2.cdn.whatsapp.net/v/t61.24694-24/357198947_675207747811580_2790581872533190855_n.jpg?ccb=11-4&oh=01_AdTWqKp5RlGIyB3VqCaN999s0ZgJUKOickrXLYC6VvCulg&oe=6570E3AC&_nc_sid=e6ed6c&_nc_cat=100"} matricula={"06002546 "}></Contato>
                <Contato nome={"Pedro Dias"} avatarUrl={"https://media-gig4-2.cdn.whatsapp.net/v/t61.24694-24/396428787_1290896781613360_5012691493868144800_n.jpg?ccb=11-4&oh=01_AdTbz5o13Oxcles3shbf3f6b7YtqAXbfXvs0XNiYm1Zjtw&oe=6570C14A&_nc_sid=e6ed6c&_nc_cat=109"} matricula={"06003504"}></Contato>
                <Contato nome={"Raphael Bragança"} avatarUrl={"https://media.licdn.com/dms/image/D4E03AQE2j6N6kruonA/profile-displayphoto-shrink_200_200/0/1680010729885?e=1706745600&v=beta&t=l5GPqmPFfAZWiV2X34mn57wzqCtNgM7ahGqwJldrBIA"} matricula={"06003857"}></Contato>
                <Contato nome={"Bernardo de Oliveira"} avatarUrl={"https://media.licdn.com/dms/image/D4D03AQGqIgzliRo64A/profile-displayphoto-shrink_200_200/0/1682570059129?e=1706745600&v=beta&t=zVVEK-Dqm93s55OKDjqzP2jBkAgpcjkYbWPTB1HkWlc"} matricula={"06004026"}></Contato>
               <Contato nome={"Márcio Josué Branco"} avatarUrl={"https://media-gig4-2.cdn.whatsapp.net/v/t61.24694-24/370205757_654744483105919_1899572053470548821_n.jpg?ccb=11-4&oh=01_AdRpOUHCjHA6wadGqkIAAIz_yNMdHUzIXuHlQbxf4DPlTg&oe=65711771&_nc_sid=e6ed6c&_nc_cat=108"} matricula={"06003553"}></Contato>
                <Contato nome={"Mohamad Azevedo"} avatarUrl={"https://media.licdn.com/dms/image/D4D03AQHaTrYbgJvXKA/profile-displayphoto-shrink_200_200/0/1685652673375?e=1706745600&v=beta&t=LJEyvni6WrLLo6KvbWvX6A_7E40-ShH_1H3zLtfkrL8"} matricula={"06003782"}></Contato>

            </div>
            <div className="mt-5 flex justify-start items-center flex-col">
            <h1 className="text-lg mb-5">Techs usadas</h1>
              <div className=" flex justify-start items-center gap-3">
              <div>
             
              <h1>Tailwind css</h1>
                <img className="rounded-full" width={100} src="data:image/png;base64,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" alt="" />
                
              
              </div>
              <div className="flex flex-col justify-start items-center">
              <h1>NextJS</h1>
              <img className="rounded-full" width={100} src="https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png" alt="" />
              </div>
              
              </div>
            </div>
            <a target="_blank" className="mt-4 border-b-2 flex gap-1 border-black  items-center" href="https://github.com/Andrezz64/emuladisco"><GithubLogo size={32} color="#121212" />Repositório da aplicação</a>
        </main>
    )
}