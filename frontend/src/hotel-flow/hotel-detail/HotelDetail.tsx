import React from "react";
import {
	AiIcon,
	BarIcon,
	FitnessIcon,
	FlagIcon,
	HeartIcon,
	LeftArrowIcon,
	LocationIcon,
	PoolIcon,
	RestaurantIcon,
	RightArrowIcon,
	RoomIcon,
	ShareIcon,
	SpaIcon,
	TeaIcon,
	WifiIcon,
} from "../../Icons";
import HeroImage1 from "../../assets/hotel-listing/HeroImage1.webp";
import HeroImage2 from "../../assets/hotel-listing/HeroImage2.webp";
import HeroImage3 from "../../assets/hotel-listing/HeroImage3.webp";
import HeroImage4 from "../../assets/hotel-listing/HeroImage4.webp";
import HeroImage5 from "../../assets/hotel-listing/HeroImage5.webp";
import Map from "../../assets/hotel-listing/Map.png";
import ReviewImage1 from "../../assets/hotel-listing/OmarSiphron.png";
import ReviewImage2 from "../../assets/hotel-listing/CristoferEkstromBothman.png";
import ReviewImage3 from "../../assets/hotel-listing/KaiyaLubin.png";
import ReviewImage4 from "../../assets/hotel-listing/ErinSeptimus.png";
import ReviewImage5 from "../../assets/hotel-listing/TerryGeorge.png";
import { ReactNode, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { hotelListCardInfo } from "../hotel-lists/utils";
import { FavoriteButton } from "../hotel-lists/HotelLists";

export default function HotelDetail() {
	const { id } = useParams();
	const hotel = hotelListCardInfo.find((item) => item.id === id);
	if (!hotel) {
		return <p>No Hotel found</p>;
	}
	return (
		<div className="w-full mx-auto max-w-[77rem] mt-12 lg:px-4">
			<div className="w-full flex flex-col gap-8">
				<div className="flex items-center">
					<p className="text-slamon text-[14px] font-medium">Turkey</p> <RightArrowIcon />
					<p className="text-slamon text-[14px] font-medium">Istanbul</p> <RightArrowIcon />
					<p className="text-[14px] font-medium opacity-75">CVK Park Bosphorus Hotel Istanbul</p>
				</div>
				<div className="flex justify-between w-full items-end md:flex-col md:items-start md:gap-6">
					{/* Left */}
					<div>
						<h2 className="font-primary font-bold text-2xl mb-4">{hotel.name}</h2>
						<div>
							<div className="flex items-center mb-[8px]">
								<LocationIcon />{" "}
								<p className="font-medium text-[14px] opacity-75">{hotel.address}</p>
							</div>
							<div className="flex items-center gap-2">
								<span className="text-[12px] border-mintGreen border-[1px] leading-[15px] px-[12px] py-[8px] rounded-[4px] font-medium">
									{hotel.rating}
								</span>
								<p className="text-[12px] font-medium">
									<strong>{hotel.reviewSummary}</strong> {hotel.reviewCount} reviews
								</p>
							</div>
						</div>
					</div>
					{/* Right */}
					<div className="flex flex-col items-end gap-4 md:items-start md:w-full">
						<h2 className="text-[32px] flex items-end font-bold text-slamon leading-[29px]">
							{hotel.pricePerNight} <span className="text-[14px] leading-[19px]">/night</span>
						</h2>
						<div className="flex gap-4 md:w-full">
							<FavoriteButton hotel={hotel} />
							<button
								type="button"
								className="p-[14px] border-mintGreen border-[1px] rounded-[4px]"
							>
								<ShareIcon />
							</button>

							<Link
								to={`/hotellisting/bookingdetail/${hotel.id}`}
								className="flex bg-mintGreen justify-center items-center w-full font-semibold text-[14px] py-[16px] px-[40px] rounded-[4px]"
							>
								{" "}
								Book now
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="relative grid grid-cols-4 grid-rows-2 gap-[8px] rounded-[12px] overflow-hidden mt-10">
				<img src={HeroImage1} className="max-w-[612px] w-full row-span-2 col-span-2" />
				<img src={HeroImage2} className="max-w-[302px] w-full" />
				<img src={HeroImage3} className="max-w-[302px] w-full" />
				<img src={HeroImage4} className="max-w-[302px] w-full" />
				<img src={HeroImage5} className="max-w-[302px] w-full" />
				<button
					type="button"
					className="absolute bottom-4 md:bottom-2 right-4 md:right-2 bg-mintGreen font-semibold text-[14px] md:text-[12px] py-[16px] md:py-[8px] px-[16px] md:px-[8px] rounded-[4px] w-max"
				>
					View all photos
				</button>
			</div>
			<span className="block h-[0.5px] w-full bg-blackishGreen/25 my-16"></span>
			<div>
				<h3 className="font-bold text-[20px] font-primary mb-4">Overview</h3>
				<p>
					Located in Taksim Gmsuyu, the heart of Istanbul, the CVK Park Bosphorus Hotel Istanbul has
					risen from the ashes of the historic Park Hotel, which also served as Foreign Affairs
					Palace 120 years ago and is hosting its guests by assuming this hospitality mission. With
					its 452 luxurious rooms and suites, 8500 m2 SPA and fitness area, 18 meeting rooms
					including 4 dividable ones and 3 terraces with Bosphorus view, Istanbuls largest terrace
					with Bosphorus view (4500 m2) and latest technology infrastructure, CVK Park Bosphorus
					Hotel Istanbul is destined to be the popular attraction point of the city. Room and suite
					categories at various sizes with city and Bosphorus view, as well as 68 separate luxury
					suites, are offered to its special guests as a wide variety of selection.
				</p>
				<div className="hide-scollbar flex gap-4 mt-8 overflow-x-auto">
					<div className="bg-mintGreen rounded-[12px] min-w-[160px] pl-4 py-4 pr-16">
						<h2 className="font-bold font-primary text-[32px] mb-[28px] text-blackishGreen">4.2</h2>
						<p className="font-bold text-blackishGreen mb-[4px]">Very good</p>
						<p className="text-[14px] text-blackishGreen">371 reviews</p>
					</div>
					{["Near park", "Near nightlife", "Near theater", "Clean Hotel"].map((item, index) => (
						<Card key={index} item={item} />
					))}
				</div>
			</div>
			<span className="block h-[0.5px] w-full bg-blackishGreen/25 my-16"></span>
			<div>
				<h3 className="font-bold text-[20px] font-primary">Available Rooms</h3>
				<div className=" flex flex-col gap-4 mt-8">
					{availableRoomData.map(({ id, image, description, price }: RoomData) => (
						<>
							<AvailableRoom
								key={id}
								id={id}
								image={image}
								description={description}
								price={price}
							/>
							{id !== 4 && <span className="block h-[0.5px] w-full bg-blackishGreen/25 "></span>}
						</>
					))}
				</div>
				<span className="block h-[0.5px] w-full bg-blackishGreen/25 my-16"></span>
			</div>
			<div>
				<div className="flex justify-between items-center md:flex-col md:items-start md:gap-6">
					<h3 className="font-bold text-[20px] font-primary">Location/Map</h3>
					<button
						type="button"
						className="bottom-[16px] right-[16px] bg-mintGreen font-semibold text-[14px] py-[16px] px-[16px] rounded-[4px] w-max"
					>
						View on google maps
					</button>
				</div>
				<img src={Map} className="mt-8 rounded-[1rem]" />
				<div className="flex items-center mb-[8px]">
					<LocationIcon />{" "}
					<p className="font-medium text-[14px] opacity-75 mt-[8px]">
						Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
					</p>
				</div>
			</div>
			<span className="block h-[0.5px] w-full bg-blackishGreen/25 my-16"></span>
			<div>
				<h3 className="font-bold text-[20px] font-primary">Amenities</h3>
				<Amenities />
			</div>
			<span className="block h-[0.5px] w-full bg-blackishGreen/25 my-16"></span>
			<div className="flex justify-between items-center md:flex-col md:items-start md:gap-6">
				<h3 className="font-bold text-[20px] font-primary">Reviews</h3>
				<button
					type="button"
					className="bottom-[16px] right-[16px] bg-mintGreen font-semibold text-[14px] py-[16px] px-[16px] rounded-[4px] w-max"
				>
					Give your review
				</button>
			</div>
			<div className="flex items-center gap-6 md:mt-8">
				<h1 className="text-[50px] font-bold font-primary text-blackishGreen">4.2</h1>
				<p className="flex flex-col text-blackishGreen gap-[8px] ">
					<span className="font-semibold text-[20px]">Very good</span>
					<span className="text-[14px]">371 verified reviews</span>
				</p>
			</div>
			{reviews.map(({ id, rating, title, name, reviewText, image }: Review, index) => (
				<React.Fragment key={id}>
					<span className="block h-[0.5px] w-full bg-blackishGreen/25 my-8"></span>
					<ReviewList
						id={id}
						rating={rating}
						title={title}
						name={name}
						reviewText={reviewText}
						image={image}
					/>
					{index === reviews.length - 1 && (
						<span className="block h-[0.5px] w-full bg-blackishGreen/25 my-8"></span>
					)}
				</React.Fragment>
			))}

			<div className="justify-items-center w-full">
				<div className="flex gap-6">
					<button type="button">
						<LeftArrowIcon />
					</button>
					<p>1 of 40</p>
					<button type="button">
						<RightArrowIcon />
					</button>
				</div>
			</div>
		</div>
	);
}

const Card = ({ item }: { item: string }) => {
	return (
		<div className="bg-white border-[1px] border-mintGreen rounded-[12px] min-w-[160px] pl-4 py-4 pr-16">
			<AiIcon className="mb-[61px]" />
			<p className="font-medium">{item}</p>
		</div>
	);
};

type RoomData = {
	id: number;
	image: string;
	description: string;
	price: number;
};

const availableRoomData: RoomData[] = [
	{
		id: 1,
		image: HeroImage2,
		description: "Superior room - 1 double bed or 2 twin beds",
		price: 240,
	},
	{
		id: 2,
		image: HeroImage3,
		description: "Superior room - City view - 1 double bed or 2 twin beds",
		price: 280,
	},
	{
		id: 3,
		image: HeroImage4,
		description: "Superior room - City view - 1 double bed or 2 twin beds",
		price: 320,
	},
	{
		id: 4,
		image: HeroImage5,
		description: "Superior room - City view - 1 double bed or 2 twin beds",
		price: 350,
	},
];
const AvailableRoom = ({ image, description, price }: RoomData) => {
	return (
		<div className="flex justify-between md:flex-col gap-6">
			<div className="flex items-center gap-4">
				<img src={image} className="w-12 h-12 rounded-[4px]" />
				<h5>{description}</h5>
			</div>
			<div className="flex items-center gap-16 md:flex-col md:items-start md:w-full md:gap-8">
				<h2 className="font-semibold text-[24px]">
					${price}
					<span className="text-[14px]">/night</span>
				</h2>
				<button
					type="button"
					className="bottom-[16px] right-[16px] bg-mintGreen font-semibold text-[14px] py-[16px] px-[16px] rounded-[4px] md:w-full"
				>
					Book now
				</button>
			</div>
		</div>
	);
};

interface AmenityProps {
	id: number;
	title: string;
	icon: ReactNode;
}

const amenitiesData: AmenityProps[] = [
	{ id: 1, title: "Outdoor Pool", icon: <PoolIcon /> },
	{ id: 2, title: "Indoor Pool", icon: <PoolIcon /> },
	{ id: 3, title: "Fitness Center", icon: <FitnessIcon /> },
	{ id: 4, title: "Air-conditioned", icon: <PoolIcon /> },
	{ id: 5, title: "Restaurant", icon: <RestaurantIcon /> },
	{ id: 6, title: "Bar/Lounge", icon: <BarIcon /> },
	{ id: 7, title: "Spa and Wellness Center", icon: <SpaIcon /> },
	{ id: 8, title: "Business Center", icon: <SpaIcon /> },
	{ id: 9, title: "Free Wi-Fi", icon: <WifiIcon /> },
	{ id: 10, title: "Room Service", icon: <RoomIcon /> },
	{ id: 11, title: "Parking", icon: <RoomIcon /> },
	{ id: 12, title: "Conference Room", icon: <SpaIcon /> },
	{ id: 13, title: "Pet Friendly", icon: <RoomIcon /> },
	{ id: 14, title: "Laundry Service", icon: <RoomIcon /> },
	{ id: 15, title: "Concierge", icon: <BarIcon /> },
	{ id: 16, title: "Airport Shuttle", icon: <WifiIcon /> },
	{ id: 17, title: "Garden", icon: <PoolIcon /> },
	{ id: 18, title: "Tennis Court", icon: <PoolIcon /> },
	{ id: 19, title: "Kids Club", icon: <RestaurantIcon /> },
	{ id: 20, title: "Beach Access", icon: <SpaIcon /> },
	{ id: 21, title: "Golf Course", icon: <FitnessIcon /> },
	{ id: 22, title: "Mini Bar", icon: <TeaIcon /> },
	{ id: 23, title: "Sauna", icon: <FitnessIcon /> },
	{ id: 24, title: "Casino", icon: <TeaIcon /> },
];

const Amenity = ({ icon, title }: AmenityProps) => {
	return (
		<div className="flex gap-4">
			{icon}
			<p>{title}</p>
		</div>
	);
};

const Amenities = () => {
	const [showAllAmenities, setShowAllAmenities] = useState(false);
	const remaining = amenitiesData.length - 9;
	return (
		<div className="grid grid-cols-2 gap-6 mt-8">
			{(showAllAmenities ? amenitiesData : amenitiesData.slice(0, 9)).map(
				({ id, icon, title }, index) => (
					<React.Fragment key={id}>
						<Amenity id={id} icon={icon} title={title} />
						{(!showAllAmenities && index === 8) ||
						(showAllAmenities && index === amenitiesData.length - 1) ? (
							<button
								type="button"
								className="text-slamon font-bold text-[14px] flex"
								onClick={() => setShowAllAmenities(!showAllAmenities)}
							>
								{showAllAmenities ? "Show less" : `+${remaining} more`}
							</button>
						) : (
							""
						)}
					</React.Fragment>
				)
			)}
		</div>
	);
};

interface Review {
	id: number;
	rating: string;
	title: string;
	name: string;
	image: string;
	reviewText: string;
}

const reviews: Review[] = [
	{
		id: 1,
		rating: "5.0",
		title: "Amazing",
		name: "Omar Siphron",
		image: ReviewImage1,
		reviewText:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	},
	{
		id: 2,
		rating: "5.0",
		title: "Amazing",
		name: "Cristofer Ekstrom Bothman",
		image: ReviewImage2,
		reviewText:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	},
	{
		id: 3,
		rating: "5.0",
		title: "Amazing",
		name: "Kaiya Lubin",
		image: ReviewImage3,
		reviewText:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	},
	{
		id: 4,
		rating: "5.0",
		title: "Amazing",
		name: "Erin Septimus",
		image: ReviewImage4,
		reviewText:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	},
	{
		id: 5,
		rating: "5.0",
		title: "Amazing",
		name: "Terry George",
		image: ReviewImage5,
		reviewText:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	},
];

const ReviewList = ({ rating, title, name, reviewText, image }: Review) => {
	return (
		<div className="flex md:flex-col gap-6 items-start text-blackishGreen">
			<img src={image} className="w-full max-w-[45px]" />
			<div className="flex items-center gap-4 md:flex-col md:items-start">
				<div className="flex flex-col gap-[6px]">
					<div className="flex gap-4 text-[14px]">
						<p className="font-semibold">
							{rating} {title}
						</p>{" "}
						|<p>{name}</p>
					</div>
					<p className="text-[14px]">{reviewText}</p>
				</div>
				<FlagIcon className="flex-shrink-0" />
			</div>
		</div>
	);
};
