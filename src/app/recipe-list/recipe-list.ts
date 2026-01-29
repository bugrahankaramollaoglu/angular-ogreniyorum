import { Component, computed, signal } from '@angular/core';
import { RecipeModel } from '../models';
import { CAPRESE, SPAGHETTI } from '../mock-recipes';

@Component({
  selector: 'app-recipe-list',
  imports: [],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList {


  protected readonly recipe = signal<RecipeModel>(SPAGHETTI);
  protected readonly sservings = signal<number>(1);
  protected readonly cservings = signal<number>(1);

  protected readonly adjustedIngredients = computed(() => {
    const currentRecipe = this.recipe();
    const servings = currentRecipe.name === 'Spaghetti' ? this.sservings() : this.cservings();
    return currentRecipe.ingredients.map((ingredient) => ({
      ...ingredient,
      quantity: ingredient.quantity * servings
    }));
  });

  // //////////////////

  protected giveSpaghetti(): void {
    this.recipe.set(SPAGHETTI);
  }

  protected incrementSpaghettiServings(): void {
    this.sservings.update((s) => s + 1);
  }

  protected decrementSpaghettiServings(): void {
    this.sservings.update((s) => s - 1);
  }

  protected readonly spageti = signal<number>(200);
  protected readonly guanciale = signal<number>(100);
  protected readonly egg_yolks = signal<number>(4);
  protected readonly pecorino = signal<number>(50);

  // //////////////////

  protected giveCaprese(): void {
    this.recipe.set(CAPRESE);
  }

  protected incrementCapreseServings(): void {
    this.cservings.update((c) => c + 1);
  }

  protected decrementCapreseServings(): void {
    this.cservings.update((s) => s - 1);
  }

  protected readonly tomatoes = signal<number>(4);
  protected readonly mozarella = signal<number>(100);
  protected readonly fresh_basil = signal<number>(1);
  protected readonly olive_oil = signal<number>(2);


}
