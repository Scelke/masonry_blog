"use client";
import React, { useState, useEffect } from "react";
import { chunk } from "../_utils";
import Link from "next/link";
import { format, parseISO } from "date-fns";

interface MasonryType {
  data: {
    src: string;
    author: string;
    date: string;
    title: string;
    description: string;
  }[];
}

const Masonry: React.FunctionComponent<MasonryType> = ({ data }) => {
  const [currentColumns, setCurrentColumns] = useState<number>(3);

  const handleColumns = () => {
    const windowWidth = window.innerWidth;
    let amountOfColumns: number;

    if (windowWidth >= 768) amountOfColumns = 3;
    else if (windowWidth < 640) amountOfColumns = 1;
    else amountOfColumns = 2;

    setCurrentColumns(amountOfColumns);
  };

  useEffect(() => {
    handleColumns();
    window.addEventListener("resize", handleColumns);

    return () => window.removeEventListener("resize", handleColumns);
  }, []);

  //  chunk takes the original array and the amount of columns
  //  to equally distribute the items inside.
  //  the chunk converts the original array into 2D array
  const distributedData = chunk(data, currentColumns);

  return (
    <div className="m-0 flex w-full justify-center gap-14 overflow-hidden">
      {distributedData?.map(
        (innerArray: any[], rowIndex: React.Key | null | undefined) => (
          <div key={rowIndex}>
            {innerArray?.map((blogObj, columnIndex) => (
              <Link
                href={`/blog/${blogObj.slug}`}
                key={columnIndex}
                className="p-2"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full rounded-2xl"
                  src={blogObj?.src}
                  alt={`Image ${rowIndex}-${columnIndex}`}
                />
                <div className="px-5 text-center">
                  <div className="pt-2">
                    {blogObj.author} -{" "}
                    {format(parseISO(blogObj.date), "LLLL d, yyyy")}
                  </div>
                  <div className="py-4 font-heading text-3xl font-semibold leading-10">
                    {blogObj.title}
                  </div>
                  <p className="px-2 pb-5 text-sm leading-7">
                    {blogObj.description.substring(0, 150)}...
                  </p>
                  <div className="pb-7 text-sm underline underline-offset-4">
                    Read more
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default Masonry;
