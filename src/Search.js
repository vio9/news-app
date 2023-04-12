import axios from 'axios';
import { useState, useEffect } from 'react';
import Character from './characters/Character';

function Search() {
  const [chara, setChara] = useState([]);
  const [searchName, setSearchName] = useState([]);
  let url = 'https://thronesapi.com/api/v2/Characters';

  const getCharacters = async () => {
    try {
      const res = await axios.get(url);
      setChara(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);

  let value;
  const handleSearch = (e) => {
    value = e.target.value;
    setSearchName(value);
  };
  return (
    <>
      <form>
        <label>Recherchez un personnage : </label>
        <input
          type='text'
          name='searchBar'
          id='searchBar'
          placeholder='rechercher'
          onChange={handleSearch}
        ></input>
      </form>
      <div className='wrapper-character'>
        {chara
          .filter((item) => {
            return item.fullName.includes(searchName);
          })
          .map((item) => {
            return (
              <Character
                key={item.id}
                house={item.family}
                fullname={item.fullName}
                image={item.imageUrl}
              />
            );
          })}
      </div>
    </>
  );
}

export default Search;
