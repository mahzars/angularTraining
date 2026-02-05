# Angular Course - Feature Playground

This project is a learning playground based on the Angular University "Angular Core Deep Dive" course. It demonstrates core Angular patterns, feature structuring, and a small REST backend used by the UI.

## What is included

- Standalone bootstrap and providers.
- Feature folder structure for courses.
- Content projection with a dedicated `course-image` component.
- Course editing flow (inline edit + save).
- HTTP service to load/save courses.
- Custom directive (`highlighted`) and structural directive (`ngxUnless`).
- Custom pipe (`filterByCategory`) and a UI toggle to show all or beginner-only courses.
- `course-title` as a custom element (Angular Elements).

## Prerequisites

- Node.js 22 LTS.
- Angular CLI installed globally: `npm install -g @angular/cli`.

## Install

```
npm install
```

## Run the backend server

The backend is a small Express server used by the course examples.

```
npm run server
```

By default it runs on `http://localhost:9010`. You can override the port:

```
set PORT=9011
npm run server
```

## Run the frontend app

```
npm start
```

Then open `http://localhost:4200`.