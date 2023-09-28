import { NextResponse } from "next/server"

export const GET=()=>{
    const a={name:"followers",rollno:2,father:"aslam"}
    console.log(a)
    return NextResponse.json(a)
}