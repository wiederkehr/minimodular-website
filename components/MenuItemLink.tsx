/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";
import { useRouter } from 'next/router'

interface MenuItemLinkProps {
  children?: React.ReactNode;
  href: string;
}

const MenuItemLink = (props: MenuItemLinkProps) => {
  const router = useRouter();
  const selected = router.pathname === props.href;
  return (
    <Link href={props.href} passHref>
      <a sx={{
        borderRadius: 4,
        px: 2,
        py: 2,
        color: selected ? "text" : "muted",
        backgroundColor: "surface",
        transition: "all 300ms",
        textDecoration: "inherit",
        "&:hover": {
          backgroundColor: selected ? null : "background",
          color: selected ? null : "text",
        }
      }}
      >
        {props.children}
      </a>
    </Link>
  )
};

export default MenuItemLink;