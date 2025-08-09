import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from "fumadocs-ui/page";

export default function Page() {
  return (
    <DocsPage
      toc={[
        { title: "Acceptance of Terms", url: "#acceptance", depth: 2 },
        { title: "Description of Service", url: "#service-description", depth: 2 },
        { title: "User Accounts", url: "#user-accounts", depth: 2 },
        { title: "Acceptable Use", url: "#acceptable-use", depth: 2 },
        { title: "Content and Intellectual Property", url: "#content-ip", depth: 2 },
        { title: "Community Guidelines", url: "#community-guidelines", depth: 2 },
        { title: "Privacy and Data", url: "#privacy-data", depth: 2 },
        { title: "Disclaimers and Limitations", url: "#disclaimers", depth: 2 },
        { title: "Termination", url: "#termination", depth: 2 },
        { title: "Changes to Terms", url: "#changes", depth: 2 },
        { title: "Contact Information", url: "#contact", depth: 2 },
      ]}
      tableOfContent={{
        style: "clerk",
      }}
      full={true}
    >
      <DocsTitle>Terms of Service</DocsTitle>
      <DocsDescription>
        These terms govern your use of Javaistic, our free and open-source Java programming learning platform.
      </DocsDescription>
      
      <DocsBody>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <div className="mb-8 text-sm text-muted-foreground">
            <p><strong>Effective Date:</strong> August 2025</p>
            <p><strong>Last Updated:</strong> August 2025</p>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            Welcome to Javaistic! These Terms of Service (&quot;Terms&quot;) govern your use of our free and open-source Java programming learning platform. By accessing or using Javaistic, you agree to be bound by these Terms and our Privacy Policy.
          </p>

          <h2 id="acceptance" className="text-2xl font-semibold mt-8 mb-4">
            Acceptance of Terms
          </h2>

          <p className="mb-4">
            By accessing, browsing, or using Javaistic, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree with any part of these Terms, you may not use our platform.
          </p>

          <p className="mb-6">
            These Terms constitute a legally binding agreement between you and Javaistic. If you are using our platform on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.
          </p>

          <h2 id="service-description" className="text-2xl font-semibold mt-8 mb-4">
            Description of Service
          </h2>

          <h3 className="text-xl font-medium mt-6 mb-3">Educational Platform</h3>
          <p className="mb-4">
            Javaistic is a free, interactive learning platform designed to help users master Java programming efficiently. Our platform provides:
          </p>
          <ul className="space-y-2 mb-4">
            <li>Interactive Java programming lessons and tutorials</li>
            <li>Coding exercises, quizzes, and practical projects</li>
            <li>Community forums and discussion spaces</li>
            <li>Progress tracking and learning analytics</li>
            <li>Code compilation and execution environments</li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3">Open Source Nature</h3>
          <p className="mb-4">
            Javaistic is an open-source project, meaning our source code is publicly available and the community can contribute to its development. We are committed to transparency and collaborative improvement.
          </p>

          <h3 className="text-xl font-medium mt-6 mb-3">Free Service</h3>
          <p className="mb-6">
            Our core educational content and features are provided free of charge. We believe in making quality programming education accessible to everyone, regardless of economic circumstances.
          </p>

          <h2 id="user-accounts" className="text-2xl font-semibold mt-8 mb-4">
            User Accounts
          </h2>

          <h3 className="text-xl font-medium mt-6 mb-3">Account Creation</h3>
          <ul className="space-y-2 mb-4">
            <li>You must provide accurate and complete information when creating an account</li>
            <li>You are responsible for maintaining the security of your account credentials</li>
            <li>You must notify us immediately of any unauthorized use of your account</li>
            <li>One person may not maintain multiple accounts without our permission</li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3">Account Responsibility</h3>
          <ul className="space-y-2 mb-6">
            <li>You are fully responsible for all activities that occur under your account</li>
            <li>You must not share your account credentials with others</li>
            <li>You must keep your contact information up to date</li>
            <li>You may delete your account at any time through your account settings</li>
          </ul>

          <h2 id="acceptable-use" className="text-2xl font-semibold mt-8 mb-4">
            Acceptable Use
          </h2>

          <h3 className="text-xl font-medium mt-6 mb-3">Permitted Uses</h3>
          <ul className="space-y-2 mb-4">
            <li>Learning Java programming through our educational content</li>
            <li>Participating constructively in community discussions</li>
            <li>Sharing code examples and solutions for educational purposes</li>
            <li>Contributing to the open-source project through proper channels</li>
            <li>Using our platform for personal or educational projects</li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3">Prohibited Uses</h3>
          <p className="mb-2">You may not use Javaistic to:</p>
          <ul className="space-y-2 mb-6">
            <li>Violate any applicable laws or regulations</li>
            <li>Harass, abuse, or harm other users</li>
            <li>Post spam, malicious code, or inappropriate content</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Interfere with or disrupt the platform&apos;s functionality</li>
            <li>Use automated tools to scrape or download content without permission</li>
            <li>Impersonate others or provide false information</li>
            <li>Use the platform for commercial purposes without authorization</li>
          </ul>

          <h2 id="content-ip" className="text-2xl font-semibold mt-8 mb-4">
            Content and Intellectual Property
          </h2>

          <h3 className="text-xl font-medium mt-6 mb-3">Javaistic Content</h3>
          <p className="mb-4">
            Our educational content, including lessons, exercises, and platform features, is protected by intellectual property laws. As an open-source project, much of our content is available under open-source licenses, but you should respect the specific license terms.
          </p>

          <h3 className="text-xl font-medium mt-6 mb-3">User-Generated Content</h3>
          <ul className="space-y-2 mb-4">
            <li>You retain ownership of the original content you create and post</li>
            <li>By posting content, you grant us a license to use, display, and distribute it on our platform</li>
            <li>You represent that you have the right to post the content you share</li>
            <li>You may not post content that infringes on others&apos; intellectual property rights</li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3">Code and Solutions</h3>
          <ul className="space-y-2 mb-6">
            <li>Code examples and solutions you post may be used by other learners for educational purposes</li>
            <li>We encourage sharing knowledge while respecting academic integrity</li>
            <li>Do not post solutions to ongoing assessments or assignments from educational institutions</li>
          </ul>

          <h2 id="community-guidelines" className="text-2xl font-semibold mt-8 mb-4">
            Community Guidelines
          </h2>

          <h3 className="text-xl font-medium mt-6 mb-3">Respectful Interaction</h3>
          <ul className="space-y-2 mb-4">
            <li>Treat all community members with respect and kindness</li>
            <li>Provide constructive feedback and assistance to fellow learners</li>
            <li>Avoid discriminatory language or behavior based on race, gender, religion, or other protected characteristics</li>
            <li>Respect different skill levels and learning paces</li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3">Quality Contributions</h3>
          <ul className="space-y-2 mb-4">
            <li>Post relevant, helpful, and accurate information</li>
            <li>Use clear and descriptive titles for forum posts</li>
            <li>Search existing discussions before posting duplicate questions</li>
            <li>Provide context and details when asking for help</li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3">Moderation</h3>
          <ul className="space-y-2 mb-6">
            <li>We reserve the right to moderate, edit, or remove content that violates these guidelines</li>
            <li>Repeated violations may result in account suspension or termination</li>
            <li>Appeals for moderation decisions can be submitted through our contact channels</li>
          </ul>

          <h2 id="privacy-data" className="text-2xl font-semibold mt-8 mb-4">
            Privacy and Data
          </h2>

          <p className="mb-4">
            Your privacy is important to us. Our Privacy Policy, which is incorporated into these Terms by reference, explains how we collect, use, and protect your personal information.
          </p>

          <ul className="space-y-2 mb-6">
            <li>We collect only the information necessary to provide our educational services</li>
            <li>We do not sell your personal information to third parties</li>
            <li>You have rights regarding your personal data as outlined in our Privacy Policy</li>
            <li>We implement security measures to protect your information</li>
          </ul>

          <h2 id="disclaimers" className="text-2xl font-semibold mt-8 mb-4">
            Disclaimers and Limitations
          </h2>

          <h3 className="text-xl font-medium mt-6 mb-3">Educational Purpose</h3>
          <p className="mb-4">
            Javaistic is designed for educational purposes. While we strive to provide accurate and up-to-date content, we cannot guarantee that our materials are error-free or suitable for all learning needs.
          </p>

          <h3 className="text-xl font-medium mt-6 mb-3">No Warranty</h3>
          <p className="mb-4">
            Our platform is provided &quot;as is&quot; without warranties of any kind. We do not guarantee uninterrupted access, error-free operation, or that the platform will meet your specific requirements.
          </p>

          <h3 className="text-xl font-medium mt-6 mb-3">Limitation of Liability</h3>
          <p className="mb-6">
            To the maximum extent permitted by law, Javaistic shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our platform.
          </p>

          <h2 id="termination" className="text-2xl font-semibold mt-8 mb-4">
            Termination
          </h2>

          <h3 className="text-xl font-medium mt-6 mb-3">By You</h3>
          <ul className="space-y-2 mb-4">
            <li>You may terminate your account at any time by deleting it through your account settings</li>
            <li>You may stop using our platform at any time without notice</li>
            <li>Termination does not relieve you of obligations incurred before termination</li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3">By Us</h3>
          <ul className="space-y-2 mb-6">
            <li>We may suspend or terminate accounts that violate these Terms</li>
            <li>We may discontinue or modify our services with reasonable notice</li>
            <li>We reserve the right to refuse service to anyone for any lawful reason</li>
          </ul>

          <h2 id="changes" className="text-2xl font-semibold mt-8 mb-4">
            Changes to These Terms
          </h2>

          <p className="mb-4">
            We may update these Terms from time to time to reflect changes in our practices, legal requirements, or platform features. When we make significant changes, we will:
          </p>
          <ul className="space-y-2 mb-4">
            <li>Notify users through email or platform announcements</li>
            <li>Update the &quot;Last Updated&quot; date at the top of these Terms</li>
            <li>Provide a reasonable notice period before changes take effect</li>
          </ul>
          <p className="mb-6">
            Continued use of Javaistic after changes take effect constitutes acceptance of the updated Terms.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Governing Law
          </h2>
          <p className="mb-6">
            These Terms shall be governed by and construed in accordance with applicable laws. Any disputes arising from these Terms or your use of Javaistic shall be resolved through appropriate legal channels.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Severability
          </h2>
          <p className="mb-6">
            If any provision of these Terms is found to be unenforceable or invalid, the remaining provisions shall remain in full force and effect.
          </p>

          <h2 id="contact" className="text-2xl font-semibold mt-8 mb-4">
            Contact Information
          </h2>

          <p className="mb-4">If you have questions about these Terms of Service, please contact us:</p>
          <ul className="space-y-2 mb-6">
            <li><strong>Email:</strong> legal@javaistic.com</li>
            <li><strong>GitHub Issues:</strong> Report issues through our open-source repository</li>
            <li><strong>Community Forum:</strong> Discuss terms and policies with our community moderators</li>
          </ul>

          <hr className="my-8 border-border" />
          
          <p className="text-sm text-muted-foreground italic text-center">
            Thank you for being part of the Javaistic community. Together, we&apos;re making Java programming education accessible and enjoyable for everyone.
          </p>
        </div>
      </DocsBody>
    </DocsPage>
  );
}

export async function generateMetadata() {
  return {
    title: "Terms of Service",
    description: "These terms govern your use of Javaistic, our free and open-source Java programming learning platform.",
    openGraph: {
      title: "Terms of Service",
      description: "These terms govern your use of Javaistic, our free and open-source Java programming learning platform.",
      sitename: "Javaistic",
      images: `https://og-javaistic.vercel.app/og?title=Terms of Service`,
    },
    twitter: {
      card: "summary_large_image",
      site: "@javaistic",
      creator: "@uiuxarghya",
    },
  };
}