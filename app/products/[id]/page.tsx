import { redirect } from "next/navigation";

import { getProductById, getSimilarProducts } from "@/lib/actions";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import { formatNumber } from '../../../lib/utils';
import PriceInfoCard from "@/components/PriceInfoCard";
import ProductCard from "@/components/ProductCard";
import Modal from "../../../components/Modal";

type Props = {
  params: { id: string }
}

const ProductDetails = async ({ params: { id } }: Props) => {
  const product: Product = await getProductById(id);

  if(!product) redirect('/');

  const similarProducts = await getSimilarProducts(id);
  
  return (
    <div className="product-container">
      <div className="flex gap-28 xl:flex-row flex-col">
        <div className="product-image lg:max-w-[50%]">
          <Image
            src={product.image}
            alt={product.title}
            width={400}
            height={400}
            className="mx-auto object-contain rounded-xl"
          />
        </div>

        <div className="flex-1 flex flex-col">
          <div className="flex justify-between items-start gap-5 flex-wrap pb-6">
            <div className="flex flex-col gap-3">
              <p className="text-[20px] font-semibold text-slate-200 capitalize">{product.title}</p>

              <Link href={product.url} target="_blank" className="text-slate-500 text-base">View Product</Link>
            </div>

            <div className="flex items-center gap-3">
              <div className="product-hearts">
                <Image
                  src="/assets/icons/red-heart.svg"
                  alt="heart"
                  width={20}
                  height={20}
                />

                <p className="text-base font-bold text-blue-700">{product.reviewsCount}</p>
              </div>

              <div className="gap-2 px-3 py-2 bg-slate-400 rounded-10">
                <Image
                  src="/assets/icons/bookmark.svg"
                  alt="bookmark"
                  width={20}
                  height={20}
                />
              </div>

              <div className="gap-2 px-3 py-2 bg-slate-400 rounded-10">
                <Image
                  src="/assets/icons/share.svg"
                  alt="share"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>

          <div className="product-info">
            <div className="flex flex-col gap-2">
              <p className="text-slate-100 font-bold text-[34px]">
                {product?.currency} &nbsp;
                {formatNumber(product.currentPrice)}
              </p>

              <p className="text-slate-100 opacity-50 font-bold text-[21px] line-through">
                {product?.currency} &nbsp;
                {formatNumber(product.originalPrice)}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <div className="product-stars">
                  <Image
                    src="/assets/icons/star.svg"
                    alt="star"
                    width={18}
                    height={18}
                  />

                  <p className="text-blue-700 text-[18px] font-semibold">{product.stars}/5</p>
                </div>

                <div className="product-reviews">
                  <Image
                    src="/assets/icons/comment.svg"
                    alt="comment"
                    width={18}
                    height={18}
                  />

                  <p className="text-blue-700 text-[18px] font-semibold">{product.reviewsCount} &nbsp;Reviews</p>
                </div>
              </div>

              <p className="text-sm text-slate-100 opacity-50">
                <span className="text-blue-400 font-semibold">93% </span> of
                buyers have recommended this product.
              </p>
            </div>
          </div>

          <div className="my-7 flex flex-col gap-5">
            <div className="flex gap-5 flex-wrap">
              <PriceInfoCard
                title="Current Price"
                iconSrc="/assets/icons/price-tag.svg"
                value={`${product?.currency}  ${formatNumber(product.currentPrice)}`}
              />

              <PriceInfoCard
                title="Average Price"
                iconSrc="/assets/icons/chart.svg"
                value={`${product?.currency}  ${formatNumber(product.averagePrice)}`}
              />

              <PriceInfoCard
                title="Highest Price"
                iconSrc="/assets/icons/arrow-up.svg"
                value={`${product?.currency}  ${formatNumber(product.highestPrice)}`}
              />

              <PriceInfoCard
                title="Lowest Price"
                iconSrc="/assets/icons/arrow-down.svg"
                value={`${product?.currency}  ${formatNumber(product.lowestPrice)}`}
              />

            </div>
          </div>

          {/* Modal */}
          <Modal productId={id} />
        </div>
      </div>

      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-5">
          <h3 className="text-slate-100 text-2xl font-semibold">Product Description</h3>

          <div className="flex flex-col gap-4 text-slate-300">
            {product?.description?.split('\n')}
          </div>
        </div>

        <button className="btn w-fit mx-auto flex items-center justify-center gap-3 min-w-[200px]">
          <Image
            src="/assets/icons/bag.svg"
            alt="check"
            width={22}
            height={22}
          />

          <Link href="/" className="text-base">Buy Now</Link>
        </button>
      </div>

      {similarProducts && similarProducts?.length > 0 && (
        <div className="py-14 flex flex-col gap-2 w-full">
          <p className="section-text">Similar Products</p>

          <div className="flex flex-wrap gap-10 mt-7 w-full">
            {similarProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;