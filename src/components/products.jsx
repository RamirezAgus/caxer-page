import Card from "./card";
import { blogs } from "../data/data";
import { useEffect, useRef, useState } from "react";
import Modal from "./modal";

export default function Products() {
  const carouselBlogs = [...blogs, ...blogs];
  const [isPaused, setIsPaused] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const sliderRef = useRef(null);

  const handleMouseEnter = () => {
    setIsPaused(true)
  };

  const handleMouseLeave = () => {
    setIsPaused(false)
  };

  useEffect(() => {
    if(isPaused) {
      sliderRef.current.style.animationPlayState = "paused";
    } else {
      sliderRef.current.style.animationPlayState = "running";
    }
  })

  return (
    <div className="pt-10 bg-white">
      <div className="overflow-hidden w-full">
        <div 
          ref={sliderRef}
          className="flex whitespace-nowrap animate-scroll"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {carouselBlogs.map((blog, index) => (
            <Card blog={blog}
                  key={index}
                  onClick = {() => setSelectedBlog(blog)}/>
          ))}
        </div>
      </div>
      {selectedBlog && (
        <Modal blog= {selectedBlog} onClose={() => setSelectedBlog(null)}/> 
      )}
    </div>
  );
}
