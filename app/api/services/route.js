import { NextResponse } from "next/server"
import page from '../../services/page'
export const GET=()=>{
    const a={name:"uzair",rollno:2,father:"aslam"}
    console.log(a)
    return NextResponse.json(a)
}
export const POST=async(req)=>{
    const body=await req.json()
    console.log(body)
    return NextResponse.json({message:"added successfully",data:body})
}
export const DELETE=()=>{
    return NextResponse.json({Message:"DELETED Successfuly"})
}
export const PUT=()=>{
    return NextResponse.json({Message:"PUT Successfuly"})
}