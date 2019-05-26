import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from './../shared/ingredient.model';

export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Gumbo',
      'A spicy cajun dish!',
      'https://spicysouthernkitchen.com/wp-content/uploads/seafood-gumbo-12.jpg',
      [
        new Ingredient('Skinless, Boneless, Chicken Thighs', 6),
        new Ingredient('Jalapeno Peppers', 2),
        new Ingredient('Andouille Sausage', 2),
        new Ingredient('Onion', 1),
        new Ingredient('Green Bell Pepper', 1),
        new Ingredient('Celery', 2),
        new Ingredient('Garlic', 6),
        new Ingredient('Chicken Stock', 1),
        new Ingredient('Thyme', 3),
        new Ingredient('Vegetable Oil', 1),
        new Ingredient('Flour', 1),
        new Ingredient('Beer', 1),
        new Ingredient('Salt', 1),
        new Ingredient('Black Pepper', 1),
        new Ingredient('Cayenne Pepper', 1),
        new Ingredient('Bay Leaves', 3),
        new Ingredient('Smoked Paprika', 1),
        new Ingredient('Rice', 1),
        new Ingredient('Spring Onion', 1)
      ]
    ),
    new Recipe(
      'Bacon Sandwich',
      'A British classic!',
      'https://www.sickchirpse.com/wp-content/uploads/2017/08/Bacon-Sarnie.jpg',
      [
        new Ingredient('White Bread', 1),
        new Ingredient('Bacon', 6),
        new Ingredient('Butter', 1),
        new Ingredient('Brown Sauce', 1)
      ]
    )
  ];

  getRecipes() {
    return [...this.recipes];
  }
}
