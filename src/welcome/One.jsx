import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import enterIcon from '../ass/enter.png';
import investorIcon from '../ass/enter.png';
import studentIcon from '../ass/enter.png';

const skillsData = [
{
name: "Entrepreneur",
icon: (
<img src={enterIcon} alt="Enter Icon" className="w-12 h-12 text-primary group-hover:text-black duration-300" />
),
link: "#",
description: "Empowering entrepreneurs to connect with investors and bring ideas to life.",
aosDelay: "0",
},
{
name: "Investor",
icon: (
<img src={investorIcon} alt="Investor Icon" className="w-12 h-12 text-primary group-hover:text-black duration-300" />
),
link: "#",
description: "Connecting investors with innovative entrepreneurs to foster growth and success.",
aosDelay: "500",
},
{
name: "Students",
icon: (
<img src={studentIcon} alt="Student Icon" className="w-12 h-12 text-primary group-hover:text-black duration-300" />
),
link: "#",
description: "Helping students find financial support to achieve their educational dreams.",
aosDelay: "1000",
},
];

const One = () => {
useEffect(() => {
AOS.init({
duration: 1000, // Animation duration in milliseconds
once: true, // Only animate once on scroll
});
}, []);

return (
<>
<span id="about"></span>
<div className="dark:bg-black dark:text-white py-14 px-10 sm:min-h-[600px] sm:grid sm:place-items-center">
<div className="container">
<div className="pb-12">
<h1 data-aos="fade-up" className="text-3xl font-semibold text-center sm:text-4xl font-serif" >
Why Choose Us
</h1>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
{skillsData.map((skill) => (
<div key={skill.name} data-aos="fade-up" data-aos-delay={skill.aosDelay} className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-black text-white hover:bg-yellow-400 hover:text-black duration-300 rounded-lg" >
<div className="grid place-items-center">{skill.icon}</div>
<h1 className="text-2xl font-bold">{skill.name}</h1>
<p>{skill.description}</p>
<a href={skill.link} className="inline-block text-lg font-semibold py-3 text-white group-hover:text-black duration-300" >
Learn more
</a>
</div>
))}
</div>
</div>
</div>
</>
);
};

export default One;