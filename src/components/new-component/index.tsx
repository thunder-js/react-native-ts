import React from 'react'
import { ActivityIndicator, Text } from 'react-native'
import { withLoading } from 'common-data/artifacts/hocs'
import { compose, withProps } from 'recompose'
// import { OnBoarding } from 'storm-onboarding'
import { Auth } from 'storm-auth/artifacts/components/Auth'
import { withSignInFacebook, ISignInFacebookProps, ISignInFacebook } from 'storm-auth/artifacts/hocs/graphcool/sign-in-facebook'
import { withSignInEmail, IWithSignInProps, ISignInEmail } from 'storm-auth/artifacts/hocs/graphcool/sign-in-email'
import { SignInForm } from 'storm-auth/artifacts/components/SignInForm'

// const SignIn = compose<WithSignInProps, {}>(
//   withSignInEmail(),
//   signInWithFacebook()
// )(SignInForm)

const SignIn = compose<ISignInFacebook & ISignInEmail, IWithSignInProps & ISignInFacebookProps>(
  withSignInFacebook(),
  withSignInEmail()
)(SignInForm)

// const PAGES = [{
//   text: 'Texto1',
//   imageSource: { uri: 'https://placehold.it/400x400' }
// }, {
//   text: 'Texto2',
//   imageSource: { uri: 'https://placehold.it/400x400' }
// }, {
//   text: 'Texto3',
//   imageSource: { uri: 'https://placehold.it/400x400' }
// }]
// const LOGO = { uri: 'https://unsplash.it/300x400' }

export interface MyComponentInterface {
  loading: boolean
}

class MyComponent extends React.Component<MyComponentInterface, any> {
  render() {
    return (
      <Auth
        // signInContainer={<SignIn onSuccessEmail={() => alert('ok') /> }
        // signUpContainer={<SignIn onSuccessEmail={() => alert('ok') /> }
        onClose={() => {}}
        backgroundImageSource={{uri: 'https://lorempixel.com/750/1334'}}
        logoSource={{uri: 'https://lorempixel.com/400/400/'}}
        signInContainer={<SignIn onSuccessEmail={() => alert('ok')} onSuccessFacebook={() => alert('facebook')} />}
        signUpContainer={<SignIn onSuccessEmail={() => alert('ok')} onSuccessFacebook={() => alert('facebook')} />}
      >

      </Auth>

      // <OnBoarding
      //   backgroundColor='steelblue'
      //   onSkip={() => {}}
      //   onFinish={() => {}}
      //   pages={PAGES}
      //   logoSource={LOGO}
      // />
    )
  }
}

export const EnhancedComponent = compose<MyComponentInterface, any>(
  withProps({
    loading: false
  }),
  withLoading<MyComponentInterface>(props => props.loading, () => <ActivityIndicator />)
)(MyComponent)
