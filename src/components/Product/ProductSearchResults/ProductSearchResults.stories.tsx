import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ProductSearchResults } from './ProductSearchResults'
import { Product } from '../Product.type'

export default {
  title: 'Zip/ProductSearchResults',
  component: ProductSearchResults,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof ProductSearchResults>

const Template: ComponentStory<typeof ProductSearchResults> = (args) => (
  <ProductSearchResults {...args} />
)

const products: Product[] = [
  {
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
  },
  {
    type: 'product',
    id: 'rfntw_465048_all',
    attributes: {
      availability: 'in-stock',
      color: 'Garnet',
      converted_currency: '',
      converted_retailer_price: 0,
      converted_sale_price: 0,
      currency: 'EUR',
      e_affiliate_url:
        'http://www.dpbolvw.net/click-8374178-12950202?url=https%3A%2F%2Fwww.raffaello-network.com%2Fenglish%2Ffashion-details%2F465048%2F29%2FPrada%2520Womens%2520Shoes.html',
      e_brand_formatted: 'Prada',
      e_cat_l1: ['shoes'],
      e_cat_l2: ['shoes-heels'],
      e_categories: ['clothing-shoes-heels-pump'],
      e_categories_path: [
        'shoes',
        'shoes|shoes-heels',
        'shoes|shoes-heels|shoes-heels-pumps',
      ],
      e_color: 'red-garnet',
      e_color_parent: 'red',
      e_friendly_id: 'garnet-prada-shoes-for-women-465048-rfntw',
      e_friendly_ids: ['garnet-prada-shoes-for-women-465048-rfntw'],
      e_gender_list: ['female'],
      e_image_urls_detail_jpg: [
        [
          'https://images.theurge.com/raffaello-network/LVfmBzu-pEwcAtlnDaSXvFvLiDg=/main/2x/690-690/garnet-prada-shoes-for-women-1.jpg',
          'https://images.theurge.com/raffaello-network/LVfmBzu-pEwcAtlnDaSXvFvLiDg=/main/1x/345-345/garnet-prada-shoes-for-women-1.jpg',
          'https://images.theurge.com/raffaello-network/LVfmBzu-pEwcAtlnDaSXvFvLiDg=/main/3x/1035-1035/garnet-prada-shoes-for-women-1.jpg',
        ],
        [
          'https://images.theurge.com/raffaello-network/BBgFnHkwIqiqz1-YnknW8Vs520Q=/main/2x/690-690/garnet-prada-shoes-for-women-2.jpg',
          'https://images.theurge.com/raffaello-network/BBgFnHkwIqiqz1-YnknW8Vs520Q=/main/1x/345-345/garnet-prada-shoes-for-women-2.jpg',
          'https://images.theurge.com/raffaello-network/BBgFnHkwIqiqz1-YnknW8Vs520Q=/main/3x/1035-1035/garnet-prada-shoes-for-women-2.jpg',
        ],
        [
          'https://images.theurge.com/raffaello-network/ZtBgF7uzZ9D08YNkW0Nvb9uamZc=/main/2x/690-690/garnet-prada-shoes-for-women-3.jpg',
          'https://images.theurge.com/raffaello-network/ZtBgF7uzZ9D08YNkW0Nvb9uamZc=/main/1x/345-345/garnet-prada-shoes-for-women-3.jpg',
          'https://images.theurge.com/raffaello-network/ZtBgF7uzZ9D08YNkW0Nvb9uamZc=/main/3x/1035-1035/garnet-prada-shoes-for-women-3.jpg',
        ],
        [
          'https://images.theurge.com/raffaello-network/AnsOX3k7E2BkdVNKn_HCHUXoylc=/main/2x/690-690/garnet-prada-shoes-for-women-4.jpg',
          'https://images.theurge.com/raffaello-network/AnsOX3k7E2BkdVNKn_HCHUXoylc=/main/1x/345-345/garnet-prada-shoes-for-women-4.jpg',
          'https://images.theurge.com/raffaello-network/AnsOX3k7E2BkdVNKn_HCHUXoylc=/main/3x/1035-1035/garnet-prada-shoes-for-women-4.jpg',
        ],
      ],
      e_image_urls_detail_ratio: [1, 1, 1, 1],
      e_image_urls_detail_webp: [
        [
          'https://images.theurge.com/raffaello-network/LVfmBzu-pEwcAtlnDaSXvFvLiDg=/main/1x/345-345/garnet-prada-shoes-for-women-1.webp',
          'https://images.theurge.com/raffaello-network/LVfmBzu-pEwcAtlnDaSXvFvLiDg=/main/2x/690-690/garnet-prada-shoes-for-women-1.webp',
          'https://images.theurge.com/raffaello-network/LVfmBzu-pEwcAtlnDaSXvFvLiDg=/main/3x/1035-1035/garnet-prada-shoes-for-women-1.webp',
        ],
        [
          'https://images.theurge.com/raffaello-network/BBgFnHkwIqiqz1-YnknW8Vs520Q=/main/1x/345-345/garnet-prada-shoes-for-women-2.webp',
          'https://images.theurge.com/raffaello-network/BBgFnHkwIqiqz1-YnknW8Vs520Q=/main/2x/690-690/garnet-prada-shoes-for-women-2.webp',
          'https://images.theurge.com/raffaello-network/BBgFnHkwIqiqz1-YnknW8Vs520Q=/main/3x/1035-1035/garnet-prada-shoes-for-women-2.webp',
        ],
        [
          'https://images.theurge.com/raffaello-network/ZtBgF7uzZ9D08YNkW0Nvb9uamZc=/main/1x/345-345/garnet-prada-shoes-for-women-3.webp',
          'https://images.theurge.com/raffaello-network/ZtBgF7uzZ9D08YNkW0Nvb9uamZc=/main/2x/690-690/garnet-prada-shoes-for-women-3.webp',
          'https://images.theurge.com/raffaello-network/ZtBgF7uzZ9D08YNkW0Nvb9uamZc=/main/3x/1035-1035/garnet-prada-shoes-for-women-3.webp',
        ],
        [
          'https://images.theurge.com/raffaello-network/AnsOX3k7E2BkdVNKn_HCHUXoylc=/main/1x/345-345/garnet-prada-shoes-for-women-4.webp',
          'https://images.theurge.com/raffaello-network/AnsOX3k7E2BkdVNKn_HCHUXoylc=/main/2x/690-690/garnet-prada-shoes-for-women-4.webp',
          'https://images.theurge.com/raffaello-network/AnsOX3k7E2BkdVNKn_HCHUXoylc=/main/3x/1035-1035/garnet-prada-shoes-for-women-4.webp',
        ],
      ],
      e_image_urls_og:
        'https://images.theurge.com/raffaello-network/LVfmBzu-pEwcAtlnDaSXvFvLiDg=/size/1200x1200/1200-1200/garnet-prada-shoes-for-women-1.jpg',
      e_image_urls_search_jpg: [
        [
          'https://images.theurge.com/raffaello-network/LVfmBzu-pEwcAtlnDaSXvFvLiDg=/thumb/1x/170-126/garnet-prada-shoes-for-women-1.jpg',
          'https://images.theurge.com/raffaello-network/LVfmBzu-pEwcAtlnDaSXvFvLiDg=/thumb/2x/340-253/garnet-prada-shoes-for-women-1.jpg',
          'https://images.theurge.com/raffaello-network/LVfmBzu-pEwcAtlnDaSXvFvLiDg=/thumb/3x/510-379/garnet-prada-shoes-for-women-1.jpg',
        ],
        [
          'https://images.theurge.com/raffaello-network/BBgFnHkwIqiqz1-YnknW8Vs520Q=/thumb/1x/170-137/garnet-prada-shoes-for-women-2.jpg',
          'https://images.theurge.com/raffaello-network/BBgFnHkwIqiqz1-YnknW8Vs520Q=/thumb/2x/340-273/garnet-prada-shoes-for-women-2.jpg',
          'https://images.theurge.com/raffaello-network/BBgFnHkwIqiqz1-YnknW8Vs520Q=/thumb/3x/510-410/garnet-prada-shoes-for-women-2.jpg',
        ],
        [
          'https://images.theurge.com/raffaello-network/ZtBgF7uzZ9D08YNkW0Nvb9uamZc=/thumb/1x/170-132/garnet-prada-shoes-for-women-3.jpg',
          'https://images.theurge.com/raffaello-network/ZtBgF7uzZ9D08YNkW0Nvb9uamZc=/thumb/2x/340-264/garnet-prada-shoes-for-women-3.jpg',
          'https://images.theurge.com/raffaello-network/ZtBgF7uzZ9D08YNkW0Nvb9uamZc=/thumb/3x/510-396/garnet-prada-shoes-for-women-3.jpg',
        ],
        [
          'https://images.theurge.com/raffaello-network/AnsOX3k7E2BkdVNKn_HCHUXoylc=/thumb/1x/170-157/garnet-prada-shoes-for-women-4.jpg',
          'https://images.theurge.com/raffaello-network/AnsOX3k7E2BkdVNKn_HCHUXoylc=/thumb/2x/340-314/garnet-prada-shoes-for-women-4.jpg',
          'https://images.theurge.com/raffaello-network/AnsOX3k7E2BkdVNKn_HCHUXoylc=/thumb/3x/510-471/garnet-prada-shoes-for-women-4.jpg',
        ],
      ],
      e_image_urls_search_webp: [
        [
          'https://images.theurge.com/raffaello-network/LVfmBzu-pEwcAtlnDaSXvFvLiDg=/thumb/2x/340-253/garnet-prada-shoes-for-women-1.webp',
          'https://images.theurge.com/raffaello-network/LVfmBzu-pEwcAtlnDaSXvFvLiDg=/thumb/1x/170-126/garnet-prada-shoes-for-women-1.webp',
          'https://images.theurge.com/raffaello-network/LVfmBzu-pEwcAtlnDaSXvFvLiDg=/thumb/3x/510-379/garnet-prada-shoes-for-women-1.webp',
        ],
        [
          'https://images.theurge.com/raffaello-network/BBgFnHkwIqiqz1-YnknW8Vs520Q=/thumb/2x/340-273/garnet-prada-shoes-for-women-2.webp',
          'https://images.theurge.com/raffaello-network/BBgFnHkwIqiqz1-YnknW8Vs520Q=/thumb/1x/170-137/garnet-prada-shoes-for-women-2.webp',
          'https://images.theurge.com/raffaello-network/BBgFnHkwIqiqz1-YnknW8Vs520Q=/thumb/3x/510-410/garnet-prada-shoes-for-women-2.webp',
        ],
        [
          'https://images.theurge.com/raffaello-network/ZtBgF7uzZ9D08YNkW0Nvb9uamZc=/thumb/2x/340-264/garnet-prada-shoes-for-women-3.webp',
          'https://images.theurge.com/raffaello-network/ZtBgF7uzZ9D08YNkW0Nvb9uamZc=/thumb/1x/170-132/garnet-prada-shoes-for-women-3.webp',
          'https://images.theurge.com/raffaello-network/ZtBgF7uzZ9D08YNkW0Nvb9uamZc=/thumb/3x/510-396/garnet-prada-shoes-for-women-3.webp',
        ],
        [
          'https://images.theurge.com/raffaello-network/AnsOX3k7E2BkdVNKn_HCHUXoylc=/thumb/2x/340-314/garnet-prada-shoes-for-women-4.webp',
          'https://images.theurge.com/raffaello-network/AnsOX3k7E2BkdVNKn_HCHUXoylc=/thumb/1x/170-157/garnet-prada-shoes-for-women-4.webp',
          'https://images.theurge.com/raffaello-network/AnsOX3k7E2BkdVNKn_HCHUXoylc=/thumb/3x/510-471/garnet-prada-shoes-for-women-4.webp',
        ],
      ],
      e_is_free_returns: true,
      e_is_free_shipping: false,
      e_is_on_sale: true,
      e_item_code: '465048',
      e_material: 'material-leather',
      e_payment_options: ['paypal'],
      e_product_name: 'Shoes for Women',
      e_retailer_display_domain: 'raffaello-network.com',
      e_retailer_display_name: 'Raffaello Network',
      e_retailer_facet_name: 'Raffaello Network',
      e_retailer_industry: 'fashion',
      e_retailer_short_id: 'rfntw',
      e_retailer_type: 'mid',
      e_returns_link: 'https://www.raffaello-network.com/english/refunds',
      e_returns_period: [15],
      e_sales: ['10', '20', '30', '40', '50', '60', 'on-sale'],
      e_shipping_deals: ['free-returns'],
      e_shipping_link:
        'https://www.raffaello-network.com/english/refunds#shippingCostModal',
      e_subcat: ['shoes-heels-pumps'],
      friendly_alternates: {
        'en-au': 'garnet-prada-shoes-for-women-465048-rfntw',
        'en-gb': 'garnet-prada-shoes-for-women-465048-rfntw',
        'en-nz': 'garnet-prada-shoes-for-women-465048-rfntw',
        'en-us': 'garnet-prada-shoes-for-women-465048-rfntw',
        'en-za': 'garnet-prada-shoes-for-women-465048-rfntw',
      },
      friendly_canonical: 'garnet-prada-shoes-for-women-465048-rfntw',
      gender: 'female',
      hreflangs: ['en-it', 'en-zz'],
      item_code: '465048',
      long_description:
        'Pumps • Squared Toe • Fringes Details • Buckle on Side • Leather Insole with Prada Logo • Covered Heel and Plateau • Platform 4 cm • Leather Sole with Metal Prada Logo • Made in Italy',
      material: 'Suede Leather',
      product_name: 'Shoes for Women',
      retailer_code: 'enit-raffaello-network',
      retailer_price: 831,
      retailer_url:
        'https://www.raffaello-network.com/english/fashion-details/465048/29/Prada%20Womens%20Shoes.html',
      sale_price: 328,
      sku_code: '465048',
      updated_at: '2020-10-07T04:03:16.926+00:00',
    },
  },
  {
    type: 'product',
    id: 'feve_2000407456012_all',
    attributes: {
      availability: 'in-stock',
      color: 'Black',
      converted_currency: '',
      converted_retailer_price: 0,
      converted_sale_price: 0,
      currency: 'USD',
      e_affiliate_url:
        'https://www.tkqlhce.com/click-8374178-12323263?url=https%3A%2F%2Fwww.forever21.com%2Fus%2FShop%2FCatalog%2FProduct%2Ff21%2Fshoes%2F2000407456%2F01',
      e_brand_formatted: 'Forever 21',
      e_cat_l1: ['shoes'],
      e_cat_l2: ['shoes-heels'],
      e_categories: ['clothing-shoes-heels-mule'],
      e_categories_path: [
        'shoes',
        'shoes|shoes-heels',
        'shoes|shoes-heels|shoes-heels-mules',
      ],
      e_color: 'black',
      e_color_parent: 'black',
      e_friendly_id:
        'black-forever21-forever-21-faux-suede-pointed-toe-mules-2000407456012-feve',
      e_friendly_ids: [
        'black-forever21-forever-21-faux-suede-pointed-toe-mules-2000407456012-feve',
      ],
      e_gender_list: ['female'],
      e_image_urls_detail_jpg: [
        [
          'https://images.theurge.com/forever-twentyone/Go4WTfDNPZH5Z54fkrhHBExHmeQ=/main/1x/230-345/black-forever21-forever-21-faux-suede-pointed-toe-mules-1.jpg',
          'https://images.theurge.com/forever-twentyone/Go4WTfDNPZH5Z54fkrhHBExHmeQ=/main/2x/330-495/black-forever21-forever-21-faux-suede-pointed-toe-mules-1.jpg',
          'https://images.theurge.com/forever-twentyone/Go4WTfDNPZH5Z54fkrhHBExHmeQ=/main/3x/330-495/black-forever21-forever-21-faux-suede-pointed-toe-mules-1.jpg',
        ],
      ],
      e_image_urls_detail_ratio: [0.67],
      e_image_urls_detail_webp: [
        [
          'https://images.theurge.com/forever-twentyone/Go4WTfDNPZH5Z54fkrhHBExHmeQ=/main/1x/230-345/black-forever21-forever-21-faux-suede-pointed-toe-mules-1.webp',
          'https://images.theurge.com/forever-twentyone/Go4WTfDNPZH5Z54fkrhHBExHmeQ=/main/2x/330-495/black-forever21-forever-21-faux-suede-pointed-toe-mules-1.webp',
          'https://images.theurge.com/forever-twentyone/Go4WTfDNPZH5Z54fkrhHBExHmeQ=/main/3x/330-495/black-forever21-forever-21-faux-suede-pointed-toe-mules-1.webp',
        ],
      ],
      e_image_urls_og:
        'https://images.theurge.com/forever-twentyone/Go4WTfDNPZH5Z54fkrhHBExHmeQ=/size/1200x1200/1200-1200/black-forever21-forever-21-faux-suede-pointed-toe-mules-1.jpg',
      e_image_urls_search_jpg: [
        [
          'https://images.theurge.com/forever-twentyone/Go4WTfDNPZH5Z54fkrhHBExHmeQ=/thumb/1x/170-259/black-forever21-forever-21-faux-suede-pointed-toe-mules-1.jpg',
          'https://images.theurge.com/forever-twentyone/Go4WTfDNPZH5Z54fkrhHBExHmeQ=/thumb/2x/330-495/black-forever21-forever-21-faux-suede-pointed-toe-mules-1.jpg',
          'https://images.theurge.com/forever-twentyone/Go4WTfDNPZH5Z54fkrhHBExHmeQ=/thumb/3x/330-495/black-forever21-forever-21-faux-suede-pointed-toe-mules-1.jpg',
        ],
      ],
      e_image_urls_search_webp: [
        [
          'https://images.theurge.com/forever-twentyone/Go4WTfDNPZH5Z54fkrhHBExHmeQ=/thumb/1x/170-259/black-forever21-forever-21-faux-suede-pointed-toe-mules-1.webp',
          'https://images.theurge.com/forever-twentyone/Go4WTfDNPZH5Z54fkrhHBExHmeQ=/thumb/2x/330-495/black-forever21-forever-21-faux-suede-pointed-toe-mules-1.webp',
          'https://images.theurge.com/forever-twentyone/Go4WTfDNPZH5Z54fkrhHBExHmeQ=/thumb/3x/330-495/black-forever21-forever-21-faux-suede-pointed-toe-mules-1.webp',
        ],
      ],
      e_is_free_returns: false,
      e_is_free_shipping: false,
      e_item_code: '2000407456012',
      e_material: 'material-suede',
      e_product_name: 'Forever 21 Faux Suede Pointed Toe Mules',
      e_retailer_display_domain: 'forever21.com',
      e_retailer_display_name: 'Forever 21',
      e_retailer_facet_name: 'Forever 21',
      e_retailer_industry: 'fashion',
      e_retailer_short_id: 'feve',
      e_subcat: ['shoes-heels-mules'],
      friendly_alternates: {
        'en-au':
          'black-forever21-forever-21-faux-suede-pointed-toe-mules-2000407456012-feve',
        'en-gb':
          'black-forever21-forever-21-faux-suede-pointed-toe-mules-2000407456012-feve',
        'en-nz':
          'black-forever21-forever-21-faux-suede-pointed-toe-mules-2000407456012-feve',
        'en-us':
          'black-forever21-forever-21-faux-suede-pointed-toe-mules-2000407456012-feve',
        'en-za':
          'black-forever21-forever-21-faux-suede-pointed-toe-mules-2000407456012-feve',
      },
      friendly_canonical:
        'black-forever21-forever-21-faux-suede-pointed-toe-mules-2000407456012-feve',
      gender: 'female',
      hreflangs: ['en-us', 'en-zz'],
      item_code: '2000407456012',
      long_description:
        'DetailsA pair of faux suede mules featuring a pointed toe, slip on styling, and a faux wooden block heel.- This is an independent brand and not a Forever 21 branded item.Content + Care- Padded insole, textured outsole- All man-made materialsSize + Fit- Heel height: %22',
      product_name: 'Forever 21 Faux Suede Pointed Toe Mules',
      retailer_code: 'enus-forever-twentyone',
      retailer_price: 25,
      retailer_url:
        'https://www.forever21.com/us/Shop/Catalog/Product/f21/shoes/2000407456/01',
      sku_code: '2000407456012',
      updated_at: '2020-10-05T13:53:54.362+00:00',
    },
  },
  {
    type: 'product',
    id: 'cz_4724180090968_all',
    attributes: {
      availability: 'in-stock',
      converted_currency: '',
      converted_retailer_price: 0,
      converted_sale_price: 0,
      currency: 'EUR',
      e_affiliate_url:
        'https://shareasale.com/r.cfm?b=1313849&u=1552241&m=85846&urllink=https%3A%2F%2Fwww.carolazeta.com%2Fcollections%2Fwomen-sneakers-on-sale%2Fproducts%2Fgold-sneakers-vibram_002f54020_cz',
      e_brand_formatted: 'Atlantic Stars',
      e_cat_l1: ['shoes'],
      e_cat_l2: ['shoes-sneakers'],
      e_categories: ['clothing-shoes-sneaker'],
      e_categories_path: ['shoes', 'shoes|shoes-sneakers'],
      e_color: 'gold',
      e_color_parent: 'gold',
      e_free_shipping_currency: 'EUR',
      e_free_shipping_over: [500],
      e_friendly_id: 'atlantic-stars-gold-sneakers-vibram-4724180090968-cz',
      e_friendly_ids: ['atlantic-stars-gold-sneakers-vibram-4724180090968-cz'],
      e_gender_list: ['female'],
      e_image_urls_detail_jpg: [
        [
          'https://images.theurge.com/carola-zeta/M9JpvX5vMxFL2IOz2BH7DScaQ1w=/main/1x/230-345/atlantic-stars-gold-sneakers-vibram-1.jpg',
          'https://images.theurge.com/carola-zeta/M9JpvX5vMxFL2IOz2BH7DScaQ1w=/main/2x/460-690/atlantic-stars-gold-sneakers-vibram-1.jpg',
          'https://images.theurge.com/carola-zeta/M9JpvX5vMxFL2IOz2BH7DScaQ1w=/main/3x/691-1035/atlantic-stars-gold-sneakers-vibram-1.jpg',
        ],
        [
          'https://images.theurge.com/carola-zeta/dBBA8HBYjWa2Pv7yg4dFtJNVDAY=/main/1x/230-345/atlantic-stars-gold-sneakers-vibram-2.jpg',
          'https://images.theurge.com/carola-zeta/dBBA8HBYjWa2Pv7yg4dFtJNVDAY=/main/2x/460-690/atlantic-stars-gold-sneakers-vibram-2.jpg',
          'https://images.theurge.com/carola-zeta/dBBA8HBYjWa2Pv7yg4dFtJNVDAY=/main/3x/691-1035/atlantic-stars-gold-sneakers-vibram-2.jpg',
        ],
        [
          'https://images.theurge.com/carola-zeta/AYq7C2nmB7jndvUA1LPKH1MDRn8=/main/1x/230-345/atlantic-stars-gold-sneakers-vibram-3.jpg',
          'https://images.theurge.com/carola-zeta/AYq7C2nmB7jndvUA1LPKH1MDRn8=/main/2x/460-690/atlantic-stars-gold-sneakers-vibram-3.jpg',
          'https://images.theurge.com/carola-zeta/AYq7C2nmB7jndvUA1LPKH1MDRn8=/main/3x/691-1035/atlantic-stars-gold-sneakers-vibram-3.jpg',
        ],
        [
          'https://images.theurge.com/carola-zeta/kOFvKxDIHKGcB2LnvJ13ILajMdE=/main/1x/230-345/atlantic-stars-gold-sneakers-vibram-4.jpg',
          'https://images.theurge.com/carola-zeta/kOFvKxDIHKGcB2LnvJ13ILajMdE=/main/2x/460-690/atlantic-stars-gold-sneakers-vibram-4.jpg',
          'https://images.theurge.com/carola-zeta/kOFvKxDIHKGcB2LnvJ13ILajMdE=/main/3x/691-1035/atlantic-stars-gold-sneakers-vibram-4.jpg',
        ],
        [
          'https://images.theurge.com/carola-zeta/oy4BKFnG41QThSsb4A3cMk_omys=/main/1x/230-345/atlantic-stars-gold-sneakers-vibram-5.jpg',
          'https://images.theurge.com/carola-zeta/oy4BKFnG41QThSsb4A3cMk_omys=/main/2x/460-690/atlantic-stars-gold-sneakers-vibram-5.jpg',
          'https://images.theurge.com/carola-zeta/oy4BKFnG41QThSsb4A3cMk_omys=/main/3x/691-1035/atlantic-stars-gold-sneakers-vibram-5.jpg',
        ],
        [
          'https://images.theurge.com/carola-zeta/8HHwh5bBz1kqrCIZ-bsoymiqnDI=/main/1x/230-345/atlantic-stars-gold-sneakers-vibram-6.jpg',
          'https://images.theurge.com/carola-zeta/8HHwh5bBz1kqrCIZ-bsoymiqnDI=/main/2x/460-690/atlantic-stars-gold-sneakers-vibram-6.jpg',
          'https://images.theurge.com/carola-zeta/8HHwh5bBz1kqrCIZ-bsoymiqnDI=/main/3x/691-1035/atlantic-stars-gold-sneakers-vibram-6.jpg',
        ],
      ],
      e_image_urls_detail_ratio: [0.67, 0.67, 0.67, 0.67, 0.67, 0.67],
      e_image_urls_detail_webp: [
        [
          'https://images.theurge.com/carola-zeta/M9JpvX5vMxFL2IOz2BH7DScaQ1w=/main/1x/230-345/atlantic-stars-gold-sneakers-vibram-1.webp',
          'https://images.theurge.com/carola-zeta/M9JpvX5vMxFL2IOz2BH7DScaQ1w=/main/2x/460-690/atlantic-stars-gold-sneakers-vibram-1.webp',
          'https://images.theurge.com/carola-zeta/M9JpvX5vMxFL2IOz2BH7DScaQ1w=/main/3x/691-1035/atlantic-stars-gold-sneakers-vibram-1.webp',
        ],
        [
          'https://images.theurge.com/carola-zeta/dBBA8HBYjWa2Pv7yg4dFtJNVDAY=/main/1x/230-345/atlantic-stars-gold-sneakers-vibram-2.webp',
          'https://images.theurge.com/carola-zeta/dBBA8HBYjWa2Pv7yg4dFtJNVDAY=/main/2x/460-690/atlantic-stars-gold-sneakers-vibram-2.webp',
          'https://images.theurge.com/carola-zeta/dBBA8HBYjWa2Pv7yg4dFtJNVDAY=/main/3x/691-1035/atlantic-stars-gold-sneakers-vibram-2.webp',
        ],
        [
          'https://images.theurge.com/carola-zeta/AYq7C2nmB7jndvUA1LPKH1MDRn8=/main/1x/230-345/atlantic-stars-gold-sneakers-vibram-3.webp',
          'https://images.theurge.com/carola-zeta/AYq7C2nmB7jndvUA1LPKH1MDRn8=/main/2x/460-690/atlantic-stars-gold-sneakers-vibram-3.webp',
          'https://images.theurge.com/carola-zeta/AYq7C2nmB7jndvUA1LPKH1MDRn8=/main/3x/691-1035/atlantic-stars-gold-sneakers-vibram-3.webp',
        ],
        [
          'https://images.theurge.com/carola-zeta/kOFvKxDIHKGcB2LnvJ13ILajMdE=/main/1x/230-345/atlantic-stars-gold-sneakers-vibram-4.webp',
          'https://images.theurge.com/carola-zeta/kOFvKxDIHKGcB2LnvJ13ILajMdE=/main/2x/460-690/atlantic-stars-gold-sneakers-vibram-4.webp',
          'https://images.theurge.com/carola-zeta/kOFvKxDIHKGcB2LnvJ13ILajMdE=/main/3x/691-1035/atlantic-stars-gold-sneakers-vibram-4.webp',
        ],
        [
          'https://images.theurge.com/carola-zeta/oy4BKFnG41QThSsb4A3cMk_omys=/main/1x/230-345/atlantic-stars-gold-sneakers-vibram-5.webp',
          'https://images.theurge.com/carola-zeta/oy4BKFnG41QThSsb4A3cMk_omys=/main/2x/460-690/atlantic-stars-gold-sneakers-vibram-5.webp',
          'https://images.theurge.com/carola-zeta/oy4BKFnG41QThSsb4A3cMk_omys=/main/3x/691-1035/atlantic-stars-gold-sneakers-vibram-5.webp',
        ],
        [
          'https://images.theurge.com/carola-zeta/8HHwh5bBz1kqrCIZ-bsoymiqnDI=/main/1x/230-345/atlantic-stars-gold-sneakers-vibram-6.webp',
          'https://images.theurge.com/carola-zeta/8HHwh5bBz1kqrCIZ-bsoymiqnDI=/main/2x/460-690/atlantic-stars-gold-sneakers-vibram-6.webp',
          'https://images.theurge.com/carola-zeta/8HHwh5bBz1kqrCIZ-bsoymiqnDI=/main/3x/691-1035/atlantic-stars-gold-sneakers-vibram-6.webp',
        ],
      ],
      e_image_urls_og:
        'https://images.theurge.com/carola-zeta/M9JpvX5vMxFL2IOz2BH7DScaQ1w=/size/1200x1200/1200-1200/atlantic-stars-gold-sneakers-vibram-1.jpg',
      e_image_urls_search_jpg: [
        [
          'https://images.theurge.com/carola-zeta/M9JpvX5vMxFL2IOz2BH7DScaQ1w=/thumb/1x/170-86/atlantic-stars-gold-sneakers-vibram-1.jpg',
          'https://images.theurge.com/carola-zeta/M9JpvX5vMxFL2IOz2BH7DScaQ1w=/thumb/2x/340-172/atlantic-stars-gold-sneakers-vibram-1.jpg',
          'https://images.theurge.com/carola-zeta/M9JpvX5vMxFL2IOz2BH7DScaQ1w=/thumb/3x/510-257/atlantic-stars-gold-sneakers-vibram-1.jpg',
        ],
        [
          'https://images.theurge.com/carola-zeta/dBBA8HBYjWa2Pv7yg4dFtJNVDAY=/thumb/1x/170-85/atlantic-stars-gold-sneakers-vibram-2.jpg',
          'https://images.theurge.com/carola-zeta/dBBA8HBYjWa2Pv7yg4dFtJNVDAY=/thumb/2x/340-169/atlantic-stars-gold-sneakers-vibram-2.jpg',
          'https://images.theurge.com/carola-zeta/dBBA8HBYjWa2Pv7yg4dFtJNVDAY=/thumb/3x/510-254/atlantic-stars-gold-sneakers-vibram-2.jpg',
        ],
        [
          'https://images.theurge.com/carola-zeta/AYq7C2nmB7jndvUA1LPKH1MDRn8=/thumb/1x/170-99/atlantic-stars-gold-sneakers-vibram-3.jpg',
          'https://images.theurge.com/carola-zeta/AYq7C2nmB7jndvUA1LPKH1MDRn8=/thumb/2x/340-199/atlantic-stars-gold-sneakers-vibram-3.jpg',
          'https://images.theurge.com/carola-zeta/AYq7C2nmB7jndvUA1LPKH1MDRn8=/thumb/3x/510-298/atlantic-stars-gold-sneakers-vibram-3.jpg',
        ],
        [
          'https://images.theurge.com/carola-zeta/kOFvKxDIHKGcB2LnvJ13ILajMdE=/thumb/1x/170-87/atlantic-stars-gold-sneakers-vibram-4.jpg',
          'https://images.theurge.com/carola-zeta/kOFvKxDIHKGcB2LnvJ13ILajMdE=/thumb/2x/340-174/atlantic-stars-gold-sneakers-vibram-4.jpg',
          'https://images.theurge.com/carola-zeta/kOFvKxDIHKGcB2LnvJ13ILajMdE=/thumb/3x/510-261/atlantic-stars-gold-sneakers-vibram-4.jpg',
        ],
        [
          'https://images.theurge.com/carola-zeta/oy4BKFnG41QThSsb4A3cMk_omys=/thumb/1x/170-86/atlantic-stars-gold-sneakers-vibram-5.jpg',
          'https://images.theurge.com/carola-zeta/oy4BKFnG41QThSsb4A3cMk_omys=/thumb/2x/340-172/atlantic-stars-gold-sneakers-vibram-5.jpg',
          'https://images.theurge.com/carola-zeta/oy4BKFnG41QThSsb4A3cMk_omys=/thumb/3x/510-257/atlantic-stars-gold-sneakers-vibram-5.jpg',
        ],
        [
          'https://images.theurge.com/carola-zeta/8HHwh5bBz1kqrCIZ-bsoymiqnDI=/thumb/1x/170-85/atlantic-stars-gold-sneakers-vibram-6.jpg',
          'https://images.theurge.com/carola-zeta/8HHwh5bBz1kqrCIZ-bsoymiqnDI=/thumb/2x/340-170/atlantic-stars-gold-sneakers-vibram-6.jpg',
          'https://images.theurge.com/carola-zeta/8HHwh5bBz1kqrCIZ-bsoymiqnDI=/thumb/3x/510-254/atlantic-stars-gold-sneakers-vibram-6.jpg',
        ],
      ],
      e_image_urls_search_webp: [
        [
          'https://images.theurge.com/carola-zeta/M9JpvX5vMxFL2IOz2BH7DScaQ1w=/thumb/1x/170-86/atlantic-stars-gold-sneakers-vibram-1.webp',
          'https://images.theurge.com/carola-zeta/M9JpvX5vMxFL2IOz2BH7DScaQ1w=/thumb/2x/340-172/atlantic-stars-gold-sneakers-vibram-1.webp',
          'https://images.theurge.com/carola-zeta/M9JpvX5vMxFL2IOz2BH7DScaQ1w=/thumb/3x/510-257/atlantic-stars-gold-sneakers-vibram-1.webp',
        ],
        [
          'https://images.theurge.com/carola-zeta/dBBA8HBYjWa2Pv7yg4dFtJNVDAY=/thumb/1x/170-85/atlantic-stars-gold-sneakers-vibram-2.webp',
          'https://images.theurge.com/carola-zeta/dBBA8HBYjWa2Pv7yg4dFtJNVDAY=/thumb/2x/340-169/atlantic-stars-gold-sneakers-vibram-2.webp',
          'https://images.theurge.com/carola-zeta/dBBA8HBYjWa2Pv7yg4dFtJNVDAY=/thumb/3x/510-254/atlantic-stars-gold-sneakers-vibram-2.webp',
        ],
        [
          'https://images.theurge.com/carola-zeta/AYq7C2nmB7jndvUA1LPKH1MDRn8=/thumb/1x/170-99/atlantic-stars-gold-sneakers-vibram-3.webp',
          'https://images.theurge.com/carola-zeta/AYq7C2nmB7jndvUA1LPKH1MDRn8=/thumb/2x/340-199/atlantic-stars-gold-sneakers-vibram-3.webp',
          'https://images.theurge.com/carola-zeta/AYq7C2nmB7jndvUA1LPKH1MDRn8=/thumb/3x/510-298/atlantic-stars-gold-sneakers-vibram-3.webp',
        ],
        [
          'https://images.theurge.com/carola-zeta/kOFvKxDIHKGcB2LnvJ13ILajMdE=/thumb/1x/170-87/atlantic-stars-gold-sneakers-vibram-4.webp',
          'https://images.theurge.com/carola-zeta/kOFvKxDIHKGcB2LnvJ13ILajMdE=/thumb/2x/340-174/atlantic-stars-gold-sneakers-vibram-4.webp',
          'https://images.theurge.com/carola-zeta/kOFvKxDIHKGcB2LnvJ13ILajMdE=/thumb/3x/510-261/atlantic-stars-gold-sneakers-vibram-4.webp',
        ],
        [
          'https://images.theurge.com/carola-zeta/oy4BKFnG41QThSsb4A3cMk_omys=/thumb/1x/170-86/atlantic-stars-gold-sneakers-vibram-5.webp',
          'https://images.theurge.com/carola-zeta/oy4BKFnG41QThSsb4A3cMk_omys=/thumb/2x/340-172/atlantic-stars-gold-sneakers-vibram-5.webp',
          'https://images.theurge.com/carola-zeta/oy4BKFnG41QThSsb4A3cMk_omys=/thumb/3x/510-257/atlantic-stars-gold-sneakers-vibram-5.webp',
        ],
        [
          'https://images.theurge.com/carola-zeta/8HHwh5bBz1kqrCIZ-bsoymiqnDI=/thumb/1x/170-85/atlantic-stars-gold-sneakers-vibram-6.webp',
          'https://images.theurge.com/carola-zeta/8HHwh5bBz1kqrCIZ-bsoymiqnDI=/thumb/2x/340-170/atlantic-stars-gold-sneakers-vibram-6.webp',
          'https://images.theurge.com/carola-zeta/8HHwh5bBz1kqrCIZ-bsoymiqnDI=/thumb/3x/510-254/atlantic-stars-gold-sneakers-vibram-6.webp',
        ],
      ],
      e_is_free_returns: true,
      e_is_free_shipping: false,
      e_is_on_sale: true,
      e_item_code: '4724180090968',
      e_product_name: 'Gold Sneakers Vibram',
      e_retailer_display_domain: 'carolazeta.com',
      e_retailer_display_name: 'Carola Zeta',
      e_retailer_facet_name: 'Carola Zeta',
      e_retailer_industry: 'fashion',
      e_retailer_short_id: 'cz',
      e_retailer_type: 'mid',
      e_returns_link: 'https://www.carolazeta.com/pages/returns',
      e_returns_period: [14],
      e_sales: ['10', '20', '30', 'on-sale'],
      e_shipping_deals: ['free-returns'],
      e_shipping_link: 'https://www.carolazeta.com/pages/shipping',
      e_subcat: [],
      friendly_alternates: {
        'en-au': 'atlantic-stars-gold-sneakers-vibram-4724180090968-cz',
        'en-gb': 'atlantic-stars-gold-sneakers-vibram-4724180090968-cz',
        'en-nz': 'atlantic-stars-gold-sneakers-vibram-4724180090968-cz',
        'en-us': 'atlantic-stars-gold-sneakers-vibram-4724180090968-cz',
        'en-za': 'atlantic-stars-gold-sneakers-vibram-4724180090968-cz',
      },
      friendly_canonical:
        'atlantic-stars-gold-sneakers-vibram-4724180090968-cz',
      gender: 'female',
      hreflangs: ['en-it', 'en-zz'],
      item_code: '4724180090968',
      long_description: 'Side Detail, Front Logo',
      product_name: 'Gold Sneakers Vibram',
      retailer_code: 'enit-carola-zeta',
      retailer_price: 249,
      retailer_url:
        'https://www.carolazeta.com/collections/women-sneakers-on-sale/products/gold-sneakers-vibram_002f54020_cz',
      sale_price: 174,
      sku_code: '33249819689048',
      updated_at: '2020-10-07T01:11:19.660+00:00',
    },
  },
]

export const Primary = Template.bind({})
Primary.args = {
  products,
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
