import { useCallback, useState } from "react";
import {
  Header,
  HeaderPhone,
  HeaderLogo,
  HeaderNavbar,
  HeaderMenuButton,
  HeaderMenu,
} from "~/components//Header";

export default function PageHeader() {
  const [open, setOpen] = useState(false);

  const handleCloseMenu = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <>
      <Header isOffsetInner position="sticky" isShadow>
        <div className="flex flex-wrap dpb:flex-nowrap items-center dpb:items-start justify-between">
          <HeaderLogo className="relative" />
          <div className="relative order-3 w-full mt-5 dpb:mt-0 dpb:top-[22px] dpb:order-2 hidden dp:block">
            <HeaderNavbar innerPage />
          </div>
          <div className="relative dpb:top-[18px] hidden order-2 dpb:order-3 dp:inline-flex justify-end w-1/2 dpb:w-auto">
            <HeaderPhone />
          </div>
          <HeaderMenuButton isOpen={open} onToggle={setOpen} />
        </div>
      </Header>
      <HeaderMenu innerPage closeMenu={handleCloseMenu} isOpen={open} />
    </>
  );
}
