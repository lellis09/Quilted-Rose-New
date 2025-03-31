import '../global.css'
import LogoContainer from '../components/sections/logo-cont'
import Banner from '../components/sections/banner'
import {pages} from "../content/content"


export default function MyApp({ Component, pageProps }) {
  return(
  <>
    <header className='w-full'>
      <Banner
          email={pages.banner.email.email} 
          phone={pages.banner.phone.phone}
      />
      <LogoContainer />
    </header>
    <main className='w-full'>
      <Component {...pageProps} />
    </main>
    
  </>

  ) 
}