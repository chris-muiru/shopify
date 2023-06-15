"use client"

import CustomHeader from "@/app/sharedComponent/CustomHeader"
import { useEffect, useState } from "react"
import ItemGroup from "./component/ItemGroup"
import ProductCard from "./component/ProductCard"
import ProductCategory from "./component/ProductCategoryGroup"
import { useProduct, useBrand, useProductOff } from "./resource/hook"
import CustomSlider from "../sharedComponent/CustomSlider"
import OffProducts from "./component/off-product"
import ProductCategoryCard from "./component/ProductCategoryCard"
import HeroSection from "./component/HeroSection"
import SectionWrapper from "../sharedComponent/SectionWrapper"

export default function Home() {
	const productQuery = useProduct()
	const brandQuery = useBrand()
	const productOff = useProductOff()
	return (
		<div className="w-full">
			{/* site entry point */}
			<HeroSection />

			<SectionWrapper header="Shop Our Top Categories">
				<ItemGroup
					keyExtractor={(item) => item.productOffId}
					data={productOff.data as any}
					containerClassName="flex flex-row flex-wrap bg-red-300"
					renderItem={(item) => {
						return <ProductCategoryCard />
					}}
				/>
			</SectionWrapper>

			<SectionWrapper header="Todays best deals">
				<CustomSlider
					settings={{
						dots: true,
						infinite: true,
						speed: 300,
						slidesToShow: 3,
						slidesToScroll: 3,
						autoplay: true,
						responsive: [
							{
								breakpoint: 1024,
								settings: {
									slidesToShow: 3,
								},
							},
							{
								breakpoint: 800,
								settings: {
									slidesToShow: 2,
									slidesToScroll: 2,
								},
							},
							{
								breakpoint: 480,
								settings: {
									slidesToShow: 2,
									slidesToScroll: 2,
								},
							},
						],
					}}
					cardClassName={``}
					containerClassName=""
					keyExtractor={(item) => item.productId}
					data={productQuery.data as any}
					renderItem={(item: any) => {
						return (
							<ProductCard
								productId={item.productId}
								productShtDesc={item.productShtDesc}
								productName={item.productName}
								productRating={item.productRating}
								productCost={item.productCost}
								productImage={item.productImage}
							/>
						)
					}}
				/>
			</SectionWrapper>
			<SectionWrapper header="Choose By Brand">
				<ItemGroup
					keyExtractor={(item) => item.brandId}
					data={brandQuery.data as any}
					containerClassName="grid grid-cols-2 gap-2 sm:grid-cols-3"
					renderItem={(item) => {
						return (
							<div className="w-full h-20 p-10 border bg-slate-200 rounded-md m-2">
								{item.brandName}
							</div>
						)
					}}
				/>
			</SectionWrapper>
			<SectionWrapper header="Get Up To 70% Off">
				<ItemGroup
					keyExtractor={(item) => item.productOffId}
					data={productOff.data as any}
					containerClassName="flex flex-row flex-wrap "
					renderItem={(item) => {
						return <OffProducts />
					}}
				/>
			</SectionWrapper>

			<SectionWrapper>
				<CustomSlider
					settings={{
						dots: true,
						infinite: true,
						speed: 300,
						slidesToShow: 3,
						slidesToScroll: 3,
						autoplay: true,
						responsive: [
							{
								breakpoint: 1024,
								settings: {
									slidesToShow: 3,
								},
							},
							{
								breakpoint: 800,
								settings: {
									slidesToShow: 2,
									slidesToScroll: 2,
								},
							},
							{
								breakpoint: 480,
								settings: {
									slidesToShow: 2,
									slidesToScroll: 2,
								},
							},
						],
					}}
					cardClassName={``}
					containerClassName=""
					keyExtractor={(item) => item.productId}
					data={productQuery.data as any}
					renderItem={(item: any) => {
						return (
							<ProductCard
								productId={item.productId}
								productShtDesc={item.productShtDesc}
								productName={item.productName}
								productRating={item.productRating}
								productCost={item.productCost}
								productImage={item.productImage}
							/>
						)
					}}
				/>
			</SectionWrapper>

			<CustomHeader header="Weekly Popular Products" />
		</div>
	)
}
