import { useEffect, useState } from 'react'
import './table.css'

const PORT = import.meta.env.VITE_NEWS_PORT;
function Table(){
    const [newsData, setNewsData] = useState([]);
    const [stateFilter, setStateFilter] = useState('');
    const [lccnFilter, setLccnFilter] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(PORT)
            .then(response => response.json())
            .then(data => {setNewsData(data.newspapers); setLoading(false)});
    }, []);
    const filteredData = newsData.filter((item) => 
        (item.state && item.state.toLowerCase().includes(stateFilter.toLowerCase())) &&
    (item.lccn && item.lccn.toLowerCase().includes(lccnFilter.toLowerCase()))
    );
if(loading){
    return(
        <div className = "loading ">Loading...</div>
    )
}
return (
    <div className="tableSearch">
    <input
      className="lccn-search"
      placeholder="Search by Lccn"
      onChange={(e) => setLccnFilter(e.target.value.toLowerCase())}
    />
    <input
      className="state-search"
      placeholder="Search by State"
      onChange={(e) => setStateFilter(e.target.value.toLowerCase())}
    />
        <table className = "table">
            <thead className = "table-header">
                <tr>
                    <th>Lccn</th>
                    <th>Url</th>
                    <th>State</th>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>
                {filteredData.map((item, id) => (
                    <tr key={id}>
                        <td>{item.lccn}</td>
                        <td><a href={item.url}>{item.url}</a></td>
                        <td>{item.state}</td>
                        <td>{item.title}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    );
}

export default Table