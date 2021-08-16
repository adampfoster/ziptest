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
import Swal from 'sweetalert2'
import styles from '../../../styles/Products.module.css'
import { Product } from '../Product.type'
import { ProductItem } from '../ProductItem'
import { ResponseData } from '../ResponseDate.type'

const brand = 'Nike'

const crossSell = [
  { title: 'Air Max', term: 'airmax' },
  { title: 'Air Jordan', term: 'airjordan' },
  { title: 'Flyknit', term: 'flyknit' },
]

interface ProductSearchInfoProps {
  responseData: ResponseData
  products: Product[]
}

export const ProductSearchResults: React.FC<ProductSearchInfoProps> = ({
  products,
  responseData,
}) => {
  const [focusProduct, setFocusProduct] = React.useState<Product | null>(null)

  const handleCrossSell = (term: string) => {
    console.log('crossSell term', term)
    return
  }

  const handleCloseProductDetail = () => {
    setFocusProduct(null)
  }

  const handleAddProductToCart = () => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `${focusProduct?.attributes.e_product_name} has been added to the cart`,
      showConfirmButton: false,
      timer: 5000,
    })
  }

  return (
    <Box className={styles.product__results}>
      <Box
        className={styles['product__results__info']}
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Typography>
          More from {brand} -{' '}
          {crossSell.map((item: Record<string, string>, i: number) => (
            <span onClick={() => handleCrossSell(item.term)}>{item.title}</span>
          ))}
          ...
        </Typography>
        <Typography>
          {responseData?.meta?.pageSize} products from{' '}
          {responseData?.meta?.total} total products
        </Typography>
      </Box>
      <Dialog
        maxWidth={'md'}
        open={focusProduct !== null}
        onClose={handleCloseProductDetail}
      >
        <DialogContent>
          <DialogContentText>
            <span className={styles['product__detail__title']}>
              {focusProduct?.attributes.product_name}
            </span>
            <span className={styles['product__detail__brand']}>
              {focusProduct?.attributes.e_brand_formatted}
            </span>
            <span className={styles['product__detail__price']}>
              ${focusProduct?.attributes.retailer_price}
            </span>
            <Box className={styles['product__detail__scroller']}>
              <img
                src={focusProduct?.attributes.e_image_urls_og}
                width={'50%'}
                style={{ margin: '0 auto' }}
              />
            </Box>
          </DialogContentText>
          <DialogActions
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <Button variant={'outlined'} onClick={handleCloseProductDetail}>
              Cancel
            </Button>
            <Button
              style={{
                backgroundColor: '#140CA3',
                color: '#fff',
                fontWeight: 500,
              }}
              className={styles['product__detail__addtocart']}
              variant={'contained'}
              onClick={handleAddProductToCart}
            >
              Add to Cart
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
      {products.map((product: Product, i: number) => (
        <ProductItem key={i} product={product} setProduct={setFocusProduct} />
      ))}
    </Box>
  )
}
