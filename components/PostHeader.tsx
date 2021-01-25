/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

interface PostHeaderProps {
  title: string;
  description?: string;
}

const PostHeader = (props: PostHeaderProps) => (
  <header>
    <Styled.h1>{props.title}</Styled.h1>
    {!props.description ? null : (
      <Styled.p sx={{
      fontFamily: "heading",
      fontSize: 4,
    }}>
      {props.description}
    </Styled.p>
    )}
  </header>
)

export default PostHeader;