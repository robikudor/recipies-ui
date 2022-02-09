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
            <div key={recipe.id}>
              <p>{recipe.ingredients.join(' | ')}</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default ResultView;