import Image from "next/image"
import { Pixelify_Sans } from "next/font/google"
import { Button } from "@/components/ui/button"
import TypedText from "@/components/typed-text"

const pixelify = Pixelify_Sans({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return (
    <main className="max-w-screen-xl h-screen pt-14">
      {/* h-[calc(100vh-56px)] */}
      {/* <Button>Deneme</Button> */}
      {/* <section className="h-[calc(100vh-56px)] bg-green-600" id="home">section</section>
      <section className="h-[calc(100vh-56px)] bg-red-600" id="about">section2</section>
      <section className="h-[calc(100vh-56px)] bg-blue-600" id="resume">section3</section> */}

      <div className="flex flex-col sm:flex-row justify-start items-center sm:justify-center h-full w-full">
        <div className="relative mt-5 sm:mt-0 w-[225px] h-[250px] sm:w-[250px] sm:h-[300px] aspect-[4/3] m-4">
          <Image
            src="/profile.jpg"
            className="rounded-xl shadow-2xl"
            fill={true}
            alt="Picture of the author"
          />
        </div>
        <div className={"px-4 mt-2 sm:mt-0 mb-auto sm:mb-0 flex flex-col justify-start sm:justify-center items-center sm:items-start gap-5 " + pixelify.className}>
          <div className="text-4xl font-medium text-center sm:text-start">Hi, my name is <span className="text-primary">Mustafa Kemal Gordesli</span></div>
          {/* <TypedText /> */}
          <div className="text-4xl font-medium text-center sm:text-start">
            I&apos;m the <span>Software Engineer</span>

          </div>
          <div>
            <a href="/about" className="py-2 px-10 bg-transparent border border-primary text-primary hover:text-white hover:bg-primary  transition-all transform duration-300 font-medium text-lg">Know more</a>
          </div>
        </div>
      </div>

    </main >
  )
}
