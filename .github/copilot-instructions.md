# Copilot Instructions for my-angular-app

## Project Overview

This is an **Angular 21** standalone application using modern Angular patterns. No NgModules—everything uses standalone components with signal-based reactivity.

## Architecture

- **Entry point**: [src/main.ts](../src/main.ts) bootstraps `App` with `appConfig`
- **App config**: [src/app/app.config.ts](../src/app/app.config.ts) - providers for routing and global error handling
- **Root component**: [src/app/app.ts](../src/app/app.ts) - standalone component using signals
- **Routing**: [src/app/app.routes.ts](../src/app/app.routes.ts) - empty routes, add lazy-loaded feature routes here
- **Static assets**: `public/` directory (served at root)

## Key Conventions

### Component Structure
```typescript
@Component({
  selector: 'app-example',
  // Do NOT set standalone: true (default in Angular 21)
  imports: [/* dependencies */],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './example.html',
  styleUrl: './example.css'
})
export class Example {
  // Use signal() for state, computed() for derived state
  protected readonly value = signal('initial');
  protected readonly derived = computed(() => this.value().toUpperCase());

  // Use input()/output() functions, not decorators
  readonly name = input<string>();
  readonly clicked = output<void>();
}
```

### Templates
- Use native control flow: `@if`, `@for`, `@switch` (not `*ngIf`, `*ngFor`)
- Use `class` bindings instead of `ngClass`
- Use `async` pipe for observables

### Services
- Use `inject()` function, not constructor injection
- Use `providedIn: 'root'` for singletons

## Developer Workflow

| Command | Description |
|---------|-------------|
| `npm start` | Dev server at `http://localhost:4200` (hot reload) |
| `npm test` | Run unit tests with **Vitest** |
| `npm run build` | Production build to `dist/` |
| `ng generate component <name>` | Scaffold new component |

## Testing (Vitest)

Tests use **Vitest** (not Karma/Jasmine). Example pattern from [src/app/app.spec.ts](../src/app/app.spec.ts):
```typescript
import { TestBed } from '@angular/core/testing';

describe('Component', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyComponent], // Import standalone components directly
    }).compileComponents();
  });

  it('should work', async () => {
    const fixture = TestBed.createComponent(MyComponent);
    await fixture.whenStable();
    // assertions...
  });
});
```

## Code Style

- **Prettier** configured with single quotes, 100 char width, Angular HTML parser
- **TypeScript strict mode** enabled with additional checks (`noImplicitOverride`, `strictTemplates`)
- Component selector prefix: `app-`

## What NOT to Do

- Don't use `@Input()`/`@Output()` decorators—use `input()`/`output()` functions
- Don't use `@HostBinding`/`@HostListener`—use `host` object in decorator
- Don't use `ngClass`/`ngStyle`—use direct bindings
- Don't set `standalone: true`—it's the default
- Don't use constructor injection—use `inject()`
