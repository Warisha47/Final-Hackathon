
import TopHeader, { Header } from "../Components/TopHeader";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import { HeroLogo } from "../Components/Hero";
import FeaturedProducts, { Categories, SubCategory } from "../Components/FeaturedProducts";
import OurProducts from "../Components/OurProducts";
import Products from "../Components/OurProducts";

export default function Home() {
  return (
   <div>
    
  <Hero/>
   <HeroLogo/>
   <FeaturedProducts/>
   <Categories/>
   <SubCategory/>
  <OurProducts/>
   
   
   </div>
  );
}
