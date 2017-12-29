import * as React from 'react'
import { Form, Field } from 'react-final-form'
import { TextInput, View, StyleSheet, TextStyle, Button } from 'react-native'
import yup, { ValidationError } from 'yup'

const userSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
})

const TextInputField: React.SFC<any> = ({
  input: {
    onChange,
    value,
  },
  meta: {
    error,
  },
  style,
  ...rest,
}) => (
  <TextInput
    {...rest}
    value={value}
    onChangeText={onChange}
    style={[style, error && {backgroundColor: 'tomato'}]}
  />
)

export interface IErrors {
  firstName?: string;
}

const yupErrorToFinalFormError = (yupError: ValidationError): any => {
  return yupError.inner.reduce((finalFormError, innerError) => ({
    ...finalFormError,
    [innerError.path]: innerError.message,
  }), {})
}

const validateValuesWithSchema = (schema, values) => {
  try {
    schema.validateSync(values, {
      abortEarly: false,
    })
    return null
  } catch (err) {
    return yupErrorToFinalFormError(err)
  }
}
export default class MyForm extends React.Component {
  private handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2))
  }

  private validate = (values): object => {
    return validateValuesWithSchema(userSchema, values)
  }

  public render() {
    return (
      <Form
        onSubmit={this.handleSubmit}
        validate={this.validate}
        render={({ handleSubmit, pristine, invalid }) => (
          <View>
            <Field
              name='firstName'
              component={TextInputField}
              style={styles.textInputStyle}
            />
            <Field
              name='lastName'
              component={TextInputField}
              style={styles.textInputStyle}
            />
            <Field
              name='age'
              component={TextInputField}
              style={styles.textInputStyle}
            />
            <Button
              title='Submit'
              color='steelblue'
              onPress={handleSubmit}
            />
          </View>
        )}
      />
    )
  }
}

const styles = StyleSheet.create({
  textInputStyle: {
    height: 40,
    width: 200,
    backgroundColor: '#FFF',
  } as TextStyle,
})
