 
 import Link from 'next/link'
import { ModeToggle } from './Mode'
  
export default function Navbar() {
  
  return (
    <nav className="border-b dark:border-gray-600 border-gray-300">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/" className="text-lg font-bold">
          logo
 </Link>
        </div>
        <div className="hidden md:flex space-x-8">
        
        </div>
        <div className="flex items-center space-x-4">
          <ModeToggle />
         </div>
      </div>
    </nav>
  )
}