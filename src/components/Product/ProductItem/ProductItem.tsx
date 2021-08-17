import {
  Box, makeStyles,
} from '@material-ui/core'
import React from 'react'
import { Product } from '../Product.type'
import Image from 'next/image'
import styles from '../../../styles/Products.module.css'
import { background } from '@storybook/theming'

interface ProductItemProps {
  product: Product
  setProduct: (product: Product) => void
}

export const ProductItem: React.FC<ProductItemProps> = ({
  product,
  setProduct,
}) => {
  return (
    <Box className={styles['product__item']} onClick={() => setProduct(product)}>
      <Box className={styles['product__item--content']}>
        <Box className={styles['product__item--content--image']}>
          <Box style={{width:'200px', height: '100%', backgroundColor:'red'}}>
            <Box style={{background:`transparent url(${product.attributes.e_image_urls_search_jpg[0][0]}) no-repeat 50% 50%`, width:'100%', height:'100%'}}></Box>
            {/* <Image
              src={product?.attributes?.e_image_urls_search_jpg[0][0]}
              alt={product.attributes.product_name}
              width={250}
              height={'auto'}
            /> */}
          </Box>
        </Box>
        <Box className={styles['product__item__title']}>
          {product.attributes.product_name}
        </Box>
        <span className={styles['product__item__brand']}>
          <a href={product.attributes.retailer_url}>
            {product.attributes.e_brand_formatted}
          </a>
        </span>
        <div className={styles['product__item__price']}>
          ${product.attributes.retailer_price}
        </div>
        <div className={styles['product__item__payments']}>
          {`$${product.attributes.retailer_price} split into 4 easy payments`}
        </div>
      </Box>
    </Box>
  )
}
