import { NextResponse } from "next/server";
var posts=[{
    id:1,
    Name:"Muhammad Uzair Aslam",
    FatherName:"Muhammad Aslam",
    ag_no:"2021-ag-8083",
    class:"BSSE",
    semester:"5th"
},{
    id:2,
    Name:"Muhammad Sohail",
    FatherName:"Muhammad Uzair",
    ag_no:"2021-ag-8056",
    class:"BSCS",
    semester:"3th"
}]

export const GET=()=>{
    return NextResponse.json(posts)
}
export const POST=()=>{
    const add={id:3,
    Name:"Muhammad Usman",
    FatherName:"Mehmood ul hassan",
    ag_no:"2021-ag-8030",
    class:"BSIT",
    semester:"7th"}
    posts.push(add)
    return NextResponse.json(posts)
}
export const DELETE=(req)=>{
     const id=new URL(req.url).searchParams.get("id");
     console.log(id)
     posts=posts.filter((post)=>post.id!=id)
     return NextResponse.json({message:"Post successfully deleted"})
}
export const PUT=async(req)=>{
     const body=await req.json()
     posts=posts.map((post)=>{
        if (post.id==body.id)
        {
            return body
        }
        else
        {
            return posts
        }
    })
    return NextResponse.json({message:"Post successfully updated"})
}