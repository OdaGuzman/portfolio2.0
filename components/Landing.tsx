import React from 'react'


const Landing = () => {
  return (
    <div className="flex flex-col justify-center gap-y-3 text-4xl font-montserrat">

      <h1 className="text-center" >Oda Guzmán</h1>
      <h1 className="text-center">Software Developer</h1>
      <h1 className="text-center">Based in Canada</h1>

      <div className="flex justify-center gap-2 text-2xl p-2 h-screen">
        {/* Box 1 */}
        <div className="flex justify-center items-center flex-col basis-full" >
          <h1 className="text-gray-500 pb-5">About</h1>
          <h2 className=" overflow-ellipsis whitespace-wrap text-center">I'm Oda! I curate experiences with technology. I'm Oda! I curate experiences with technology. I'm Oda! I curate experiences with technology.technology. I'm Oda! I curate experiences with technology.
          </h2>
        </div>

        {/* Box 2 - Image Div */}
        <div className="flex justify-center items-center basis-full ">
          <div className="w-680 h-960 rounded-full border-4 border-gray-500/30 p-5">
            <img
              src="/me.png"
              alt="Oval Image"
              className="w-94 h-96 object-cover rounded-full bg-purple-300 hover:scale-105 transform duration-300"
              width={256}
              height={256}
            />
          </div>
        </div>


        {/* Box 3*/}
        <div className="flex justify-center items-center flex-col basis-full" >
          <h1 className="text-gray-500 pb-5" >Services</h1>
          <h2 className="">UI/UX Design</h2>
          <h2 className="">API Development</h2>
          <h2 className="">Web Development</h2>
          <h2 className="">Software Development</h2>
          <h2 className="">Database Design & Development</h2>
        </div>
      </div>

      <div className="flex justify-center gap-7">
        <img
          src='/react.png'
          alt="React Logo"
          className="w-32 h-15 object-contain"
        />
        <img
          src="/next.png"
          alt="Next.js"
          className="w-32 h-15 object-contain"
        />
        <img
          src="/tailwind.png"
          alt="Tailwind"
          className="w-48 h-60 object-contain"
        />
        <img
          src="/mongo.png"
          alt="MongoDB"
          className="w-44 h-60 object-contain"
        />
        <img
          src="/mysql.png"
          alt="MySQL"
          className="w-24 h-15 object-contain"
        />
        <img
          src="/typescript.png"
          alt="Typescript"
          className="w-32 h-15 object-contain"
        />
        <img
          src="/aws.png"
          alt="Amazon Web Services"
          className="w-32 h-15 object-contain"
        />
      </div>

      <div className="relative">
        <div className="absolute top-0 left-0 w-full bg-gradient-to-r from-gray-200 to-gray-300 h-16 transform -skew-y-2"></div>
        <div className="absolute top-0 left-0 w-full bg-gradient-to-r from-gray-300 to-gray-400 h-8 transform -skew-y-2"></div>
      </div>


    </div >
  )
}

export default Landing