import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../../models/recipes.model';
import { RecipesService } from '../../services/recipes.service';
import { ShoppingListService } from '../../services/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe:Recipe;
  
  constructor(private slService:ShoppingListService,private recipeService:RecipesService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    //this.recipe = this.recipeService.getRecipe(this.route.snapshot.params['id']);
    this.route.params.subscribe((params:Params) =>
      this.recipe = this.recipeService.getRecipe(Number(params['id']) - 1));
    //if(!this.recipe) this.router.navigate([this.route]);
  }

  addIngredients(){
    this.slService.addIngredients(this.recipe.ingredients);
  }
}
