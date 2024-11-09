import "./App.css";
import Meteors from "./components/ui/meteors";

function App() {
  return (
    <div className="bg-darkBg h-screen">
      <Meteors />

      <header className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white text-center py-12 sm:py-16 lg:py-20 h-screen flex items-center justify-center">
  <div className="flex-col items-center justify-center ">
    <h1 className="text-3xl sm:text-4xl lg:text-7xl font-bold mb-4">
      Workshop
    </h1>
    <h1 className="text-3xl sm:text-4xl lg:text-7xl font-bold mb-4">
      Using{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-400 via-green-400 to-rose-400 ">
        OpenCV
      </span>{" "}
      in Game Development
    </h1>
    <p className="text-lg sm:text-2xl mb-10 text-gray-200">
      A hands-on workshop exploring OpenCV and its applications.
    </p>
    <a
      href="https://github.com/MohHasan1/York_OpenCV_workshop"
      className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 hover:from-indigo-500 hover:via-purple-600 hover:to-pink-500 text-white py-2 px-4 rounded-lg text-base sm:text-lg"
    >
      Workshop GitHub Link
    </a>
  </div>
</header>


      {/* TEAM MEMBERS */}
      <section className="bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white py-16">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-4xl sm:text-5xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500">
      Meet the Team
    </h2>
    <p className="text-lg sm:text-xl mb-12 text-center">
  Meet the team of software engineering students who are delivering today's workshop.
</p>


    {/* Team Members Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 justify-center">
      {/* Team Member 1 */}
      <div className="flex flex-col items-center p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 bg-gradient-to-r from-indigo-700 to-purple-700 shadow-md hover:shadow-lg">
        <img
          src="/hasan.jpg"
          alt="Team Member 1"
          className="rounded-full w-24 h-24 mb-4 object-cover"
        />
        <h3 className="text-lg font-medium">Hasan</h3>
        <p className="text-sm text-center mb-2">3rd Year Student @Seneca Polytechnic</p>
        <p className="text-sm text-center mb-2">B.E in Software Engineering</p>
        <a
          href="https://github.com/MohHasan1"
          target="_blank"
          className="text-blue-400 hover:text-blue-500 mt-2"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/hasan-in/"
          target="_blank"
          className="text-blue-400 hover:text-blue-500"
        >
          LinkedIn
        </a>
      </div>

      {/* Team Member 2 */}
      <div className="flex flex-col items-center p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 bg-gradient-to-r from-indigo-700 to-purple-700 shadow-md hover:shadow-lg">
        <img
          src="/masuma.png"
          alt="Team Member 2"
          className="rounded-full w-24 h-24 mb-4 object-cover"
        />
        <h3 className="text-lg font-medium mb-2">Masuma Begum</h3>
        <p className="text-sm text-center mb-2">3rd Year Student @Seneca Polytechnic</p>
        <p className="text-sm text-center mb-2">B.E in Software Engineering</p>
        <a
          href="https://github.com/masuma131"
          target="_blank"
          className="text-blue-400 hover:text-blue-500 mt-2"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/masuma131/"
          target="_blank"
          className="text-blue-400 hover:text-blue-500"
        >
          LinkedIn
        </a>
      </div>

      {/* Team Member 3 */}
      <div className="flex flex-col items-center p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 bg-gradient-to-r from-indigo-700 to-purple-700 shadow-md hover:shadow-lg">
        <img
          src="/abhi.jpg"
          alt="Team Member 3"
          className="rounded-full w-24 h-24 mb-4 object-cover"
        />
        <h3 className="text-lg font-medium mb-2">Abhishek Sharma</h3>
        <p className="text-sm text-center mb-2">3rd Year Student @Seneca Polytechnic</p>
        <p className="text-sm text-center mb-2">B.E in Software Engineering</p>
        <a
          href="https://github.com/Abhii67534"
          target="_blank"
          className="text-blue-400 hover:text-blue-500 mt-2"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/abhishek-sharma1999/"
          target="_blank"
          className="text-blue-400 hover:text-blue-500"
        >
          LinkedIn
        </a>
      </div>

      {/* Team Member 4 */}
      <div className="flex flex-col items-center p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 bg-gradient-to-r from-indigo-700 to-purple-700 shadow-md hover:shadow-lg">
        <img
          src="/mubs.jpg"
          alt="Team Member 4"
          className="rounded-full w-24 h-24 mb-4 object-cover"
        />
        <h3 className="text-lg font-medium text-center mb-2">Mubassir Sapa</h3>
        <p className="text-sm text-center mb-2">3rd Year Student @Seneca Polytechnic</p>
        <p className="text-sm text-center mb-2">B.E in Software Engineering</p>
        <a
          href="https://github.com/MohHasan1"
          target="_blank"
          className="text-blue-400 hover:text-blue-500 mt-2"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/mubassir-mohmed-sapa-24165b269/"
          target="_blank"
          className="text-blue-400 hover:text-blue-500"
        >
          LinkedIn
        </a>
      </div>

      {/* Team Member 5 */}
      <div className="flex flex-col items-center p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 bg-gradient-to-r from-indigo-700 to-purple-700 shadow-md hover:shadow-lg">
        <img
          src="/placeholder.png"
          alt="Team Member 5"
          className="rounded-full w-24 h-24 mb-4 object-cover"
        />
        <h3 className="text-lg font-medium mb-2">Ryan Dang</h3>
        <p className="text-sm text-center mb-2">2nd Year Student @Seneca Polytechnic</p>
        <p className="text-sm text-center mb-2">B.E in Software Engineering</p>
        <a
          href="https://github.com/MohHasan1"
          target="_blank"
          className="text-blue-400 hover:text-blue-500 mt-2"
        >
          GitHub
        </a>
        <a
          href="https://github.com/MohHasan1"
          target="_blank"
          className="text-blue-400 hover:text-blue-500"
        >
          LinkedIn
        </a>
      </div>
    </div>
  </div>
</section>

      {/* Workshop Flow Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500">
      Workshop Flow
    </h2>
          <p className="text-lg sm:text-xl mb-8 text-center">
            In this workshop, you will learn the following topics and engage in
            hands-on demos:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Workshop Topic 1 */}
            <div className="bg-indigo-600 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">
                Create Virtual Environment
              </h3>
              <p>
                Learn how to set up a virtual environment for working with
                OpenCV and Python.
              </p>
            </div>

            {/* Workshop Topic 2 */}
            <div className="bg-purple-600 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Images and Webcam</h3>
              <p>
                Understand how to capture and manipulate images using OpenCV and
                webcam integration.
              </p>
            </div>

            {/* Workshop Topic 3 */}
            <div className="bg-pink-600 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Noise Removal</h3>
              <p>
                Learn techniques for removing noise from images to improve the
                quality of input data.
              </p>
            </div>

            {/* Workshop Topic 4 */}
            <div className="bg-indigo-600 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">
                Simple Object Detection
              </h3>
              <p>Dive into basic object detection methods using OpenCV.</p>
            </div>

            {/* Workshop Topic 5 */}
            <div className="bg-purple-600 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">
                Color Detection - Demo
              </h3>
              <p>
                Explore color detection in images and videos with hands-on
                demos.
              </p>
            </div>

            {/* Workshop Topic 6 */}
            <div className="bg-pink-600 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Hand Detection</h3>
              <p>
                Learn how to detect and track hands using OpenCV and Mediapipe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Heading */}
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500">
            Featured Projects
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-center">
            Explore the hands-on projects developed during the workshop. These
            projects showcase practical applications of OpenCV in game
            development.
          </p>

          {/* Project Cards */}
          <div className="flex flex-col sm:flex-row justify-center items-center mt-10 gap-6 sm:gap-12">
            {/* Project 1 - Finger Frenzy */}
            <div className="h-[250px] w-full sm:w-[320px] md:w-[350px] lg:w-[400px] transform transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-2xl rounded-lg">
              <div className="flex justify-center items-center bg-gradient-to-r from-indigo-700 p-6 rounded-lg hover:bg-indigo-800 transition-all duration-300">
                <div className="text-center">
                  <h3 className="font-bold text-2xl sm:text-3xl text-white mb-4">
                    FINGER FRENZY
                  </h3>
                  <p className="text-sm text-gray-200 mb-4">
                    A fun game based on hand gesture recognition using OpenCV.
                  </p>
                  <a
                    href="https://github.com/MohHasan1/Finger-Frenzy"
                    target="_blank"
                    className="inline-block py-2 px-4 bg-transparent text-white border border-white rounded-lg hover:bg-white hover:text-black transition-all duration-300"
                  >
                    GitHub Link
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 - Ping Pong */}
            <div className="h-[250px] ml-5 w-full sm:w-[320px] md:w-[350px] lg:w-[400px] transform transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-2xl rounded-lg mt-6 sm:mt-0">
              <div className="flex justify-center items-center bg-gradient-to-r from-indigo-700 p-6 rounded-lg hover:bg-indigo-800 transition-all duration-300">
                <div className="text-center">
                  <h3 className="font-bold text-2xl sm:text-3xl text-white mb-4">
                    GESTURE PONG
                  </h3>
                  <p className="text-sm text-gray-200 mb-4">
                    A classic Ping Pong game controlled via hand gestures with
                    OpenCV.
                  </p>
                  <a
                    href="https://github.com/MohHasan1/Gesture-Pong"
                    target="_blank"
                    className="inline-block py-2 px-4 bg-transparent text-white border border-white rounded-lg hover:bg-white hover:text-black transition-all duration-300"
                  >
                    GitHub Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
