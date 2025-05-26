import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req,{params}) {
//   const p = await params;
  const singleData = await dbConnect("practice_data").findOne({_id : new ObjectId(params.id)})
  console.log(p)
 
  return Response.json(singleData)
}
export async function DELETE(req,params) {
  const p = await params;
  console.log(p)
 
  return Response.json({ params : p })
}
export async function PATCH(req,{params}) {
  const updatedData =  await req.json();
  const updateDoc = {
    $set : {
        ...updatedData
    }
  }
  const filter = {
    _id : new ObjectId(params.id)
  }
  const result = await dbConnect("practice_data").updateOne(filter,updateDoc)

 
  return Response.json(result)
}