"use client"
import { usePathname } from "next/navigation";
import styles from "./banner.module.scss"
import Link from "next/link";

export default function Banner() {
  const pathname = usePathname();
  return pathname !== "/shutdown" && pathname !== "/" ? (
    <div className={`${styles.banner} container`} role="alert">
      <span>
        Sprout for YNAB will make a restart in 2026.
      </span>
      <Link href="/shutdown">
        Read more
      </Link>
    </div>
  ) : <></>
}