import axios from "axios"
import React,{useEffect, useState} from "react"
import "./home.css"
import { Link } from "react-router-dom"
const Users=()=>{
    let[data,setData] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/content")
        .then((response)=>{
            setData(response.data)
        })
        .catch(()=>{
            console.log("Did not get the data");
        })
    },[])
    let deleteData=(id)=>{
axios.delete(`http://localhost:3000/content/${id}`);
window.location.assign("/users")
    }
    return(
        <div id='myUsers'>
            {data.map((x)=>{
           return(
            <div id='cards'>
            
           <table>
           <th colSpan="2">
            <h4>Employee  {x.id}</h4>
           </th>
            <tr>
            <td>Name</td>
            <td>{x.name}</td>
            </tr>
            <tr>
            <td>Salary</td>
            <td>{x.salary}</td>
            </tr>
            <tr>
            <td>Company</td>
            <td>{x.company}</td>
            </tr>
            <tr>
                <td><button><Link to={`/home/${x.id}`}>Edit</Link></button></td>
                <td><button onClick={()=>{deleteData(x.id)}}>Delete</button></td>
            </tr>
           </table>
            </div>
            ) 
        })}
        </div>
    )
}
export default Users

