
import { useState, useEffect } from "react";
import axios from "axios";
import TextField from '@mui/material/TextField';

export default function CommunityPage () {
    const [emails, setEmails] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    useEffect(() => {
        axios
        .get('http://localhost:3000/emails') 
        .then((response) => { 
            setEmails(response.data) 
        })
        .catch((error) => {
            console.log(error) 
        })
    })
    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          await axios.post('http://localhost:3000/emails', { name, email });
          alert('Subscription successful!');
          setName('');
          setEmail('');
        } catch (error) {
          console.error('Error subscribing:', error);
          alert('Subscription failed');
        }
      };
    return (
        <div className="flex flex-col mx-auto items-center justify-center  ">
            <h1 className="mt-10">Community</h1>
            <div className="flex items-center  mt-4 ">
                <TextField  
                label="Name" 
                variant="outlined" 
                onChange={(e) => setName(e.target.value)}/>
                <TextField  
                label="Email" 
                variant="outlined" 
                onChange={(e) => setEmail(e.target.value)}/>
                <button className="bg-black text-white py-4"onClick={handleSubmit}>Join Now!</button>

            </div>
            
          
            <table className="border-[1px] mt-10  border-black w-[80%] ">
                <thead>
                    <tr>
                        <th className="p-4 border-[1px] border-gray-500 bg-gray-200">Name</th>
                        <th className="p-4 bg-gray-200">Email</th>
                    </tr>
                </thead>
                <tbody>
                {emails.map((email) => (
                    <tr key={email._id}>
                        <td className="p-2 border-[1px] border-black">{email.name}</td>
                        <td className="p-2 border-[1px] border-black">{email.email}</td> 
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}