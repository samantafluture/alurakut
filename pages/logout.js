import React, { useState } from "react";
import { useRouter } from "next/router";
import nookies from "nookies";

export default function LogoutScreen() {
  return null;
}

export async function getServerSideProps(context) {
  nookies.destroy(context, "USER_TOKEN");

  return {
    redirect: {
      destination: "/login",
      permanent: false,
    },
  };
}
