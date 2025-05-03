import React, { PropsWithChildren } from "react";

import { AuthProvider } from "@/features/auth/components/auth-provider";

const HomeLayout = ({ children }: PropsWithChildren) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default HomeLayout;
