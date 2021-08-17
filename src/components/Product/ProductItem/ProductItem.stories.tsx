import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ProductItem } from './ProductItem'
import { Product } from '../Product.type'

export default {
  title: 'Zip/ProductItem',
  component: ProductItem,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof ProductItem>

const Template: ComponentStory<typeof ProductItem> = (args) => (
  <ProductItem {...args} />
)

const testProduct: Product = {
  type: 'product',
  id: 'feve_2000406356012_all',
  attributes: {
    availability: 'in-stock',
    color: 'Nude',
    converted_currency: '',
    converted_retailer_price: 0,
    converted_sale_price: 0,
    currency: 'USD',
    e_affiliate_url:
      'https://www.tkqlhce.com/click-8374178-12323263?url=https%3A%2F%2Fwww.forever21.com%2Fus%2FShop%2FCatalog%2FProduct%2Ff21%2Fshoes%2F2000406356%2F01',
    e_brand_formatted: 'Forever 21',
    e_cat_l1: ['shoes'],
    e_cat_l2: ['shoes-flats'],
    e_categories: ['clothing-shoes-sandals-flats'],
    e_categories_path: [
      'shoes',
      'shoes|shoes-flats',
      'shoes|shoes-flats|shoes-flats-sandals',
    ],
    e_color: 'neutral-nude',
    e_color_parent: 'neutral',
    e_friendly_id:
      'nude-forever21-forever-21-rhinestone-toe-thong-sandals-2000406356012-feve',
    e_friendly_ids: [
      'nude-forever21-forever-21-rhinestone-toe-thong-sandals-2000406356012-feve',
    ],
    e_gender_list: ['female'],
    e_image_urls_detail_jpg: [
      [
        'https://images.theurge.com/forever-twentyone/G-ja5Oo0y3QSQMq4J_fM8x3b-dY=/main/1x/230-345/nude-forever21-forever-21-rhinestone-toe-thong-sandals-1.jpg',
        'https://images.theurge.com/forever-twentyone/G-ja5Oo0y3QSQMq4J_fM8x3b-dY=/main/2x/330-495/nude-forever21-forever-21-rhinestone-toe-thong-sandals-1.jpg',
        'https://images.theurge.com/forever-twentyone/G-ja5Oo0y3QSQMq4J_fM8x3b-dY=/main/3x/330-495/nude-forever21-forever-21-rhinestone-toe-thong-sandals-1.jpg',
      ],
    ],
    e_image_urls_detail_ratio: [0.67],
    e_image_urls_detail_webp: [
      [
        'https://images.theurge.com/forever-twentyone/G-ja5Oo0y3QSQMq4J_fM8x3b-dY=/main/1x/230-345/nude-forever21-forever-21-rhinestone-toe-thong-sandals-1.webp',
        'https://images.theurge.com/forever-twentyone/G-ja5Oo0y3QSQMq4J_fM8x3b-dY=/main/2x/330-495/nude-forever21-forever-21-rhinestone-toe-thong-sandals-1.webp',
        'https://images.theurge.com/forever-twentyone/G-ja5Oo0y3QSQMq4J_fM8x3b-dY=/main/3x/330-495/nude-forever21-forever-21-rhinestone-toe-thong-sandals-1.webp',
      ],
    ],
    e_image_urls_og:
      'https://images.theurge.com/forever-twentyone/G-ja5Oo0y3QSQMq4J_fM8x3b-dY=/size/1200x1200/1200-1200/nude-forever21-forever-21-rhinestone-toe-thong-sandals-1.jpg',
    e_image_urls_search_jpg: [
      [
        'https://images.theurge.com/forever-twentyone/G-ja5Oo0y3QSQMq4J_fM8x3b-dY=/thumb/1x/170-272/nude-forever21-forever-21-rhinestone-toe-thong-sandals-1.jpg',
        'https://images.theurge.com/forever-twentyone/G-ja5Oo0y3QSQMq4J_fM8x3b-dY=/thumb/2x/330-495/nude-forever21-forever-21-rhinestone-toe-thong-sandals-1.jpg',
        'https://images.theurge.com/forever-twentyone/G-ja5Oo0y3QSQMq4J_fM8x3b-dY=/thumb/3x/330-495/nude-forever21-forever-21-rhinestone-toe-thong-sandals-1.jpg',
      ],
    ],
    e_image_urls_search_webp: [
      [
        'https://images.theurge.com/forever-twentyone/G-ja5Oo0y3QSQMq4J_fM8x3b-dY=/thumb/1x/170-272/nude-forever21-forever-21-rhinestone-toe-thong-sandals-1.webp',
        'https://images.theurge.com/forever-twentyone/G-ja5Oo0y3QSQMq4J_fM8x3b-dY=/thumb/2x/330-495/nude-forever21-forever-21-rhinestone-toe-thong-sandals-1.webp',
        'https://images.theurge.com/forever-twentyone/G-ja5Oo0y3QSQMq4J_fM8x3b-dY=/thumb/3x/330-495/nude-forever21-forever-21-rhinestone-toe-thong-sandals-1.webp',
      ],
    ],
    e_is_free_returns: false,
    e_is_free_shipping: false,
    e_is_on_sale: true,
    e_item_code: '2000406356012',
    e_material: 'material-Rubber',
    e_product_name: 'Forever 21 Rhinestone Toe-Thong Sandals',
    e_retailer_display_domain: 'forever21.com',
    e_retailer_display_name: 'Forever 21',
    e_retailer_facet_name: 'Forever 21',
    e_retailer_industry: 'fashion',
    e_retailer_short_id: 'feve',
    e_sales: ['10', '20', 'on-sale'],
    e_subcat: ['shoes-flats-sandals'],
    friendly_alternates: {
      'en-au':
        'nude-forever21-forever-21-rhinestone-toe-thong-sandals-2000406356012-feve',
      'en-gb':
        'nude-forever21-forever-21-rhinestone-toe-thong-sandals-2000406356012-feve',
      'en-nz':
        'nude-forever21-forever-21-rhinestone-toe-thong-sandals-2000406356012-feve',
      'en-us':
        'nude-forever21-forever-21-rhinestone-toe-thong-sandals-2000406356012-feve',
      'en-za':
        'nude-forever21-forever-21-rhinestone-toe-thong-sandals-2000406356012-feve',
    },
    friendly_canonical:
      'nude-forever21-forever-21-rhinestone-toe-thong-sandals-2000406356012-feve',
    gender: 'female',
    hreflangs: ['en-us', 'en-zz'],
    item_code: '2000406356012',
    long_description:
      'DetailsA pair of flat sandals featuring a caged rhinestone vamp, toe thong, ankle strap, and padded insole.- This is an independent brand and not a Forever 21 branded item.Content + Care- Padded insole, textured outsole- Upper: 100% polyvinyl chloride- Lining: 100% polyurethane- Outsole: 100% rubber',
    product_name: 'Forever 21 Rhinestone Toe-Thong Sandals',
    retailer_code: 'enus-forever-twentyone',
    retailer_price: 18,
    retailer_url:
      'https://www.forever21.com/us/Shop/Catalog/Product/f21/shoes/2000406356/01',
    sale_price: 13.99,
    sku_code: '2000406356012',
    updated_at: '2020-10-05T13:49:08.083+00:00',
  },
}

export const Primary = Template.bind({})
Primary.args = {
  product: testProduct,
}

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
