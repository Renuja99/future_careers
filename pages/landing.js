import Navbar2 from "./components/navbar2"
import Footer1 from "./components/footer"

const Landing = () => {
    return (
                
        <>
        <Navbar2/>
        <div className="flex flex-col justify-center items-center">
        <section className="relative pb-32 w-3/4 ">
        <img className="hidden lg:block lg:absolute -top-20 -left-20 mt-32" src="wallet-svgrepo-com.svg" alt=""/>
        <img className="hidden lg:block lg:absolute bottom-10 right-0 mt-20" src="terms-of-delivery-svgrepo-com.svg" alt=""/>
        <div className="relative container  pt-12 px-4 mx-auto text-center">
            <h2 className="lg:mt-24 mb-8 lg:mb-24 text-3xl leading-loose lg:text-8xl font-black text-green-400">Find Great places to work and<br/>top employees to hire</h2>
            <h2 className="max-w-5xl mx-auto mb-8 lg:mb-24 lg:text-3xl font-normal lg:leading-10 text-gray-700">Find a dream job that perfectly matches your needs! Applying is just one click away! Make your job adverts stand out using our brand new features! Find the best match for your vacancy through FutureSeekers.lk </h2>
            <a className="inline-block w-full md:w-auto mb-2 md:mb-0 px-8 py-4 mr-4 text-xl font-b leading-normal bg-red-400 hover:bg-red-500 text-white rounded transition duration-200" href="#">Sign Up to get employed</a>
            <a className="inline-block w-full md:w-auto mb-2 md:mb-0 px-8 py-4 mr-4 text-xl font-b leading-normal bg-indigo-400 hover:bg-indigo-500 text-white rounded transition duration-200" href="#">Hire employees/ Post job</a>
        </div>
        
        </section>
        <section className="py-16 px-4 text-center md:w-3/4">
            <h2 className="text-4xl mb-12 font-semibold font-heading">How to get started and get employed?</h2>
            <div className="flex flex-wrap items-center justify-center -mx-8 mb-12">
                <div className="lg:w-1/3 px-8 mb-8 lg:mb-0">
                <svg className="text-red-600 w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
                <h3 className="text-2xl mt-6 mb-3 font-semibold font-heading">Create an account</h3>
                <p className="text-gray-400 leading-relaxed">During the phone call we will be able to present you all details of cooperation, pricing and special offers, suited for your company.</p>
                </div>
                <div className="lg:w-1/3 px-8 mb-8 lg:mb-0">
                <svg className="text-red-600 w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                </svg>
                <h3 className="text-2xl mt-6 mb-3 font-semibold font-heading">Customize your CV</h3>
                <p className="text-gray-400 leading-relaxed">We can also talk during business meeting, or visit your office anytime you want! Our employees will provide proper contracts.</p>
                </div>
                <div className="lg:w-1/3 px-8 mb-8 lg:mb-0">
                <svg className="text-red-600 w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                </svg>
                <h3 className="text-2xl mt-6 mb-3 font-semibold font-heading">Search for jobs and get employed!</h3>
                <p className="text-gray-400 leading-relaxed">You don’t buy a pig... or shall I say a paper in a poke. The supplies will be delivered to your company every first Monday of the month.</p>
                </div>
            </div>
            <div><a className="inline-block py-4 px-8 leading-none text-white bg-red-600 hover:bg-red-700 font-semibold rounded shadow" href="#">Learn more</a></div>
            </section>



            
        </div>

        <section className="py-12 md:py-32 overflow-x-hidden  w-full">
  <div className="container px-4 mx-auto w-full ">
    <div className="flex flex-wrap lg:flex-nowrap">
      <div className="relative w-full lg:w-1/2 order-1 lg:order-0 my-12 lg:my-0">
        <img className="relative mx-auto rounded-xl w-full z-10" src="./homepage_img.jpg" alt=""/>
        <img className="absolute top-0 left-0 w-40 -ml-12 -mt-12" src="metis-assets/elements/blob-tear.svg" alt=""/>
        
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute -top-20 -left-20 w-72 -ml-12 -mt-12">
        <path fill="#FFD6E8" d="M54.5,-65.2C68.4,-53.2,76,-34,78.7,-14.5C81.3,4.9,78.9,24.5,70.6,42.5C62.3,60.5,48.1,76.9,30.7,82.5C13.2,88.1,-7.6,82.9,-27.6,75.7C-47.6,68.5,-67,59.1,-72.7,44.3C-78.5,29.5,-70.8,9.2,-63.2,-7.1C-55.5,-23.5,-48,-35.9,-37.5,-48.4C-27,-61,-13.5,-73.9,3.4,-77.9C20.3,-81.9,40.5,-77.2,54.5,-65.2Z" transform="translate(100 100)" />
</svg>
      </div>
      
      <div className="w-full lg:w-1/2 lg:order-1">
        <div className="py-6 lg:pl-32">
          <div className="mb-4">
            <span className="text-xs py-1 px-3 text-red-400 font-semibold bg-red-50 rounded-xl">Publish your jobs</span>
            <h2 className="text-4xl mt-3 font-bold font-heading">Key features for your organization</h2>
          </div>
          <div className="flex items-start py-4">
            <div className="w-8 mr-5 text-red-500">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold font-heading">Easy to customize</h3>
              <p className="text-gray-400 leading-loose">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis expedita animi.</p>
            </div>
          </div>
          <div className="flex items-start py-4">
            <div className="w-8 mr-5 text-red-500">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
              </svg>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold font-heading">Flexible software</h3>
              <p className="text-gray-400 leading-loose">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis expedita animi.</p>
            </div>
          </div>
          <div className="flex items-start py-4">
            <div className="w-8 mr-5 text-red-500">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path>
              </svg>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold font-heading">Best access for all of the resources</h3>
              <p className="text-gray-400 leading-loose">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis expedita animi.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<Footer1/>
        </>
    )
}

export default Landing
