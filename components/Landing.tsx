import React from 'react'

const Landing = () => {
  return (
    <>
      <h1 className="text-center text-4xl">Oda Guzman</h1>
      <h1 className="text-center text-4xl">Software Developer</h1>
      <h1 className="text-center text-4xl">Based in Canada</h1>
      <div className="container">
        <div className="box1">
          <div className="paragraph-1">Work for money, code for love!</div>
          <div className="paragraph-2"></div>
        </div>
        <div className="flex justify-center items-center h-screen p-15">
            <div className="w-64 h-64 rounded-full p-15 border-4 border-gray-500 flex justify-center items-center">
              <img
                src="/me.png"
                alt="Oval Image"
                className="w-full h-full object-cover rounded-full "
                width={256}
                height={256}
              />
            </div>
            <div className="box3">
              <div className="paragraph-1"></div>
              <div className="paragraph-2"></div>
            </div>
          </div>
        </div>
        </>
  )
}

export default Landing