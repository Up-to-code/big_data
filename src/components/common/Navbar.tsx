"use client"
import Link from 'next/link'
import { ModeToggle } from './Mode'
import { Sheet, SheetContent, SheetHeader, SheetTitle , SheetTrigger } from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
export default function Navbar() {
  
  return (
    <nav className="border-b dark:border-gray-600 border-gray-300 bg-white dark:bg-gray-800 shadow-md">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/" className="text-lg font-bold text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-600 transition duration-300 ease-in-out">
          logo
 </Link>
        </div>
        <div className="hidden md:flex space-x-8">
        
        </div>
        <div className="flex items-center space-x-4">
          <ModeToggle />
          <Sheet>
             <SheetTrigger><Menu /></SheetTrigger>
             <SheetContent className='bg-zinc-100 dark:bg-gray-700'>
              <SheetHeader className=" dark:bg-gray-600">
                <SheetTitle className='text-2xl font-bold text-end mt-4'>قائمة المواقع</SheetTitle>
              </SheetHeader>
              <div className='flex flex-col items-end py-1 px-2 mt-2'>
                <Link href="/" className='border-b border-gray-300 w-full py-2 px-4 text-right text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-600 transition duration-300 ease-in-out'>الرائيسية</Link>
                <Link href="/my-properties" className='border-b border-gray-300 w-full py-2 px-4 text-right text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-600 transition duration-300 ease-in-out'>
               عقاراتي
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}