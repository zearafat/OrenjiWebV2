import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

/**
 * Props interface for individual portfolio card
 * @property image - Project thumbnail/preview image
 * @property imageAlt - Accessibility description for the image
 * @property tags - Array of service tags (e.g., "3D Illustration", "Game UI")
 * @property title - Project name/title
 * @property className - Optional additional CSS classes for custom positioning
 */
interface IPropsPortfolioCard {
    image: StaticImageData | string;
    imageAlt: string;
    tags: string[];
    title: string;
    link: string;
    className?: string;
}

/**
 * CompPortfolioCard Component
 * Individual project card with image, tags, and title
 * Displays project preview with hover effects
 */
function CompPortfolioCard(props: IPropsPortfolioCard) {
    return (
        <div className={`group ${props.className || ''}`}>
            {/* Card Container with rounded corners and hover effect */}
            <div className={"bg-white rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"}>
                <Link href={props.link} target={"_blank"}>
                    {/* Project Image Container */}
                    <div className={"relative aspect-square overflow-hidden bg-slate-100"}>
                        <Image
                            src={props.image}
                            alt={props.imageAlt}
                            fill
                            className={"object-cover"}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>

                    {/* Project Info Section */}
                    <div className={"p-6"}>
                        {/* Service Tags */}
                        <div className={"flex flex-wrap gap-2 mb-3"}>
                            {props.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className={"text-xs text-slate-600 bg-slate-100 px-3 py-1 rounded-full"}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Project Title */}
                        <h3 className={"text-2xl font-bold tracking-tight"}>
                            {props.title}
                        </h3>
                    </div>
                </Link>
            </div>
        </div>
    );
}

/**
 * CompPortfolio Component
 * Main portfolio section displaying "Our creative outputs"
 * Uses a masonry-style grid layout for visual interest
 * Shows current workload with status indicator
 */
export default function CompPortfolio() {
    return (
        <section className={"py-16 sm:py-24"}>
            <div className={"container mx-auto px-4"}>

                {/* Section Header with Status Indicator */}
                <div className={"flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12 gap-4"}>
                    {/* Section Title */}
                    <h2 className={"text-3xl sm:text-4xl font-bold tracking-tight"}>
                        Our creative outputs
                    </h2>

                    {/* Status Badge - Currently Working On */}
                    <div className={"flex items-center gap-3 text-sm text-slate-600"}>
                        <span>Currently working on</span>
                        <div className={"flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full"}>
                            {/* Green status indicator dot */}
                            <span className={"w-2 h-2 bg-green-500 rounded-full animate-pulse"}></span>
                            <span className={"font-medium"}>3 projects</span>
                        </div>
                    </div>
                </div>

                {/* Portfolio Grid - Masonry Layout */}
                {/* Using CSS Grid with different row spans to create masonry effect */}
                <div className={"grid grid-cols-1 sm:grid-cols-2 gap-6"}>

                    {/* Project 1: RAWR Survival - Left column, regular size */}
                    <CompPortfolioCard
                        image="/assets/portfolio/rawr-survival.webp" // Replace with actual path
                        imageAlt="RAWR Survival game UI showing 3D dinosaur characters and mobile game screens"
                        tags={["3D Illustration", "Game UI", "Creative Direction"]}
                        title="RAWR Survival"
                        link="https://www.behance.net/gallery/183720137/Rawr-Survival-3D-Game-Mobile-Concept"
                    />

                    {/* Project 2: Shortbyts - Right column, regular size */}
                    <CompPortfolioCard
                        image="/assets/portfolio/shortbyts.webp" // Replace with actual path
                        imageAlt="Shortbyts AI Hiring dashboard with cute robot mascot"
                        tags={["3D Illustration", "Dashboard UI", "SaaS"]}
                        title="Shortbyts - AI Hiring"
                        link="https://www.behance.net/gallery/175759785/ShortByts-Brand-Design-Mobile-App-Website"
                    />

                    {/* Project 3: BardBarian - Left column, regular size */}
                    <CompPortfolioCard
                        image="/assets/portfolio/bardbarian.webp" // Replace with actual path
                        imageAlt="BardBarian game showing dark fantasy mobile game interface"
                        tags={["3D Illustration", "Game UI", "Creative Direction"]}
                        title="BardBarian"
                        link="https://www.behance.net/gallery/235395505/Bardbarian-Breath-of-the-Half-Orc-Game-Concept"
                    />

                    {/* Project 4: Tactical Tiles - Right column, regular size */}
                    <CompPortfolioCard
                        image="/assets/portfolio/tactical-tiles.webp" // Replace with actual path
                        imageAlt="Tactical Tiles game with colorful isometric game world"
                        tags={["3D Illustration", "Game UI", "Creative Direction"]}
                        title="Tactical Tiles"
                        link="https://www.behance.net/gallery/229745745/Tactical-Tiles-board-game-concept"
                    />

                    {/* Project 5: Campfire Chronicles - Left column, regular size */}
                    <CompPortfolioCard
                        image="/assets/portfolio/campfire-chronicles.webp" // Replace with actual path
                        imageAlt="Campfire Chronicles showing adventure game scene with characters"
                        tags={["3D Illustration", "Game UI", "Creative Direction"]}
                        title="Campfire Chronicles"
                        link="https://www.behance.net/gallery/226724371/Campfire-Chronicles-3D-Game-Concept"
                    />

                    {/* Project 6: 3D Arena - Right column, regular size */}
                    <CompPortfolioCard
                        image="/assets/portfolio/3d-arena.webp" // Replace with actual path
                        imageAlt="3D Arena mobile game interface with arena battle scene"
                        tags={["3D Illustration", "Game UI", "Creative Direction"]}
                        title="3D Arena"
                        link="https://www.behance.net/gallery/207083599/3D-Arena-Mobile-Game"
                    />
                </div>

                {/* Optional: View All Projects Link */}
                <div className={"text-center mt-12"}>
                    <Link href="https://www.behance.net/orenjistudio" className={"px-8 py-4 border-2 border-black rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-300"} target={"_blank"}>
                        View More
                    </Link>
                </div>
            </div>
        </section>
    );
}