import type { PropsWithChildren } from "react";
import React from "react";
import Typo from "~/components/Typo";
import Container from "~/components/Container";

type Props = PropsWithChildren<{
  title: string;
  description?: string;
  styles?: string;
  maxWidthFull?: boolean;
}>;

function Section({
  title,
  description,
  children,
  styles,
  maxWidthFull,
}: Props) {
  return (
    <section className={styles}>
      <Container maxWidthFull={maxWidthFull}>
        <div className="flex flex-col gap-10 items-center">
          <Typo tag="h2" className="leading-[60px]">
            {title}
          </Typo>
          {description && (
            <Typo tag="p" className="text-2xl font-light">
              {description}
            </Typo>
          )}
          {children}
        </div>
      </Container>
    </section>
  );
}

export default Section;
