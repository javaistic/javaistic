import DocSearch from "components/docsearch";
import { useRouter } from "next/router";
import Status from "components/status";

const Logo = ({ height }) => (
  <svg height={height} viewBox="0 0 291 79" fill="none">
    <path
      d="M90.495 23.608h6.894v-6.4h-6.894v6.4zm-5.985 38.3h3.297c5.616 0 9.582-3.98 9.582-9.58v-25.3h-6.894v24.78c0 2.46-1.319 3.74-3.767 3.74H84.5v6.36h.01zm40.226-34.88l-.709 2.42a12.553 12.553 0 00-8.393-3.13c-7.644 0-13.349 5.79-13.349 13.53 0 7.73 5.695 13.57 13.349 13.57 3.247 0 6.075-1.14 8.253-3.09l.609 2.33h5.376v-25.63h-5.136zm-8.543 19.84a6.793 6.793 0 01-6.934-7.02 6.794 6.794 0 011.949-5.015 6.78 6.78 0 014.985-2.015 6.766 6.766 0 014.986 2.015 6.774 6.774 0 011.949 5.015 6.778 6.778 0 01-6.935 7.02zm37.049-19.84l-6.135 17.18-6.224-17.18h-7.364l10.381 25.63h6.365l10.091-25.63h-7.124.01zm30.674 0l-.709 2.42a12.553 12.553 0 00-8.393-3.13c-7.644 0-13.349 5.79-13.349 13.53 0 7.73 5.705 13.57 13.349 13.57 3.247 0 6.085-1.14 8.253-3.09l.61 2.33h5.375v-25.63h-5.136zm-8.542 19.84a6.795 6.795 0 01-6.935-7.02 6.794 6.794 0 011.949-5.015 6.774 6.774 0 014.986-2.015 6.772 6.772 0 016.478 4.32c.335.863.49 1.785.456 2.71a6.778 6.778 0 01-6.934 7.02zm20.352-23.26h6.835v-6.4h-6.835v6.4zm0 29.05h6.885v-25.63h-6.895v25.64l.01-.01zm22.501.76c6.465 0 10.701-3.42 10.701-8.64 0-6.26-5.325-7.12-9.472-7.88-2.647-.47-4.816-.9-4.816-2.6 0-1.48 1.279-2.43 3.397-2.43 2.398 0 3.817 1 3.867 3.04h6.555c-.05-5.13-4.097-8.59-10.232-8.59-6.134 0-10.231 3.37-10.231 8.21 0 6.03 5.186 7.12 9.242 7.83 2.688.43 4.896.95 4.896 2.7 0 1.72-1.738 2.62-3.627 2.62-2.448 0-4.196-1.14-4.246-3.42h-6.695c0 5.46 4.297 9.16 10.661 9.16zm27.987-6.93c-2.548 0-3.957-1.42-3.957-3.9v-9.96h6.934v-5.6h-7.034v-6.64h-1.319l-10.041 10.72v1.52h4.576v10.92c0 5.65 3.437 9.11 9.052 9.11h4.896v-6.17H246.214zm7.813-22.88h6.844v-6.4h-6.844v6.4zm0 29.05h6.894v-25.63h-6.894v25.64-.01zm25.339.76c6.644 0 11.88-4.37 13.059-10.82h-6.934c-1.179 2.75-3.348 4.27-6.125 4.27-3.687 0-6.555-3.08-6.555-7.02 0-4 2.828-7.03 6.555-7.03a6.532 6.532 0 016.125 4.04h6.844c-1.229-6.32-6.325-10.54-12.929-10.54-7.734 0-13.589 5.79-13.589 13.48s5.855 13.62 13.549 13.62z"
      fill="currentColor"
    />
    <path
      d="M42.342 1.092L69.47 16.768a8.149 8.149 0 014.068 7.051v31.352a8.142 8.142 0 01-4.068 7.06L42.342 77.909a8.142 8.142 0 01-8.147 0L7.068 62.232A8.15 8.15 0 013 55.17V23.819a8.147 8.147 0 014.069-7.05L34.195 1.091a8.142 8.142 0 018.147 0zm12.677 23.64L41.75 17.079a8.141 8.141 0 00-8.127 0l-13.268 7.653a8.15 8.15 0 00-4.078 7.06v15.275a8.14 8.14 0 004.078 7.06l13.268 7.653a8.142 8.142 0 008.127 0l13.268-7.652a8.15 8.15 0 004.078-7.06V31.791a8.16 8.16 0 00-4.078-7.06z"
      fill="#3884FF"
    />
    <circle cx="38.493" cy="39.42" r="10.394" fill="currentColor" />
  </svg>
);

const Vercel = ({ height = 20 }) => (
  <svg height={height} viewBox="0 0 283 64" fill="none">
    <path
      fill="currentColor"
      d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"
    />
  </svg>
);

export default {
  repository: "https://github.com/javaistic/javaistic",
  docsRepository: "https://github.com/javaistic/javaistic",
  titleSuffix: " – Javaistic",
  customSearch: <DocSearch />,
  logo: () => {
    const { locale } = useRouter();
    return (
      <>
        <Logo height={37} />
      </>
    );
  },
  head: (
    <>
      {/* Favicons, meta */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="currentColor000"
      />
      <meta
        name="google-site-verification"
        content="OMYBoUbVEYAJu6SsOajfrvkTJunKMieK9ZhAgOFHobM"
      />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta
        name="description"
        content="Javaistic is an Open Source Java learning website. Our Java tutorial will guide you to learn Java one step at a time."
      />
      <meta
        name="og:description"
        content="Javaistic is an Open Source Java learning website. Our Java tutorial will guide you to learn Java one step at a time."
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@uiuxarghya" />
      <meta
        name="twitter:image"
        content="https://raw.githubusercontent.com/javaistic/javaistic/main/public/og.png"
      />
      <meta name="og:title" content="Javaistic: Learn Java for free." />
      <meta name="og:url" content="https://javaistic.vercel.app" />
      <meta
        name="og:image"
        content="https://raw.githubusercontent.com/javaistic/javaistic/main/public/og.png"
      />
      <meta name="apple-mobile-web-app-title" content="Javaistic" />
    </>
  ),
  footerEditOnGitHubText: ({ locale }) => {
    switch (locale) {
      case "":
        return "";
      default:
        return "Edit this page on GitHub";
    }
  },
  footerText: ({ locale }) => {
    switch (locale) {
      case "":

      default:
        return (
          <><a
            href="https://vercel.com/?utm_source=javaistic&utm_campaign=oss"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center no-underline text-current font-semibold"
          >
            <span className="mr-1">Powered by</span>
            <span>
              <Vercel />
            </span>
          </a><Status /></>
        );
    }
  },
  /*i18n: [
    { locale: "en-US", text: "English" },
  ],
  */
};
