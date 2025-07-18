import Flights from "./flights/Flights";
import HeroSection from "./hero-section/HeroSection";
import Reviews from "./reviews/Reviews";
import Navbar from "./navbar/Navbar";
import styles from "./hero-section/HeroSection.module.css";
import FooterSection from "../footer/Footer";

export default function LandingPage() {
	return (
		<>
			<div className={styles.herosection} />
			<Navbar />
			<HeroSection />
			<Flights />
			<Reviews />
			<FooterSection />
		</>
	);
}
