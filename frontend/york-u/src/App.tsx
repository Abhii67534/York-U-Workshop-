
import "./App.css";
import Meteors from "./components/ui/meteors";
import { MagicCard } from "./components/ui/magic-card";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="bg-darkBg h-screen">
      <Meteors />

      <header className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white text-center py-20">
        <h1 className="text-5xl font-bold mb-2">OpenCV Workshop: Master Computer Vision</h1>
        <p className="text-xl mb-6">A hands-on workshop exploring OpenCV and its applications.</p>
        <a href="#team" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-lg">Meet the Team</a>
      </header>

      {/* TEAM MEMBERS */}
      <section id="team" className="py-20 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center mb-8">Meet the Team</h2>

        {/* HASAN */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-center">
          <div className="flex flex-col items-center">
            <img
              src="/placeholder.png"
              alt="Team Member 1"
              className="rounded-full w-24 h-24 mb-4"
            />
            <h3 className="text-lg font-medium">Hasan</h3>
            <p className="text-sm">3rd Year Student @Seneca Ploythechnic</p>
            <p className="text-sm">B.E in Software Engineering</p>
            <a
              href="https://github.com/MohHasan1"
              className="text-blue-500 hover:text-blue-600"
            >
              GitHub
            </a>
          </div>

            {/* MASUMA BEGUM */}
          <div className="flex flex-col items-center">
            <img
              src="/placeholder.png"
              alt="Team Member 1"
              className="rounded-full w-24 h-24 mb-4"
            />
            <h3 className="text-lg font-medium">Masuma Begum</h3>
            <p className="text-sm">3rd Year Student @Seneca Ploythechnic</p>
            <p className="text-sm">B.E in Software Engineering</p>
            <a
              href="https://github.com/masuma131"
              className="text-blue-500 hover:text-blue-600"
            >
              GitHub
            </a>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/placeholder.png"
              alt="Team Member 1"
              className="rounded-full w-24 h-24 mb-4"
            />
            <h3 className="text-lg font-medium">Abhishek Sharma</h3>
            <p className="text-sm">3rd Year Student @Seneca Ploythechnic</p>
            <p className="text-sm">B.E in Software Engineering</p>
            <a
              href="https://github.com/Abhii67534"
              className="text-blue-500 hover:text-blue-600"
            >
              GitHub
            </a>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/placeholder.png"
              alt="Team Member 1"
              className="rounded-full w-24 h-24 mb-4"
            />
            <h3 className="text-lg font-medium">Mubassir Mohmed Sapa</h3>
            <p className="text-sm">3rd Year Student @Seneca Ploythechnic</p>
            <p className="text-sm">B.E in Software Engineering</p>
            <a
              href="https://github.com/MohHasan1"
              className="text-blue-500 hover:text-blue-600"
            >
              GitHub
            </a>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/placeholder.png"
              alt="Team Member 1"
              className="rounded-full w-24 h-24 mb-4"
            />
            <h3 className="text-lg font-medium">Ryan Dang</h3>
            <p className="text-sm">3rd Year Student @Seneca Ploythechnic</p>
            <p className="text-sm">B.E in Software Engineering</p>
            <a
              href="https://github.com/MohHasan1"
              className="text-blue-500 hover:text-blue-600"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <div className="flex justify-center mt-10">
        <div className="h-[150px] w-[300px]">
          <MagicCard className="flex justify-center items-center bg-gradient-to-r from-indigo-700 ">
            <h2 className="mt-3 font-bold text-2xl text-slate-950">FINGER FRENZY</h2>
            <Button className="ml-7 mt-4">GitHub Link</Button>
          </MagicCard>
        </div>

        <div className="h-[150px] w-[300px] ml-10">
          <MagicCard className="flex justify-center items-center bg-gradient-to-r from-indigo-700 ">
            <h2 className="mt-3 font-bold text-2xl text-slate-950">PING PONG</h2>
            <Button className="ml-7 mt-4">GitHub Link</Button>
          </MagicCard>
        </div>
      </div>
    </div>
  );
}

export default App;
