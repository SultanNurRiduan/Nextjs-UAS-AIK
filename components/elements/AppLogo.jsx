import Image from "next/image";
import Link from "next/link";
import React from "react";

const AppLogo = () => {
  return (
    <Link href={"/"}>
      <Image src={"/logo.png"} alt="logo" width={100} height={100} />
    </Link>
  );
};

export default AppLogo;