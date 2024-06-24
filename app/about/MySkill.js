import React from 'react'

const MySkill = () => {
    return (
        <section className="m-2 ml-0 md:m-8 text-gray-400 bg-gray-900 body-font sm:border-t border-gray-600 border-t">
            <div className="container px-5 py-8 mx-auto">
                <h1 className="text-3xl font-medium title-font text-white mb-8">My Skills</h1>
                <div className="flex items-center lg:w-3/5 mx-auto border-b pb-5 md:pb-8 mb-2 border-gray-800 sm:flex-row">
                    <div className="flex-grow sm:text-left mt-6 sm:mt-0">
                        <h2 className="text-white md:text-3xl text-xl title-font font-medium mb-2">HTML</h2>
                        <div className='flex items-center'>
                            <span>90%</span>
                            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700 ml-4">
                                <div className="bg-[#007bff] h-2 rounded-full w-[90%]"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center lg:w-3/5 mx-auto border-b pb-5 md:pb-8 mb-2 border-gray-800 sm:flex-row">
                    <div className="flex-grow sm:text-left mt-6 sm:mt-0">
                        <h2 className="text-white md:text-3xl text-xl title-font font-medium mb-2">CSS</h2>
                        <div className='flex items-center'>
                            <span>80%</span>
                            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700 ml-4">
                                <div className="bg-[#007bff] h-2 rounded-full w-[80%]"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center lg:w-3/5 mx-auto border-b pb-5 md:pb-8 mb-2 border-gray-800 sm:flex-row">
                    <div className="flex-grow sm:text-left mt-6 sm:mt-0">
                        <h2 className="text-white md:text-3xl text-xl title-font font-medium mb-2">JavaScript</h2>
                        <div className='flex items-center'>
                            <span>85%</span>
                            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700 ml-4">
                                <div className="bg-[#007bff] h-2 rounded-full w-[85%]"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center lg:w-3/5 mx-auto border-b pb-5 md:pb-8 mb-2 border-gray-800 sm:flex-row">
                    <div className="flex-grow sm:text-left mt-6 sm:mt-0">
                        <h2 className="text-white md:text-3xl text-xl title-font font-medium mb-2">NodeJS</h2>
                        <div className='flex items-center'>
                            <span>75%</span>
                            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700 ml-4">
                                <div className="bg-[#007bff] h-2 rounded-full w-[75%]"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center lg:w-3/5 mx-auto border-b pb-5 md:pb-8 mb-2 border-gray-800 sm:flex-row">
                    <div className="flex-grow sm:text-left mt-6 sm:mt-0">
                        <h2 className="text-white md:text-3xl text-xl title-font font-medium mb-2">React</h2>
                        <div className='flex items-center'>
                            <span>70%</span>
                            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700 ml-4">
                                <div className="bg-[#007bff] h-2 rounded-full w-[70%]"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center lg:w-3/5 mx-auto pb-2 mb-0 sm:flex-row">
                    <div className="flex-grow sm:text-left mt-6 sm:mt-0">
                        <h2 className="text-white md:text-3xl text-xl title-font font-medium mb-2">Python</h2>
                        <div className='flex items-center'>
                            <span>85%</span>
                            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700 ml-4">
                                <div className="bg-[#007bff] h-2 rounded-full w-[85%]"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default MySkill