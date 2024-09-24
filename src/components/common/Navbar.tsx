"use client"

import { useState } from 'react'
import Link from 'next/link'
import { ModeToggle } from './Mode'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
 
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link href={href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
      {children}
    </Link>
  )

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
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 mt-4">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/services">Services</NavLink>
                <NavLink href="/contact">Contact</NavLink>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}