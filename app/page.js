

export default function Home() {
  return(<div>
    <h1 className="text-3xl font-semibold">First Pakistan Batsman</h1>
    </div>
  )
//   const start={
//     userName:"",
//     email:"",
//     phone:0,
//     country:"pakistan",
//     program:"Computer Science"

//   }
//   const [state,setState]=useState(start)
//   const [data,setData]=useState([]);
//   const changeHandler=(e)=>{
//     setState((a) => ({ ...a, [e.target.name]: e.target.value }));
//   }
//   const submit=(e)=>{
    
//     setData((a) => ([...a, state]));
//     setState(initialState); // 
// }
//   return(
//     <div>
//       <div>
//         <label htmlFor="name">Enter Name</label>
//         <input type="text" name="userName" onChange={changeHandler} id="name" className="border px-5 mx-5" placeholder="Please Enter Your Name" /><br/>
//         <label htmlFor="email">Enter Email</label>
//         <input type="email" name="email" id="email" onChange={changeHandler} className="border px-5 mx-5" placeholder="Please Enter Your Email" /><br/>
//         <label htmlFor="number">Enter Phone</label>
//         <input type="number" name="phone" id="number" onChange={changeHandler} className="border px-5 mx-5" placeholder="Please Enter Your Number" /><br/>
//         <label htmlFor="country">Select Country</label>
//         <select id="country" name="country" onChange={changeHandler} className="border px-5 mx-5 w-96" >
          
//           <option value={'pakistan'}>Pakistan</option>
//           <option value={'india'}>india</option>
//           <option value={'bangladesh'}>bangladesh</option>
//           <option value={'afghanistan'}>afghanistan</option>
//           <option value={'srilanka'}>srilanka</option>
//         </select><br/>
//         <label htmlFor="program">Select BS program</label>
//         <select className="border px-5 mx-5 w-96" name="program" onChange={changeHandler} id="program">
        
//         <option  value="computer-science">Computer Science</option>
//         <option  value="business-administration">Business Administration</option>
//         <option  value="engineering">Engineering</option>
//         </select><br/>
//         <button onClick={submit}>submit</button>
//       </div>
//       <hr/>
//       <table className="mt-14 md:mt-24 table-auto ">
//         <tr key="" className="">
//           <th className="w-32">Name</th>
//           <th className="w-32">Email</th>
//           <th className="w-32">Phone</th>
//           <th className="w-32">Country</th>
//           <th className="w-32">BS program</th>
//         </tr>
        
//         {data.map((items,i)=>{return<tr key="i" className="">
//           <td className="px-5">{items.userName}</td>
//           <td className="px-5">{items.email}</td>
//           <td className="px-5">{items.phone}</td>
//           <td className="px-5">{items.country} </td>
//           <td className="px-5">{items.program}</td>
//         </tr>})}
//       </table>
//     </div>
 // )
 
  
}

