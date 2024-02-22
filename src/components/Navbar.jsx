import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className="flex items-center justify-between flex-wrap space-x-5 p-2">
        <div className="flex items-center flex-shrink-0 text-black mr-6">
          <span className="font-semibold ml-12  text-xl tracking-tight">
            <Link href="/">
            <img src="https://geniusdigest.com/wp-content/uploads/2023/07/GENIUS-DIGEST.svg" alt="Home" />
            </Link>
          </span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-black border-teal-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm ml-24 lg:flex-grow">
            <Link href="/technology" className="block ml-6 mt-4 lg:inline-block lg:mt-0 text-black transform hover:text-purple-500 hover:scale-110 transition-transform duration-300 ease-in-out mr-4">
              TECHNOLOGY
            </Link>
            <Link href="/social-media" className="block ml-6 mt-4 lg:inline-block lg:mt-0 text-black transform hover:text-purple-500 hover:scale-110 transition-transform duration-300 ease-in-out mr-4">
              SOCIAL MEDIA 
            </Link>
            <Link href="/news" className="block ml-6 mt-4 lg:inline-block lg:mt-0 text-black transform hover:text-purple-500 hover:scale-110 transition-transform duration-300 ease-in-out mr-4">
              NEWS
            </Link>
            <Link href="/General" className="block ml-6 mt-4 lg:inline-block lg:mt-0 text-black transform hover:text-purple-500 hover:scale-110 transition-transform duration-300 ease-in-out mr-4">
              GENERAL
            </Link>
            <Link href="/blog" className="block ml-6 mt-4 lg:inline-block lg:mt-0 text-black transform hover:text-purple-500 hover:scale-110 transition-transform duration-300 ease-in-out mr-4">
              BLOG
            </Link>
          </div>
          <div className="text-sm lg:flex-grow">
            <Link href="/login">
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mr-4">
              Login
            </button>
            </Link>
            <Link href="/register">
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
              Register
            </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar