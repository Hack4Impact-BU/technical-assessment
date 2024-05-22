import * as React from 'react';

import "./table.css"


export default function BasicTable({ news, stateinput, lccninput }) {


  const newsData = news.newspapers;

  const filteredNews = newsData.filter(state => 
    state.state.toLowerCase().startsWith(stateinput.toLowerCase()) &&
    state.lccn.toLowerCase().startsWith(lccninput.toLowerCase())
  )

 

  return (
    <div className='table'>
      <table>
      <thread>
        <tr>
          <th>state</th>
          <th>title</th>
          <th>lccn</th>
        </tr>
      </thread>
      <tbody>
      {filteredNews.map(news => (
        <tr key={news.id}>
          <td>{news.state}</td>
          <td><a href={news.url} target='_blank'>{news.title}</a></td>
          <td>{news.lccn}</td>
        </tr>
      ))}
      </tbody>
      </table>
    </div>
    
    
  );
}
