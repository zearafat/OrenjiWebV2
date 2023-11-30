import CompHero from "@/app/components/compHero";
import CompHeroImages from "@/app/components/compHeroImages";
import CompClientsLogo from"@/app/components/compClientsLogo";
import CompFeatures from "@/app/components/compFeatures";
import CompHowDoesItWork from "@/app/components/compHowDoesItWork";
import CompGLTFLoader from "@/app/components/compGLTFLoader";
import CompPricing from "@/app/components/compPricing";

export default function Home() {
  return(
      <div>
          {/*SECTION HERO TEXT*/}
          <CompHero />
          {/*SECTION HERO IMAGES*/}
          <CompHeroImages />
          {/*SECTION CLIENTS LOGO*/}
          <CompClientsLogo />
          {/*SECTION FEATURES*/}
          <CompFeatures />
          {/*SECTION HOW DOES IT WORK*/}
          <CompHowDoesItWork />
          {/*SECTION 3D GLTF*/}
          <CompGLTFLoader />
          {/*SECTION PRICING*/}
          <CompPricing />
      </div>
  )
}