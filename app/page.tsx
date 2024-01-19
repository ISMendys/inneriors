import Image from 'next/image'
import { ModeToggle } from "@/components/theme-select"

import Navbar from '@/components/navibar'
export default function Home() {
    return (
      <>
        <div className="select-none relative h-screen bg-center bg-cover text-white" style={{backgroundImage: "url('/images/home/banner.png')"}}>
          <Navbar />
          <div className="absolute top-1/2 left-0 ml-20 transform -translate-y-1/2 text-left">
            <h2 className="text-lg mb-2 text-beige-500">Bem-vindo a</h2>
            <h1 className="text-7xl mb-4 text-white">INNERIORS</h1>
            <p className="mb-4 text-gray-300 max-w-md mx-auto">Aqui vai um pequeno parágrafo sobre a INNERIORS falando um monte de groselia que começou no ano de 2021, pura besteira mesmo somente para fins de teste.</p>
            <button className="cta">
              <span className="hover-underline-animation"> Entre em contato </span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffffff" className="bi bi-arrow-right"
                  viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
              </svg>
                <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    data-name="Path 10" id="Path_10"></path>
            </button>
          </div>

        </div>
        <section className="relative">
          O resto do seu conteúdo aqui
        </section>
      </>

    );
}
