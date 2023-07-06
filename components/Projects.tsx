export default function Projects() {
  return (
    <div className="flex flex-col items-center pt-20 pb-40 font-montserrat">
      <div className="text-5xl mb-5 py-20">Projects</div>

      <div className="flex gap-40">
        {/* Image 1 */}
        <div className="relative w-96 h-96">
          <div className="bg-white border-8 border-gray-300 p-5 flex justify-center items-center w-full h-full transition-colors ">
            <span className="text-black text-4xl">Muse 🎧</span>
            <a href="https://muse-music-player.herokuapp.com/">
              <img
                src="/muse.png"
                alt="Muse"
                className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 hover:opacity-100"
              />
            </a>
          </div>
          <div className="w-full h-full lex flex-col justify-center items-center pt-4">
            <p className="text-xl">Muse is a music player that creates playlists based on the user's emotional input. It operates based on the user's musical history and artist preferences on Spotify to provide personalized playlist.</p>
            <ul className="flex  pt-4 text-sm">
              <li className="flex items-center">
                <li>React</li><span className="text-purple-600 text-xl">|</span>
                <li>Spotify Web API</li><span className="text-purple-600 text-xl">|</span>
                <li>Spotify Web Playback SDK</li>

                <a href="https://github.com/OdaGuzman/Muse-Emotion-Based-Music-Player">
                  <img
                    src="/github-icon.png"
                    alt="Muse"
                    className="h-7 ml-1"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Image 2 */}
        <div className="relative w-96 h-96">
          <div className="bg-white border-8 border-gray-300 p-5 flex justify-center items-center w-full h-full transition-colors ">
            <span className="text-black text-4xl">InStock 💰</span>
            <a href="https://instock-app-example.com/">
              <img
                src="/Instock.png"
                alt="InStock"
                className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 hover:opacity-100"
              />
            </a>
          </div>
          <div className="w-full h-full lex flex-col justify-center items-center pt-4">
            <p className="text-xl">InStock is a Full-Stack team collaboration to develop an Inventory Management System, where the user can add and remove items from the Inventory page and select from a list of Warehouses.</p>
            <ul className="flex pt-4 text-sm">
              <li className="flex items-center">
                <li>Jira</li><span className="text-purple-600 text-xl">|</span>
                <li>React</li><span className="text-purple-600 text-xl ml-1">|</span>
                <li>Knex</li><span className="text-purple-600 text-xl ml-1">|</span>
                <li>Postman</li><span className="text-purple-600 text-xl ml-1">|</span>
                <a href="https://github.com/OdaGuzman/Muse-Emotion-Based-Music-Player">
                  <img
                    src="/github-icon.png"
                    alt="Muse"
                    className="h-7 ml-2"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Image 3 */}
        <div className="relative w-96 h-96">
          <div className="bg-white border-8 border-gray-300 p-5 flex justify-center items-center w-full h-full transition-colors ">
            <span className="text-black text-4xl">Wasabi Bytes 🍣</span>
            <a href="https://wasabi-bytes-app.com/">
              <img
                src="/wasabi.png"
                alt="Wasabi Bytes"
                className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 hover:opacity-100"
              />
            </a>
          </div>
          <div className="w-full h-full flex-col justify-center items-center pt-4">
            <p className="text-xl">Wasabi Bytes is a full-stack project that showcases an interactive sushi menu. Users are able to create an account, log in,and place orders for their favorite sushi dishes.</p>
            <ul className="flex pt-4 text-sm">
              <li className="flex items-center">
                <li>Next.js</li><span className="text-purple-600 text-xl ml-1">|</span>
                <li>Tailwind</li><span className="text-purple-600 text-xl ml-1">|</span>
                <li>JWT</li><span className="text-purple-600 text-xl ml-1">|</span>
                <li>MySQL</li><span className="text-purple-600 text-xl ml-1">|</span>
                <a href="https://github.com/OdaGuzman/Muse-Emotion-Based-Music-Player">
                  <img
                    src="/github-icon.png"
                    alt="Github"
                    className="h-7 ml-2"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="top-0 left-0  bg-gradient-to-r from-gray-500 to-gray-600 h-8 transform -skew-y-4"></div>
        <div className="top-0 left-0  bg-gradient-to-r from-gray-300 to-gray-400 h-32 transform -skew-y-4"></div>
      </div>
    </div >
  );
}

