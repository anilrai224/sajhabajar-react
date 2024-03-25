import React from 'react'
import Hero from '../../components/hero/Hero'
import Campaign from '../../components/campagin/Campagin'
import BestDeals from '../../components/bestdeals/BestDeals'
import Featured from '../../components/featured/Featured'
import Offers from '../../components/offers/Offers'
import ChooseUs from '../../components/chooseus/ChooseUs'
import Testimonial from '../../components/testimonial/Testimonial'
import NewProducts from '../../components/newproducts/NewProducts'

const Home = () => {
  return (
    <div>
      <Hero/>
      <NewProducts/>
      <Campaign/>
      <BestDeals/>
      <Featured/>
      <Offers/>
      <ChooseUs/>
      <Testimonial/>
    </div>
  )
}

export default Home