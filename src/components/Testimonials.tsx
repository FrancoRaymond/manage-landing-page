import { useState, useRef, useEffect } from "react"
import { testimonialData } from "../data/data.ts"

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0)
    const scrollRef = useRef<HTMLDivElement | null>(null)
  
    useEffect(() => {
      const container = scrollRef.current
      if (!container) return
  
      const handleScroll = () => {
        const scrollLeft = container.scrollLeft
        const containerWidth = container.offsetWidth
        const newIndex = Math.round(scrollLeft / containerWidth)
        setActiveIndex(newIndex)
      }
  
      container.addEventListener("scroll", handleScroll)
      return () => container.removeEventListener("scroll", handleScroll)
    }, [])

  return (
    <div className="flex flex-col gap-6 px-2.5 sm:px-5 md:px-10 lg:px-24 py-10">
      <h2 className="text-3xl font-bold text-blue-950 text-center md:text-left">What they’ve said</h2>

      <div
        ref={scrollRef}
        className="flex overflow-x-scroll scrollbar-hide gap-10 mt-5 py-10 snap-x snap-mandatory scroll-smooth"
      >
        {testimonialData.map(person => (
          <div
            key={person.id}
            className="bg-gray-100 w-80 flex-shrink-0 rounded-sm flex flex-col gap-4 pb-5 px-2.5 text-center snap-center"
          >
            <img
              src={person.image}
              alt={person.name}
              className="size-12 rounded-full -mt-6 mx-auto"
            />
            <h3 className="text-blue-950 font-semibold">{person.name}</h3>
            <p className="text-gray-400 text-sm">{person.comment}</p>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4 sm:hidden">
        {testimonialData.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === activeIndex ? "bg-[#f25f3a]" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
      <button className="text-sm mx-auto sm:mx-0 text-white rounded-3xl py-2 px-4 bg-[#f25f3a] w-fit">Get Started</button>
    </div>
  )
}

export default Testimonials

