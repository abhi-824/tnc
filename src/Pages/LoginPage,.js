import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
export default function LoginPage() {
    const navigate = useNavigate()
    const [Email, setEmail] = useState(1)
    const [Password, setPassword] = useState()
    const handleSubmit = (e)=>{
        e.preventDefault()
        const data = {
            password:Password
        }
        fetch("https://api-abhinyas.herokuapp.com/login/"+Email,{
            method:"POST",
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(data)
        }).then(res=>res.json()).then(data=>{
            console.log(data)
            localStorage.setItem('token',data.token)
            navigate('/account')
        }).catch(err=>{
            console.log(err)
            // navigate('/account')
        })
    }
    return (
        <React.Fragment>
            <Navbar></Navbar>
            <div className="bg-gray-100 min-h-screen flex items-center justify-center">
                <div className="bg-white min-h-[500px] min-w-[550px] max-w-[500px]">
                    <div className="flex flex-col items-center justify-center text-center">
                        <h1 className="text-2xl font-family-titan-one text-center my-4">Login</h1>
                        <form action="" className="flex flex-col items-center justify-center" onSubmit={handleSubmit}>
                        <input type="number" name="" id="" placeholder="email here" className="my-2 text-center border-2 border-gray-200 rounded" onChange={(e)=>setEmail(e.target.value)} defaultValue='1'/>
                        <input type="password" name="" id="" placeholder="password here🙈" className="my-2 text-center border-2 border-gray-200 rounded" required onChange={(e)=>setPassword(e.target.value)} />
                        <button className="filter m-2 ml-0 bg-[#77a4c6] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Login
                        </button>
                    </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
