import React from 'react'
import HeaderSection from '../Components/HeaderSection'
import CatagoriesSection from '../Components/CatagoriesSection'
import AllProductsPage from './AllProductsPage'
import SingleCategorySection from '../Components/SingleCategorySection'
import FlashDealSection from '../Components/FlashDealSection'
import CommentsSection from '../Components/CommentsSection'

export default function Home() {
  return (
    <>
      <div className="bg-light">
        <HeaderSection />
        {/* <CatagoriesSection/> */}

        {/* <AllProductsPage/> */}
        {/* <SingleCategorySection /> */}

        <FlashDealSection/>
        <CatagoriesSection/>
        <CommentsSection/>
        
      </div>
    </>
  )
}
