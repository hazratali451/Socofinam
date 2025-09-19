import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../global/Header'

export default function Home() {
  return (
    <div className='bg-fadedWhite min-h-screen'>
      <Header />
      <main className='sm:pt-[52px] pt-8 pb-[68px] px-4'>
        <section className='max-w-[1692px] mx-auto p-2 bg-white box-shadow rounded-[40px] pb-[140px] lg:block hidden'>
          <h1 className='text-2xl font-semibold mb-6'>All Pages</h1>
          <nav className="flex flex-col gap-3">
            <Link 
              to="/login" 
              className="capitalize text-blue-600 hover:text-blue-800 transition-colors"
            >
              Login
            </Link>
            <Link 
              to="/articles" 
              className="capitalize text-blue-600 hover:text-blue-800 transition-colors"
            >
              Article
            </Link>
            <Link 
              to="/create-article" 
              className="capitalize text-blue-600 hover:text-blue-800 transition-colors"
            >
              Create Article
            </Link>
            <Link 
              to="/users" 
              className="capitalize text-blue-600 hover:text-blue-800 transition-colors"
            >
              Users
            </Link>
            <Link 
              to="/add-user" 
              className="capitalize text-blue-600 hover:text-blue-800 transition-colors"
            >
              Add User
            </Link>
          </nav>
        </section>
      </main>
    </div>
  )
}
