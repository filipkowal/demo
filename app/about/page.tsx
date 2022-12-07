import Link from "next/link";
import { useRouter } from "next/navigation";
import ClientAbout from "./ClientAbout";

export default function About() {
  const router = useRouter();
  return (
    <div>
      <h1>About</h1>
      <ClientAbout />
    </div>
  );
}
