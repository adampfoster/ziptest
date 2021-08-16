import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Typography,
} from '@material-ui/core'
import React from 'react'
import styles from '../../../styles/Products.module.scss'
import { Product } from '../Product.type'

interface ProductItemProps {
  product: Product
  setProduct: (product: Product) => void
}

export const ProductItem: React.FC<ProductItemProps> = ({
  product,
  setProduct,
}) => {
  return (
    <Box
      className={styles['product__item']}
      onClick={() => setProduct(product)}
    >
      <Box className={styles['product__item--content']}>
        <Box className={styles['product__item--content--image']}>
          <img src={product?.attributes?.e_image_urls_search_jpg[0][0]} />
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
