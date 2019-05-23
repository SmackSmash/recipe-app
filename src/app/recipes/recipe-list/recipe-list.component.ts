import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
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

  @Output() showRecipe = new EventEmitter<Recipe[]>();

  constructor() {}

  ngOnInit() {}

  passFullRecipe(name: string) {
    this.showRecipe.emit(this.recipes.filter(recipe => recipe.name === name));
  }
}
