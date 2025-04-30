import '../global.css'
import LogoContainer from '../components/sections/logo-cont'
import Banner from '../components/sections/banner'
import {pages} from "../content/content"
import Footer from '../components/layout/footer'
import CopyRight from '../components/sections/copyright'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
    {/* Only show footer on lg screens and up */}
    <div className="hidden lg:block">
        <Footer />
      </div>
      <CopyRight 
        title={pages.copyright.copyR.title}
        text1={pages.copyright.copyR.text1}
      />
      {/* Hidden link to force __forms.html to be included in the build */}
      <link rel="prefetch" href="/forms-detect.html" as="document" />
  </>

  ) 
}