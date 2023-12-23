import {
  Dollar,
  House,
  House_1,
  House_2,
  Icon_1,
  Icon_2,
  Icon_3,
  Location,
  Property_1,
  Property_2,
  Property_3,
  Property_4,
  Property_5,
  Property_6,
} from "../assets";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
export const navItems = [
  {
    id: "",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "service",
    title: "Service",
  },
  {
    id: "new-property",
    title: "New Property",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const propertyInfo = [
  {
    imgUrl: Location,
    title: "Location",
    content: "Ahmedabad, India",
  },
  {
    imgUrl: Dollar,
    title: "Price",
    content: "$1000 - $10,000",
  },
  {
    imgUrl: House,
    title: "Type of Property",
    content: "Apartment",
  },
];

export const services = [
  {
    icon: Icon_1,
    title: "Search Apartment",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.",
  },
  {
    icon: Icon_2,
    title: "Select Apartment",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.",
  },
  {
    icon: Icon_3,
    title: "Confirm Apartment",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.",
  },
];

export const dreamHouse = [
  {
    imgUrl: House_1,
    price: 2000,
    area: "Apartment 2000 sqft",
    bedroom: 2,
    bathroom: 2,
    parking: 1,
    location: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
  },
  {
    imgUrl: House_2,
    price: 5000,
    area: "Apartment 3500 sqft",
    bedroom: 3,
    bathroom: 3,
    parking: 2,
    location: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
  },
];

export const properties = [
  {
    imgUrl: Property_1,
    price: 250000,
    title: "Luxury Apartment in California",
    bedroom: 2,
    bathroom: 2,
    parking: 1,
    location: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
  },
  {
    imgUrl: Property_2,
    price: 200000,
    title: "Luxury Apartment in California",
    bedroom: 2,
    bathroom: 3,
    parking: 1,
    location: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
  },
  {
    imgUrl: Property_3,
    price: 300000,
    title: "Luxury Apartment in California",
    bedroom: 3,
    bathroom: 3,
    parking: 1,
    location: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
  },
  {
    imgUrl: Property_4,
    price: 350000,
    title: "Luxury Apartment in California",
    bedroom: 3,
    bathroom: 3,
    parking: 2,
    location: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
  },
  {
    imgUrl: Property_5,
    price: 450000,
    title: "Luxury Apartment in California",
    bedroom: 4,
    bathroom: 3,
    parking: 2,
    location: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
  },
  {
    imgUrl: Property_6,
    price: 100000,
    title: "Luxury Apartment in California",
    bedroom: 2,
    bathroom: 2,
    parking: 1,
    location: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
  },
];

export const footerLinks = [
  {
    title: "Service",
    links: [
      {
        id: "payment-tax",
        title: "Payment & Tax",
      },
      {
        id: "features",
        title: "Features",
      },
      {
        id: "view-booking",
        title: "View Booking",
      },
      {
        id: "support",
        title: "Support",
      },
    ],
  },
  {
    title: "About",
    links: [
      {
        id: "about-us",
        title: "About Us",
      },
      {
        id: "news",
        title: "News",
      },
      {
        id: "pricing",
        title: "Pricing",
      },
      {
        id: "new-property",
        title: "New Property",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: FaInstagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: FaFacebookF,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: FaTwitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: FaLinkedinIn,
    link: "https://www.linkedin.com/",
  },
  {
    id: "social-media-5",
    icon: FaYoutube,
    link: "https://www.youtube.com/",
  },
];
