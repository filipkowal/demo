"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ClientHome() {
  const router = useRouter();
  return (
    <div>
      <div>
        <Link href="/about?aboutQuery">Home (href=string)</Link>
      </div>
      <div>
        <Link href={{ pathname: "/about", query: "aboutQuery" }}>
          Home (href=Object)
        </Link>
      </div>
      <div>
        <button onClick={() => router.push("/about?aboutQuery")}>
          Home (router.push)
        </button>
      </div>
      <div>
        <Link href="/about">About (string without query)</Link>
      </div>
    </div>
  );
}
