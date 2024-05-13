import './App.css'
import Title from './components/title/title'
import { useEffect, useState } from 'react'
import { titleCase } from 'title-case'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/newspapers')
      .then(res => res.json())
      .then(data => {
        let newData = []
        for (let i = 0; i < data.newspapers.length; i++) {
          newData.push(data.newspapers[i])
        }
        setData(newData)
      })
  }, [])

  return (
    <>
      <Title />
      <main className='main'>
        <section className='table'>
          <table>
            <tr>
              <th>Title</th>
              <th>State</th>
              <th>LCCN</th>
            </tr>
            {
              data.map((entry) => {
                return (
                  <tr onClick={() => window.open(entry.url.slice(0, entry.url.length-5))}>
                    <td title={entry.title}>{titleCase(entry.title.replace('.', '').replace('[volume]', ''))}</td>
                    <td>{entry.state}</td>
                    <td>{entry.lccn}</td>
                  </tr>
                )
              })
            }
          </table>
        </section>
      </main>
    </>
  )
}

export default App
