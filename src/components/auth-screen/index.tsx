import React from 'react'
import { ActivityIndicator, Text } from 'react-native'
import { withLoading } from 'common-data/artifacts/hocs'
import { compose, withProps } from 'recompose'
import { Auth, ImageSource } from 'storm-auth/artifacts/components/Auth'
import { withSignInFacebook, ISignInFacebookProps, ISignInFacebook } from 'storm-auth/artifacts/hocs/graphcool/sign-in-facebook'
import { withSignInEmail, IWithSignInProps, ISignInEmail } from 'storm-auth/artifacts/hocs/graphcool/sign-in-email'
import { SignInForm, ISignInFormProps } from 'storm-auth/artifacts/components/SignInForm'

const emailImage: ImageSource = require('../../resources/assets/icon-email.png')
const passwordImage: ImageSource = require('../../resources/assets/icon-lock.png')
const eyeOnImage: ImageSource = require('../../resources/assets/icon-eye.png')
const eyeOffImage: ImageSource = require('../../resources/assets/icon-eye-off.png')
const closeImageSource: ImageSource = require('../../resources/assets/icon-close.png')
const facebookImage: ImageSource = require('../../resources/assets/icon-facebook.png')

const SignIn = compose<ISignInFacebook & ISignInEmail, IWithSignInProps & ISignInFacebookProps & ISignInFormProps>(
  withSignInFacebook(),
  withSignInEmail()
)(SignInForm)

export class AuthScreen extends React.Component<{}, {}> {
  render() {
    return (
      <Auth
        closeImageSource={closeImageSource}
        backgroundImageSource={{uri: 'https://lorempixel.com/750/1334'}}
        logoSource={{uri: 'https://lorempixel.com/400/400/'}}
        onClose={() => {}}
        signInContainer={
          <SignIn
            onSuccessEmail={() => alert('ok')}
            onSuccessFacebook={() => alert('facebook')}
            emailImage={emailImage}
            facebookImage={facebookImage}
            passwordImage={passwordImage}
            eyeOnImage={eyeOnImage}
            eyeOffImage={eyeOffImage}
          />
        }
        signUpContainer={
          <SignIn onSuccessEmail={() => alert('ok')} onSuccessFacebook={() => alert('facebook')} />
        }
      >
      </Auth>
    )
  }
}
