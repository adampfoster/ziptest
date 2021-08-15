import { Box, Typography } from '@material-ui/core'
import React from 'react'
import { getProducts } from '../../models/network'
import styles from '../../styles/Products.module.scss'

const brand = 'Nike'

export const ProductSearch: React.FC = () => {
  const [results, setResults] = React.useState<any[]>([])

  React.useEffect(() => {
    getProducts([{ brand }, { cat: 'shoes' }]).then((response: any) => {
      console.log(
        '🚀 ~ file: ProductSearch.tsx ~ line 10 ~ getProducts ~ response',
        response
      )
      setResults(response?.data?.data)
    })
  }, [])

  return (
    <Box className={styles.product__results}>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Typography>More from {brand} - </Typography>
        <Typography>120 products from 8 retailers</Typography>
      </Box>
      {results.map((product: any) => (
        <Box className={styles['product__item']}>
          <Box className={styles['product__item--content']}>
            <Box className={styles['product__item--content--image']}>
              <img src={product?.attributes?.e_image_urls_search_jpg[0][0]} />
            </Box>
            <Box className={styles['product__item__title']}>
              {product.attributes.product_name}
            </Box>
            <Box className={styles['product__item__website']}>
              <a
                className={styles['product__item__brand']}
                href={product.attributes.retailer_url}
                style={{ color: 'blue' }}
              >
                {product.attributes.e_brand_formatted}
              </a>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  )
}
