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
        backgroundColor: "surface",
        borderRadius: 4,
        color: selected ? "text" : "muted",
        cursor: selected ? "default" : "pointer",
        px: 2,
        py: 2,
        textDecoration: "inherit",
        transition: "all 300ms",
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