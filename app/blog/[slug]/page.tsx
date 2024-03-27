import React from "react";
import { parseISO, format } from "date-fns";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

const getData = async (slug: string) => {
  const res = await fetch(`${process.env.URL}/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

const blog = async (props: any) => {
  const slug = props.params.slug;
  const data = await getData(slug);

  if (!data.post) {
    return;
  }
  const post = data.post;
  const products = data.products;
  const date = parseISO(post.date);

  return (
    <div className="p-[4vw]">
      <a href="/" className="fixed top-[160px] max-w-xs text-2xl">
        <FaArrowLeft />
      </a>
      <div className="flex justify-center">
        <div className="w-5/6 text-center sm:w-3/5 lg:w-1/2">
          <div className="pb-4 font-heading text-5xl font-semibold leading-relaxed">
            {post.title}
          </div>
          <div className="pb-8 pt-4 font-normal">
            <time dateTime={post.date}>{format(date, "LLLL d, yyyy")}</time> |
            Written by {post.author}
          </div>
          <div className="text-left leading-loose">{post.description}</div>
          <div className="my-16 bg-slate-100 p-6 text-sm">
            This post contains affiliate links. If you purchase something using
            my links, I may earn a small commission at no cost to you.
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {products &&
              products.map((product: any) => (
                <Link
                  href={product.link}
                  key={product._id}
                  className="flex flex-col"
                  target="_blank"
                >
                  <div className="grow">
                    <img
                      src={product.src}
                      alt={product.description}
                      className="cover h-full"
                    />
                  </div>
                  <div className="pb-2 pt-1">{product.description}</div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default blog;
