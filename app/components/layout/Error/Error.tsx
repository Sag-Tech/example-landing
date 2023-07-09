import React from "react";
import { Link } from "@remix-run/react";
import Typo from "~/components/Typo";
import Button from "~/components/Button";

type Props = {
  errorStatus: number;
  errorText: string;
};

function Error({ errorText, errorStatus }: Props) {
  const isNotFound = errorStatus === 404;
  const notFountText = "The requested page does not exist or has been deleted";

  return (
    <main
      className="flex justify-center items-center h-screen w-full bg-[url(/img/hero-bg.webp)] bg-cover
        bg-no-repeat bg-center"
    >
      <div className="flex flex-col gap-4 lp:gap-10 text-center text-white">
        <Typo
          tag="h4"
          className="text-4xl lp:text-8xl leading-[42px] lp:leading-[120px] font-light"
        >
          {errorStatus}
        </Typo>
        <p className="text-sm lp:text-4xl max-w-[220px] lp:max-w-[620px] font-light">
          {isNotFound ? notFountText : errorText}
        </p>
        {isNotFound && (
          <Link to="/" className="mt-5">
            <Button className="w-[160px]">
              <Typo tag="h5">Home</Typo>
            </Button>
          </Link>
        )}
      </div>
    </main>
  );
}

export default Error;
