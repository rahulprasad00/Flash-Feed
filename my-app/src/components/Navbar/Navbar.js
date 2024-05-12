import React from 'react'
import flash from '../../assets/flash.png'
import { Link } from 'react-router-dom'



const Navbar=(props)=>{

  
  const handleChange = (e) => {
    var lowercase= e.target.value;
    props.settingState(lowercase);
  }
  

    
    return (
      <header className="text-gray-600 body-font bg-blue-300">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src={flash} alt='logo' className='h-10'></img>
            <span className="ml-3 text-xl">Flash Feed</span>
          </Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link className="mr-5 hover:text-gray-900" to="/general">General</Link>
            <Link className="mr-5 hover:text-gray-900" to="/business">Business</Link>
            <Link className="mr-5 hover:text-gray-900" to="/science">Science</Link>
            <Link className="mr-5 hover:text-gray-900" to="/sports">Sports</Link>
            <Link className="mr-5 hover:text-gray-900" to="/health">Health</Link>
            <Link className="mr-5 hover:text-gray-900" to="/entertainment">Entertainment</Link>
            <Link className="mr-5 hover:text-gray-900" to="/technology">Technology</Link>
          </nav>

          <form  className="max-w-md mx-auto">
            <label htmlFor="default-search"  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div  className="relative">
              <div  className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg  className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none" placeholder="Search Latest News" onChange={handleChange} required />
              
            </div>
          </form>

        </div>
      </header>
    )
  
}

export default Navbar
