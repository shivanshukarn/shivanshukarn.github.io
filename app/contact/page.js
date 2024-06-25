import Link from 'next/link'
import { BsGithub, BsInstagram, BsLinkedin, BsTwitterX  } from 'react-icons/bs'

export default function Contact() {
    const socialLinks = {
        instagram: "https://www.instagram.com/shivanshu.karn",
        github: "https://github.com/shivanshukarn",
        linkedin: "https://www.linkedin.com/in/shivanshukarn/",
        twitter: "https://x.com/shivanshukarn_",
        email: "work.shivanshukarn@gmail.com"
    }
    return (
        <>
            <section className="m-0 ml-0 md:ml-16 md:m-8 md:w-[70vw] text-gray-400 body-font bg-gray-900 w-[90vw]">
                <div className='container md:px-0 px-5 py-10 mx-auto'>
                    <div className="text-white md:w-2/3 ml-0 md:mt-1 mt-6 md:my-6">
                        <h1 className='sm:text-5xl text-4xl'>CONTACT</h1>
                        <div className="mt-2 h-1 w-40 bg-[#007bff] rounded"></div>
                    </div>
                    <div className="pt-8 pb-4 text-white w-full">
                        <form className="space-y-8">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
                                <input type="name" id="name" className="shadow-sm bg-[#111827] border text-sm rounded-lg block w-full p-2.5" placeholder="i.e. Jhon Doe" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium">Your email</label>
                                <input type="email" id="email" className="shadow-sm bg-[#111827] border text-sm rounded-lg block w-full p-2.5" placeholder="youremail@domain.com" required />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block mb-2 text-sm font-medium">Your Subject</label>
                                <input type="text" id="subject" className="shadow-sm bg-[#111827] border text-sm rounded-lg block w-full p-2.5" placeholder="Subject for contacting" required />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium">Your message</label>
                                <textarea id="message" rows="6" className="block p-2.5 w-full text-sm bg-[#111827] rounded-lg shadow-sm border" placeholder="Leave a message..." required></textarea>
                            </div>
                            <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-[#007bff] hover:bg-blue-500">Send message</button>
                            <div className='w-full pt-4 mt-2 border-t border-gray-200 text-center'>
                                <a href={"mailto:" + socialLinks.email} className="text-[#007bff]">{socialLinks.email}</a>
                                <div className="social mt-4 text-2xl flex flex-row gap-4 justify-center ">
                                    <a href={socialLinks.github} target='_blank' alt="Github"><BsGithub /></a>
                                    <a href={socialLinks.linkedin} target='_blank' alt="LinkedIn"><BsLinkedin /></a>
                                    <a href={socialLinks.twitter} target='_blank' alt="Twitter"><BsTwitterX  /></a>
                                    <a href={socialLinks.instagram} target='_blank' alt="Instagram"><BsInstagram /></a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}