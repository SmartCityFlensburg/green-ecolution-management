/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as VehiclesImport } from './routes/vehicles'
import { Route as TreesImport } from './routes/trees'
import { Route as IndexImport } from './routes/index'
import { Route as WaypointsIndexImport } from './routes/waypoints/index'
import { Route as WaypointsNewImport } from './routes/waypoints/new'

// Create/Update Routes

const VehiclesRoute = VehiclesImport.update({
  path: '/vehicles',
  getParentRoute: () => rootRoute,
} as any)

const TreesRoute = TreesImport.update({
  path: '/trees',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const WaypointsIndexRoute = WaypointsIndexImport.update({
  path: '/waypoints/',
  getParentRoute: () => rootRoute,
} as any)

const WaypointsNewRoute = WaypointsNewImport.update({
  path: '/waypoints/new',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/trees': {
      id: '/trees'
      path: '/trees'
      fullPath: '/trees'
      preLoaderRoute: typeof TreesImport
      parentRoute: typeof rootRoute
    }
    '/vehicles': {
      id: '/vehicles'
      path: '/vehicles'
      fullPath: '/vehicles'
      preLoaderRoute: typeof VehiclesImport
      parentRoute: typeof rootRoute
    }
    '/waypoints/new': {
      id: '/waypoints/new'
      path: '/waypoints/new'
      fullPath: '/waypoints/new'
      preLoaderRoute: typeof WaypointsNewImport
      parentRoute: typeof rootRoute
    }
    '/waypoints/': {
      id: '/waypoints/'
      path: '/waypoints'
      fullPath: '/waypoints'
      preLoaderRoute: typeof WaypointsIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  TreesRoute,
  VehiclesRoute,
  WaypointsNewRoute,
  WaypointsIndexRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/trees",
        "/vehicles",
        "/waypoints/new",
        "/waypoints/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/trees": {
      "filePath": "trees.tsx"
    },
    "/vehicles": {
      "filePath": "vehicles.tsx"
    },
    "/waypoints/new": {
      "filePath": "waypoints/new.tsx"
    },
    "/waypoints/": {
      "filePath": "waypoints/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
