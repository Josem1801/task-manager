"use client";

import Image from "next/image";

import Login from "./(auth)/login/page";

export default function Home() {
  return (
    <div>
      <main>
        <Login />
      </main>
      <footer></footer>
    </div>
  );
}
