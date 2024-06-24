import React from 'react'
import { Metadata } from 'next'

type Props = {
  params: {
    productId: string
  }
}

export const generateMetadata = async({ params }: Props): Promise<Metadata> => {
  const title = await new Promise(resolve => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`)
    }, 100)
  })
  return {
    title: `Product ${params.productId}`
  }
}



function ProductPage({ params }: Props) {
  return (
    <div>ProductPage {params.productId}</div>
  )
}

export default ProductPage