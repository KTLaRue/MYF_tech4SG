import React, { useState} from 'react';
import RecipeDisplay from './RecipeDisplay';


function RecipeSearch({displayQuery}) {
  const [data, setData] = useState(null);
  const [q, setQ] = useState("");
  const [pages, setPages] = useState([])
  
  let pageIndex = 0;
  
  function queryInput() {
    setPages([]);
    pageIndex = 0;

    let type = 'public';
    let app_id = '8877871d';
    let app_key = 'dbb36c61f1e943527747f94213397705';
   
    let url = `https://api.edamam.com/api/recipes/v2?type=${type}&q=${q}&app_id=${app_id}&app_key=${app_key}`;
    setPages([...pages, url]);

    fetch(url)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }

  function prevPage() {
    pageIndex -= 1;

    fetch(pages[pageIndex])
    .then(response => response.json())
    .then(json => setData(json))
    .catch(error => console.error(error));
  }

  function nextPage() {
    pageIndex += 1;
    
    if(pages.length === pageIndex) {
      setPages(currentArray => [...currentArray, data._links.next.href]);
    }

    fetch(pages[pageIndex])
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
      {pageIndex > 0 ? <button onClick={prevPage}>Prev Page</button> : ''}
      {data ? <button onClick={nextPage}>Next Page</button> : ''}
      <br></br> 
      {/*data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Waiting for input...'*/}
    </div>
  );
}

export default RecipeSearch;
