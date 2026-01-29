import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ingredient, RecipeModel } from './models';
import { CAPRESE, SPAGHETTI } from './mock-recipes';
import { RecipeList } from './recipe-list/recipe-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RecipeList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {

  protected readonly title = signal('angular-ogreniyorum');}
