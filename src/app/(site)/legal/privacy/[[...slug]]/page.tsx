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
        { title: "Information We Collect", url: "#information-we-collect", depth: 2 },
        { title: "How We Use Your Information", url: "#how-we-use-your-information", depth: 2 },
        { title: "Information Sharing and Disclosure", url: "#information-sharing", depth: 2 },
        { title: "Data Security and Storage", url: "#data-security", depth: 2 },
        { title: "Your Rights and Choices", url: "#your-rights", depth: 2 },
        { title: "Cookies and Tracking", url: "#cookies", depth: 2 },
        { title: "Children&apos;s Privacy", url: "#childrens-privacy", depth: 2 },
        { title: "Contact Information", url: "#contact", depth: 2 },
      ]}
      tableOfContent={{
        style: "clerk",
      }}
      full={true}
    >
      <DocsTitle>Privacy Policy</DocsTitle>
      <DocsDescription>
        Learn how Javaistic collects, uses, and protects your personal information while you master Java programming.
      </DocsDescription>
      
      <DocsBody>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <div className="mb-8 text-sm text-muted-foreground">
            <p><strong>Effective Date:</strong> August 2025</p>
            <p><strong>Last Updated:</strong> August 2025</p>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            At Javaistic, we are committed to protecting your privacy and ensuring transparency about how we handle your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our free and open-source Java programming learning platform.
          </p>

          <h2 id="information-we-collect" className="text-2xl font-semibold mt-8 mb-4">
            Information We Collect
          </h2>

          <h3 className="text-xl font-medium mt-6 mb-3">Information You Provide Directly</h3>
          <ul className="space-y-2 mb-4">
            <li><strong>Account Information:</strong> When you create an account, we collect your name, email address, and chosen username</li>
            <li><strong>Profile Information:</strong> Optional profile details such as learning goals, programming experience level, and bio</li>
            <li><strong>User Content:</strong> Code submissions, comments, forum posts, and other content you create on our platform</li>
            <li><strong>Communication:</strong> Messages you send to us through contact forms, support requests, or community interactions</li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3">Information We Collect Automatically</h3>
          <ul className="space-y-2 mb-6">
            <li><strong>Usage Analytics:</strong> How you interact with our lessons, exercises, and features to improve your learning experience</li>
            <li><strong>Technical Information:</strong> Browser type, device information, IP address, and operating system for platform optimization</li>
            <li><strong>Performance Data:</strong> Loading times, error reports, and feature usage to enhance platform reliability</li>
            <li><strong>Learning Progress:</strong> Your completion status, quiz results, and coding exercise submissions to track your Java programming journey</li>
          </ul>

          <h2 id="how-we-use-your-information" className="text-2xl font-semibold mt-8 mb-4">
            How We Use Your Information
          </h2>

          <h3 className="text-xl font-medium mt-6 mb-3">Educational Services</h3>
          <ul className="space-y-2 mb-4">
            <li>Provide personalized Java programming lessons and track your learning progress</li>
            <li>Generate coding exercises and quizzes tailored to your skill level</li>
            <li>Enable interactive features like code compilation and debugging</li>
            <li>Facilitate community discussions and peer learning opportunities</li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3">Platform Improvement</h3>
          <ul className="space-y-2 mb-4">
            <li>Analyze usage patterns to enhance our curriculum and user experience</li>
            <li>Identify and fix technical issues to ensure smooth learning</li>
            <li>Develop new features based on learner feedback and needs</li>
            <li>Optimize platform performance across different devices and browsers</li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3">Communication</h3>
          <ul className="space-y-2 mb-6">
            <li>Send important updates about your account and learning progress</li>
            <li>Notify you about new Java programming content and features</li>
            <li>Respond to your support requests and technical questions</li>
            <li>Share community highlights and programming tips (with your consent)</li>
          </ul>

          <h2 id="information-sharing" className="text-2xl font-semibold mt-8 mb-4">
            Information Sharing and Disclosure
          </h2>

          <h3 className="text-xl font-medium mt-6 mb-3">Public Content</h3>
          <ul className="space-y-2 mb-4">
            <li>Your forum posts, comments, and shared code examples may be visible to other learners</li>
            <li>Your profile information (excluding email) may be publicly displayed</li>
            <li>Leaderboards and achievement displays may show your username and progress</li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3">Service Providers</h3>
          <p className="mb-2">We may share information with trusted third-party services that help us operate Javaistic:</p>
          <ul className="space-y-2 mb-4">
            <li><strong>Hosting Providers:</strong> For reliable platform infrastructure</li>
            <li><strong>Analytics Services:</strong> To understand how learners use our platform</li>
            <li><strong>Email Services:</strong> For account notifications and educational content delivery</li>
            <li><strong>Content Delivery Networks:</strong> To ensure fast loading of lessons and resources</li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3">Legal Requirements</h3>
          <p className="mb-6">We may disclose information when required by law, to protect our rights, or to ensure the safety of our learning community.</p>

          <h2 id="data-security" className="text-2xl font-semibold mt-8 mb-4">
            Data Security and Storage
          </h2>

          <h3 className="text-xl font-medium mt-6 mb-3">Security Measures</h3>
          <ul className="space-y-2 mb-4">
            <li>Industry-standard encryption for data transmission and storage</li>
            <li>Regular security audits and vulnerability assessments</li>
            <li>Secure authentication systems with optional two-factor authentication</li>
            <li>Limited access to personal data on a need-to-know basis</li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3">Data Retention</h3>
          <ul className="space-y-2 mb-6">
            <li>Account information is retained while your account is active</li>
            <li>Learning progress data is preserved to maintain your educational journey</li>
            <li>Community contributions remain available to help other learners</li>
            <li>Inactive accounts may be archived after extended periods of non-use</li>
          </ul>

          <h2 id="your-rights" className="text-2xl font-semibold mt-8 mb-4">
            Your Rights and Choices
          </h2>

          <h3 className="text-xl font-medium mt-6 mb-3">Account Control</h3>
          <ul className="space-y-2 mb-4">
            <li><strong>Access:</strong> View and download your personal information and learning data</li>
            <li><strong>Update:</strong> Modify your profile information and account settings</li>
            <li><strong>Delete:</strong> Request deletion of your account and associated data</li>
            <li><strong>Export:</strong> Download your coding projects and learning progress</li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3">Privacy Preferences</h3>
          <ul className="space-y-2 mb-6">
            <li><strong>Email Communications:</strong> Opt out of non-essential notifications</li>
            <li><strong>Profile Visibility:</strong> Control what information is publicly displayed</li>
            <li><strong>Analytics:</strong> Understand how your usage data helps improve the platform</li>
            <li><strong>Community Participation:</strong> Choose your level of engagement in forums and discussions</li>
          </ul>

          <h2 id="cookies" className="text-2xl font-semibold mt-8 mb-4">
            Cookies and Tracking Technologies
          </h2>

          <p className="mb-4">We use cookies and similar technologies to:</p>
          <ul className="space-y-2 mb-4">
            <li>Remember your login status and preferences</li>
            <li>Analyze platform usage to improve educational content</li>
            <li>Provide personalized learning recommendations</li>
            <li>Ensure proper functionality of interactive coding features</li>
          </ul>
          <p className="mb-6">You can control cookie preferences through your browser settings, though some features may require certain cookies to function properly.</p>

          <h2 id="childrens-privacy" className="text-2xl font-semibold mt-8 mb-4">
            Children&apos;s Privacy
          </h2>
          <p className="mb-6">Javaistic welcomes learners of all ages to explore Java programming. For users under 13, we require parental consent and take additional measures to protect young learners&apos; privacy in accordance with applicable laws.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            International Data Transfers
          </h2>
          <p className="mb-6">As a global learning platform, your information may be transferred and processed in countries outside your residence. We ensure appropriate safeguards are in place to protect your data during such transfers.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Open Source Commitment
          </h2>
          <p className="mb-6">As an open-source project, Javaistic is transparent about our practices. Our source code is publicly available, allowing the community to review how we handle data and contribute to privacy improvements.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Changes to This Privacy Policy
          </h2>
          <p className="mb-6">We may update this Privacy Policy to reflect changes in our practices or legal requirements. We&apos;ll notify you of significant changes through email or platform announcements. Continued use of Javaistic constitutes acceptance of the updated policy.</p>

          <h2 id="contact" className="text-2xl font-semibold mt-8 mb-4">
            Contact Information
          </h2>

          <p className="mb-4">If you have questions about this Privacy Policy or how we handle your information, please reach out:</p>
          <ul className="space-y-2 mb-6">
            <li><strong>Email:</strong> privacy@javaistic.com</li>
            <li><strong>GitHub Issues:</strong> Report privacy concerns through our open-source repository</li>
            <li><strong>Community Forum:</strong> Discuss privacy topics with our community moderators</li>
          </ul>

          <hr className="my-8 border-border" />
          
          <p className="text-sm text-muted-foreground italic text-center">
            This Privacy Policy is part of our commitment to creating a safe, transparent, and effective learning environment for Java programming enthusiasts worldwide.
          </p>
        </div>
      </DocsBody>
    </DocsPage>
  );
}

export async function generateMetadata() {
  return {
    title: "Privacy Policy",
    description: "Learn how Javaistic collects, uses, and protects your personal information while you master Java programming.",
    openGraph: {
      title: "Privacy Policy",
      description: "Learn how Javaistic collects, uses, and protects your personal information while you master Java programming.",
      sitename: "Javaistic",
      images: `https://og-javaistic.vercel.app/og?title=Privacy Policy`,
    },
    twitter: {
      card: "summary_large_image",
      site: "@javaistic",
      creator: "@uiuxarghya",
    },
  };
}