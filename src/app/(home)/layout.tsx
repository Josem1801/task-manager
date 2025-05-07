import React, { PropsWithChildren } from "react";

import { AuthLayout } from "@/features/auth/components/auth-layout";

const HomeLayout = ({ children }: PropsWithChildren) => {
  return <AuthLayout>{children}</AuthLayout>;
};

export default HomeLayout;
