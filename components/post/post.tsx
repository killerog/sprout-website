"use client"

import DateFormatter from "@components/date-formatter"
import styles from "./post.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  title: string,
  date: string
  content: string
}

export default function UpdatePost({ title, date, content }: Props) {
  const pathname = usePathname();
  return (
    <div className={styles.update}>
      <h2 className={styles.h2}>{title}</h2>
      <DateFormatter dateString={date} />
      <div dangerouslySetInnerHTML={{__html: content}}></div>
      {pathname !== "/updates" && (
        <Link className={`${styles["all-updates"]} button outline`} href="/updates">View all updates</Link>
      )}
    </div>
  );
}