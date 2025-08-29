import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Trophy, Medal, Award, Star, ImageOff } from "lucide-react";

const recognitions = [
  {
    id: "best-project-college",
    title: "Best Project of the Year",
    organizer: "College of Computing & Informatics",
    place: 1,
    image: "", // add your picture path or URL here
  },
  {
    id: "best-project-dept",
    title: "Best Project of the Year",
    organizer: "Department of Software Engineering",
    place: 1,
    image: "", // add your picture path or URL here
  },
  {
    id: "best-startup-developer",
    title: "Best Startup Developer",
    organizer: "Central Ethiopia",
    place: 1,
    image: "", // add your picture path or URL here
  },
  {
    id: "hult-prize-wku",
    title: "Hult Prize",
    organizer: "Wolkite University",
    place: 2,
    image: "", // add your picture path or URL here
  },
];

function placeBadge(place) {
  if (place === 1) return { label: "1st Place", icon: Trophy };
  if (place === 2) return { label: "2nd Place", icon: Medal };
  if (place === 3) return { label: "3rd Place", icon: Award };
  return { label: `${place}th Place`, icon: Star };
}

const spring = { type: "spring", stiffness: 200, damping: 20, mass: 0.8 };

export default function Recognitions() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent((prev) => (prev + 1) % recognitions.length);
    };
    timeoutRef.current = setInterval(nextSlide, 3000); // change slide every 3s
    return () => clearInterval(timeoutRef.current);
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-10">
      <header className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
          My Recognitions & Awards
        </h1>
        <p className="text-sm text-muted-foreground/80">
          Award Highlights
        </p>
      </header>

      {/* Carousel */}
      <div className="relative w-full overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 shadow-md">
        <div className="flex w-full">
          {recognitions.map((item, index) => {
            const badge = placeBadge(item.place);
            const Icon = badge.icon;
            return (
              <motion.div
                key={item.id}
                className="group min-w-full h-64 md:h-80 lg:h-96 flex-shrink-0 relative overflow-hidden"
                animate={{ x: `-${current * 100}%` }}
                transition={{ ease: "easeInOut", duration: 0.8 }}
              >
                {item.image ? (
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-zinc-800">
                    <ImageOff className="h-10 w-10 text-gray-400" />
                  </div>
                )}

                {/* Always-visible rank badge */}
                <div className="absolute top-3 left-3 z-20">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/20 text-amber-900 dark:text-amber-200 border border-amber-400/30 px-3 py-1 text-xs font-medium backdrop-blur-sm">
                    <Icon className="h-4 w-4" /> {badge.label}
                  </span>
                </div>

                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4"
                >
                  <h3 className="text-lg md:text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-200 mt-1">
                    {item.organizer}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
