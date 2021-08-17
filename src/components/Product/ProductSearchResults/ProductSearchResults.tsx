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
import { Facet } from '../ProductHero'
import { ProductItem } from '../ProductItem'
import { ResponseData } from '../ResponseDate.type'
import Image from 'next/image'


const brand = 'Nike'

const crossSell = [
  { title: 'Air Max', term: 'nike air max' },
  { title: 'Air Jordan', term: 'nike air jordan' },
  { title: 'Flyknit', term: 'nike flyknit' },
]

interface ProductSearchResultsProps {
  responseData: ResponseData
  products: Product[]
  setFacet: (facet: Facet) => void
}

export const ProductSearchResults: React.FC<ProductSearchResultsProps> = ({
  products,
  responseData,
  setFacet,
}) => {
  const [focusProduct, setFocusProduct] = React.useState<Product | null>(null)

  const handleCrossSell = (term: string) => {
    setFacet({ title: 'Query', param: 'q', term })
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
            <React.Fragment key={i}>
              <span
                className={styles['product__results__info__term']}
                onClick={() => handleCrossSell(encodeURIComponent(item.term))}
              >
                {item.title}
              </span>
              <span>{i + 1 < crossSell.length ? ', ' : ''}</span>
            </React.Fragment>
          ))}
          ...
        </Typography>
        <Typography>
          {responseData?.meta?.total < responseData?.meta?.pageSize
            ? responseData?.meta?.total
            : responseData?.meta?.pageSize}{' '}
          products from {responseData?.meta?.total} total products
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
            {focusProduct && (
              <Box className={'product__detail__scroller'}>
                <Box style={{ margin: '0 auto', width: '100%', height:'100%' }}>
                  <Image
                    src={focusProduct.attributes.e_image_urls_og}
                    width={'100%'}
                    height={'100%'}
                    layout={'responsive'}
                    alt={focusProduct.attributes.product_name}
                  />
                </Box>
              </Box>
            )}
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
      <Box
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignContent: 'center',
          margin: '20px auto 60px',
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((page: number, i: number) => {
          if (
            responseData?.meta?.total - responseData?.meta?.pageSize * (i + 1) <
            1
          ) {
            return
          }
          return (
            <Button
              style={{ margin: 5 }}
              variant={'outlined'}
              key={i}
              onClick={() =>
                setFacet({ title: page, param: 'page', term: page })
              }
            >
              {page}
            </Button>
          )
        })}
      </Box>
    </Box>
  )
}
