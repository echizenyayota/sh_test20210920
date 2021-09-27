import React, {usestate} from 'react';
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

