import dbConnect from '@/lib/dbConnect';
import React from 'react';
export async function GET() {
  const data = await dbConnect("practice_data").find({}).toArray()
 
  return Response.json( data )
}
export async function POST(req) {
  const postedData = await req.json()
 
  return Response.json({ postedData})
}
