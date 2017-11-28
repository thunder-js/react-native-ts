import React from 'react'

import { OnBoarding } from 'storm-onboarding'

const PAGES = [{
  text: 'Texto1',
  imageSource: { uri: 'https://placehold.it/400x400' }
}, {
  text: 'Texto2',
  imageSource: { uri: 'https://placehold.it/400x400' }
}, {
  text: 'Texto3',
  imageSource: { uri: 'https://placehold.it/400x400' }
}]
const LOGO = { uri: 'https://unsplash.it/300x400' }

{/* <OnBoarding
    backgroundColor={'tomato'}
    pages={PAGES}
    logoSource={LOGO}
    onFinish={() => { console.log(age) }}
    onSkip={() => {}}
  /> */}
export const NewComponent = ({
  age
}) => (
  <OnBoarding
    backgroundColor='tomato'
    pages={PAGES}
    logoSource={LOGO}
    onFinish={() => {}}
    onSkip={() => {}}
  />
)