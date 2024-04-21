import React,{useState} from 'react';
import Layout from '../../components/Layout/Layout';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import "../../styles/AuthStyles.css";


const Register = () => {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[phone,setPhone]=useState("");
    const[answer,setAnswer]=useState("");
    const[address,setAddress]=useState("");
    const navigate = useNavigate();

    //form
    const  handleSubmit= async(e)=>{
        e.preventDefault();
        try{
            const res= await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`,
            {name,email,password,phone,answer,address});
            if (res && res.data?.success) {
                toast.success(res.data && res.data?.message || "Registered Successfully");
                navigate("/login");
              } else {
                toast.error(res.data.message);
              }
        }
        catch(error){
            console.log(error);
            toast.error("Somthing went wrong");
        }
    }
    return (
        <Layout title={"SignUp"}>
            <div className='form-container'>
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <input type="text"
                         value={name}
                         onChange={(e)=>{setName(e.target.value)}}
                         class="form-control"
                         id="exampleInputName" 
                         placeholder='Name'
                         required
                         />

                    </div>
                    <div class="mb-3">
                        <input type="email"
                         value={email}
                         onChange={(e)=>{setEmail(e.target.value)}}
                         class="form-control"
                         id="exampleInputEmail1"
                         placeholder='Email address'
                         required
                         />
                        <div id="emailHelp"
                         class="form-text">
                        </div>
                    </div>
                    <div class="mb-3">
            
                        <input type="text"
                        value={phone}
                        onChange={(e)=>{setPhone(e.target.value)}}
                        class="form-control"
                        id="exampleInputPhone"
                        placeholder='Phone Number'
                        required
                         />

                    </div>
                    <div class="mb-3">
                        
                        <input type="password"
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder='Password'
                        required
                         />
                    </div>
                    <div class="mb-3">
                        
                        <input type="text"
                        value={answer}
                        onChange={(e)=>{setAnswer(e.target.value)}}
                        class="form-control"
                        id="exampleInputAnswer"
                        placeholder='what is your favorite book?'
                        required
                         />
                    </div>
                    <div class="mb-3">
                    
                        <input type="text"
                         value={address}
                         class="form-control"
                         onChange={(e)=>{setAddress(e.target.value)}}
                         id="exampleInputAddress"
                         placeholder='Address'
                         required
                         />
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </Layout>
    );
};

export default Register;