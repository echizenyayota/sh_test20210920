import { Heading, Page, Layout, Card, EmptyState } from "@shopify/polaris";

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

const Index = () => (
  <Page>
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



