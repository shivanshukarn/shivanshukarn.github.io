import Image from 'next/image'
import Link from 'next/link'
import { FiCode } from 'react-icons/fi'
import { MdOutlineArticle, MdOutlineManageAccounts } from 'react-icons/md'

export default function Services() {
  return (
    <>
      <section className="m-4 ml-0 md:ml-16 md:m-8 md:w-[70vw] text-gray-400 body-font bg-gray-900">
        <div className="container px-5 py-8 mx-auto">
          <div className="flex flex-wrap w-full mb-10 flex-col">
            <div className="text-white md:w-2/3 ml-0 md:mt-1  mt-6 md:my-4">
              <h1 className='sm:text-5xl text-4xl'>SERVICES</h1>
              <div className="mt-2 mb-4 h-1 w-40 bg-[#007bff] rounded"></div>
            </div>
            <p className="w-full leading-relaxed text-opacity-80">As a proficient web developer, I offer top-notch web development services that are tailored to meet your needs. With extensive experience in creating dynamic, responsive, and visually appealing websites, I ensure to develop high-quality websites that are intuitive, user-friendly, and responsive across all devices. With a keen eye for detail, Trust me to create a website that will be a true reflection of your business and enhance your online presence.</p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 py-4 md:px-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <div className="w-14 h-14 inline-flex items-center justify-center rounded-full bg-gray-800 text-blue-400 mb-4">
                  <FiCode className="w-7 h-7" />
                </div>
                <h2 className="text-lg text-white font-medium title-font mb-2">Website Development</h2>
                <p className="leading-relaxed text-base">Ensure to develop high-quality websites that are intuitive, user-friendly, and responsive across all devices and tailored to meet your needs and enhance your online presence.</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 py-4 md:px-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <div className="w-14 h-14 inline-flex items-center justify-center rounded-full bg-gray-800 text-blue-400 mb-4">
                  <MdOutlineArticle className="w-7 h-7" />
                </div>
                <h2 className="text-lg text-white font-medium title-font mb-2">Content Writing</h2>
                <p className="leading-relaxed text-base">I am a skilled and experienced tech writer specializing in creating high-quality and engaging content. With a strong background in technology and a passion for writing, I can deliver informative and well-researched tech blogs that cater to your target audience.</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 py-4 md:px-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <div className="w-14 h-14 inline-flex items-center justify-center rounded-full bg-gray-800 text-blue-400 mb-4">
                  <MdOutlineManageAccounts className="w-7 h-7" />
                </div>
                <h2 className="text-lg text-white font-medium title-font mb-2">Website Management</h2>
                <p className="leading-relaxed text-base">Offering comprehensive website management services, I can handle all aspects of your website. From updates and content management to performance optimization and bug fixing, I ensure your website remains flawless and up-to-date.</p>
              </div>
            </div>
          </div>
          <button className="flex mx-auto mt-10 text-white bg-[#007bff] border-0 py-2 px-8 focus:outline-none hover:bg-blue-500 rounded text-lg">Get a Quote</button>
        </div>
      </section>
    </>
  )
}