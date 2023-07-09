import type { PropsWithChildren } from "react";
import PageHeader from "~/components/layout/PageHeader";
import Footer from "~/components/Footer";

function PageContainer({ children }: PropsWithChildren) {
  return (
    <>
      <PageHeader />
      <main className="overflow-x-hidden">{children}</main>
      <Footer innerPage />
    </>
  );
}

export default PageContainer;
