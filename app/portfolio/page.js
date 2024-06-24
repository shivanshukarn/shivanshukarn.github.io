import Image from 'next/image'
import Link from 'next/link'

export default function Portfolio() {
  return (
    <>
      <section className="m-4 ml-0 md:ml-16 md:m-8 md:w-[70vw] text-gray-400 body-font bg-gray-900">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <div className="text-white md:w-2/3 ml-0 md:mt-1  mt-6 md:my-6">
                <h1 className='sm:text-5xl text-4xl'>PORTFOLIO</h1>
                <div className="mt-2 h-1 w-40 bg-[#007bff] rounded"></div>
              </div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">
              Skilled web developer with expertise in HTML, CSS, JavaScript, Node.js, React, Next.js, Firebase, Sanity IO, MongoDB, Python, and more. Experienced in creating dynamic websites and utilizing backend technologies for advanced features.</p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/2 md:w-1/2 py-4 md:px-4">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
                <h3 className="tracking-widest text-[#007bff] text-xs font-medium title-font">SUBTITLE</h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">Chichen Itza</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
            </div>
            <div className="xl:w-1/2 md:w-1/2 py-4 md:px-4">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/721x401" alt="content" />
                <h3 className="tracking-widest text-[#007bff] text-xs font-medium title-font">SUBTITLE</h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">Colosseum Roma</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
            </div>
            <div className="xl:w-1/2 md:w-1/2 py-4 md:px-4">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/722x402" alt="content" />
                <h3 className="tracking-widest text-[#007bff] text-xs font-medium title-font">SUBTITLE</h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">Great Pyramid of Giza</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
            </div>
            <div className="xl:w-1/2 md:w-1/2 py-4 md:px-4">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403" alt="content" />
                <h3 className="tracking-widest text-[#007bff] text-xs font-medium title-font">SUBTITLE</h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">San Francisco</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}