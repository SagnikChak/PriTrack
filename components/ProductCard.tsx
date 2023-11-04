import { Product } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
    product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Link href={`/products/${product._id}`} className="product-card bg-slate-900 py-2">
        <div className="product-card_img-container justify-center">
            <Image
                src={product.image}
                alt={product.title}
                width={200}
                height={200}
                className="flex product-card-img rounded-md justify-center w-full"
            />
        </div>

        <div className="flex flex-col gap-3">
            <h3 className="product-title px-4">{product.title}</h3>

            <div className="flex justify-between px-4">
                  <p className="text-slate-300 capitalize font-semibold">
                    <span className="opacity-50">Category: </span>&nbsp;
                    <span className="text-slate-200 opacity-100">{product.category}</span>
                </p>

                <p className="text-base text-slate-200 font-semibold">
                    <span>{product?.currency}</span> &nbsp;
                    <span>{product.currentPrice}</span>
                </p>
            </div>
        </div>
    </Link>
  );
};

export default ProductCard;