import Link from "next/link";
import { useRouter } from "next/navigation";
import ClientHome from "./ClientHome";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <h1>Home</h1>
      <ClientHome />
    </div>
  );
}
