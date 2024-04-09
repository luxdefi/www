import type { ImageDef } from "@hanzo/ui/types"
import { ProductMediaAccessor } from '@hanzo/commerce'


export default new ProductMediaAccessor({
  img: {
    'LXM-CR-B': {
      src: '/assets/img/products/credit/families/cards-dual-black-1483x1361.png', 
      dim: {w: 1483, h: 1361}
    } satisfies ImageDef,
    'LXM-CR-B-ABT': {
      src: '/assets/img/products/credit/product/black-f-700x441.png', 
      dim: {w: 700, h: 441},
    } satisfies ImageDef,
    'LXM-CR-B-GM': {
      //TODO: Change this to the correct image
      src: '/assets/img/products/credit/product/black-f-700x441.png', 
      dim: {w: 700, h: 441 },
    } satisfies ImageDef,

  },
  optionImg: {
    'LXM-CR-B-ABT': { 
      src: '/assets/img/products/credit/option/black-card-anodized-black-titanium-100x99.png', 
      dim: {w: 100, h: 99},
      rounded: 'full'
    } satisfies ImageDef,
    'LXM-CR-B-GM': {
      src: '/assets/img/products/credit/option/black-card-gunmetal-100x99.png',
      dim: {w: 100, h: 99 },
    } satisfies ImageDef,
  },
  anim: {
    'LXM-CR-B-ABT': 'https://prod.spline.design/UHbvWIPc4FxmZ3If/scene.splinecode', 
    'LXM-CR-B-GM': 'https://prod.spline.design/UHbvWIPc4FxmZ3If/scene.splinecode'
  }
})