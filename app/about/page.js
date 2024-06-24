import Image from 'next/image'
import Link from 'next/link'
import Testimonial from './testimonial';
import MySkill from './MySkill';

export default function About() {
    const tdate = new Date();
    return (
        <>
            <section className="m-2 ml-0 md:ml-16 md:m-8 md:w-[70vw] text-gray-400 body-font bg-gray-900">
                <div className="container px-5 py-10 mx-auto flex flex-col">
                    <div className="text-white md:w-2/3 ml-0 md:mt-1 mt-6 md:my-6">
                        <h1 className='sm:text-5xl text-4xl'>ABOUT ME</h1>
                        <div className="mt-2 h-1 w-40 bg-[#007bff] rounded"></div>
                    </div>
                    <div className="lg:w-5/6 mx-auto md:mt-0 mt-5">
                        <div className="flex flex-col sm:flex-row mt-5">
                            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                <div className="w-52 h-52 rounded-full inline-flex items-center justify-center cursor-pointer">
                                    <Image src="/profile.jpg" className='rounded-full' width={320} height={320} alt='Shivanshu Karn' />
                                </div>
                                <div className="flex flex-col items-center text-center justify-center">
                                    <h2 className="font-medium title-font mt-4 text-white text-2xl cursor-pointer">Shivanshu Karn</h2>
                                    <div className="w-28 h-1 bg-[#007bff] rounded mt-2 mb-4"></div>
                                    <p className="text-base text-gray-400">Full-stack Web Developer and Programmer</p>
                                </div>
                            </div>
                            <div className="sm:w-2/3 sm:pl-8 sm:py-4 sm:border-l border-gray-700 sm:border-t-0 border-t mt-2 pt-4 sm:mt-0 sm:text-left">
                                <div className="about-info text-gray-300 pb-5 text-base flex-nowrap flex">
                                    <div className="info-title pr-12">
                                        <p>Full Name</p>
                                        <p>Age</p>
                                        <p>Nationality </p>
                                        <p>Languages </p>
                                        <p>Location</p>
                                        <p>Service</p>
                                    </div>
                                    <div className="info">
                                        <p>: Shivanshu Karn</p>
                                        <p>: {(tdate.getFullYear()) - 2008}</p>
                                        <p>: Indian</p>
                                        <p>: English, Hindi</p>
                                        <p>: Bihar, India</p>
                                        <p>: Freelance</p>
                                    </div>
                                </div>
                                <p className="leading-relaxed text-gray-300">I am a <span className='text-[#007bff] '>Full-stack Web Developer</span> and <span className='text-[#007bff]'>Programmer</span> with around {(tdate.getFullYear()) - 2021}+ years of experience, working as a freelancer. I am skilled in Full-stack Web development, and <span className='text-[#007bff]'>Python programming</span>, and am proficient in languages such as <span className='text-[#007bff] '>JavaScript</span>, Python, Node.js, React, next.js, Firebase, <span className='text-[#007bff] '>mongoDB</span> and many more. What's impressive is that I have accomplished all this at just 15 years old and still learning and growing, which shows a strong passion and dedication toward my work</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <MySkill />
            <Testimonial />
        </>
    )
}