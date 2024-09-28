import React from 'react'

const HeaderUi = () => {
    return (        
        <>
            <main class="bg-white font-open-sans shadow-md">                
                <div class="container mx-auto px-8 py-8 lg:py-40 relative flex flex-col lg:flex-row items-center">
                    <div class="lg:w-1/2 flex flex-col items-center lg:items-start">
                        <h1 class="text-center lg:text-left text-3xl sm:text-5xl font-light text-blue-700 leading-tight mb-4">Our recruiting strategy <strong class="font-black text-3xl sm:text-4xl block">hit your hiring plan</strong></h1>
                        <p class="text-center lg:text-left sm:text-lg text-gray-500 lg:pr-40 leading-relaxed">You must be able to convey information via phone, email, and in person. You want to make sure your tone is always professional but friendly.</p>
                        <a href="#" class="bg-blue-400 hover:bg-blue-500 mt-8 py-3 px-8 text-lg rounded-full font-bold uppercase text-white tracking-widest">Apply Now</a>
                        
                    </div>
                    {/* <div class="w-full sm:w-2/3 lg:absolute top-0 right-0 bottom-0 lg:mr-8">
                        <image scr={MyInage} alt="the image" />
                    </div> */}
                </div>
            </main>
        </>
    )
}

export default HeaderUi