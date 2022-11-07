import React from "react";
import { blog } from "../Data/Data";

const Blog = () => {
  return (
    <div className="px-4 py-5  mx-auto sm:max-w-xl md:max-w-full ">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-fuchsia-600 capitalize lg:text-4xl  ">
          from the blog
          <div mt-1>
            <span className="inline-block w-40 h-1 rounded-full bg-fuchsia-800"></span>
            <span className="inline-block w-3 h-1 ml-1 rounded-full bg-fuchsia-800"></span>
            <span className="inline-block w-1 h-1 ml-1 rounded-full bg-fuchsia-800"></span>
          </div>
        </h2>

        <p className="max-w-lg mx-auto mt-4 text-gray-500">
          Salami mustard spice tea fridge authentic Chinese food dish salt tasty
          liquor. Sweet savory foodtruck pie.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 mt-5 mx-4 md:mt-16 md:grid-cols-2 xl:grid-cols-4">
        {blog.map((blogpost, index) => (
          <div key={index} className="bg-white border shadow-lg ">
            <div className="relative">
              <img
                src={blogpost.blogImage}
                className="object-cover object-center w-full h-42 rounded-lg lg:h-52"
                alt="imageforblog"
              />
              {blogpost.author.map((authordetail, id) => (
                <div
                  className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900"
                  key={id}
                >
                  <img
                    src={authordetail.autorImage}
                    className="bject-cover object-center w-10 h-10 rounded-full"
                    alt="imageforblog"
                  />
                  <div className="max-4">
                    <h4 className="text-sm text-slate-700">
                      {authordetail.autorName}
                    </h4>
                    <p className="text-sm text-slate-600">
                      {authordetail.autorPost}
                    </p>
                  </div>{" "}
                </div>
              ))}
            </div>
            <div className="mx-2">
              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                {blogpost.blogTitle}
              </h3>
              <hr className="w-32 my-3 text-fuchsia-600 text-opacity-25" />
              <p className="text-sm text-gray-500">{blogpost.blogText}</p>
              <div className="flex justify-between items-center   ">
                <a
                  href="/blog"
                  class=" mt-2 text-fuchsia-500 underline hover:text-fuchsia-400"
                >
                  Read more
                </a>
                <div>
                  <p className=" text-slate-500 text-sm italic ">
                    {blogpost.datePosted}
                  </p>
                  <p className=" text-slate-500 text-sm italic">
                    {blogpost.readBolgtime}
                  </p>
                </div>
              </div>
            </div>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Blog;
