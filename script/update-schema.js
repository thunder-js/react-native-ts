const fetch = require('node-fetch');
const fs = require('fs');
const {
    buildClientSchema,
        printSchema,
} = require('graphql/utilities');
const path = require('path');
const childProcess = require('child_process');

const introspectionQuery = `
  query IntrospectionQuery {
    __schema {
      queryType { name }
      mutationType { name }
      types {
        ...FullType
      }
      directives {
        name
        description
        locations
        args {
          ...InputValue
        }
      }
    }
  }
  fragment FullType on __Type {
    kind
    name
    description
    fields(includeDeprecated: true) {
      name
      description
      args {
        ...InputValue
      }
      type {
        ...TypeRef
      }
      isDeprecated
      deprecationReason
    }
    inputFields {
      ...InputValue
    }
    interfaces {
      ...TypeRef
    }
    enumValues(includeDeprecated: true) {
      name
      description
      isDeprecated
      deprecationReason
    }
    possibleTypes {
      ...TypeRef
    }
  }
  fragment InputValue on __InputValue {
    name
    description
    type { ...TypeRef }
    defaultValue
  }
  fragment TypeRef on __Type {
    kind
    name
    ofType {
      kind
      name
      ofType {
        kind
        name
        ofType {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
                ofType {
                  kind
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`

const schemaPath = path.join(__dirname + '/../data/', 'schema');
const host = 'http://localhost:60000/relay/v1/cjbif011e000201887rzszrtr'

// Save JSON of full schema introspection for Babel Relay Plugin to use
fetch(host, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({'query': introspectionQuery})
}).then(res => {
    return res.json()
}).then(schemaJSON => {
    console.log(schemaJSON);
    fs.writeFileSync(
        `${schemaPath}.json`,
        JSON.stringify(schemaJSON, null, 2)
    );

    // Save user readable type system shorthand of schema
    const graphQLSchema = buildClientSchema(schemaJSON.data);
    fs.writeFileSync(
        `${schemaPath}.graphql`,
        printSchema(graphQLSchema)
    );
}).catch(error => console.log("ERRO LOKACO:", error));