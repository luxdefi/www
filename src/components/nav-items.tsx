import React from 'react'

import { type LinkItemDef }  from '@/types/blocks'
import LinkItem from './link-item'
import { ButtonVariants } from '@/primitives/button'

const NavItems: React.FC<{
  items: LinkItemDef[]
  className?: string,
  as?: React.ElementType
  itemClassName?: string,
  itemClassNameFromVariant?: (variant: ButtonVariants) => string
}> = ({ 
  items,
  className='', 
  itemClassName='',
  as:Tag='nav',  
  itemClassNameFromVariant 
}) => ( 
    items.length ? (
      <Tag className={className} >
        {items.map((item, index) => {

          const variant = item.variant ?? 'link'
          let extraClasses = '' 
          // note that linkFG (or any other variant of 'link') 
          // will not get assigned these classes,
          // and will remain styles is 'foreground' (hence the name)
          if (variant === 'link') {
            
            extraClasses+= ' text-nav hover:text-nav-hover'
            if (item.current) {
              extraClasses += ' text-nav-current'
            }
          } 
          else {
            extraClasses+= ' min-w-0'   
          }
          if (item.current) {
            extraClasses += ' pointer-events-none'
          }

          return (
            <LinkItem 
              item={item}
              key={index}
              size='default'
              className={
                extraClasses + ' ' + 
                itemClassName + ' ' + 
                (itemClassNameFromVariant && itemClassNameFromVariant(variant))
              } 
            />
          )
        })}
      </Tag>
    ) 
    : null
  )

  export default NavItems
