import { Suspense } from "react";
import Product from "./product";
import Reviews from "./reviews";

export default function ProductDetailPage(){
    return (
        <div>
            <Suspense fallback={<p>Loading product details...</p>}>
                <Product></Product>
            </Suspense>
            <Suspense fallback={<p>Loading review details...</p>}>
                <Reviews></Reviews>
            </Suspense>
        </div>
    )
}