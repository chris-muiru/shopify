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
	usePopularProduct,
	useBestStore,
} from "./resource/hook"
import CustomSlider from "../sharedComponent/CustomSlider"
import OffProducts from "./component/off-product"
import ProductCategoryCard from "./component/ProductCategoryCard"
import HeroSection from "./component/HeroSection"
import SectionWrapper from "../sharedComponent/SectionWrapper"
import Image from "next/image"
import { repeat } from "@/util/resource/arrayRepeater"
import BrandCard from "./component/BrandCard"
import StoreCard from "./component/StoreCard"

export default function Home() {
	const productQuery = useProduct()
	const brandQuery = useBrand()
	const productOff = useProductOff()
	const productCategory = useProductCategory()
	const popularProduct = usePopularProduct()
	const bestStore = useBestStore()

	return (
		<div className="w-full">
			<HeroSection />
			<SectionWrapper header="Shop Our Top Categories">
				<ItemGroup
					keyExtractor={(item) => item.productCategoryId}
					data={productCategory.data as any}
					containerClassName="flex flex-row flex-wrap gap-5 mx-auto"
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
								breakpoint: 1280,
								settings: {
									slidesToShow: 3,
								},
							},
							{
								breakpoint: 1000,
								settings: {
									slidesToShow: 2,
									slidesToScroll: 2,
								},
							},
							{
								breakpoint: 640,
								settings: {
									slidesToShow: 1,
									slidesToScroll: 1,
								},
							},
						],
					}}
					cardClassName={``}
					containerClassName="m-auto gap-3"
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
					containerClassName="grid grid-cols-1 gap-2 sm:grid-cols-3 "
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
					containerClassName="flex flex-row flex-wrap"
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
								breakpoint: 1280,
								settings: {
									slidesToShow: 3,
								},
							},
							{
								breakpoint: 1000,
								settings: {
									slidesToShow: 2,
									slidesToScroll: 2,
								},
							},
							{
								breakpoint: 640,
								settings: {
									slidesToShow: 1,
									slidesToScroll: 1,
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

			<div className="w-full min-h-[600px] relative my-20">
				<Image
					src={"/bag.png"}
					alt={"cash back"}
					className="object-cover"
					fill
				/>
				<div className="w-3/4 bg-green-900 z-20 absolute right-10 bottom-10 text-white rounded-lg lg:w-1/2 xl:w-1/4 xl:right-[20rem]">
					<div className="m-10 space-y-5">
						<h2 className="sm:text-2xl">Get 5% Cash Back On $200</h2>
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

			<SectionWrapper header="Todays best Deals for you">
				<div className="rounded-xl gap-3 grid grid-cols-1 sm:grid-cols-3">
					{repeat(["Comming"], 6).map((value, index) => {
						return (
							<div
								className="bg-white border rounded-md p-3 px-[7rem] grid grid-cols-1 gap-2 sm:grid-cols-2"
								key={index}
							>
								{value}
							</div>
						)
					})}
				</div>
			</SectionWrapper>

			<SectionWrapper>
				<ItemGroup
					containerClassName="flex flex-wrap justify-start gap-2"
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
			<div className="bg-yellow-300 xl:min-h-[24rem]">
				<SectionWrapper>
					<div className="flex justify-evenly">
						<div className="space-y-3 font-bold lg:mt-16 w-full">
							<p className="text-4xl sm:text-5xl">Get 5% Cash Back</p>
							<p className="text-2xl">on Shopcart.com</p>
							<button className="bg-green-900 p-2 w-[130px] rounded-xl text-white">
								Learn More
							</button>
						</div>
						<div className="hidden lg:block w-[250px] h-[150px] relative m-10">
							<Image
								src={
									"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e768e3260571e48a0c_visa%20card-min.png"
								}
								className=" -rotate-[20deg] "
								fill
								alt="smart card"
							/>
						</div>
					</div>
				</SectionWrapper>
			</div>

			<SectionWrapper header="Most Selling Products">
				<ItemGroup
					cardClassName="xl:grow-0"
					containerClassName="flex flex-row flex-wrap gap-y-4 gap-2 justify-start"
					keyExtractor={(item) => item.productId}
					data={popularProduct.data as any}
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

			<SectionWrapper header="Services To Help You Shop">
				<ItemGroup
					cardClassName="rounded-md"
					containerClassName="flex flex-row flex-wrap"
					keyExtractor={(item) => item.productId}
					data={bestStore.data as any}
					renderItem={(item: any) => {
						return (
							<StoreCard
								storeProductImageSample={item.storeProductImageSample}
								storeName={item.storeName}
								storeLogo={item.storeLogo}
								storeDeliveryTime={item.storeDeliveryTime}
								storeProductCategory={item.storeProductCategory}
							/>
						)
					}}
				/>
			</SectionWrapper>
		</div>
	)
}
