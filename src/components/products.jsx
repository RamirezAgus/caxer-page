import Card from "./card";
import { blogs } from "../data/data";

export default function Products() {
  const carouselBlogs = [...blogs, ...blogs];

  return (
    <div className="mt-5 pt-20 bg-white">
      <div className="overflow-hidden w-full">
        <div className="flex whitespace-nowrap animate-scroll">
          {carouselBlogs.map((blog, index) => (
            <Card blog={blog} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

{
  /*
<section className="container my-5">
        <div className="overflow-hidden w-full">
          <div className="flex whitespace-nowrap animate-scroll">
            {carouselBlogs.map((blog, index) => {
              <Card blog={blog} key={index} />
            })}
          </div>
        </div>
      </section> */
}
