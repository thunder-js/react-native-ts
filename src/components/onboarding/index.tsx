import { OnBoarding } from 'storm-onboarding'
import * as React from 'react'

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

export class OnBoardingScreen extends React.Component<{}, {}> {
  render() {
    return (
      <OnBoarding
        pages={PAGES}
        logoSource={LOGO}
        onFinish={() => {}}
        onSkip={() => {}}
        backgroundColor='tomato'
      />
    )
  }
}