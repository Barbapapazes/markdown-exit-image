# markdown-exit-image

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![pkg.pr.new][pkg-pr-new-src]][pkg-pr-new-href]

Erase images CLS automatically with this [Markdown Exit](https://github.com/Barbapapazes/markdown-exit) plugin.

- 🖼️ Automatically sets `width` and `height` on images to prevent Cumulative Layout Shift (CLS).
- 💤 Adds `loading="lazy"` for better performance.
- 🎨 Generates a blurhash for each image and applies it as a background placeholder for smooth loading.

Based on the article [Markdown Exit Breaks the Rules With Async Rendering](https://soubiran.dev/posts/markdown-exit-breaks-the-rules-with-async-rendering).

## Installation

```bash
pnpm add -D markdown-exit-image
```

## Usage

> [!NOTE]
> Contributions, through issues or pull requests, to extend support for other frameworks are welcome!

```typescript
import { image } from 'markdown-exit-image'

md.use(image, {
  // Options
})
```

## Options

### `publicFolder`

- Type: `string`
- Default: `"public"`

The path to the public folder where the images are stored.

> [!WARNING]
> This plugin requires images to be stored locally. Please, open an issue if you need support for remote images.

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
