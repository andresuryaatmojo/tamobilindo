import React from "react";
import HeroCarousel from "../components/common/HeroCarousel";
import PopularCategoriesSection from "../components/common/PopularCategoriesSection";
import BrowseByMake from "../components/common/BrowseByMake";
import CTACards from "../components/common/CTACards";
import FeaturedCarsSection from "../components/common/FeaturedCarsSection";
import CompareVehiclesSection from "../components/common/CompareVehiclesSection";
import SellCarSection from "../components/common/SellCarSection";
import FeaturesSection from "../components/common/FeaturesSection";
import TestimonialSection from "../components/common/TestimonialSection";
import TeamSection from "../components/common/TeamSection";
import BlogSection from "../components/common/BlogSection";

const Home: React.FC = () => (
  <>
    <div className="relative w-full flex justify-center items-center">
      <HeroCarousel />
    </div>
    <PopularCategoriesSection />
    <BrowseByMake />
    <CTACards />
    <FeaturedCarsSection />
    <CompareVehiclesSection />
    <SellCarSection />
    <FeaturesSection />
    <TestimonialSection />
    <TeamSection />
    <BlogSection />
  </>
);

export default Home;
