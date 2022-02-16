import React from "react";

class ResultView extends React.Component {
  render() {
    return (
      <div>
        <div>
        {this.props.recipes.length === 0 &&
          <p>No search results :(</p>
        }
          {this.props.recipes.length > 0 &&
           this.props.recipes.map((recipe, i) =>
            <>
            <div key={recipe.id} style={{ display: 'flex'}}>
              <div style={{ width: '50%', textAlign: 'left'}}>
                <h3>{recipe.name}</h3>
                <div>Recipe {(recipe.rank * 100).toFixed(2)}% match</div>
                {recipe.ingredients.map((ingredient, i) =>
                  <ul>{ingredient}</ul>
                )}
              </div>
              <div style={{ width: '50%'}}>
                <img src={recipe.image} alt=""></img>
              </div>
            </div>
            <hr/>
            </>
          )}
        </div>
      </div>
    )
  }
}

export default ResultView;