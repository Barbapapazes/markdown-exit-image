import { MarkdownExit } from "markdown-exit";
import { Options } from "./types.js";
import { readFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { resolveOptions } from "./options.js";
import { getPixels } from "@unpic/pixels";
import { encode } from "blurhash";
import { blurhashToDataUri } from '@unpic/placeholder'

export function image(md: MarkdownExit, userOptions: Options) {
  const options = resolveOptions(userOptions);

  const imageRule = md.renderer.rules.image!;
  md.renderer.rules.image = async (tokens, idx, info, env, self) => {
    const token = tokens[idx];

    const src = token.attrGet("src");
    const img = await readFile(resolve(join(options.publicFolder, src!)));
    const data = await getPixels(img);
    const blurhash = encode(Uint8ClampedArray.from(data.data), data.width, data.height, 4, 4);

    token.attrSet("loading", "lazy");
    token.attrSet('width', data.width.toString())
    token.attrSet('height', data.height.toString())
    token.attrSet('style', `background-size: cover; background-image: url(${blurhashToDataUri(blurhash)});`)

    return imageRule(tokens, idx, info, env, self);
  }
}
