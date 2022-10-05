import React, {useContext} from 'react';
import '../style/TodoSearch.css';
import { TodoContext } from "../context/TodoContext";

function TodoSearch() {

  const {searchValue, setSearchValue} = useContext(TodoContext);
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
    console.log(event.target.value);
  }

  return (
    <input onChange={onSearchValueChange} className="TodoSearch" placeholder="...Buscar..." />
  );
}

export { TodoSearch };