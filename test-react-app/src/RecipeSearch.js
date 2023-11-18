import React, { useState, useEffect } from 'react';

function RecipeSearch() {
  const [data, setData] = useState(null);
  
  const [q, setQ] = useState("");
  
  function queryInput() {
    let type = 'public';
    let app_id = '8877871d';
    let app_key = 'dbb36c61f1e943527747f94213397705';
   
    var url = `https://api.edamam.com/api/recipes/v2?type=${type}&q=${q}&app_id=${app_id}&app_key=${app_key}`;

    fetch(url)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }


  return (
    <div>
      <input type="text" id="queryInput" value={q} onChange={e => setQ(e.target.value)}></input>
      <button onClick={queryInput}>
        Search
      </button>
      <br></br>   
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
    </div>
  );
}

export default RecipeSearch;
