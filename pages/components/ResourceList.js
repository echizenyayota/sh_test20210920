import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-appolo';
import {
  Card,
  ResourceList,
  Stack,
  TextStyle,
  Thumbnail
} from '@shopify/polaris';
import store from 'store-js';
import { Redirect } from '@shopify/app-bridge/actions';
import { context } from '@shopify/app-bridge-react';

const GET_PRODUCTS_BY_ID = gql`
  query getProducts ($ids: [ID!]!) {
    nodes(ids: $ids) {
      ... on Product {
        title
        handle
        descriptionHtml
        id
        images(first: 1) {
          edges {
            node {
              originalSrc
              alttext
            }
          }
        }
        variants(fisrt: 1) {
          edge {
            node {
              price
              id
            }
          }
        }
      }
    }
  }
`;
