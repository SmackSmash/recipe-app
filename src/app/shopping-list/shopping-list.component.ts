import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [new Ingredient('Chicken Thighs', 6), new Ingredient('Onions', 1)];

  constructor() {}

  ngOnInit() {}

  addIngredient(ingredient: object) {
    this.ingredients.push(new Ingredient(ingredient.name, ingredient.amount));
  }
}
