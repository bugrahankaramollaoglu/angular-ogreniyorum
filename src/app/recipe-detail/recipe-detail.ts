import { Component, computed, input, signal } from '@angular/core';
import { RecipeModel } from '../models';

@Component({
  selector: 'app-recipe-detail',
  imports: [],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.css',
})
export class RecipeDetail {

  readonly recipe = input<RecipeModel>();

  protected readonly servings = signal<number>(1);


  protected readonly adjustedIngredients = computed(() => {
    const recipe = this.recipe();
    const servings = this.servings();

    if (!recipe) return [];

    return recipe.ingredients.map(ingredient => ({
      ...ingredient,
      quantity: ingredient.quantity * servings
    }));
  });

  protected incrementServings(): void {
    this.servings.update(s => s + 1);
  }

  protected decrementServings(): void {
    if (this.servings() > 1) {
      this.servings.update(s => s - 1);
    }
  }

}
