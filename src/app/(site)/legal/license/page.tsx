export default function LicensePage(): React.ReactElement {
  return (
    <main className="container max-w-4xl pt-20 max-sm:px-0 md:pb-12">
      <div className="mb-8 text-center">
        <h1 className="mb-4 text-4xl font-bold text-neutral-900 dark:text-white">
          Licensing
        </h1>
        <p className="mb-6 text-lg text-neutral-600 dark:text-neutral-400">
          Javaistic uses a dual licensing model for different types of content.
        </p>
        <div className="text-sm text-neutral-500 dark:text-neutral-500">
          <p>
            <strong>Adopted:</strong> July 29, 2025
          </p>
          <p>
            <strong>Last Updated:</strong> October 16, 2025
          </p>
        </div>
      </div>
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <h2>Dual License Overview</h2>
        <p>
          Javaistic is licensed under a <strong>dual license</strong> model to
          appropriately protect different types of content while maintaining
          open source principles:
        </p>

        <div className="mb-8 rounded-lg bg-neutral-50 p-6 dark:bg-neutral-900">
          <h3 className="mb-4 text-xl font-semibold text-neutral-900 dark:text-white">
            1. Platform Code (Source Code)
          </h3>
          <div className="mb-4 flex items-center gap-4">
            <img
              src="https://img.shields.io/badge/License-AGPL%20v3-blue.svg"
              alt="AGPL v3 License"
              className="h-6"
            />
            <span className="text-lg font-medium">
              GNU Affero General Public License v3.0 (AGPL-3.0)
            </span>
          </div>
          <p className="mb-4">
            The source code of Javaistic is licensed under the AGPL-3.0, which
            is a strong copyleft license that ensures:
          </p>
          <ul className="mb-4">
            <li>Freedom to use the software for any purpose</li>
            <li>Freedom to study and modify the source code</li>
            <li>Freedom to redistribute copies</li>
            <li>Freedom to distribute modified versions</li>
            <li>
              <strong>Network use protection:</strong> If you run a modified
              version on a server, you must make the source code available to
              users
            </li>
          </ul>
          <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
            This license is particularly important for web applications to
            ensure that modifications remain open source.
          </p>
          <a
            href="https://www.gnu.org/licenses/agpl-3.0.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            View Full AGPL-3.0 License
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>

        <div className="mb-8 rounded-lg bg-neutral-50 p-6 dark:bg-neutral-900">
          <h3 className="mb-4 text-xl font-semibold text-neutral-900 dark:text-white">
            2. Content (Documentation, Blog, Articles)
          </h3>
          <div className="mb-4 flex items-center gap-4">
            <img
              src="https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png"
              alt="CC BY-NC-SA 4.0"
              className="h-6"
            />
            <span className="text-lg font-medium">
              Creative Commons Attribution-NonCommercial-ShareAlike 4.0
              International
            </span>
          </div>
          <p className="mb-4">
            All written content, including documentation, blog posts, tutorials,
            and articles, is licensed under CC BY-NC-SA 4.0, which allows:
          </p>
          <ul className="mb-4">
            <li>
              <strong>Sharing:</strong> Copy and redistribute the material in
              any medium or format
            </li>
            <li>
              <strong>Adapting:</strong> Remix, transform, and build upon the
              material
            </li>
            <li>
              <strong>Attribution:</strong> You must give appropriate credit and
              indicate if changes were made
            </li>
            <li>
              <strong>Non-Commercial:</strong> You may not use the material for
              commercial purposes
            </li>
            <li>
              <strong>Share-Alike:</strong> If you remix or build upon the
              material, you must distribute your contributions under the same
              license
            </li>
          </ul>
          <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
            This license ensures educational content remains freely available
            for learning while preventing commercial exploitation.
          </p>
          <a
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            View Full CC BY-NC-SA 4.0 License
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>

        <h2>License Files</h2>
        <p>You can find the complete license texts in our repository:</p>
        <ul>
          <li>
            <a
              href="https://github.com/javaistic/javaistic/blob/main/licenses/LICENSE-AGPL.md"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Full AGPL-3.0 License Text
            </a>
          </li>
          <li>
            <a
              href="https://github.com/javaistic/javaistic/blob/main/licenses/LICENSE-CC.md"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Full CC BY-NC-SA 4.0 License Text
            </a>
          </li>
          <li>
            <a
              href="https://github.com/javaistic/javaistic/blob/main/LICENSE.md"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              License Overview (LICENSE.md)
            </a>
          </li>
        </ul>

        <h2>Contributing</h2>
        <p>When contributing to Javaistic:</p>
        <ul>
          <li>
            <strong>Code contributions</strong> will be licensed under AGPL-3.0
          </li>
          <li>
            <strong>Content contributions</strong> (documentation, articles,
            etc.) will be licensed under CC BY-NC-SA 4.0
          </li>
          <li>
            All contributions must comply with the respective license terms
          </li>
        </ul>

        <h2>Copyright Notice</h2>
        <p className="rounded-lg bg-neutral-100 p-4 text-center dark:bg-neutral-800">
          <strong>Copyright © 2025 Arghya Ghosh</strong>
          <br />
          <a
            href="https://arghya.dev"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            arghya.dev
          </a>
        </p>

        <h2>Contact</h2>
        <p>
          For licensing inquiries or questions about using Javaistic content,
          please contact:
        </p>
        <ul>
          <li>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:uiuxarghya@gmail.com"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              uiuxarghya@gmail.com
            </a>
          </li>
          <li>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/javaistic/javaistic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              javaistic/javaistic
            </a>
          </li>
        </ul>

        <div className="mt-8 rounded-lg border border-yellow-200 bg-yellow-50 p-4 py-0 dark:border-yellow-800 dark:bg-yellow-900/20">
          <h3 className="mb-2 font-semibold text-yellow-800 dark:text-yellow-200">
            Important Note
          </h3>
          <p className="text-sm text-yellow-700 dark:text-yellow-300">
            This licensing page is for informational purposes. For legal advice
            or specific use cases, please consult with a qualified legal
            professional. The licenses described here apply to the original
            Javaistic project content only.
          </p>
        </div>
      </div>
    </main>
  );
}
