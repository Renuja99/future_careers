import { useState } from "react";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);

  const [ job_title, setJobTitle]= useState('Backend ');
  const [closing_date, setClosingDate]= useState('');
  const [ job_location, setJobLocation]= useState('');
  const [job_description, setJobDescription]= useState('');
  const [job_industry, setJobIndustry]= useState('');
  const [job_type, setJobType]= useState('');
  const [experience_level, setExpLevel]= useState('');
  const [job_location_type, setJobLocType]= useState('');

  const handleSubmit=(e)=>{

    e.preventDefault()  

    const reqBody ={ job_title: job_title, 
                     closing_date: closing_date, 
                     job_location: job_location,
                     job_description: job_description,
                     job_industry: job_industry,
                     job_type: job_type,
                     experience_level: experience_level,
                     job_location_type: job_location_type }
    
    
    fetch('/api/organization/job_advert',{
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then((response) => response.json())
      .then((data)=> console.log(data) )
      

  }
  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Post new job
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-xl font-semibold">
                    Create new job post
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}

                <div className="mt-5 md:mt-0 md:col-span-2">
              <form action="#" method="POST" onSubmit={handleSubmit}>
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                          Job Title
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="mt-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" 
                          onChange={e => {setJobTitle(e.target.value); }}
                        />
                      </div>
  
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                          Closing date
                        </label>
                        <input
                          type="date"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className="mt-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          onChange={e => setClosingDate(e.target.value)}
                        />
                      </div>
  
                      <div className="col-span-6">
                      <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                        Job Description
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="about"
                          name="about"
                          rows={3}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-2 block w-full sm:text-sm border border-gray-300 rounded-md"
                          placeholder="you@example.com"
                          defaultValue={''}
                          onChange={e => setJobDescription(e.target.value)}
                        />
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        Brief description for your profile. URLs are hyperlinked.
                      </p>
                    </div>
  
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                          Job type
                        </label>
                        <select
                          id="country"
                          name="country"
                          autoComplete="country-name"
                          className="mt-2 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          onChange={e => setJobType(e.target.value)}
                        >
                          <option>Full-time</option>
                          <option>Part-time</option>
                          <option>Contract-basis</option>
                        </select>
                      </div>


                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                          Job Location Type
                        </label>
                        <select
                          id="country"
                          name="country"
                          autoComplete="country-name"
                          className="mt-2 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          onChange={e => setJobLocation(e.target.value)}
                        >
                          <option>Remote</option>
                          <option>On-site</option>
                        </select>
                      </div>


          
  
                      <div className="col-span-6">
                        <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                          Job Location ( Company Location )
                        </label>
                        <input
                          type="text"
                          name="street-address"
                          id="street-address"
                          autoComplete="street-address"
                          className="mt-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          onChange={e => setJobLocType(e.target.value)}
                        />
                      </div>
  
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                          Experience level
                        </label>
                        <select
                          id="country"
                          name="country"
                          autoComplete="country-name"
                          className="mt-2 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          onChange={e => setExpLevel(e.target.value)}
                        >
                          <option>Senior Level</option>
                          <option>Mid Level</option>
                          <option>Entry Level</option>
                        </select>
                      </div>


                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
                          Industry
                        </label>
                        <input
                          type="text"
                          name="industry"
                          id="industry"
                          autoComplete="given-name"
                          className="mt-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          onChange={e => setJobIndustry(e.target.value)}
                        />
                      </div>

                      
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      type="button"
                      onClick={handleSubmit}
                      
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
               
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}





