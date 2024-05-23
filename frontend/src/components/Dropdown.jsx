import './Dropdown.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@awesome.me/kit-KIT_CODE/icons/classic/solid';

function Dropdown() {
  return (
    <>
      <button className='button' id='button'>
        Filter
        <FontAwesomeIcon icon={faArrowDown} />
      </button>
      <div className='dropDown' id='dropDown'>
        <a></a>
      </div>
    </>
  );
}

export default Dropdown;
