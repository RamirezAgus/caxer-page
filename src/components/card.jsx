

export default function Card({ blog }) {
  return (
    <div className="h-full w-[250px] m-2 flex-shrink-0 cursor-pointer">
      <div className="rounded-2xl overflow-hidden mb-4 relative h-[200px]">
        <img src={`/src/assets/img/blogspot${blog.id}.webp`} alt={blog.title}/>
        <span className="absolute top-3 left-4 border border-blue-200 text-xs rounded-xl px-4 py-2 font-semibold capitalize bg-blue-200">
          {blog.category}
        </span>
      </div>
      <div className="px-4 flex gap-4">
        <div className="flex flex-col gap-2 w-full ">
          <h3 className="text-lg font-bold text-slate-700 leading-7 whitespace-normal">
            {blog.title}
          </h3>
          <div className="flex flex-row gap-2">
            <p className="text-sm text-slate-800 font-semibold">
              {blog.brand}
            </p>
            <p className="text-sm text-slate-800 font-semibold">
                {blog.date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
