# Copilot instructions for this repo

## Big picture
- Angular app lives under `src/` and is configured in `angular.json`.
- A lightweight Express API is defined in `server.ts` with route handlers under `server/`.
- Both the app and the API read/write the in-memory course data in `src/db-data.ts`.

## Key flows and patterns
- API endpoints:
  - `GET /api/courses` returns `{ payload: Object.values(COURSES) }` in `server/get-courses.route.ts`.
  - `PUT /api/courses/:id` mutates the in-memory course description in `server/save-course.route.ts`.
- The UI uses `CourseCardComponent` as a standalone component (declared with `imports: [CommonModule]`) and is imported into `AppModule`.
- `AppComponent` reads courses directly from `COURSES` and listens to `CourseCardComponent` events (`courseSelected`).

## Local dev workflows
- Run commands from the `angular-course/` folder (running `npm start` elsewhere fails).
- `npm start` runs `ng serve` with `proxy.json` so `/api/*` calls proxy to the Express server.
- `npm run server` starts the API via `ts-node` on port 9000.
- `npm test`, `npm run lint`, `npm run e2e` are wired to Angular CLI defaults.

## Conventions to follow
- Keep API handlers small and functional in `server/` and leave data in `src/db-data.ts` for this training setup.
- When adding UI pieces, prefer Angular standalone components like `CourseCardComponent` and import them directly into modules.
- If you need the course model, use `src/app/model/course.ts` to keep types aligned with `COURSES`.
