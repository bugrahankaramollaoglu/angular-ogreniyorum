import { RecipeModel } from './models';

export const SPAGHETTI: RecipeModel = {
	id: 1,
	name: 'Spaghetti',
	description: 'A classic Italian pasta dish.',
	imageUrl: 'https://www.simplyrecipes.com/thmb/0UeN5LhKq-ze3BcZJ7_Yp803T24=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Pasta-Carbonara-LEAD-1-c477cc25c7294cd9a3fc51ece176481f.jpg',
	ingredients: [
		{ name: 'Spaghetti', quantity: 200, unit: 'g' },
		{ name: 'Guanciale', quantity: 100, unit: 'g' },
		{ name: 'Egg Yolks', quantity: 4, unit: 'each' },
		{ name: 'Pecorino Romano', quantity: 50, unit: 'g' },
	],
};

export const CAPRESE: RecipeModel = {
	id: 2,
	name: 'Caprese',
	description: 'A simple and refreshing Italian salad.',
	imageUrl: 'https://www.thespruceeats.com/thmb/2pjgFA7_nbZtlXr68BECvf6fO48=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/caprese-salad-tomato-salad-2217097-hero-03-75a0b89b30aa4a52b10fe4fdd9abfeb5.jpg',
	ingredients: [
		{ name: 'Tomatoes', quantity: 4, unit: 'each' },
		{ name: 'Fresh Mozzarella', quantity: 200, unit: 'g' },
		{ name: 'Fresh Basil', quantity: 1, unit: 'bunch' },
		{ name: 'Olive Oil', quantity: 2, unit: 'tbsp' },
	],
};
