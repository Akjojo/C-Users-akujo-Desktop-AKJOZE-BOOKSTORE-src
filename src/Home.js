import React from 'react'
import RecipeReviewCard from './EACLib/EAC';
import RecipeReviewCard1 from './EACLib/EAC1';
import RecipeReviewCard2 from './EACLib/EAC2';
import RecipeReviewCard3 from './EACLib/EAC3';
import RecipeReviewCard4 from './EACLib/EAC4';
import RecipeReviewCard5 from './EACLib/EAC5';
import RecipeReviewCard6 from './EACLib/EAC6';
import RecipeReviewCard7 from './EACLib/EAC7';
import RecipeReviewCard8 from './EACLib/EAC8';
import RecipeReviewCard9 from './EACLib/EAC9';
import StickyFooter from './footer2';
import './HomeStyle.css'

const Home = () => {
  return (
    <div style={{flexWrap: 'wrap', flex: '1'}}>
        {/* <Product toshow={show}/> */}
      <RecipeReviewCard />
      <RecipeReviewCard1 />
      <RecipeReviewCard2 />
      <RecipeReviewCard3 />
      <RecipeReviewCard4 />
      <RecipeReviewCard5 />
      <RecipeReviewCard6 />
      <RecipeReviewCard7 />
      <RecipeReviewCard8 />
      <RecipeReviewCard9 />
      {/* <Footer /> */}
      {/* <Route path='/AJB' element={<BookStore/>} /> */}
      <StickyFooter />

    </div>
  )
}

export default Home