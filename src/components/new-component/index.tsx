import React from 'react'
import Onboarding from 'storm-onboarding/src/Onboarding'

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

export const NewComponent = ({
  age
}) => (
  <Onboarding
    backgroundColor={'tomato'}
    pages={PAGES}
    logoSource={LOGO}
    onFinish={() => { console.log(age) }}
    onSkip={() => {}}
  />
)