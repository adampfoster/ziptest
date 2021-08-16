import { Box, Button, Typography } from '@material-ui/core'
import React from 'react'
import styles from '../../../styles/Products.module.scss'

export interface Facet {
  title: string
  term: string
  param: string
}

interface ProductHeroProps {
  title: string
  facetedFilter?: Facet[]
  setFacet: (facet: Facet) => void
}

export const ProductHero: React.FC<ProductHeroProps> = ({
  title,
  facetedFilter,
  setFacet,
}) => {
  const handleSelectFacet = (facet: Facet) => {
    setFacet(facet)
  }

  return (
    <Box className={styles['product__hero--container']}>
      <Box className={styles.product__hero}>
        <Box>
          <Typography
            style={{ color: '#fff', fontSize: '70px', fontWeight: 'bold' }}
            variant={'h1'}
            component={'h2'}
          >
            {title}
          </Typography>
          <Typography
            style={{ color: '#fff', fontSize: '25px' }}
            variant={'h1'}
            component={'h2'}
          >
            Pay in 4 interest-free installments
          </Typography>
          <Box
            style={{ padding: '20px 0', display: 'flex', flexDirection: 'row' }}
          >
            {facetedFilter &&
              facetedFilter?.map((facet: Facet) => (
                <Button
                  onClick={() => handleSelectFacet(facet)}
                  style={{
                    backgroundColor: '#fff',
                    color: '#003194',
                    marginRight: 10,
                    maxHeight: 38,
                    maxWidth: 115,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                    textTransform: 'capitalize',
                  }}
                  variant={'contained'}
                >
                  {facet.title}
                </Button>
              ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}