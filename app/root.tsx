/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-danger */
/* eslint-disable @typescript-eslint/no-empty-function */
import type { LinksFunction, MetaFunction, LoaderArgs } from "@remix-run/node";
import AOS from "aos";
import aosStyles from "aos/dist/aos.css";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
} from "@remix-run/react";

import slider from "swiper/swiper-bundle.css";
import {
  Dispatch,
  SetStateAction,
  useEffect,
  createContext,
  useMemo,
} from "react";

import { json } from "@remix-run/node";
import HeaderTransparent from "~/components/layout/HeaderTransparent";
import Error from "~/components/layout/Error";
import Cookies from "~/components/Cookies";
import { bannerCookie } from "~/cookie.server";
import styles from "./styles/tailwind.css";
import ModalWrapper from "./components/modal/ModalWrapper";
import { ModalNames, useModals } from "./hooks/useModals";

const MAIN_IMAGE = "/img/main-meta-preview.jpg";
const MAIN_TITLE = "Build web and mobile apps that users love – Nyoka";
const MAIN_DESCRIPTION =
  "Get profitable results with our software development services. We provide custom AI, mobile, blockchain and web solutions for healthcare, education, finance and industrial sectors. Contact us now to get more details for growing and optimizing your business.";

export const meta: MetaFunction = () => {
  return {
    charset: "utf-8",
    title: MAIN_TITLE,
    description: MAIN_DESCRIPTION,
    viewport: "width=device-width,initial-scale=1",
    "og:title": MAIN_TITLE,
    "og:url": "https://nyoka.io",
    "og:image": MAIN_IMAGE,
    "og:type": "website",
    "og:site_name": "Nyoka",
    "og:description": MAIN_DESCRIPTION,
    "og:image:width": "968",
    "og:image:height": "504",
    "twitter:title": MAIN_TITLE,
    "twitter:description": MAIN_DESCRIPTION,
    "twitter:image": MAIN_IMAGE,
    "twitter:card": "summary_large_image",
    "twitter:url": "https://nyoka.io",
    robots: "all",
  };
};

type ModalContextType = {
  openedModalName: ModalNames | null;
  closingModalName: ModalNames | null;
  openingModalName: ModalNames | null;
  setOpeningModalName: Dispatch<SetStateAction<ModalNames | null>>;
  setOpenedModalName: Dispatch<SetStateAction<ModalNames | null>>;
  setClosingModalName: Dispatch<SetStateAction<ModalNames | null>>;
  openModal: (name: ModalNames) => void;
  closeModal: () => void;
};

const defaultValue = {
  openedModalName: null,
  openingModalName: null,
  closingModalName: null,
  setOpeningModalName: () => null,
  setOpenedModalName: () => null,
  setClosingModalName: () => null,
  closeModal: () => {},
  openModal: () => {},
} as unknown as ModalContextType;

export const ModalContext = createContext<ModalContextType>(defaultValue);

export async function loader({ request }: LoaderArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const cookie = await bannerCookie.parse(cookieHeader);

  if (cookie) {
    return json({ showBanner: cookie.showBanner });
  }
  return json(
    { showBanner: true },
    {
      headers: {
        "Set-Cookie": await bannerCookie.serialize({
          showBanner: true,
        }),
      },
    }
  );
}

export default function App() {
  const { showBanner } = useLoaderData<typeof loader>();

  useEffect(() => {
    AOS.init({
      duration: 1000, // values from 0 to 3000, with step 50ms
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      // offset: 120, // offset (in px) from the original trigger point
      // easing: "ease", // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);

  const {
    openingModalName,
    openedModalName,
    closingModalName,
    setClosingModalName,
    setOpeningModalName,
    setOpenedModalName,
    closeModal,
    openModal,
  } = useModals();

  const data = useMemo(
    () => ({
      openingModalName,
      openedModalName,
      closingModalName,
      setOpeningModalName,
      setOpenedModalName,
      setClosingModalName,
      closeModal,
      openModal,
    }),
    [
      openingModalName,
      openedModalName,
      closingModalName,
      setOpeningModalName,
      setOpenedModalName,
      setClosingModalName,
      closeModal,
      openModal,
    ]
  );

  return (
    <html lang="en" className="text-dark">
      <head>
        <Meta />
        <Links />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-MB2Q7FH0E6"
        />
        <script
          id="gtag-init"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-MB2Q7FH0E6');
            `,
          }}
        />
      </head>
      <ModalContext.Provider value={data}>
        <body className="flex flex-col min-h-screen">
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
          {showBanner && <Cookies />}
          <ModalWrapper />
        </body>
      </ModalContext.Provider>
    </html>
  );
}

export function CatchBoundary() {
  const { status, statusText } = useCatch();
  const metaDescription =
    status === 404
      ? " The page you are looking for cannot be found. We apologize for the inconvenience. Please check the URL or " +
        "try searching for the page using our site's search bar. You can also visit our homepage to explore other " +
        "content on our website."
      : "An internal server error has occurred. We apologize for the inconvenience. Our technical team has been " +
        "notified and is working to resolve the issue. Please try again later or contact our support team if the " +
        "problem persists.";

  return (
    <html lang="en">
      <head>
        <meta name="description" content={metaDescription} />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <Links />
      </head>
      <body className="flex flex-col min-h-screen">
        {status === 404 && <HeaderTransparent innerPage />}
        <Error errorStatus={status} errorText={statusText} />
        <Scripts />
      </body>
    </html>
  );
}

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "stylesheet", href: slider },
  {
    rel: "apple-touch-icon",
    href: "/favicon/apple-touch-icon.png",
    sizes: "180x180",
  },
  { rel: "icon", href: "/favicon/favicon-32x32.png", sizes: "32x32" },
  { rel: "icon", href: "/favicon/favicon-16x16.png", sizes: "16x16" },
  {
    rel: "mask-icon",
    href: "/favicon/safari-pinned-tab.svg",
    color: "#5bbad5",
  },
  { rel: "stylesheet", href: aosStyles },
];
