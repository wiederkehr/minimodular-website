import NextHead from 'next/head'
import config from "../site.config"

interface MetaProps {
  title?: string;
  description?: string;
  author?: string;
  image?: string;
}

const Meta = (props: MetaProps) => (
  <NextHead>
    <title>{props.title ? props.title : config.title}</title>
    <meta property="og:title" content={props.title ? props.title : config.title} />
    <meta name="description" content={props.description ? props.description : config.description} />
    <meta property="og:description" content={props.description ? props.description : config.description} />
    <meta name="author" content={props.author ? props.author : config.author} />
    <meta property="og:author" content={props.author ? props.author : config.author} />
    <meta property="og:image" content={props.image ? props.image : config.image} />
  </NextHead>
);

export default Meta;
