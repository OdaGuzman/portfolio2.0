import Image from 'next/image'
export default function Projects() {
  return (
    <div className="flex flex-col items-center pt-20 pb-40 font-montserrat" id="projects">
      <div className="text-5xl mb-5 py-20">Projects</div>

      <div className="flex gap-72 lg:gap-40 flex-col lg:flex-row">

        {/* Image 1 */}
        <div className="relative w-96 h-96">
          <div
            className="bg-white border-8 border-gray-300 p-5 flex justify-center items-center w-full h-full transition-colors ">
            <span className="text-black text-4xl">Muse 🎧</span>
            <a href="https://muse-music-player.herokuapp.com/">
              <Image
                src="/muse.png" alt="Muse"
                className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 hover:opacity-100"
                width={384}
                height={384} />
            </a>
          </div>
          <div className="w-full h-full lex flex-col justify-center items-center pt-4">
            <p className="text-xl">Muse is a music player that creates playlists based on the user&apos;s emotional input. It operates based on the user&apos;s musical history and artist preferences on Spotify to provide personalized playlist.</p>
            <ul className="flex pt-4 text-sm items-center justify-between">
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

        {/* Image 2 */}
        <div className="relative w-96 h-96">
          <div className="bg-white border-8 border-gray-300 p-5 flex justify-center items-center w-full h-full transition-colors ">
            <span className="text-black text-4xl">InStock 💰</span>
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
          <div className="w-full h-full lex flex-col justify-center items-center pt-4">
            <p className="text-xl">InStock is a Full-Stack team collaboration with fellow colleagues to develop an Inventory Management System, where the user can add and remove items from the Inventory page and select from a list of Warehouses to modify the selected warehouse location. </p>
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
        </div>

        {/* Image 3 */}
        <div className="relative w-96 h-96">
          <div className="bg-white border-8 border-gray-300 p-5 flex justify-center items-center w-full h-full transition-colors ">
            <span className="text-black text-4xl">Wasabi Bytes 🍣</span>
            <a href="https://wasabi-bytes-app.com/">
              <Image
                src="/wasabi.png"
                alt="Wasabi Bytes"
                className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 hover:opacity-100"
                width={384}
                height={384}
              />
            </a>
          </div>
          <div className="w-full h-full flex-col justify-center items-center pt-4">
            <p className="text-xl">Wasabi Bytes is a full-stack project that showcases an interactive sushi menu. Users are able to create an account, log in,and place orders for their favorite sushi dishes.</p>
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
      </div>

      <div className="relative">
        <div className="top-0 left-0 bg-gradient-to-r from-gray-500 to-gray-600 h-8 transform -skew-y-24"></div>
        <div className="top-0 left-0 bg-gradient-to-r from-gray-300 to-gray-400 h-32 transform -skew-y-2"></div>
      </div>
    </div >
  );
}
