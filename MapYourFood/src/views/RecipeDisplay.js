import React, { useState} from 'react';
import { Fragment } from "react";
import { FoodBox } from "../components/foodBox"

function RecipeDisplay({queryData}) {
	let recipes = [];
	
	function makeRecipeDisplay(label, image, url, time) {
		return(
			<Fragment key={url}>
				<div>
					<FoodBox name={label} time={time} src={image} url={url}/>
					{/*{label}
					<br></br>
					<img src={image} alt={label}/>
					<br></br>
					{url}*/}
				</div>
			</Fragment>
		)
	}

	if(queryData) {
		for(let i = 0; i < queryData.hits.length; i++) {
			recipes.push(makeRecipeDisplay(queryData.hits[i].recipe.label, queryData.hits[i].recipe.image, queryData.hits[i].recipe.url, queryData.hits[i].recipe.totalTime));
		}
	}

	return (
		<div>
			{recipes}
		</div>
	)
}

export default RecipeDisplay;