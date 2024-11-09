import "./App.css";
import Meteors from "./components/ui/meteors";
import { MagicCard } from "./components/ui/magic-card";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="bg-darkBg h-screen">
      

      {/* Header Section */}
      <header className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white text-center py-12 sm:py-16 lg:py-20 h-screen flex items-center justify-center">
        <div className="flex-col items-center justify-center ">
          <h1 className="text-3xl sm:text-4xl lg:text-7xl font-bold mb-4">Workshop</h1>
          <h1 className="text-3xl sm:text-4xl lg:text-7xl font-bold mb-4">
            Using <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-500 via-green-500 to-rose-500 ">OpenCV</span> in Game Development
          </h1>
          <p className="text-lg sm:text-2xl mb-10">
            A hands-on workshop exploring OpenCV and its applications.
          </p>
          <a
            href="#"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-base sm:text-lg"
          >
            Workshop Github Link
          </a>
        </div>
      </header>

      {/* "What You Will Learn" Section */}
      <section className=" bg-gray-900 text-white py-16 ">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">What You Will Learn</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-indigo-600 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Introduction to OpenCV</h3>
              <p>Learn the basics of OpenCV and how to manipulate images in real-time.</p>
            </div>
            <div className="bg-purple-600 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Computer Vision in Games</h3>
              <p>Explore how to integrate computer vision into game mechanics.</p>
            </div>
            <div className="bg-pink-600 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Hands-on Projects</h3>
              <p>Work on real-world projects, including face detection and object tracking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM MEMBERS */}
      <section id="team" className="py-16 bg-gray-100">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">Meet the Team</h2>

        {/* Grid of Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 justify-center">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center">
            <img
              src="/hasan.jpg"
              alt="Team Member 1"
              className="rounded-full w-24 h-24 mb-4 object-cover"
            />
            <h3 className="text-lg font-medium">Hasan</h3>
            <p className="text-sm text-center">3rd Year Student @Seneca Polytechnic</p>
            <p className="text-sm text-center">B.E in Software Engineering</p>
            <a href="https://github.com/MohHasan1" className="text-blue-500 hover:text-blue-600">GitHub</a>
            <a href="https://www.linkedin.com/in/hasan-in/" className="text-blue-500 hover:text-blue-600">LinkedIn</a>
          </div>

          {/* Team Member 2 */}
          <div className="flex flex-col items-center">
            <img
              src="/masuma.png"
              alt="Team Member 2"
              className="rounded-full w-24 h-24 mb-4 object-cover"
            />
            <h3 className="text-lg font-medium">Masuma Begum</h3>
            <p className="text-sm text-center">3rd Year Student @Seneca Polytechnic</p>
            <p className="text-sm text-center">B.E in Software Engineering</p>
            <a href="https://github.com/masuma131" className="text-blue-500 hover:text-blue-600">GitHub</a>
            <a href="https://www.linkedin.com/in/masuma131/" className="text-blue-500 hover:text-blue-600">LinkedIn</a>
          </div>

          {/* Team Member 3 */}
          <div className="flex flex-col items-center">
            <img
              src="/abhi.jpg"
              alt="Team Member 3"
              className="rounded-full w-24 h-24 mb-4 object-cover"
            />
            <h3 className="text-lg font-medium">Abhishek Sharma</h3>
            <p className="text-sm text-center">3rd Year Student @Seneca Polytechnic</p>
            <p className="text-sm text-center">B.E in Software Engineering</p>
            <a href="https://github.com/Abhii67534" className="text-blue-500 hover:text-blue-600">GitHub</a>
            <a href="https://www.linkedin.com/in/abhishek-sharma1999/" className="text-blue-500 hover:text-blue-600">LinkedIn</a>
          </div>

          {/* Team Member 4 */}
          <div className="flex flex-col items-center">
            <img
              src="/mubs.jpg"
              alt="Team Member 4"
              className="rounded-full w-24 h-24 mb-4 object-cover"
            />
            <h3 className="text-lg font-medium">Mubassir Mohmed Sapa</h3>
            <p className="text-sm text-center ">3rd Year Student @Seneca Polytechnic</p>
            <p className="text-sm text-center">B.E in Software Engineering</p>
            <a href="https://github.com/MohHasan1" className="text-blue-500 hover:text-blue-600">GitHub</a>
            <a href="https://www.linkedin.com/in/mubassir-mohmed-sapa-24165b269/" className="text-blue-500 hover:text-blue-600">LinkedIn</a>
          </div>

          {/* Team Member 5 */}
          <div className="flex flex-col items-center">
            <img
              src="/placeholder.png"
              alt="Team Member 5"
              className="rounded-full w-24 h-24 mb-4 object-cover"
            />
            <h3 className="text-lg font-medium">Ryan Dang</h3>
            <p className="text-sm text-center">2nd Year Student @Seneca Polytechnic</p>
            <p className="text-sm text-center">B.E in Software Engineering</p>
            <a href="https://github.com/MohHasan1" className="text-blue-500 hover:text-blue-600">GitHub</a>
            <a href="https://github.com/MohHasan1" className="text-blue-500 hover:text-blue-600">LinkedIn</a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Project Links</h2>
          <p className="text-lg sm:text-xl mb-8 text-center">
            Explore the hands-on projects developed during the workshop. These projects showcase practical applications of OpenCV in game development.
          </p>
          
          <div className="flex flex-col lg:flex-row justify-center items-center mt-10 gap-8">
            {/* Project 1 */}
            <div className="h-[150px] w-[300px] sm:w-[350px] lg:w-[400px] transform transition-transform duration-300 hover:scale-105">
              <MagicCard className="flex justify-center items-center bg-gradient-to-r from-indigo-700 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
                <h2 className="mt-3 font-bold text-2xl text-slate-950">FINGER FRENZY</h2>
                <Button className="ml-7 mt-4 bg-transparent text-white border border-white hover:bg-white hover:text-black transition-all duration-300">
                  GitHub Link
                </Button>
              </MagicCard>
            </div>

            {/* Project 2 */}
            <div className="h-[150px] w-[300px] sm:w-[350px] lg:w-[400px] transform transition-transform duration-300 hover:scale-105">
              <MagicCard className="flex justify-center items-center bg-gradient-to-r from-indigo-700 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
                <h2 className="mt-3 font-bold text-2xl text-slate-950">PING PONG</h2>
                <Button className="ml-7 mt-4 bg-transparent text-white border border-white hover:bg-white hover:text-black transition-all duration-300">
                  GitHub Link
                </Button>
              </MagicCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
