import { Injectable } from '@angular/core';

import { Recipe } from '../models/recipes.model';
import { Ingredient } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    new Recipe('shnitzal', 'yummy', '../pics/shnitzel.jpeg',
    [
      new Ingredient('meat', 1),
      new Ingredient('french fries', 20)
    ]),
    new Recipe('burger', 'biger than big', '../pics/burger.jpg',
    [
      new Ingredient('bread', 2),
      new Ingredient('meat', 1)
    ])
  ];

  
  constructor() { }

  getRecipes() {
    return [...this.recipes];
  }

  getRecipe(id){
    return [...this.recipes][id];
  }
}
