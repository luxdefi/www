import React  from 'react'

import { cn } from '@hanzo/ui/util'
import { LinkElement, buttonVariants } from '@hanzo/ui/primitives'
import { type Block} from '@hanzo/ui/blocks'
import { BuyItemButton } from '@hanzo/commerce'
  
import type ItemCTAsBlock from '@/blocks/def/item-ctas'

const ItemCTAsBlockComponent: React.FC<{
  block: Block
  className?: string
}> = ({
  block,
  className=''
}) => {

  if (block.blockType !== 'item-ctas') {
    return <>item-ctas block required</>
  }
  const ctas = block as ItemCTAsBlock
  
  return (ctas.skuPath || ctas.otherLink) ? (
    <div className={cn(
      (ctas.skuPath && ctas.otherLink) ? 'grid grid-cols-2 gap-2' : 'flex flex-row',
      'sm:flex sm:flex-row justify-center items-center sm:gap-4 lg:gap-6', 
      className
    )}>
    {ctas.otherLink && (
      <LinkElement 
        def={{
          href: ctas.otherLink.href,
          title: ctas.otherLink.title ? ctas.otherLink.title : 'Learn More'
        }} 
        className={cn(
          buttonVariants({ 
            variant: ctas.skuPath ? 'outline' : 'primary', 
            size: 'default', 
            rounded: 'md' }),
          'lg:min-w-[220px]  sm:min-w-[220px]'
        )}
      />
    )}
    {ctas.skuPath && (
      <BuyItemButton 
        skuPath={ctas.skuPath} 
        popupClx='w-[340px]' 
        size='default'
        className='lg:min-w-[220px] sm:min-w-[220px]'
      >
        {ctas.buyLabel ? ctas.buyLabel : 'Buy'}
      </BuyItemButton>
    )}
    </div>
  ) : null
}

export default ItemCTAsBlockComponent
