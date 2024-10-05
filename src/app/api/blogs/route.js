

import connectMongoDB from "@/libs/mongodb";
import Blog from "@/models/blog";

import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, blogger, date, category, shortDescription, content } = await request.json();
  await connectMongoDB();
  await Blog.create({ title, blogger, date, category, shortDescription, content });
  return NextResponse.json({ message: "Blogs Created" }, { status: 201 });
}

export async function GET() {
  try {
      await connectMongoDB();
      const blogs = await Blog.find();
      return NextResponse.json({ blogs });
  } catch (error) {
      return NextResponse.json({ message: 'Error fetching blogs', error }, { status: 500 });
  }
  
}













