import { createMarkdownExit } from 'markdown-exit'
import { expect, it } from 'vitest'
import { image } from '../src/index.js'

it('optimize the image automatically', async () => {
  const md = createMarkdownExit()
  md.use(image, {
    publicFolder: 'tests/public',
  })

  const html = await md.renderAsync('# markdown\n\n![alt text](/image.png)')

  expect(html).toMatchInlineSnapshot(`
    "<h1>markdown</h1>
    <p><img src="/image.png" alt="alt text" loading="lazy" width="536" height="354" style="background-size: cover; background-image: url(data:image/bmp;base64,Qk32BAAAAAAAADYAAAAoAAAACAAAAAgAAAABABgAAAAAAMAAAAATCwAAEwsAAAAAAAAAAAAAUU4DVVMqXFlJYVhRX0w+WDQATg8ARgAAiY6KkpSYop6vp6C3n5aqkYWPinl2jXdusbjFub3PxsXgy8bmwrvYs6q+rZ6nsJyexczmyc/qz9Lx0M/wysPiwLTJuaewuKGgytDxyc/xxs3vxMbowrzZvq7Ctp+mr5WNwsjrwcfqvcPou7zhubPTtqa8rpeepImBuL7fub7hu7zmu7njuLHWsaW+qJWioYeJs7rYtrrdvLvmvrnnuLLar6bBppaloYiQ);"></p>
    "
  `)
})
