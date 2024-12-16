

import Hero from "../components/Hero";
import { HeroLogo } from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import TopCategories from "../components/TopCategories";
import {SubCategory} from "../components/SubCategories";
import OurProducts from "../components/OurProducts";


export default function Home() {
  return (
   <div>
    
  <Hero/>
   <HeroLogo/>
   <FeaturedProducts/>
   <TopCategories/>
   <SubCategory/>
  <OurProducts/>
   

   </div>
  );
}
