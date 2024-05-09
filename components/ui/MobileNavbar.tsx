'use client'
import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from '@/components/ui/sheet'
import Image from 'next/image'
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const MobileNavbar = ({ user }: MobileNavProps) => {
  const pathname = usePathname();

  return (
    <section className='w-full max-w-[264px]'>
        <Sheet>
        <SheetTrigger>
            <Image src='/icons/hamburger.svg' width={30} height={30} alt='Menu icon' className='cursor-pointer'/>
        </SheetTrigger>
        <SheetContent className='border-none shadow-lg bg-white rounded-t-lg' side={'bottom'}>
            <div className='mobilenav-sheet'>
                <SheetClose asChild>
                    <nav className='grid grid-cols-4 gap-2 text-white'>
                    {sidebarLinks.map((item) => {
                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                    return (
                    <SheetClose asChild key={item.route}>
                        <Link href={item.route} key={item.label} className={cn('mobilenav-sheet_close', {'bg-bank-gradient' : isActive})}>
                            <Image src={item.imgURL} alt={item.label} width={20} height={20}
                            className={cn({
                                'brightness-[3] invert-0': isActive
                            })}
                            />
                            <p className={cn('text-16 font-semibold text-black-2', {'text-white': isActive})}>{item.label}</p>
                        </Link>
                    </SheetClose>
                    )
                    })}
                    {/* User */}
                    </nav>
                </SheetClose>
                {/* Footer */}
            </div>

            
        </SheetContent>
        </Sheet>
    </section>
    )
}

export default MobileNavbar