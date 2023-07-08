import React from 'react'
import Image from 'next/image'
import { ThemeToggleProps } from '../components/types';

const Landing = ({ isDarkMode, toggleTheme }: ThemeToggleProps) => {
  return (
    <div className="flex flex-col justify-center gap-y-3 font-montserrat">

      <div className="text-2xl">
        <h1 className="text-center" >Oda Guzmán</h1>
        <h1 className="text-center">Software Developer</h1>
        <h1 className="text-center">Based in Canada</h1>
      </div>
      <div className="flex justify-center gap-12 text-m p-2 mt-40 flex-col lg:flex-row">
        {/* Box 1 */}
        <div className="flex justify-center items-center flex-col basis-full" >
          <h1 className="text-gray-500 pb-5">About</h1>
          <h2 className="flex flex-col px-28 text-center lg:text-left" >Hi! I&apos;m Oda. I curate experiences with technology. As an ambitious web developer, I thrive on embracing challenges head-on. I&apos;m driven to leave a lasting impact through innovative and user-friendly digital experiences.
          </h2>
        </div>

        {/* Box 2 - Image Div */}
        <div className="flex justify-center items-center basis-full ">
          <div className={`w-680 h-960 rounded-full border-4 p-5 ${isDarkMode ? 'border-white-500' : 'border-gray-500/30 p-5'}`}>
            <Image
              src="/me.png"
              alt="Oval Image"
              className="w-84 h-96 object-cover rounded-full bg-purple-300 hover:scale-105 transform duration-300"
              width={220}
              height={240}
            />
          </div>
        </div>



        <div className="flex justify-center items-center flex-col basis-full" >
          <h1 className="text-gray-500 pb-5 px-14" >Services</h1>
          <h2 className="">UI/UX Design</h2>
          <h2 className="">API Development</h2>
          <h2 className="">Web Development</h2>
          <h2 className="">Software Development</h2>
          <h2 className="">Database Design & Development</h2>
        </div>
      </div>

      <div className="flex flex-col justify-center mt-20 gap-2">
  <div className="flex justify-center flex-wrap gap-3">
    {/* Image containers 1 */}
    <div className="w-32 h-15">
      <Image
        src="/Figma3.png"
        alt="Figma"
        className="object-contain"
        width={128}
        height={240}
      />
    </div>
    <div className="w-32 h-15">
      <Image
        src="/PhotoShop2.png"
        alt="Adobe PhotoShop"
        className="object-contain"
        width={128}
        height={240}
      />
    </div>
    <div className="w-32 h-15">
      <Image
        src="/Illustrator2.png"
        alt="Adobe Illustrator"
        className="object-contain"
        width={128}
        height={240}
      />
    </div>
  </div>
  <div className="flex justify-center flex-wrap gap-7">
    {/* Image containers 2 */}
    <div className="w-32 h-15">
      <Image
        src="/react.png"
        alt="React Logo"
        className="object-contain"
        width={128}
        height={240}
      />
    </div>
    <div className="w-32 h-15">
      <Image
        src="/next.png"
        alt="Next.js"
        className="object-contain"
        width={128}
        height={240}
      />
    </div>
    <div className="w-48 lg:h-60">
      <Image
        src="/tailwind.png"
        alt="Tailwind"
        className="object-contain"
        width={192}
        height={240}
      />
    </div>
    <div className="w-44 lg:h-60">
      <Image
        src="/mongo.png"
        alt="MongoDB"
        className="object-contain"
        width={176}
        height={240}
      />
    </div>
    <div className="w-24 h-15">
      <Image
        src="/mysql.png"
        alt="MySQL"
        className="object-contain"
        width={96}
        height={240}
      />
    </div>
    <div className="w-28 h-13">
      <Image
        src="/typescript.png"
        alt="Typescript"
        className="object-contain"
        width={128}
        height={240}
      />
    </div>
  </div>
</div>

<div className="flex items-center justify-center mt-2 lg:mt-0">
  <div className="w-12 h-12 rounded-full flex items-center justify-center">
    <Image
      src="/Arrow.gif"
      alt="Arrow Image"
      className="h-38 pb-20 animate-light"
      width={48}
      height={48}
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