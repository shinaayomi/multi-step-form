import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export default function AppNavBar() {
  const router = useRouter()

  const linksList = [
    {
      title: "YOUR INFO",
    },
    {
      title: "SELECT PLAN",
    },
    {
      title: "ADD-ONS",
    },
    {
      title: "SUMMARY",
    },
  ]

  return (
    // <Navbar position="static" className='flex-col bg-marine'>
    //   <NavbarBrand>
    //     {/* <AcmeLogo /> */}
    //     <p className="font-bold text-inherit text-marine-blue">ACME</p>
    //   </NavbarBrand>
    //   <NavbarContent className="hidden sm:flex gap-4" justify="center">
    //     <NavbarItem>
    //       <Link color="foreground" href="#">
    //         Features
    //       </Link>
    //     </NavbarItem>
    //     <NavbarItem isActive>
    //       <Link href="#" aria-current="page">
    //         Customers
    //       </Link>
    //     </NavbarItem>
    //     <NavbarItem>
    //       <Link color="foreground" href="#">
    //         Integrations
    //       </Link>
    //     </NavbarItem>
    //   </NavbarContent>
    //   <NavbarContent justify="end">
    //     <NavbarItem className="hidden lg:flex">
    //       <Link href="#">Login</Link>
    //     </NavbarItem>
    //     <NavbarItem>
    //       <Button as={Link} color="primary" href="#" variant="flat">
    //         Sign Up
    //       </Button>
    //     </NavbarItem>
    //   </NavbarContent>
    // </Navbar>

    <nav className='h-[175px] md:h-full bg-[url("/assets/images/bg-sidebar-mobile.svg")] md:bg-[url("/assets/images/bg-sidebar-desktop.svg")] bg-no-repeat bg-cover p-10 md:rounded-3xl'>
      <div className="flex justify-center md:flex-col gap-8">
        {linksList.map((links, index) => (
          <div className="flex items-center gap-3" key={index}>
            <div className='w-8 md:w-10 h-8 md:h-10 grid place-content-center border border-alabaster text-alabaster rounded-full'>
              {index + 1}
            </div>
            <div className='hidden md:block'>
              <p className='text-light-gray text-xs'>STEP {index + 1}</p>
              <p className='text-alabaster font-ubuntu-medium'>YOUR INFO</p>
            </div>
          </div>
        ))}
      </div>
    </nav>
  )
}
