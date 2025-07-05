import React from 'react'


import FeatureWorksCardComp from './FeatureWorksCardComp'
import TittleComp from '../common/TittleComp'


const FeaturedWorksComp = () => {
  return (
    <section className='w-[344px] sm:w-full mx-auto sm:mx-0 h-auto '>
      <div className='w-full sm:w-[856px] mx-auto'>
        <div className='w-full flex items-start  '>
          <TittleComp title='Featured works' />
        </div>

        <div className='flex flex-col h-auto gap-6'>

          <FeatureWorksCardComp title='Designing Dashboards' img='/assets/First-image.png' label='Dashboard' btnContent='2020' content='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' />

          <FeatureWorksCardComp title=' Vibrant Portraits of 2020' img='/assets/Second-image.png' label='Illustration' btnContent='2018' content='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' />

          <FeatureWorksCardComp title='36 Days of Malayalam type' img='/assets/Third-image.png' label='Typography' btnContent='2018' content='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' />
        </div>
      </div>

    </section>
  )
}

export default FeaturedWorksComp