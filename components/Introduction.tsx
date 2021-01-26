/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

interface PostHeaderProps {
  title: string;
  description?: string;
}

const Introduction = (props: PostHeaderProps) => (
  <header sx={{mt: 5, mb: 3}}>
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

export default Introduction;