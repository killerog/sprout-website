import { permanentRedirect } from "next/navigation";

export default function Changelog() {
  permanentRedirect("/updates");
}