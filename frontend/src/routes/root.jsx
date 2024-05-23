import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './root.css'

export default function Root() {
    return (
      <>
        <div id="sidebar">
          <h2>React Router Contacts</h2>
          <nav>
            <ul>
              <li>
                <Link to="/">News</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail">
          <Outlet />
        </div>
      </>
    );
  }