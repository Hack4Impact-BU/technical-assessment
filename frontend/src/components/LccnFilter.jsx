

export default function LccnFilter ({searchValue, setSearchValue}) {


    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
      };
    return (
    <div className="flex w-full items-center">
        <input
          type="text"
          value={searchValue}
          onChange={handleSearchChange}
          placeholder="Search by lccn"
          className="p-2 border rounded w-full "
        />
      
    </div>
    
        
    )
}