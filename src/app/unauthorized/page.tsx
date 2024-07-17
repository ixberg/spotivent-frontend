import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col justify-center items-center gap-2">
      <div className="relative w-full flex flex-col gap-10 items-center justify-center">
        <Image
          src={"/image/error.png"}
          alt={"unauthorized"}
          width={400}
          height={400}
          quality={100}
        ></Image>
        <div className="space-y-2 text-center">
          <h1 className="font-semibold text-3xl">Unauthorized</h1>
          <p>You do not have permission to access this page</p>
        </div>
      </div>
    </main>
  );
};

export default page;
