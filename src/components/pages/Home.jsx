import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../global/Header'

export default function Home() {
  const links = [
    { to: '/login', title: 'Login', desc: 'Sign in to your account' },
    { to: '/articles', title: 'Article', desc: 'Read published posts' },
    { to: '/create-article', title: 'Create Article', desc: 'Write a new article' },
    { to: '/users', title: 'Users', desc: 'See all users' },
    { to: '/add-user', title: 'Add User', desc: 'Invite a new user' },
  ]

  return (
    <div className="bg-fadedWhite min-h-screen">
      <Header />

      <main className="sm:pt-[52px] pt-8 pb-[68px] px-4">
        <section className="max-w-[1692px] mx-auto p-6 md:p-10 bg-white box-shadow rounded-[40px] pb-[140px]">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">All Pages</h1>

          <nav className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                aria-label={l.title}
                className={`group block rounded-2xl p-6 md:p-8 shadow-sm bg-gradient-to-br from-white to-white
                  hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 ease-out
                  ring-1 ring-transparent focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-200`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="capitalize text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide leading-tight text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {l.title}
                    </h3>
                    <p className="mt-1 text-sm md:text-base text-gray-500">{l.desc}</p>
                  </div>

                  <div className="flex-shrink-0 ml-4 mt-2">
                    {/* Decorative pill with gradient that becomes visible on hover */}
                    <span className="inline-flex items-center justify-center px-3 py-2 rounded-full text-sm font-medium
                      bg-gradient-to-r from-indigo-500 via-pink-500 to-rose-400 text-white shadow-md
                      opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0.5 transition-all duration-200">
                      ➜
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </nav>

          {/* Small helper: responsive hint */}
          <p className="mt-8 text-sm text-gray-400">Tip: the cards scale up slightly on hover and use responsive, large typography for readability.</p>
        </section>
      </main>
    </div>
  )
}
