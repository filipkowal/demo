"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ClientAbout() {
  const router = useRouter();
  return (
    <div>
      <div>
        <Link href="/?homeQuery">Home (href=string)</Link>
      </div>
      <div>
        <Link href={{ pathname: "/", query: "homeQuery" }}>
          Home (href=Object)
        </Link>
      </div>
      <div>
        <button onClick={() => router.push("/?homeQuery")}>
          Home (router.push)
        </button>
      </div>
      <div>
        <Link href="/">Home (string without query)</Link>
      </div>
    </div>
  );
}
