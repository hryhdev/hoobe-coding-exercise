import { ReactNode } from "react";
import MainLayout from "./MainLayout";
import FrameLayout from "./FrameLayout";

interface LayoutProps {
  children: ReactNode;
  variant: "main-layout" | "frame-layout";
}
const Layout: React.FC<LayoutProps> = ({ children, variant }) => {
  if (variant === "main-layout") {
    return <MainLayout>{children}</MainLayout>;
  }

  if (variant === "frame-layout") {
    return <FrameLayout>{children}</FrameLayout>;
  }
};

export default Layout;
