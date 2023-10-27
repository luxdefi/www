import React from 'react'
import { AssetBannerBlock, ElementBlock } from '../types'
import ContactDialog from '@/components/contact-dialog'
import Button from '@/primitives/button'

import BottomMDX from './landing-bottom.mdx'

import saveToListAction from '@/server-actions/save-to-waitlist'
import { defaultVideoProps as videoProps } from '@/util'
import silverMedia from '@/content/products/silver/video'

export default {
  assets: [
    {
      blockType: 'asset-banner',
      title: 'LUX SILVER',
      byline: 'The Silver Rush is Here.',
      media: silverMedia,
      ctas: {
        blockType: 'cta',
        items: [
          {
            title: "Learn More",
            href: "/silver",
            variant: 'outline'
          },
          {
            title: "Buy Now",
            href: "/",
            variant: 'primary'
          },
        ]
      } 
    },
    {
      blockType: 'asset-banner',
      title: 'LUX GOLD',
      byline: 'Responsibly manufactured, ethically sourced.',
      media: {
        blockType: 'video',
        videoProps, 
        sources: ['/assets/video/luxgold.mp4'],
          // From manually looking at aspect ratio
          // https://stackoverflow.com/questions/684015/how-can-i-get-the-resolution-width-and-height-for-a-video-file-from-a-linux-co
        dim: {
            // .67 ar
          width: 219,
          height: 327
        }
      },
      ctas: {
        blockType: 'cta',
        items: [
          {
            title: "Learn More",
            href: "/gold",
            variant: 'outline'
          },
          {
            title: "Buy Now",
            href: "/",
            variant: 'primary'
          },
        ]
      }
    },
    {
      blockType: 'asset-banner',
      title: 'LUX COIN',
      byline: 'Genesis Collection now available on Open Sea.',
      media: {
        blockType: 'video',
        videoProps, 
        image: '/assets/video/LUX-COIN-poster.jpg',
        sources: [
          '/assets/video/LUX-COIN-transcode.mp4', 
          '/assets/video/LUX-COIN-transcode.webm'
        ],
          // Determin aspect ration from dims manually...
          // https://stackoverflow.com/questions/684015/how-can-i-get-the-resolution-width-and-height-for-a-video-file-from-a-linux-co
        dim: {
          // dims are 546x540, let's cut in half
          width: 273,
          height: 270
        }
      },
      ctas: {
        blockType: 'cta',
        items: [
          {
            title: "Learn More",
            href: "/",
            variant: 'outline'
          },
          {
            component: <Button variant='primary' size='lg'>Waitlist</Button>,
            modal: {
              Comp: ContactDialog,
              title: 'Join the Waitlist',
              byline: 'Be the first to own LUX Coin',
              action: saveToListAction,
              actionEnclusure: {
                listId: 3211420,
                reply: "You're on the LUX Coin Whitelist. Join the official LUX telegram to access the drop. https://t.me/luxdefichat"
              }
            }
          },
        ]
      }
    },
    {
      blockType: 'asset-banner',
      title: 'LUX VALIDATOR',
      contentBefore: (<>
        <h6>FREE priority access to LUX events and NFT drops.</h6>
        <p>Get priority access to the launch.</p>
      </>),
      media: {
        blockType: 'video',
        videoProps, 
        image: '/assets/video/Lux-VALIDATOR-poster.jpg',
        sources: [
          '/assets/video/Lux-VALIDATOR-transcode.mp4', 
          '/assets/video/Lux-VALIDATOR-transcode.webm'
        ],
          // Determin aspect ration from dims manually...
          // https://stackoverflow.com/questions/684015/how-can-i-get-the-resolution-width-and-height-for-a-video-file-from-a-linux-co
        dim: {
          // dims are 656x484, let's cut in half
          width: 328,
          height: 242
        }
      },
      ctas: {
        blockType: 'cta',
        items: [
          {
            title: "Learn More",
            href: "/",
            variant: 'outline'
          },
          {
            component: <Button variant='primary' size='lg'>Waitlist</Button>,
            modal: {
              Comp: ContactDialog,
              title: 'Join the Waitlist',
              byline: 'Be the first to get access to LUX Validator.',
              action: saveToListAction,
              actionEnclusure: {
                listId: 3211418,
                reply: "You're on the LUX Validator Whitelist. Join the official LUX telegram to access the drop. https://t.me/luxdefichat"
              }
            }
          },
        ]
      }
    },
    {
      blockType: 'asset-banner',
      title: 'LUX CREDIT',
      byline: 'Never sell your crypto again.',
      media: {
        blockType: 'video',
        videoProps, 
        image: '/assets/video/Lux-CARD-poster.jpg',
        sources: [
          '/assets/video/LUX-CARD-transcode.mp4', 
          '/assets/video/LUX-CARD-transcode.webm'
        ],
          // Determin aspect ration from dims manually...
          // https://stackoverflow.com/questions/684015/how-can-i-get-the-resolution-width-and-height-for-a-video-file-from-a-linux-co
        dim: {
          // dims are 758x588, let's cut in half
          width: 379,
          height: 294
        }
      },
      ctas: {
        blockType: 'cta',
        items: [
          {
            title: "Learn More",
            href: "/",
            variant: 'outline'
          },
          {
            component: <Button variant='primary' size='lg'>Waitlist</Button>,
            modal: {
              Comp: ContactDialog,
              title: 'Join the Waitlist',
              byline: 'Be the first to get access to LUX Credit.',
              action: saveToListAction,
              actionEnclusure: {
                listId: 33211417,
                reply: "You're on the LUX Credit Whitelist. Join the official LUX telegram to access thedrop. https://t.me/luxdefichat"
              }
            }
          },
        ]
      }
    }
  ] as AssetBannerBlock[],
  bottom: {
    blockType: 'element',
    element: <BottomMDX /> 
  } as ElementBlock
}