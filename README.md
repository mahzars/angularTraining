# Angular Course - Feature Playground

This project is a learning playground based on the Angular University "Angular Core Deep Dive" course. It demonstrates core Angular patterns, feature structuring, and a small REST backend used by the UI.

# Angular Course — Training Playground

This repository is a compact learning playground (based on Angular University material) that demonstrates core Angular concepts and a minimal Express backend used for integration examples.

What this project shows
- A simple Angular app that lists courses and renders them via a reusable `CourseCardComponent`.
- An in-memory course dataset (`src/db-data.ts`) used by both the UI and the Express API.
- A tiny Express server exposing `GET /api/courses` and `PUT /api/courses/:id` for demo purposes.

Quick start (from the `angular-course/` folder)

```bash
npm install
# In one terminal: start the backend API
npm run server
# In another terminal: start the Angular dev server
npm start
```

Notes
- Always run `npm` commands from the `angular-course/` folder (running `npm start` from the repo root will fail).
- The Angular dev server proxies `/api` to the Express server using `proxy.json`.

Project structure and architecture

Frontend (Angular)
- `src/` — all Angular source files.
	- `src/main.ts` — application bootstrap (loads `AppModule`).
	- `src/app/app.module.ts` — root `NgModule` that bootstraps `AppComponent`.
	- `src/app/app.component.ts` + `src/app/app.component.html` — the main UI, owns the `courses` array and renders the list of `CourseCardComponent` instances.
	- `src/app/course-card/` — `CourseCardComponent` (shows single course; demonstrates `@Input`/`@Output`, `ngClass`/`ngStyle`, and structural templates in the component template).
	- `src/app/model/course.ts` — Type definition for the `Course` model used across components.
	- `src/styles.css` and component `*.css` files — global and component-scoped styles.

Backend (training API)
- `server.ts` — minimal Express app that mounts routes and starts the HTTP server. The listen port is controlled by the `PORT` environment variable and defaults to `9010`.
- `server/get-courses.route.ts` — `GET /api/courses` handler (returns `{ payload: Object.values(COURSES) }`).
- `server/save-course.route.ts` — `PUT /api/courses/:id` handler (updates the in-memory course description).
- `src/db-data.ts` — single source of truth for the in-memory `COURSES` dataset; both the frontend (for training) and the backend read/use this file.

How the pieces work together
- Dev startup: `npm run server` launches the Express API (default port `9010`); `npm start` runs the Angular dev server on port `4200`.
- `proxy.json` tells the Angular dev server to forward `/api` requests to the backend (`http://localhost:9010`), avoiding CORS in development.
- UI data flow in this training repo is intentionally simple:
	- The app currently reads `COURSES` directly from `src/db-data.ts` (this keeps examples focused on components and templates).
	- `CourseCardComponent` emits events (`courseSelected`) to the parent, which handles user interactions.
	- The Express API demonstrates how to implement the same data operations over HTTP; later lessons typically replace direct `COURSES` access with an Angular `CourseService` using `HttpClient`.

Conventions and notes for contributors
- Keep route handlers small and focused; business data for lessons remains in `src/db-data.ts`.
- Prefer standalone-style components for isolated examples (see `CourseCardComponent` usage).
- When converting to a service-based approach, add a `CourseService` under `src/app/services/` and use `HttpClient` to call `/api/courses`.


Running tests

```bash
npm test
```

Troubleshooting
- If `/api` calls return CORS or connection errors, confirm `npm run server` is running on port `9010` (the server reads `process.env.PORT` or defaults to `9010`). See `server.ts` to change the port or set the `PORT` environment variable.
- npm warnings about unknown user config (e.g. `email`) are non‑fatal.

