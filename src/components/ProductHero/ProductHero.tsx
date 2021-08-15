import { Box, Button, Typography } from '@material-ui/core'
import React from 'react'
import styles from '../../styles/Products.module.scss'

export const ProductHero: React.FC = () => {
  return (
    <Box className={styles['product__hero--container']}>
      <Box className={styles.product__hero}>
        <Box>
          <Typography
            style={{ color: '#fff', fontSize: '75px', fontWeight: 'bold' }}
            variant={'h1'}
            component={'h2'}
          >
            Nike React Sneakers
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
            <Button
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
              Men
            </Button>
            <Button
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
              Women
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
