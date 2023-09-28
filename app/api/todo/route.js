import { NextResponse } from "next/server"

export const POST=(req)=>{
    const title=new URL(req.url).searchParams.get("id")
    const a={name:"uzair",rollno:2,father:"aslam",data:title}
    console.log(a)
    return NextResponse.json(a)
}