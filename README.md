# markdown-exit-image

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![pkg.pr.new][pkg-pr-new-src]][pkg-pr-new-href]

Erase images CLS automatically with this [Markdown Exit](https://github.com/Barbapapazes/markdown-exit) plugin.

## Installation

```bash
pnpm install markdown-exit-image
```

## Usage

```typescript
import { image } from 'markdown-exit-image'

md.use(image, {
  // Options
})
```

This plugin will automatically:

- Set `loading="lazy"`
- Set `width` and `height` attributes
- Generate a blurhash and set it as a background image

> [!WARNING]
> This plugin requires images to be stored locally. Please, open an issue if you need support for remote images.

## Options

### `publicFolder`

- Type: `string`
- Default: `"public"`

The path to the public folder where the images are stored.

## Sponsors

<p align="center">
  <a href="https://github.com/sponsors/barbapapazes">
    <img src='https://cdn.jsdelivr.net/gh/barbapapazes/static/sponsors.svg'/>
  </a>
</p>

## License

[MIT](../../LICENSE) License © 2025-PRESENT [Estéban Soubiran](https://github.com/barbapapazes)

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/markdown-exit-image/latest.svg?style=flat&colorA=000&colorB=171717
[npm-version-href]: https://npmjs.com/package/markdown-exit-image

[npm-downloads-src]: https://img.shields.io/npm/dm/markdown-exit-image.svg?style=flat&colorA=000&colorB=171717
[npm-downloads-href]: https://npmjs.com/package/markdown-exit-image

[license-src]: https://img.shields.io/npm/l/markdown-exit-image.svg?style=flat&colorA=000&colorB=171717
[license-href]: https://npmjs.com/package/markdown-exit-image

[pkg-pr-new-src]: https://pkg.pr.new/badge/Barbapapazes/markdown-exit-image
[pkg-pr-new-href]: https://pkg.pr.new/~/Barbapapazes/markdown-exit-image
