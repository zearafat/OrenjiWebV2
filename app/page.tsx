import CompHero from '@/app/components/compHero';
import CompHeroImages from '@/app/components/compHeroImages';
import CompClientsLogo from '@/app/components/compClientsLogo';
import CompFeatures from '@/app/components/compFeatures';
import CompHowDoesItWork from '@/app/components/compHowDoesItWork';
import CompTestimonials from '@/app/components/compTestimonials';
import CompGLTFLoader from '@/app/components/compGLTFLoader';
import CompPricing from "@/app/components/compPricing";
import CompFAQ from '@/app/components/compFAQ';
import CompFooter from '@/app/components/compFooter';
import CompNavMenu from "@/app/components/compNavMenu";
import CompFloatingToaster from "@/app/components/compFloatingToaster";

export default function Home() {
  return(
      <section id={"Components"}>
          <div>
              {/*SECTION NAV MENU*/}
              <CompNavMenu/>
              {/*SECTION HERO HEADER*/}
              <CompHero/>
              {/*SECTION HERO IMAGES*/}
              <CompHeroImages/>
              {/*SECTION CLIENTS LOGO*/}
              <CompClientsLogo/>
              {/*SECTION FEATURES*/}
              <CompFeatures/>
              {/*SECTION HOW DOES IT WORK*/}
              <CompHowDoesItWork/>
              {/*SECTION TESTIMONIALS*/}
              <CompTestimonials/>
              {/*SECTION 3D GLTF*/}
              <CompGLTFLoader/>
              {/*SECTION PRICING*/}
              <section id={"Pricing"}>
                  <div className={"sm:-mt-64 sm:py-12 py-4"}>
                      <CompPricing/>
                  </div>
              </section>
              {/*SECTION FAQ*/}
              <CompFAQ/>
              {/*SECTION FOOTER*/}
              <CompFooter/>
              {/*SECTION FLOATING TOASTER*/}
              <CompFloatingToaster label={"🤖🦄 Building AI Product? We can help"} url={"/ai"} />
          </div>
      </section>
  )
}