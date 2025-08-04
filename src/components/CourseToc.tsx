'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function CourseToc() {
  const pathname = usePathname()
  
  const chapters = [
    { title: "Introducción", path: "/domotica", icon: "🏠" },
    { title: "Conceptos Básicos", path: "/domotica/chapter1", icon: "📚" },
    { title: "Raspberry Pi Central", path: "/domotica/chapter2", icon: "🖥️" },
    { title: "Sensores y Actuadores", path: "/domotica/chapter3", icon: "📡" },
    { title: "Sistemas de Seguridad", path: "/domotica/chapter4", icon: "🔒" },
    { title: "Domótica e IA", path: "/domotica/chapter5", icon: "🤖" },
    { title: "Hardware y Compras", path: "/domotica/chapter6", icon: "🛒" },
    { title: "Proyecto Integrador", path: "/domotica/chapter7", icon: "🔧" },
  ]

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
            Curso Domótica
          </Link>
          <div className="hidden md:flex space-x-1">
            {chapters.map((chapter, index) => (
              <Link
                key={index}
                href={chapter.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  pathname === chapter.path
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700'
                }`}
              >
                <span className="mr-1">{chapter.icon}</span>
                {chapter.title}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <select 
              className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 text-sm"
              value={pathname}
              onChange={(e) => window.location.href = e.target.value}
            >
              {chapters.map((chapter, index) => (
                <option key={index} value={chapter.path}>
                  {chapter.icon} {chapter.title}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  )
}
