import CompHero from "@/app/components/compHero";
import CompHeroImages from "@/app/components/compHeroImages";
import CompClientsLogo from"@/app/components/compClientsLogo";
import CompFeatures from "@/app/components/compFeatures";
import CompHowDoesItWork from "@/app/components/compHowDoesItWork";
import CompTestimonials from "@/app/components/compTestimonials";
import CompGLTFLoader from "@/app/components/compGLTFLoader";
import CompPricing from "@/app/components/compPricing";
import CompFAQ from "@/app/components/compFAQ";
import CompFooter from "@/app/components/compFooter";
import CompNavMenu from "@/app/components/compNavMenu";

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
              <CompPricing/>
              {/*SECTION FAQ*/}
              <CompFAQ/>
              {/*SECTION FOOTER*/}
              <CompFooter/>
          </div>
      </section>
  )
}