import dbConnect from '@/lib/dbConnect';
import { revalidatePath } from 'next/cache';
import React from 'react';
export async function GET() {
  const data = await dbConnect("practice_data").find({}).toArray()
 
  return Response.json( data )
}
export async function POST(req) {
  const postedData = await req.json()
  const result = await dbConnect('practice_data').insertOne(postedData)
 revalidatePath('/products')
  return Response.json(result)
}
