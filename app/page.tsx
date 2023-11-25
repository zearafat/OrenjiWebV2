import CompHero from "@/app/components/compHero";
import CompHeroImages from "@/app/components/compHeroImages";
import CompClientsLogo from"@/app/components/compClientsLogo";
import CompFeatures from "@/app/components/compFeatures";
import CompHowDoesItWork from "@/app/components/compHowDoesItWork";

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
      </div>
  )
}