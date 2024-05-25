import './Community.css';

function Community() {
  return (
    <>
      <div className='head-bar'>
        <h2>Community</h2>
      </div>
      <div className='community-grid'>
        <div className='sort-grid'>
          <p>First Name</p>
          <p>Last Name</p>
          <p>Date</p>
        </div>
        <div className='sort-item'></div>
      </div>
    </>
  );
}

export default Community;
