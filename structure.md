KT_LIB/
│
├── .gitignore
├── fxmanifest.lua
├── init.lua
├── README.md
│
│
├── imports
│   ├── .gitignore
│   │
│   ├── addCommand
│   │   └── server.lua
│   │
│   ├── addKeybind
│   │   └── client.lua
│   │
│   ├── array
│   │   └── shared.lua
│   │
│   ├── callback
│   │   ├── client.lua
│   │   └── server.lua
│   │
│   ├── class
│   │   └── shared.lua
│   │
│   ├── cron
│   │   └── server.lua
│   │
│   ├── disableControls
│   │   └── client.lua
│   │
│   ├── dui
│   │   └── client.lua
│   │
│   ├── getClosestObject
│   │   └── shared.lua
│   │
│   ├── getClosestPed
│   │   └── shared.lua
│   │
│   ├── getClosestPlayer
│   │   ├── client.lua
│   │   └── server.lua
│   │
│   ├── getClosestVehicle
│   │   └── shared.lua
│   │
│   ├── getFilesInDirectory
│   │   └── server.lua
│   │
│   ├── getNearbyObjects
│   │   └── shared.lua
│   │
│   ├── getNearbyPeds
│   │   └── shared.lua
│   │
│   ├── getNearbyPlayers
│   │   ├── client.lua
│   │   └── server.lua
│   │
│   ├── getNearbyVehicles
│   │   └── shared.lua
│   │
│   ├── getRelativeCoords
│   │   └── shared.lua
│   │
│   ├── grid
│   │   └── shared.lua
│   │
│   ├── locale
│   │   └── shared.lua
│   │
│   ├── logger
│   │   └── server.lua
│   │
│   ├── marker
│   │   └── client.lua
│   │
│   ├── math
│   │   └── shared.lua
│   │
│   ├── playAnim
│   │   └── client.lua
│   │
│   ├── points
│   │   └── client.lua
│   │
│   ├── print
│   │   └── shared.lua
│   │
│   ├── raycast
│   │   └── client.lua
│   │
│   ├── requestAnimDict
│   │   └── client.lua
│   │
│   ├── requestAnimSet
│   │   └── client.lua
│   │
│   ├── requestAudioBank
│   │   └── client.lua
│   │
│   ├── requestModel
│   │   └── client.lua
│   │
│   ├── requestNamedPtfxAsset
│   │   └── client.lua
│   │
│   ├── requestScaleformMovie
│   │   └── client.lua
│   │
│   ├── requestStreamedTextureDict
│   │   └── client.lua
│   │
│   ├── requestWeaponAsset
│   │   └── client.lua
│   │
│   ├── require
│   │   └── shared.lua
│   │
│   ├── scaleform
│   │   └── client.lua
│   │
│   ├── streamingRequest
│   │   └── client.lua
│   │
│   ├── string
│   │   └── shared.lua
│   │
│   ├── table
│   │   └── shared.lua
│   │
│   ├── timer
│   │   └── shared.lua
│   │
│   ├── triggerClientEvent
│   │   └── server.lua
│   │
│   ├── waitFor
│   │   └── shared.lua
│   │
│   ├── zones
│   │   └── shared.lua
│   │
│   └── __addCommand
│       └── server.lua
│
├── locales
│   ├── en.json
│   └── fr.json
│
├── package
│   ├── .npmignore
│   ├── .prettierrc
│   ├── package.json
│   ├── pnpm-lock.yaml
│   ├── README.md
│   ├── tsconfig.json
│   │
│   ├── client
│   │   ├── index.ts
│   │   ├── tsconfig.json
│   │   └── resource
│   │       ├── index.ts
│   │       ├── cache
│   │       ├── callback
│   │       ├── dui
│   │       ├── interface
│   │       ├── points
│   │       ├── streaming
│   │       └── vehicleProperties
│   │
│   ├── server
│   │   ├── index.ts
│   │   ├── tsconfig.json
│   │   └── resource
│   │       ├── index.ts
│   │       ├── acl
│   │       ├── addCommand
│   │       ├── cache
│   │       ├── callback
│   │       ├── locale
│   │       └── version
│   │
│   └── shared
│       ├── index.ts
│       ├── tsconfig.json
│       └── resource
│           ├── index.ts
│           ├── cache
│           ├── locale
│           └── version
│
├── resource
│   ├── .gitignore
│   ├── client.lua
│   ├── init.lua
│   ├── server.lua
│   ├── settings.lua
│   │
│   ├── acl
│   │   └── server.lua
│   │
│   ├── cache
│   │   └── client.lua
│   │
│   ├── callbacks
│   │   └── shared.lua
│   │
│   ├── interface
│   │   ├── client
│   │   └── server
│   │
│   ├── locale
│   │   ├── client.lua
│   │   └── server.lua
│   │
│   ├── vehicleProperties
│   │   ├── client.lua
│   │   └── server.lua
│   │
│   ├── version
│   │   ├── server.lua
│   │   └── shared.lua
│   │
│   └── zoneCreator
│       ├── client.lua
│       └── server.lua
│
├── web
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── pnpm-lock.yaml
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   ├── vite.config.mjs
│   │
│   ├── build
│   │   ├── index.html
│   │   └── assets
│   │       ├── index-BOCeclWu.js
│   │       └── index-SonfJNby.css
│
└── src
    ├── .prettierrc
    ├── App.tsx
    ├── index.css
    ├── main.tsx
    ├── vite-env.d.ts
    │
    ├── components
    │   └── LibIcon.tsx
    │
    ├── config
    │   └── MarkdownComponents.tsx
    │
    ├── features
    │   ├── dev
    │   │   └── debug
    │   ├── dialog
    │   ├── menu
    │   ├── notifications
    │   ├── progress
    │   ├── skillcheck
    │   └── textui
    │
    ├── hooks
    │   ├── useKeyPress.ts
    │   └── useNuiEvent.ts
    │
    ├── providers
    │   ├── ConfigProvider.tsx
    │   ├── errorBoundary.tsx
    │   └── LocaleProvider.tsx
    │
    ├── theme
    │   └── index.ts
    │
    ├── transitions
    │   └── ScaleFade.tsx
    │
    ├── typings
    │   ├── alert.ts
    │   ├── context.ts
    │   ├── dialog.ts
    │   ├── index.ts
    │   ├── menu.ts
    │   ├── notifications.ts
    │   ├── progress.ts
    │   ├── radial.ts
    │   ├── skillcheck.ts
    │   └── textui.ts
    │
    └── utils
        ├── debugData.ts
        ├── fetchNui.ts
        ├── isIconUrl.ts
        ├── misc.ts
        └── setClipboard.ts