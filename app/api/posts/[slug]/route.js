import { NextResponse } from "next/server";
import prisma from "@/prisma/db";

export const GET = async (req, { params }) => {
  const { slug } = params;
  try {
    const [post, products] = await prisma.$transaction([
      prisma.post.findUnique({ where: { slug } }),
      prisma.product.findMany({ where: { postSlug: slug } }),
    ]);
    //  const post = await prisma.post.findUnique({ where: { slug } });
    return new NextResponse(
      JSON.stringify({ post, products }, { status: 200 })
    );
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }, { status: 500 })
    );
  }
};
