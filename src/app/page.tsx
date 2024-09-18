import Image from 'next/image'
import { Montserrat, Varela_Round, Lobster, Exo } from 'next/font/google'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/cn'

const montserrant = Montserrat({
  subsets: ['latin'],
  weight: ['500']
})

const varelaRound = Varela_Round({
  subsets: ['latin'],
  weight: ['400']
})

const exo = Exo({
  subsets: ['latin'],
  weight: ['600']
})

const lobster = Lobster({
  subsets: ['latin'],
  weight: ['400']
})

// 2978b1

export default function Home() {
  return (
    <div className={cn('h-svh bg-slate-50', montserrant.className)}>
      <header className="flex justify-center py-10">
        <div className="flex w-[1000px] items-center justify-between rounded-lg bg-[#083F59] px-6 py-3">
          <div className="flex items-center gap-10 text-white">
            <ul className="flex gap-4">
              <li>
                <a href="" className="hover:font-semibold">
                  Sobre nós
                </a>
              </li>
              <span className="text-[#F27610]">|</span>
              <li>
                <a href="" className="hover:font-semibold">
                  Soluções
                </a>
              </li>
              <span className="text-[#F27610]">|</span>
              <li>
                <a href="" className="hover:font-semibold">
                  Intalações
                </a>
              </li>
            </ul>
          </div>
          <Button
            asChild
            className="bg-gradient-to-r from-[#F27610] to-[#F9A600]"
          >
            <a href="">Entre em contato</a>
          </Button>
        </div>
      </header>
      <main className="">
        <section className="flex justify-center">
          <div className="w-[1000px] py-8">
            <div className="w-1/2">
              <div className="flex items-center gap-4 pb-8">
                <Image src="/logo.png" alt="Logo" width={100} height={100} />
                <h1 className="text-5xl">
                  <span className={cn('text-[#083F59]', exo.className)}>
                    LUMINI
                  </span>
                  <span className={cn('text-[#F27610]', lobster.className)}>
                    SOL
                  </span>
                </h1>
              </div>
              <h2 className="pb-4 text-4xl text-[#083F59]">
                Prepare-se para o <span className="text-[#F27610]">futuro</span>
                , tenha um lar{' '}
                <span className="text-[#F27610]">sustentável e eficiente</span>.
              </h2>
              <p className="pb-6 text-lg text-[#083F59]">
                Nossos painéis fotovoltaicos permitem que você gere sua própria
                energia, diminua a dependência da rede e aumente o valor da sua
                propriedade.
              </p>
              <Button
                asChild
                className="bg-gradient-to-r from-[#F27610] to-[#F9A600]"
              >
                <a href="">Faça um orçamento</a>
              </Button>
              <p className="pt-2 text-[#083F59]">
                Comece a <span className="font-bold">economizar</span>
              </p>
            </div>
            <div></div>
          </div>
        </section>
        <section className="flex w-full justify-center bg-[#083F59] py-16">
          <div className="flex w-[1000px] flex-col gap-10 text-white">
            <div className="flex">
              <div className="mr-16 w-[600px] border-r-2 border-white pr-16 text-4xl font-bold">
                Conheça a <span className="text-[#F27610]">Luminisol</span>
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore velit dolore eum maxime accusamus architecto nobis
                dignissimos, praesentium vero aliquid pariatur, laudantium sint
                ut, maiores totam perspiciatis sequi et quae.
              </div>
            </div>
            <div className="flex gap-4 rounded-3xl bg-gradient-to-r from-[#F27610] to-[#F9A600] p-10">
              <div>
                <div></div>
                <div>
                  <h3 className="font-bold">Lorem, ipsum.</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Non, repellat!
                  </p>
                </div>
              </div>
              <div>
                <div></div>
                <div>
                  <h3 className="font-bold">Lorem, ipsum.</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Non, repellat!
                  </p>
                </div>
              </div>
              <div>
                <div></div>
                <div>
                  <h3 className="font-bold">Lorem, ipsum.</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Non, repellat!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex justify-center bg-transparent py-16">
          <div className="flex w-[1000px] flex-col items-center">
            <h2 className="w-[550px] text-center text-3xl text-[#083F59]">
              Projetos <span className="text-[#F27610]">personalizados</span> de
              acordo com sua necessidade
            </h2>
            <div className="relative my-8 flex h-48 w-[700px] justify-center border border-slate-200">
              <div className="absolute -bottom-12 -z-10 h-40 w-[600px] rounded-3xl bg-slate-100"></div>
            </div>
            <div>
              <Button
                asChild
                className="mx-auto bg-gradient-to-r from-[#F27610] to-[#F9A600]"
              >
                <a href="">Faça um orçamento</a>
              </Button>
            </div>
          </div>
        </section>
        <section className="flex justify-center bg-[#F27610] py-16">
          <div className="first-letter: flex w-[1000px] gap-8">
            <div className="flex-1"></div>
            <div className="flex-1 text-left text-white">
              <div className="text-3xl font-bold">
                De olho no <span className="text-[#083F59]">futuro</span>
              </div>
              <p className="pt-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
                dolores eligendi, cumque hic doloremque odio minima dolorem
                corporis vero tempore facere minus ducimus iure in repellendus
                ipsam laborum accusantium! Id?
              </p>
            </div>
          </div>
        </section>
        <section className="flex justify-center py-16">
          <div className="w-[1000px]">
            <h3 className="w-[400px] text-3xl font-bold text-[#083F59]">
              Nossas <span className="text-[#F27610]">soluções</span> eficientes
            </h3>
            <div className="mt-8 flex flex-wrap justify-between gap-8 text-white">
              <div className="w-[300px] rounded-2xl bg-[#083F59] p-8">
                <h3 className="mb-2 text-lg font-bold">Lorem, ipsum.</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum, nemo.
                </p>
              </div>
              <div className="w-[300px] rounded-2xl bg-[#083F59] p-8">
                <h3 className="mb-2 text-lg font-bold">Lorem, ipsum.</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum, nemo.
                </p>
              </div>
              <div className="w-[300px] rounded-2xl bg-[#083F59] p-8">
                <h3 className="mb-2 text-lg font-bold">Lorem, ipsum.</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum, nemo.
                </p>
              </div>
              <div className="w-[300px] rounded-2xl bg-[#083F59] p-8">
                <h3 className="mb-2 text-lg font-bold">Lorem, ipsum.</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum, nemo.
                </p>
              </div>
              <div className="w-[300px] rounded-2xl bg-[#083F59] p-8">
                <h3 className="mb-2 text-lg font-bold">Lorem, ipsum.</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum, nemo.
                </p>
              </div>
              <div className="w-[300px] rounded-2xl bg-[#083F59] p-8">
                <h3 className="mb-2 text-lg font-bold">Lorem, ipsum.</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum, nemo.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="flex justify-center bg-[#083F59] py-16">
          <div className="flex w-[800px] flex-col items-center">
            <div className="pb-8">
              <h3 className="text-3xl font-bold text-white">
                Dúvidas Frequentes
              </h3>
            </div>
            <div className="flex flex-col gap-4">
              <div className="rounded-md bg-white">
                <Button
                  asChild
                  className="mx-auto w-full bg-gradient-to-r from-[#F27610] to-[#F9A600] text-left"
                >
                  <a href="">1. Lorem, ipsum.</a>
                </Button>
                <p className="px-8 py-4 text-[#083F59]">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate, animi nam iusto dolorum soluta optio impedit
                  voluptatibus amet praesentium quaerat molestiae explicabo
                  molestias nesciunt vero iste odio sapiente voluptatem
                  repellendus?
                </p>
              </div>
              <div className="rounded-md bg-white">
                <Button
                  asChild
                  className="mx-auto w-full bg-gradient-to-r from-[#F27610] to-[#F9A600] text-left"
                >
                  <a href="">2. Lorem, ipsum.</a>
                </Button>
                <p className="hidden px-8 py-4 text-[#083F59]">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate, animi nam iusto dolorum soluta optio impedit
                  voluptatibus amet praesentium quaerat molestiae explicabo
                  molestias nesciunt vero iste odio sapiente voluptatem
                  repellendus?
                </p>
              </div>
              <div className="rounded-md bg-white">
                <Button
                  asChild
                  className="mx-auto w-full bg-gradient-to-r from-[#F27610] to-[#F9A600] text-left"
                >
                  <a href="">3. Lorem, ipsum.</a>
                </Button>
                <p className="hidden px-8 py-4 text-[#083F59]">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate, animi nam iusto dolorum soluta optio impedit
                  voluptatibus amet praesentium quaerat molestiae explicabo
                  molestias nesciunt vero iste odio sapiente voluptatem
                  repellendus?
                </p>
              </div>
              <div className="rounded-md bg-white">
                <Button
                  asChild
                  className="mx-auto w-full bg-gradient-to-r from-[#F27610] to-[#F9A600] text-left"
                >
                  <a href="">4. Lorem, ipsum.</a>
                </Button>
                <p className="hidden px-8 py-4 text-[#083F59]">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate, animi nam iusto dolorum soluta optio impedit
                  voluptatibus amet praesentium quaerat molestiae explicabo
                  molestias nesciunt vero iste odio sapiente voluptatem
                  repellendus?
                </p>
              </div>
              <div className="rounded-md bg-white">
                <Button
                  asChild
                  className="mx-auto w-full bg-gradient-to-r from-[#F27610] to-[#F9A600] text-left"
                >
                  <a href="">5. Lorem, ipsum.</a>
                </Button>
                <p className="hidden px-8 py-4 text-[#083F59]">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate, animi nam iusto dolorum soluta optio impedit
                  voluptatibus amet praesentium quaerat molestiae explicabo
                  molestias nesciunt vero iste odio sapiente voluptatem
                  repellendus?
                </p>
              </div>
              <div className="rounded-md bg-white">
                <Button
                  asChild
                  className="mx-auto w-full bg-gradient-to-r from-[#F27610] to-[#F9A600] text-left"
                >
                  <a href="">6. Lorem, ipsum.</a>
                </Button>
                <p className="hidden px-8 py-4 text-[#083F59]">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate, animi nam iusto dolorum soluta optio impedit
                  voluptatibus amet praesentium quaerat molestiae explicabo
                  molestias nesciunt vero iste odio sapiente voluptatem
                  repellendus?
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="flex justify-center py-16 text-[#083F59]">
          <div className="flex w-[1000px]">
            <div className="flex w-[300px] flex-col gap-2">
              <h3 className="text-xl font-bold">Nossos canais</h3>
              <div className="flex flex-col gap-1">
                <p>@luminisol</p>
                <p>contato@luminisol.com.br</p>
                <p>(82) 999999999</p>
              </div>
            </div>
            <div className="flex w-[400px] flex-col gap-2">
              <h3 className="text-xl font-bold">Horários de atendimento</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente, ratione.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
