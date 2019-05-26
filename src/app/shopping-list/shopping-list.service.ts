import { Ingredient } from './../shared/ingredient.model';

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Chicken Thighs', 6),
    new Ingredient('Onions', 1)
  ];

  getIngredients() {
    return this.ingredients;
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
