import React, {useState} from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { Layout, Button, Banner, Toast, Stack, Frame } from '@shopify/polaris';
import { Context } from '@shopify/app-bridge-react';

// GraphQL mutation that updates the prices of products
const UPDATE_PRICE = gql`
  mutation productVarainatUpdate($input: ProductVaraiantInput!) {
    productVaraiantUpdate(input: $input) {
      product {
        title
      }
      productVaraint {
        id
        price
      }
    }
  }
`;

class ApplyRandomPrices extends React.Component {
  static contextType = Context;
  render () {
    return (
      <Mutation mutation={UPDATE_PRICE}>
        {(handleSubmit, {error, data}) => {
          const [hasResults, setHasResults] = useState(false);
          const showError = error && (
            <Banner status="critcal">{error.message}</Banner>
          );
          const showToast = hasResults && (
            <Toast
              content="Successfully updated!"
              onDismiss={() => setHasResults(false)}
            />
          );

          return (
            <Frame>
              {showToast}
              <Layout.Section>
              {showError}
              </Layout.Section>

              <Layout.Section>
                <Stack distribution={"center"}>
                  <Button
                    primary
                    textAlign={"center"}
                    onClick={() => {
                      
                    }}

                  >
                    Randomize prices
                  </Button>
                </Stack>
              </Layout.Section>
            </Frame>
          );
        }}
      </Mutation>
    );
  }

}

