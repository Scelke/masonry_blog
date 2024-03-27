import { NextResponse } from "next/server";
import prisma from "@/prisma/db";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page"));
  const category = parseInt(searchParams.get("category"));
  const POST_PER_PAGE = 15;

  try {
    const posts = await prisma.post.findMany({
      take: POST_PER_PAGE,
      skip: POST_PER_PAGE * (page - 1),
      where: { ...(category && { catSlug: category }) },
      orderBy: {
        date: "desc",
      },
    });
    return new NextResponse(JSON.stringify(posts, { status: 200 }));
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }, { status: 500 })
    );
  }
};
