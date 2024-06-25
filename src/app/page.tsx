import Image from "next/image";
import Header from "./header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header></Header>
    </main>
  );
}
