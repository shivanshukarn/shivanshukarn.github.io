import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { MdMailOutline } from "react-icons/md";

export default function Home() {
  const socialLinks = {
    instagram: "https://www.instagram.com/shivanshu.karn",
    github: "https://github.com/shivanshukarn",
    linkedin: "https://www.linkedin.com/in/shivanshukarn/",
    twitter: "https://twitter.com/shivanshukarn_",
    email: "work.shivanshukarn@gmail.com"
  }
  return (
    <>
      <section className='text-center flex flex-col justify-center h-full'>
        <div><h1 className='text-[2.75rem] md:text-[3rem] py-0'>Hi, I'm <span className='text-[#007bff] font-medium'>Shivanshu Karn</span> </h1></div>
        <p className="my-5 text-[1.1rem] md:text-2xl py-0">
          Full Stack Website Developer & Programmer
        </p>
        <div className="social mt-8 text-3xl flex flex-row gap-4 justify-center">
          <a href={"mailto:" + socialLinks.email} target='_blank' alt="Email"><MdMailOutline /></a>
          <a href={socialLinks.github} target='_blank' alt="Github"><BsGithub /></a>
          <a href={socialLinks.linkedin} target='_blank' alt="LinkedIn"><BsLinkedin /></a>
          <a href={socialLinks.twitter} target='_blank' alt="Twitter"><BsTwitter /></a>
          <a href={socialLinks.instagram} target='_blank' alt="Instagram"><BsInstagram /></a>
        </div>
        <div className="button mt-8 flex flex-row gap-4 justify-center">
        <button type="submit" className="py-2 px-4 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-2 focus:outline-none focus:ring-primary-300 bg-[#007bff] hover:bg-blue-500">Download CV</button>
        </div>
      </section>
    </>
  )
}