import CompHero from "@/app/components/compHero";
import CompHeroImages from "@/app/components/compHeroImages";
import CompClientsLogo from"@/app/components/compClientsLogo";

export default function Home() {
  return(
      <div>
          {/*HERO TEXT*/}
          <CompHero />
          {/*HERO IMAGES*/}
          <CompHeroImages />
          <CompClientsLogo />
      </div>
  )
}