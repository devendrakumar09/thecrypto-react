import React from 'react'
 import HeaderUi from '../components/header/HeaderUi'
import FeaturesUI from '../components/features/FeaturesUI'
import AlertUI from '../components/alert/AlertUI'


const IndexPage = () => {
  return (
    <div className="App">
      <HeaderUi />
      <FeaturesUI />
      <AlertUI />

      <div className="bg-white-100 py-20 px-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 xl-grid-cols-4 gap-y-10 gap-x-6 ">
          <div className="container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300">
            <div className="p-6 border rounded-md">
              <div className="pr-0 pb-0 pl-0 mr-0 mb-0 ml-0">
                <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                  <div className="flex items-center flex-1 min-w-0">
                    <img src="https://www.growthmarketingpro.com/wp-content/uploads/2019/10/basecamp-logo.png"
                      className="flex-shrink-0 object-cover rounded-full btn- w-10 h-10" alt="Welcome" />
                    <div className="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                      <p className="text-lg font-bold text-gray-800 truncate">Senior Software Engineer</p>
                      <p className="text-gray-600 text-md">Basecamp</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300">
            <div className="p-6 border rounded-md">
              <div className="pr-0 pb-0 pl-0 mr-0 mb-0 ml-0">
                <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                  <div className="flex items-center flex-1 min-w-0">

                    <img src="https://www.growthmarketingpro.com/wp-content/uploads/2019/10/basecamp-logo.png"
                      className="flex-shrink-0 object-cover rounded-full btn- w-10 h-10" alt="image 2" />
                    <div className="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                      <p className="text-lg font-bold text-gray-800 truncate">Senior Software Engineer</p>
                      <p className="text-gray-600 text-md">Basecamp</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300">
            <div className="p-6 border rounded-md">
              <div className="pr-0 pb-0 pl-0 mr-0 mb-0 ml-0">
                <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                  <div className="flex items-center flex-1 min-w-0">
                    <img src="https://www.growthmarketingpro.com/wp-content/uploads/2019/10/basecamp-logo.png"
                      className="flex-shrink-0 object-cover rounded-full btn- w-10 h-10" alt="image" />
                    <div className="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0" >
                      <p className="text-lg font-bold text-gray-800 truncate">Senior Software Engineer</p>
                      <p className="text-gray-600 text-md">Basecamp</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

     </div>
  )
}

export default IndexPage