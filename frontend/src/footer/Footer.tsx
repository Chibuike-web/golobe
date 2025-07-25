import CTAImage from "../assets/landing-page/emojione-v1_open-mailbox-with-lowered-flag.svg";
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from "../Icons";
import FooterLogo from "../assets/landing-page/Logo.svg";
import { motion } from "motion/react";
import { FooterColumnProps } from "../landing-page/types";

export default function FooterSection() {
	return (
		<section className="pb-[4rem] flex flex-col bg-mintGreen mt-[15.0625rem] px-4">
			<CTA />
			<Footer />
		</section>
	);
}

const fadeIn = {
	initial: { opacity: 0, x: 100 },
	animate: (i: number) => ({
		opacity: 1,
		x: 0,
		transition: {
			delay: i * 0.2,
			duration: 0.8,
			ease: "easeOut",
		},
	}),
};

const CTA = () => {
	return (
		<section
			aria-labelledby="cta-heading"
			className="w-full mt-[-9.4375rem] max-w-[77rem] mx-auto flex items-end justify-between bg-[#CDEAE1] px-6 rounded-[1.25rem] lg:flex-col lg:items-center overflow-hidden"
		>
			<div className="py-6 w-full max-w-[37.5rem]">
				<header>
					<motion.h2
						id="cta-heading"
						className="font-primary text-blackishGreen font-bold text-[2.75rem] md:text-[2rem] md:leading-[2.5rem] w-full max-w-[22.75rem] leading-[3.375rem] mb-[1.5rem]"
						variants={fadeIn}
						initial="initial"
						whileInView="animate"
						viewport={{ once: true, amount: 0.3 }}
						custom={0}
					>
						Subscribe Newsletter
					</motion.h2>
					<motion.p
						className="font-primary text-xl font-bold mb-[0.5rem] text-[rgba(17,34,17,0.8)]"
						variants={fadeIn}
						initial="initial"
						whileInView="animate"
						viewport={{ once: true, amount: 0.3 }}
						custom={1}
					>
						The Travel
					</motion.p>
				</header>
				<motion.p
					className=" font-medium mb-4 w-full text-[rgba(17,34,17,0.7)]"
					variants={fadeIn}
					initial="initial"
					whileInView="animate"
					viewport={{ once: true, amount: 0.3 }}
					custom={2}
				>
					Get inspired! Receive travel discounts, tips, and behind-the-scenes stories.
				</motion.p>
				<form
					action="/submit-email"
					method="post"
					aria-label="Subscribe to newsletter"
					className="w-full flex gap-4 md:flex-col"
				>
					<motion.input
						variants={fadeIn}
						initial="initial"
						whileInView="animate"
						viewport={{ once: true, amount: 0.3 }}
						custom={2}
						type="email"
						name="email"
						id="email-address"
						placeholder="Your email address"
						required
						className="px-4 py-[1.125rem] w-full rounded-[0.25rem]"
					/>
					<motion.input
						variants={fadeIn}
						initial="initial"
						whileInView="animate"
						viewport={{ once: true, amount: 0.3 }}
						custom={3}
						type="submit"
						value="Subscribe"
						className="px-4 h-[3.5rem] rounded-[0.25rem] bg-blackishGreen text-white"
					/>
				</form>
			</div>

			<motion.img
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.6 }}
				viewport={{ once: true, amount: 0.3 }}
				src={CTAImage}
				alt="Travel inspiration"
			/>
		</section>
	);
};

const FooterSectionColumn = ({ title, items }: FooterColumnProps) => (
	<section className="flex flex-col gap-4">
		<h2 className="text-blackishGreen font-bold font-primary">{title}</h2>
		<ul
			className="flex flex-col gap-3 text-[0.875rem] font-medium"
			style={{ color: "rgb(17, 34, 17, 0.7)" }}
		>
			{items.map(({ id, label }) => (
				<li key={id}>{label}</li>
			))}
		</ul>
	</section>
);

const Footer = () => {
	return (
		<footer className="max-w-[77rem] w-full mt-[4rem] mx-auto flex gap-[8.75rem] md:gap-[4.375rem] md:flex-col">
			<div className="w-max">
				<img src={FooterLogo} alt="Footer logo" />
				<div className="flex justify-between mt-6" aria-label="Social media links">
					<a href="#" aria-label="Facebook">
						<FacebookIcon />
					</a>
					<a href="#" aria-label="Twitter">
						<TwitterIcon />
					</a>
					<a href="#" aria-label="YouTube">
						<YoutubeIcon />
					</a>
					<a href="#" aria-label="Instagram">
						<InstagramIcon />
					</a>
				</div>
			</div>
			<div className="grid gap-6 w-full grid-cols-[repeat(auto-fit,_minmax(11rem,1fr))]">
				<FooterSectionColumn
					title="Our Destinations"
					items={[
						{ id: "canada", label: "Canada" },
						{ id: "alaska", label: "Alaska" },
						{ id: "france", label: "France" },
						{ id: "iceland", label: "Iceland" },
					]}
				/>
				<FooterSectionColumn
					title="Our Activities"
					items={[
						{ id: "northern-lights", label: "Northern Lights" },
						{ id: "cruising", label: "Cruising & Sailing" },
						{ id: "multi-activities", label: "Multi-activities" },
						{ id: "kayaking", label: "Kayaking" },
					]}
				/>
				<FooterSectionColumn
					title="Travel Blogs"
					items={[
						{ id: "bali-guide-1", label: "Bali Travel Guide" },
						{ id: "sri-lanka-guide", label: "Sri Lanka Travel Guide" },
						{ id: "peru-guide", label: "Peru Travel Guide" },
						{ id: "bali-guide-2", label: "Bali Travel Guide" }, // duplicated label, but safe
					]}
				/>
				<FooterSectionColumn
					title="About Us"
					items={[
						{ id: "our-story", label: "Our Story" },
						{ id: "work-with-us", label: "Work with Us" },
					]}
				/>
				<FooterSectionColumn
					title="Contact Us"
					items={[
						{ id: "contact-our-story", label: "Our Story" },
						{ id: "contact-work", label: "Work with Us" },
					]}
				/>
			</div>
		</footer>
	);
};
