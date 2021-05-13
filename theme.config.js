import { useRouter } from "next/router";

const Logo = ({ height }) => (
  <svg height={height} viewBox="0 0 291 79" fill="none">
    <path
      d="M88.9 23.54h6.9v-6.4h-6.9v6.4zm-5.99 38.3h3.3c5.62 0 9.59-3.98 9.59-9.58v-25.3h-6.9v24.78c0 2.46-1.32 3.74-3.77 3.74H82.9v6.36zM123.17 26.96l-.71 2.42a12.57 12.57 0 00-8.4-3.13c-7.65 0-13.36 5.79-13.36 13.53 0 7.73 5.7 13.57 13.36 13.57 3.25 0 6.08-1.14 8.26-3.09l.61 2.33h5.38V26.96h-5.14zm-8.55 19.84a6.8 6.8 0 01-6.94-7.02 6.78 6.78 0 016.94-7.03 6.78 6.78 0 016.94 7.03 6.78 6.78 0 01-6.94 7.02zM151.7 26.96l-6.14 17.18-6.23-17.18h-7.37l10.39 25.63h6.37l10.1-25.63h-7.13zM182.4 26.96l-.71 2.42a12.57 12.57 0 00-8.4-3.13c-7.65 0-13.36 5.79-13.36 13.53 0 7.73 5.71 13.57 13.36 13.57 3.25 0 6.09-1.14 8.26-3.09l.61 2.33h5.38V26.96h-5.14zm-8.55 19.84a6.8 6.8 0 01-6.94-7.02 6.78 6.78 0 016.94-7.03 6.78 6.78 0 016.94 7.03 6.78 6.78 0 01-6.94 7.02zM194.22 23.54h6.84v-6.4h-6.84v6.4zm0 29.05h6.89V26.96h-6.9V52.6zM216.74 53.35c6.47 0 10.71-3.42 10.71-8.64 0-6.26-5.33-7.12-9.48-7.88-2.65-.47-4.82-.9-4.82-2.6 0-1.48 1.28-2.43 3.4-2.43 2.4 0 3.82 1 3.87 3.04h6.56c-.05-5.13-4.1-8.59-10.24-8.59-6.14 0-10.24 3.37-10.24 8.21 0 6.03 5.19 7.12 9.25 7.83 2.69.43 4.9.95 4.9 2.7 0 1.72-1.74 2.62-3.63 2.62-2.45 0-4.2-1.14-4.25-3.42h-6.7c0 5.46 4.3 9.16 10.67 9.16zM244.75 46.42c-2.55 0-3.96-1.42-3.96-3.9v-9.96h6.94v-5.6h-7.04v-6.64h-1.32l-10.05 10.72v1.52h4.58v10.92c0 5.65 3.44 9.11 9.06 9.11h4.9v-6.17h-3.1zM252.57 23.54h6.85v-6.4h-6.85v6.4zm0 29.05h6.9V26.96h-6.9V52.6zM277.93 53.35c6.65 0 11.89-4.37 13.07-10.82h-6.94c-1.18 2.75-3.35 4.27-6.13 4.27-3.69 0-6.56-3.08-6.56-7.02 0-4 2.83-7.03 6.56-7.03a6.54 6.54 0 016.13 4.04h6.85c-1.23-6.32-6.33-10.54-12.94-10.54-7.74 0-13.6 5.79-13.6 13.48s5.86 13.62 13.56 13.62z"
      fill="currentColor"
    />
    <path
      d="M39.26 1.16l27.07 15.63a8.13 8.13 0 014.06 7.03v31.26c0 2.9-1.54 5.59-4.06 7.04L39.26 77.75a8.13 8.13 0 01-8.13 0L4.06 62.12A8.13 8.13 0 010 55.08V23.82c0-2.9 1.55-5.58 4.06-7.03L31.13 1.16a8.13 8.13 0 018.13 0zm12.65 23.57L38.67 17.1a8.13 8.13 0 00-8.11 0l-13.24 7.63a8.13 8.13 0 00-4.07 7.04V47c0 2.9 1.55 5.6 4.07 7.04l13.24 7.63a8.13 8.13 0 008.11 0l13.24-7.63A8.13 8.13 0 0055.98 47V31.77c0-2.9-1.56-5.6-4.07-7.04zM19.85 38.57l7.66-7.67a1.63 1.63 0 012.3 0l2.69 2.68c.63.64.63 1.67 0 2.3l-3.84 3.84 3.84 3.83c.63.64.63 1.67 0 2.3l-2.69 2.68c-.63.64-1.66.64-2.3 0l-7.66-7.66a1.63 1.63 0 010-2.3zm31.02-.05l-7.67-7.67a1.63 1.63 0 00-2.3 0l-2.68 2.68a1.63 1.63 0 000 2.3l3.83 3.84-3.83 3.83a1.63 1.63 0 000 2.3l2.69 2.68c.63.64 1.66.64 2.3 0l7.66-7.66c.64-.64.64-1.67 0-2.3z"
      fill="#3884FF"
    />
  </svg>
);


export default {
  repository: "https://github.com/uiuxarghya/javaistic",
  docsRepository: "https://github.com/uiuxarghya/javaistic",
  titleSuffix: " – Javaistic",
  search: true,
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
        color="#000000"
      />
      <meta name="google-site-verification" content="OMYBoUbVEYAJu6SsOajfrvkTJunKMieK9ZhAgOFHobM" />
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
      <meta name="twitter:site" content="@uiuxarghya" />
      <meta
        name="twitter:image"
        content="https://raw.githubusercontent.com/uiuxarghya/javaistic/main/public/og.png"
      />
      <meta name="og:title" content="Javaistic: Learn Java for free." />
      <meta name="og:url" content="https://javaistic.vercel.app" />
      <meta
        name="og:image"
        content="https://raw.githubusercontent.com/uiuxarghya/javaistic/main/public/og.png"
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
          <a
            href="https://uiuxarghya.netlify.app/"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center no-underline text-current font-semibold"
          >
            <span className="ml-1 mr-1">
              &copy; {new Date().getFullYear()}
            </span>
            <span className="mr-1">Arghya Ghosh .</span>
          </a>
        );
    }
  },
  /*i18n: [
    { locale: "en-US", text: "English" },
  ],
  */
};
