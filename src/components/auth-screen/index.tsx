import React from 'react'
import { compose } from 'recompose'
import { AuthBook } from 'storm-auth/artifacts/components/AuthBook'
import { ImageSource, ISignInFacebookProps, ISignInEmailProps } from 'storm-auth/artifacts/types'
import { withSignInFacebook, IWithSignInFacebookProps } from 'storm-auth/artifacts/hocs/graphcool/sign-in-facebook'
import { withSignInEmail, IWithSignInEmailProps } from 'storm-auth/artifacts/hocs/graphcool/sign-in-email'
import { SignInForm, ISignInFormProps } from 'storm-auth/artifacts/components/SignInForm'
import { AsyncStorage } from 'react-native'
import { withSignUp } from 'storm-auth/src/hocs/graphcool/sign-up'
import { ISignUpFormProps, SignUpForm } from 'storm-auth/src/components/SignUpForm'
import ForgotPasswordRequestForm from '../../../../storm-auth/artifacts/components/ForgotPasswordRequestForm'

const userImage: ImageSource = require('../../resources/assets/icon-user.png')
const emailImage: ImageSource = require('../../resources/assets/icon-email.png')
const passwordImage: ImageSource = require('../../resources/assets/icon-lock.png')
const eyeOnImage: ImageSource = require('../../resources/assets/icon-eye.png')
const eyeOffImage: ImageSource = require('../../resources/assets/icon-eye-off.png')
const closeImageSource: ImageSource = require('../../resources/assets/icon-close.png')
const facebookImage: ImageSource = require('../../resources/assets/icon-facebook.png')

const signUpAssets = {
  passwordImage,
  eyeOnImage,
  eyeOffImage,
  userImage,
  emailImage,
}

const signInAssets = {
  emailImage,
  facebookImage,
  passwordImage,
  eyeOnImage,
  eyeOffImage,
}

const forgotPasswordAssets = {
  email: emailImage,
}

const SignIn = compose<ISignInFacebookProps & ISignInEmailProps, IWithSignInEmailProps & IWithSignInFacebookProps & ISignInFormProps>(
  withSignInFacebook(),
  withSignInEmail(),
)(SignInForm)

const SignUp = withSignUp<ISignUpFormProps>()(SignUpForm)

export class AuthScreen extends React.Component<{}, {}> {
  public render() {
    return (
      <AuthBook
        closeImageSource={closeImageSource}
        backgroundImageSource={{uri: 'https://lorempixel.com/750/1334'}}
        logoSource={{uri: 'https://generatepress.com/assets/logo-white-asset.png'}}
        onClose={() => null}>
        {(goToPage) => (
          [<SignIn
            onSuccessEmail={async (response) => {
              await AsyncStorage.setItem('token', response.authenticateUser.token)
              alert(response.authenticateUser.token)
            }}
            onErrorEmail={(error) => {
              alert(error.toString())
            }}
            onSuccessFacebook={() => alert('facebook')}
            onErrorFacebook={() => alert('error facebook')}
            assets={signInAssets}
            onPressSignUp={() => goToPage(1)}
            onPressForgotPassword={() => goToPage(2)}
          />,
          <SignUp
            onSuccess={() => alert('succes sign up')}
            onError={() => alert('error sign up')}
            assets={signUpAssets}
            onPressSignIn={() => goToPage(0)}
          />,
          <ForgotPasswordRequestForm
            loadingForgotPasswordRequest={false}  //  TODO
            forgotPasswordRequest={async () => null}  //  TODO
            assets={forgotPasswordAssets}
            onPressSignIn={() => goToPage(0)}
          />]
        )}
      </AuthBook>
    )
  }
}
