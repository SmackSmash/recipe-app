import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Gumbo',
      'A spicy cajun dish!',
      'https://spicysouthernkitchen.com/wp-content/uploads/seafood-gumbo-12.jpg'
    ),
    new Recipe(
      'Bacon Sandwich',
      'A British classic!',
      'https://www.sickchirpse.com/wp-content/uploads/2017/08/Bacon-Sarnie.jpg'
    )
  ];

  getRecipes() {
    return [...this.recipes];
  }
}
