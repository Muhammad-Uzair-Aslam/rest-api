import { NextResponse } from "next/server"
export const GET=(req,route)=>{
    const a={name:"uzair",rollno:2,father:"aslam",data:route.params.userName}
    console.log("route", route.params)
    return NextResponse.json(a)
}
