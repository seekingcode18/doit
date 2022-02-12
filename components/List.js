import Link from "next/link";

export default function List({list}) {
  return (
    <>
      <li><Link href={`/lists/${list.id}`} list={list}>{list.title}</Link></li>
    </>
  )
}