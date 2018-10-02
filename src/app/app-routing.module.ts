import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RecipesComponent } from "./recipes/recipes.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { HomeComponent } from "./home/home.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { NoRecipeSelectedComponent } from "./recipes/no-recipe-selected/no-recipe-selected.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";

//import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const appRoute: Routes = [
    { path:'', component: HomeComponent, pathMatch: 'full'  }, //localhost:4200/
    { path:'home', component: HomeComponent },
    { path:'recipes', component: RecipesComponent, children: [
        { path:'', component:NoRecipeSelectedComponent },
        { path:'new', component: RecipeEditComponent },
        { path:':id', component:RecipeDetailComponent },
        { path:':id/edit', component: RecipeEditComponent }
    ] },
    { path:'shoppingList', component: ShoppingListComponent },
    // { path: 'users', component: UsersComponent, children:[
    //   { path: ':id/:name', component: UserComponent }
    // ]},
    // { path: 'servers', /*canActivate: [AuthGaurd],*/ canActivateChild: [AuthGaurd], component: ServersComponent, children:[
    //   { path: ':id', component: ServerComponent, resolve: {server: ServerResolver} },
    //   { path: ':id/edit', component: EditServerComponent, canDeactivate:[CanDeactivateGuard] }
    // ] },
    { path: 'not-found', component: PageNotFoundComponent },
    // { path: 'not-found', component: ErrorPageComponent, data: { messege:'Page Not Foun!d' } },
    { path: '**',  redirectTo:'/not-found' }
  ]

@NgModule({
    imports: [
        //RouterModule.forRoot(appRoute, {userHash: true})
        RouterModule.forRoot(appRoute)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}