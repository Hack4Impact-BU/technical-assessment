import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

export default function Community() {
    const [emails, setEmails] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/emails')
            .then(response => response.json())
            .then(data => setEmails(data))
            .catch(error => console.error('Error fetching emails:', error));
    }, []);

    return (
        <>
            <Navbar />
            <h1 className='title'>Community</h1>
            <div className="card">
            <table>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Date Joined</th>
                    </tr>
                </thead>
                <tbody>
                    {emails.map((emailEntry, index) => (
                        <tr key={index}>
                            <td>{emailEntry.email}</td>
                            <td>{new Date(emailEntry.dateJoined).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </>
    );
}
