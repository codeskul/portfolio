import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import deved from "../../public/img/dev-ed-wave.png";
import design from "../../public/img/design.png";
import code from "../../public/img/code.png";
import consulting from "../../public/img/consulting.png";

export default function Home() {
  return (
    <main className="bg-white text-black px-10 md:px-20 lg:px-40">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-2xl font-burtons">Codeskul</h1>
          <ul className="flex text-center">
            <li>
              <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
            </li>
            <li>
              <a
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                href="#!"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>

        <div className="text-center p-10">
          <h2 className="text-5xl md:text-6xl py-2 text-teal-600 font-medium">
            Sanjay Patel
          </h2>
          <h3 className="text-2xl md:text-3xl py-2">Full-Stack Developer</h3>
          <p className="text-md md:text-xl max-w-xl mx-auto py-5 leading-8 text-gray-800">
            Freelancer providing services for programming and design needs. Join me
            down below and let's get cracking!
          </p>
        </div>

        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <AiFillLinkedin />
          <AiFillGithub />
        </div>

        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-72 h-72 my-20 overflow-hidden">
          <Image
            src={deved}
            alt="dev"
            priority={true}
            className="aspect-square overflow-clip"
          />
        </div>
      </section>

      <section>
        <div>
          <h3 className="text-3xl py-1">Services I Offer</h3>
          <p className="text-md py-2 leading-8 text-gray-800">
            Since the beginning of my journey as a full-stack developer, I've
            done remote work for
            <span className="text-teal-500"> agencies </span>
            consulted for <span className="text-teal-500">startups </span>
            and collaborated with talanted people to create digital products for
            both business and consumer use.
          </p>
          <p className="text-md py-2 leading-8 text-gray-800">
            I offer from a wide range of services, including programming and
            teaching.
          </p>
        </div>

        <div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <Image className="block mx-auto" src={design} width={100} height={100} alt="design" />
            <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
            <p className="py-2">
              Creating elegant designs suited for your needs following core
              design theory.
            </p>
            <h4 className="py-4 text-teal-600">Design tools I use</h4>
            <p className="text-gray-800 py-1">Figma</p>
            <p className="text-gray-800 py-1">Bootstrap 5</p>
            <p className="text-gray-800 py-1">Tailwind CSS</p>
          </div>

          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <Image className="block mx-auto" src={code} width={100} height={100} alt="design" />
            <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
            <p className="py-2">
              Creating elegant designs suited for your needs following core
              design theory.
            </p>
            <h4 className="py-4 text-teal-600">Design tools I use</h4>
            <p className="text-gray-800 py-1">Figma</p>
          </div>
          
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <Image className="block mx-auto" src={consulting} width={100} height={100} alt="design" />
            <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
            <p className="py-2">
              Creating elegant designs suited for your needs following core
              design theory.
            </p>
            <h4 className="py-4 text-teal-600">Design tools I use</h4>
            <p className="text-gray-800 py-1">Figma</p>
          </div>
        </div>
      </section>

      <section>
        <div>
          <h3 className="text-3xl py-1">Portfolio</h3>
        </div>
      </section>
    </main>
  );
}
