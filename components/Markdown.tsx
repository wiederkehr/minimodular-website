/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import MDX from "@mdx-js/runtime"

interface MarkdownProps {
  content: string;
}

const Markdown = (props: MarkdownProps) => {
  const components = {
    Box: (props) => <Box {...props} />,
  }
  return (
    <MDX components={components}>{props.content}</MDX>
  )
}

export default Markdown;