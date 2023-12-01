import React, { useState} from 'react';
import RecipeDisplay from './RecipeDisplay';

function RecipeSearch({displayQuery}) {
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

  function nextPage() {
    fetch(data._links.next.href)
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
      <RecipeDisplay queryData={data}/>
      {data ? <button onClick={nextPage}>Next Page</button> : ''}
      <br></br> 
      {/*data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Waiting for input...'*/}
    </div>
  );
}

export default RecipeSearch;
