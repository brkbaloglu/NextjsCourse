import React from 'react'
import { notFound } from 'next/navigation';
function ReviewPage({ params }: { params: {productId:string; reviewId: string;}}) {


  if (parseInt(params.reviewId) > 1000) {
    notFound()
  }

  return (
    <div>ReviewPage {params.reviewId} - ProductPage {params.productId}</div>
  )
}

export default ReviewPage