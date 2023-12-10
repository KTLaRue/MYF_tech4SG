import React from 'react';

function RecipeDisplay({queryData}) {
	const [recipes, setRecipes] = useState([]);
	
	function makeRecipeDisplay(label, image, url) {
		return(
			<div>
				{label}
				<br></br>
				<img src={image} alt={label}/>
				<br></br>
				{url}
			</div>
		)
	}
	
	if(queryData) {
		for(let i = 0; i < queryData.hits.length; i++) {
			recipes.push(makeRecipeDisplay(queryData.hits[i].recipe.label, queryData.hits[i].recipe.image, queryData.hits[i].recipe.url, i));
		}
	}

	return (
		<div>
			{recipes}
		</div>
	)
}

export default RecipeDisplay;