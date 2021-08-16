import React from 'react'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { Facet, ProductHero } from '../components/Product/ProductHero'
import { ProductSearchResults } from '../components/Product/ProductSearchResults'
import { Product } from '../components/Product/Product.type'
import { getProducts } from '../models/network'

interface Params {
  [key: string]: string
}

const brand = 'Nike'

const Home: NextPage = () => {
  const [responseData, setResponseData] = React.useState<any>()
  const [products, setProducts] = React.useState<Product[]>([])
  const [facet, setFacet] = React.useState<Facet | null>(null)

  const searchProducts = (params: Params[]) => {
    getProducts(params).then((response: any) => {
      setResponseData(response?.data?.meta)
      setProducts(response?.data?.data)
    })
  }

  React.useEffect(() => {
    searchProducts([{ brand }, { cat: 'shoes' }])
  }, [])

  React.useEffect(() => {
    if (!facet) return
    searchProducts([
      { brand },
      { cat: 'shoes' },
      { [facet.param as string]: facet.term as string },
    ])
  }, [facet])

  return (
    <div className={styles.container}>
      <ProductHero
        setFacet={setFacet}
        title={'Nike React Sneakers'}
        facetedFilter={[
          { title: 'Men', term: 'male', param: 'gender' },
          { title: 'Women', term: 'female', param: 'gender' },
        ]}
      />
      <ProductSearchResults
        responseData={responseData}
        products={products}
        setFacet={setFacet}
      />
    </div>
  )
}

export default Home
