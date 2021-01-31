/** @jsx jsx */
import { jsx, Image } from "theme-ui";

interface FigureProps {
  src: string,
  caption?: Boolean,
  alt?: string,
}

const Figure = (props: FigureProps) => (
  <figure sx={{m: 0}}>
    <Image {...props} />
    {!props.caption ? null : (
      <figcaption sx={{ color: "muted", fontSize: 0}}>{props.alt}</figcaption>
    )}
  </figure>
)

export default Figure