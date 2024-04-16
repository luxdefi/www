import { footer, mainNav, type SiteDef  } from '@luxfi/core/site-def'

import commerce from './commerce'
import prices from './prices'

export default {
  currentAs: 'https://lux.credit',
  nav: {
    common: mainNav,
  },
  footer: footer.standard, 
  ext: {
    commerce,
    prices,
  }
} satisfies SiteDef
