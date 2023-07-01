
import CompaniesLogo from '@/components/CompaniesLogo'
import MainContainer from '@/components/MainContainer'
import MobileNav from '@/components/MobileNav'
import NavLink from '@/components/NavLink'
import PlusMark from '@/components/PlusMark'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      {/* navlink which are below main nav */}
      <NavLink />

      {/* featured text */}

      <h2 className="hidden md:block text-[17px] font-bold uppercase text-red-500 ml-8 mt-2">Featured Companies</h2>

      {/* companies logo */}
      <CompaniesLogo />

      {/* Main Container  */}
      <MainContainer />

      {/* plus icon in the market section bottom */}
      <PlusMark />


      {/* mobile navigation icons as like android */}
      <MobileNav />
    </>

  )
}
