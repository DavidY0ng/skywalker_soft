import Home from "./sections/Home";
import WhatWeDo from "./sections/WhatWeDo";
import HowWeWork from "./sections/HowWeWork"
import WhyChooseUs from "./sections/WhyChooseUs";
import AboutUs from "./sections/AboutUs";
import Contact from "./sections/Contact";

export default function App() {
	return (
		<>
			<Home />
			<WhatWeDo />
			<HowWeWork />
			<WhyChooseUs />
			<AboutUs />
			<Contact />
			<section className=""></section>
		</>
	)
}