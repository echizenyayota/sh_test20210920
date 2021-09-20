import { Heading, Page, TextStyle, Layout, Card, EmptyState } from "@shopify/polaris";
import { ResourcePicker, TitleBar } from '@shopify/app-bridge-react';


const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

const Index = () => (
  <Page>
    <TitleBar 
      primaryAction={{
        content: 'Select Product',
        onAction: () => this.setState({ open: true }),
      }}
    />
    <ResourcePicker

    />
    <Layout>
      <EmptyState
        heading="Discout your products"
        action={{
          content: 'Select products', 
          onAction: () => this.setState ({ open: true }),
        }}
        image={img}
      >
        <p>Select products to change their price temporarily.</p>
      </EmptyState>
    </Layout>
  </Page>
);

export default Index;



