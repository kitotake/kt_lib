# kt_lib JS/TS wrapper

Not all kt_lib functions found in Lua are supported, the ones that are will have a JS/TS example
on the documentation.

You still need to use and have the kt_lib resource included into the resource you are using the npm package in.

## Installation

```yaml
# With pnpm
pnpm add @kitotake/kt_lib

# With Yarn
yarn add @kitotake/kt_lib

# With npm
npm install @kitotake/kt_lib
```

## Usage
You can either import the lib from client or server files or deconstruct the object and import only certain functions
you may require.

```ts
import lib from '@kitotake/kt_lib/client'
```

```ts
import lib from '@kitotake/kt_lib/server'
```

```ts
import { checkDependency } from '@kitotake/kt_lib/shared';
```

## Documentation
[View documentation](https://kitotake.github.io/docs/kt_lib)