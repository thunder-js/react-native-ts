import * as React from 'react'
import { Form, Field } from 'react-final-form'
import { TextInput, View, StyleSheet, TextStyle, Button } from 'react-native'
import yup, { ValidationError } from 'yup'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { compose } from 'recompose'

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
class MyForm extends React.Component {
  private handleSubmit = (values) => {
    const { insertTodo } = this.props
    insertTodo(values.firstName)
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
            <Button
              title='Off'
              color='red'
              onPress={() => {
                this.props.updateNetworkStatus(false)
              }}
            />
            <Button
              title='On'
              color='green'
              onPress={() => {
                this.props.updateNetworkStatus(true)
              }}
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

const UPDATE_NETWORK_STATUS = gql`
  mutation updateNetworkStatus($isConnected: Boolean) {
    updateNetworkStatus(isConnected: $isConnected) @client
  }
`;

const INSERT_TODO = gql`
  mutation insertTodo($name: String!) {
    insertTodo(name: $name) @client
  }
`



export default compose(
  graphql(UPDATE_NETWORK_STATUS, {
    props: ({ mutate }) => ({
      updateNetworkStatus: (isConnected) => mutate && mutate({ variables: { isConnected } }),
    }),
  }),
  graphql(INSERT_TODO, {
    props: ({ mutate }) => ({
      insertTodo: (name) => mutate && mutate({ variables: { name } }),
    }),
  })
)
(MyForm)
