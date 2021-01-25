/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import MDX from "@mdx-js/runtime"

interface PostBodyProps {
  content: string;
}

const PostBody = (props: PostBodyProps) => {
  const components = {
    Box: (props) => <Box {...props} />,
  }
  return (
    <MDX components={components}>{props.content}</MDX>
  )
}

export default PostBody;