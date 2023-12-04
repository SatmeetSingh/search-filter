import { useState } from "react";
import Values from "./Values";

function App() {
  let list = ["Apple", "banana", "Orange", "Mango", "Pineapple", "Watermelon"];
  const [filterList, setFilterList] = useState(list);

  const handleChange = (e) => {
    if (e.target.value === "") {
      setFilterList(list);
      return;
    }
    const filterValues = list.filter(
      (item) => item.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
    );

    setFilterList(filterValues);
    console.log(e.target.value.toLowerCase());
  };

  return (
    <center>
      <h1 className="mt-10 font-serif">Search Filter</h1>
      <div className="flex items-center justify-center flex-col gap-10  border-1 w-[450px] text-white bg-stone-600 ">
        <div className="mt-10  flex items-center gap-3">
          <label>Search:</label>
          <input
            type="text"
            placeholder="Type Here"
            className="border-2 border-black p-1.5 rounded-md w-72 text-black "
            onChange={handleChange}
          />
        </div>
        <Values arr={filterList} />
      </div>
    </center>
  );
}

export default App;
