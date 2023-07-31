import Image from 'next/image'
import { ThemeToggleProps } from '../components/types';


export default function Projects({ isDarkMode, toggleTheme }: ThemeToggleProps) {
  return (
    <div className="flex flex-col items-center pt-20 pb-40 font-montserrat" id="projects">
      <div className="text-3xl mb-5 py-20">Projects</div>

      <div className={`flex gap-72 lg:gap-60 flex-col lg:flex-row ${isDarkMode ? 'text-black' : ''}`}>

        {/* Image 1 - 1st Row*/}
        <div className="relative w-[21rem] h-[21rem] lg:ml-14">
          <div
            className="bg-white border-8 flex-col border-gray-300 p-5 flex justify-center items-center w-full h-full transition-colors ">
            <p className="text-black text-4xl">Muse 🎧</p>
            <p className=" text-gray-400 text-xl">Full-Stack Music Player</p>
            <a href="https://muse-music-player.herokuapp.com/">
              <Image
                src="/Muse.png" alt="Muse"
                className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 hover:opacity-100"
                width={384}
                height={384} />
            </a>
          </div>
          <div className="w-full h-full flex-col justify-center items-center pt-4">
            <p className="text-l">Muse is a music player that creates playlists based on the user&apos;s emotional input. It operates based on the user&apos;s musical history and artist preferences on Spotify to provide personalized playlist.</p>
            <ul className="flex pt-4 text-xs items-center justify-between">
              <li>React</li><span className="text-purple-600 text-xl">|</span>
              <li>Spotify Web API</li><span className="text-purple-600 text-xl">|</span>
              <li>Spotify Web SDK</li>

              <a href="https://github.com/OdaGuzman/Muse-Emotion-Based-Music-Player">
                <Image
                  src="/github-icon.png"
                  alt="Github Repo"
                  className="h-7 ml-auto"
                  width={28}
                  height={28}
                />
              </a>
            </ul>
          </div>
        </div>


        {/* Image 2 - 1st Row */}
        <div className="relative w-[21rem] h-[21rem]">
          <div className="bg-white border-8 flex-col border-gray-300 p-5 flex justify-center items-center w-full h-full transition-colors ">
            <p className="text-black text-3xl">Wasabi Bytes 🍣</p>
            <p className=" text-gray-400 text-xl">Full-Stack Restaurant</p>
            <a href="https://wasabi-bytes-app.com/">
              <Image
                src="/Wasabi.png"
                alt="Wasabi Bytes"
                className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 hover:opacity-100"
                width={384}
                height={384}
              />
            </a>
          </div>
          <div className="w-full h-full flex-col justify-center items-center pt-4">
            <p className="text-l">Wasabi Bytes is a full-stack project that showcases an interactive sushi menu. Users are able to create an account, log in,and place orders for their favorite sushi dishes.</p>
            <ul className="flex items-center justify-between pt-4 text-sm">

              <li>Next.js</li><span className="text-purple-600 text-xl ml-1">|</span>
              <li>Tailwind</li><span className="text-purple-600 text-xl ml-1">|</span>
              <li>JWT</li><span className="text-purple-600 text-xl ml-1">|</span>
              <li>MySQL</li><span className="text-purple-600 text-xl ml-1">|</span>
              <a href="https://github.com/OdaGuzman/WasabiBytes">
                <Image
                  src="/github-icon.png"
                  alt="Github Repo"
                  className="h-7 ml-auto"
                  width={28}
                  height={28}
                />
              </a>

            </ul>
          </div>
        </div>
        {/* Image 3 - 2nd Row*/}
        {/* <div className="relative w-[21rem] h-[21rem]">
          <div className="bg-white border-8 border-gray-300 p-5 flex justify-center items-center w-full h-full transition-colors">
            <span className="text-black text-3xl">Reverie 🌀</span>
            <a href="https://marketplace.visualstudio.com/items?itemName=OdaGuzman.Reverie">
              <Image
                src="/Reverie1.png"
                alt="Reverie"
                className="absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300 hover:opacity-100"
                width={384}
                height={384}
              />
            </a>
          </div>
          <div className="w-full h-full flex-col justify-center items-center pt-4">
            <p className="text-l">Reverie is an eye-soothing Visual Studio Code color theme with blends of navy blue, golden, green, and velvet colors.</p>
            <ul className="flex items-center justify-between pt-4 text-sm">

              <li>JSON</li><span className="text-purple-600 text-xl ml-1">|</span>

              <a href="https://github.com/OdaGuzman/reverie-vscode-theme">
                <Image
                  src="/github-icon.png"
                  alt="Github Repo Reverie"
                  className="h-7 ml-6"
                  width={28}
                  height={28}
                />
              </a>
            </ul>
          </div>
        </div> */}
      </div>

      <div className="relative">
        <div className="top-0 left-0 bg-gradient-to-r from-gray-500 to-gray-600 h-8 transform -skew-y-24"></div>
        <div className="top-0 left-0 bg-gradient-to-r from-gray-300 to-gray-400 h-32 transform -skew-y-2"></div>
      </div>


      {/* Image 1 - 2nd Row */}
      <div className={`flex gap-72 lg:gap-60 flex-col lg:flex-row mt-48 ${isDarkMode ? 'text-black' : ''}`}>

        {/* Image 1 */}
        <div className="relative w-[21rem] h-[21rem] lg:ml-14">
          <div
            className="bg-white border-8 flex-col border-gray-300 p-5 flex justify-center items-center w-full h-full transition-colors ">
            <p className="text-black text-4xl">StreamLine 📲</p>
            <p className="text-gray-400  text-xl">UX|UI Prototype</p>
            <a href="https://muse-music-player.herokuapp.com/">
              <iframe className="border: 1px solid rgba(0, 0, 0, 0.1); absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 hover:opacity-100" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FhNaYA1XFMH3y9yEQHy4CYH%2FStreamLine---Oda-G.%3Fnode-id%3D78-308%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D9%253A642%26show-proto-sidebar%3D1%26mode%3Ddesign%26t%3DHUZIpDflW0w2hAPb-1">
              </iframe>
            </a>
          </div>
          <div className="w-full h-full flex-col justify-center items-center pt-4">
            <p className="text-l">Streamline is a prototype to stream tv shows and music from all different platforms in one app. It would allow users to create playlists, Watch Parties, and channels for user&apos;s feedback.</p>
            <ul className="flex pt-4 text-sm items-center justify-between">
              <li>Figma</li><span className="text-purple-600 text-xl">|</span>


              <a href="https://docs.google.com/presentation/d/1JmQJHaY1tknDnsFdPAa_RMc50mMU9UVzecni6lfmjhQ/edit?usp=sharing">
                <Image
                  src="/Slides.png"
                  alt="Research Presentation"
                  className="h-7 ml-auto"
                  width={28}
                  height={28}
                />
              </a>
            </ul>
          </div>
        </div>

        {/* Image 2 - 2nd Row*/}
        {/* <div className="relative w-[21rem] h-[21rem]">
          <div className="bg-white border-8 border-gray-300 p-5 flex justify-center items-center w-full h-full transition-colors ">
            <span className="text-black text-3xl">InStock 💰</span>
            <a href="https://instock-app-example.com/">
              <Image
                src="/Instock.png"
                alt="InStock"
                className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 hover:opacity-100"
                width={384}
                height={384}
              />
            </a>
          </div>
          <div className="w-full h-full flex-col justify-center items-center pt-4">
            <p className="text-l">InStock is a Full-Stack team collaboration with fellow colleagues to develop an Inventory Management System, where the user can add and remove items from the Inventory page and select from a list of Warehouses to modify the selected warehouse location. </p>
            <ul className="flex items-center justify-between pt-4 text-sm">

              <li>Jira</li><span className="text-purple-600 text-xl ml-1">|</span>
              <li>React</li><span className="text-purple-600 text-xl ml-1">|</span>
              <li>Knex</li><span className="text-purple-600 text-xl ml-1">|</span>
              <li>Postman</li><span className="text-purple-600 text-xl ml-1">|</span>

              <a href="https://github.com/OdaGuzman/InStockClient">
                <Image
                  src="/github-icon.png"
                  alt="Github Repo Client"
                  className="h-7 ml-6"
                  width={28}
                  height={28}
                />
              </a>
              <a href="https://github.com/OdaGuzman/InStockServer">
                <Image
                  src="/github-icon.png"
                  alt="Github Repo Server"
                  className="h-7 ml-auto"
                  width={28}
                  height={28}
                />
              </a>
            </ul>
          </div>
        </div> */}


        {/* Image 3 - 2nd Row*/}
        <div className="relative w-[21rem] h-[21rem]">
          <div
            className="bg-white border-8 flex-col border-gray-300 p-5 flex justify-center items-center w-full h-full transition-colors ">
            <p className="text-black text-4xl">Reverie 🌀</p>
            <p className="text-gray-400 text-xl">VS Code Theme</p>
            <a href="https://marketplace.visualstudio.com/items?itemName=OdaGuzman.Reverie">
              <Image
                src="/Reverie1.png"
                alt="Reverie"
                className="absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300 hover:opacity-100"
                width={384}
                height={384}
              />
            </a>
          </div>
          <div className="w-full h-full flex-col justify-center items-center pt-4">
            <p className="text-l">Reverie is a Visual Studio Code color theme with blends of navy blue, golden, green, and velvet shades.</p>
            <ul className="flex items-center justify-between pt-4 text-sm">

              <li>JSON</li><span className="text-purple-600 text-xl ml-1">|</span>

              <a href="https://github.com/OdaGuzman/reverie-vscode-theme">
                <Image
                  src="/github-icon.png"
                  alt="Github Repo Reverie"
                  className="h-7 ml-6"
                  width={28}
                  height={28}
                />
              </a>
            </ul>
          </div>
        </div>

      </div>



      <div className="relative">
        <div className="top-0 left-0 bg-gradient-to-r from-gray-500 to-gray-600 h-8 transform -skew-y-24"></div>
        <div className="top-0 left-0 bg-gradient-to-r from-gray-300 to-gray-400 h-32 transform -skew-y-2"></div>
      </div>
    </div >
  );
}