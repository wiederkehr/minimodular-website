import Page from "../components/Page";
import Introduction from "../components/Introduction";

export default function Default({ children, frontMatter }) {
  return (
    <Page
      title={frontMatter.title}
      description={frontMatter.description}
    >
      <article>
        <Introduction
          title={frontMatter.title}
          description={frontMatter.description}
        />
        {children}
      </article>
    </Page>
  )
};
