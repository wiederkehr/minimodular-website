import Meta from "./Meta";
import Layout from "./Layout";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

interface PageProps {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  author?: string;
  image?: string;
}

const Page = (props: PageProps) => (
  <Layout>
    <Meta {...props} />
    <Header />
    <Main>
      {props.children}
    </Main>
    <Footer />
  </Layout>
)

export default Page;