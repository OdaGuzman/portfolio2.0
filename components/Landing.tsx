import React from 'react'

const Landing = () => {
  return (
    <div className="flex flex-col justify-center gap-y-3 text-4xl font-montserrat">

      <h1 className="text-center" >Oda Guzmán</h1>
      <h1 className="text-center">Software Developer</h1>
      <h1 className="text-center">Based in Canada</h1>

      <div className="flex justify-center gap-2 text-2xl p-2 mt-48">
        {/* Box 1 */}
        <div className="flex justify-center items-center flex-col basis-full" >
          <h1 className="text-gray-500 pb-5">About</h1>
          <h2 className="flex flex-col px-8">Hi! I'm Oda. I curate experiences with technology. As an ambitious web developer, I thrive on embracing challenges head-on. I'm driven to leave a lasting impact through innovative and user-friendly digital experiences.
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
          <h1 className="text-gray-500 pb-5 px-8" >Services</h1>
          <h2 className="">UI/UX Design</h2>
          <h2 className="">API Development</h2>
          <h2 className="">Web Development</h2>
          <h2 className="">Software Development</h2>
          <h2 className="">Database Design & Development</h2>
        </div>
      </div>

      <div className="flex justify-center gap-7 mt-40">
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

      <div className="flex items-center justify-center">
        <div className="w-12 h-12 rounded-full flex items-center justify-center">
          <img
            src="/arrow.gif"
            alt="Arrow Image"
            className="h-38 pb-20 animate-light"
          />
        </div>
      </div>


      <div className="relative">
        <div className="absolute top-0 left-0 w-full bg-gradient-to-r from-gray-200 to-gray-300 h-16 transform -skew-y-2"></div>
        <div className="absolute top-0 left-0 w-full bg-gradient-to-r from-gray-300 to-gray-400 h-8 transform -skew-y-2"></div>
      </div>


    </div >
  )
}

export default Landing