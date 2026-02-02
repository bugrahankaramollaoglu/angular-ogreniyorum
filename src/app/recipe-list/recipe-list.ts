import { Component, computed, signal } from '@angular/core';
import { RecipeModel } from '../models';
import { CAPRESE, SPAGHETTI } from '../mock-recipes';
import { RecipeDetail } from "../recipe-detail/recipe-detail";

@Component({
  selector: 'app-recipe-list',
  imports: [RecipeDetail],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList {
  protected readonly SPAGHETTI = SPAGHETTI;
  protected readonly CAPRESE = CAPRESE;
  protected readonly recipe = signal<RecipeModel>(SPAGHETTI);
}
