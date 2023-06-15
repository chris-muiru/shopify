"use client"

import CustomHeader from "@/app/sharedComponent/CustomHeader"
import { useEffect, useState } from "react"
import ItemGroup from "./component/ItemGroup"
import ProductCard from "./component/ProductCard"
import ProductCategory from "./component/ProductCategoryGroup"
import {
	useProduct,
	useBrand,
	useProductOff,
	useProductCategory,
} from "./resource/hook"
import CustomSlider from "../sharedComponent/CustomSlider"
import OffProducts from "./component/off-product"
import ProductCategoryCard from "./component/ProductCategoryCard"
import HeroSection from "./component/HeroSection"
import SectionWrapper from "../sharedComponent/SectionWrapper"
import Image from "next/image"

export default function Home() {
	const productQuery = useProduct()
	const brandQuery = useBrand()
	const productOff = useProductOff()
	const productCategory = useProductCategory()

	console.log(productCategory.data)
	return (
		<div className="w-full">
			<HeroSection />

			<SectionWrapper header="Shop Our Top Categories">
				<ItemGroup
					keyExtractor={(item) => item.productCategoryId}
					data={productCategory.data as any}
					containerClassName="flex flex-row flex-wrap justify-between space-y-4"
					renderItem={(item) => {
						return <ProductCategoryCard />
					}}
				/>
				<div className="items-">

				</div>
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
									slidesToShow: 1,
									slidesToScroll: 2,
								},
							},
						],
					}}
					cardClassName={``}
					containerClassName="m-auto"
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
					containerClassName="grid grid-cols-2 gap-2 sm:grid-cols-3 "
					renderItem={(item) => {
						return (
							<div className="w-full h-20 p-10 border bg-slate-200 rounded-md ">
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
					containerClassName="flex flex-row flex-wrap justify-between"
					renderItem={(item) => {
						return <OffProducts />
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
									slidesToShow: 1,
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

			<div className="w-full min-h-[400px] relative my-20">
				<Image
					src={"/bag.png"}
					alt={"cash back"}
					className="object-cover"
					fill
				/>
				<div className=" w-3/4 bg-green-900 z-20 absolute right-10 top-6 text-white rounded-lg lg:w-1/2 xl:w-1/4 ">
					<div className="m-10 space-y-5">
						<h2 className="text-2xl">Get 5% Cash Back On $200</h2>
						<p>
							Shopping is a bit of a relaxing hobby for me, which is
							sometimes troubling for the bank balance.
						</p>

						<button className="border border-white rounded-md p-2">
							Learn More
						</button>
					</div>
				</div>
			</div>

			<CustomHeader header="Weekly Popular Products" />
		</div>
	)
}
