import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function News() {
    const [newspapers, setNewspapers] = useState([]);
    const [stateFilter, setStateFilter] = useState("");
    const [lccnFilter, setLccnFilter] = useState("");
    const [states, setStates] = useState([]);
    const [lccns, setLccns] = useState([]);
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch('https://api.allorigins.win/get?url=https://chroniclingamerica.loc.gov/newspapers.json')
            .then(res => res.json())
            .then(data => {
                const parsedData = JSON.parse(data.contents);
                setNewspapers(parsedData.newspapers);
                setStates([...new Set(parsedData.newspapers.map(item => item.state))]);
                setLccns([...new Set(parsedData.newspapers.map(item => item.lccn))]);
            })
            .catch(error => {
                console.error("Error fetching the data:", error);
            });
    }, []);

    const filteredNewspapers = newspapers.filter(newspaper => {
        return (
            (stateFilter === "" || newspaper.state === stateFilter) &&
            (lccnFilter === "" || newspaper.lccn === lccnFilter)
        );
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/emails', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();
            setMessage(data.message);
            setEmail("");
        } catch (error) {
            console.error("Error submitting the email:", error);
            setMessage("Error submitting the email");
        }
    };

    return (
        <>
            <Navbar />
            <h1 className="title">News Directory</h1>
            <div className="card">
                <div className="filters">
                    <select value={stateFilter} onChange={e => setStateFilter(e.target.value)}>
                        <option value="">Filter by State</option>
                        {states.map((state, index) => (
                            <option key={index} value={state}>{state}</option>
                        ))}
                    </select>
                    <select value={lccnFilter} onChange={e => setLccnFilter(e.target.value)}>
                        <option value="">Filter by LCCN</option>
                        {lccns.map((lccn, index) => (
                            <option key={index} value={lccn}>{lccn}</option>
                        ))}
                    </select>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>State</th>
                            <th>LCCN</th>
                            <th>URL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredNewspapers.map((newspaper, index) => (
                            <tr key={index}>
                                <td>{newspaper.title}</td>
                                <td>{newspaper.state}</td>
                                <td>{newspaper.lccn}</td>
                                <td><a href={newspaper.url} target="_blank" rel="noopener noreferrer">{newspaper.url}</a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="email-form">
                <h2>Subscribe to Our Newsletter!</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit">Subscribe</button>
                </form>
                {message && <p>{message}</p>}
            </div>
        </>
    );
}
