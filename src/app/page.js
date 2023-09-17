import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function Home() {
  return (
    <main className="bg-white text-black px-10">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-burtons">Codeskul</h1>
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
          <h2 className="text-5xl py-2 text-teal-600 font-medium">
            Sanjay Patel
          </h2>
          <h3 className="text-2xl py-2">Full-Stack Developer</h3>
          <p className="text-md py-5 leading-8 text-gray-800">
            Freelancer providing services for JavaScript programming. Join me
            down below and let's get cracking!
          </p>
        </div>

        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <AiFillLinkedin />
          <AiFillGithub />
        </div>

        <div>
          <img src="/img/dev-ed-wave.png" alt="" />
        </div>
      </section>
    </main>
  );
}
