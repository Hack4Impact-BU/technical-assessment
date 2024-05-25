import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './root.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faUserGroup } from '@fortawesome/free-solid-svg-icons';

export default function Root() {
  return (
    <>
      <div id='sidebar'>
        <ul>
          <li>
            <FontAwesomeIcon icon={faNewspaper} />
            <Link to='/'>News</Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            <Link to='/community'>Community</Link>
          </li>
        </ul>
      </div>
      <div id='detail'>
        <Outlet />
      </div>
    </>
  );
}
