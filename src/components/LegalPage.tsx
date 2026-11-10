import { ArrowLeft } from 'lucide-react';
import { SITE_METADATA } from '../data/content';

export type LegalPageId = 'privacy-policy' | 'terms-of-use' | 'cookie-policy';

interface LegalPageProps {
  page: LegalPageId;
  onBack: () => void;
}

const LEGAL_CONTENT: Record<
  LegalPageId,
  { title: string; intro: string; sections: { heading: string; paragraphs: string[] }[] }
> = {
  'privacy-policy': {
    title: 'Privacy Policy',
    intro: 'This policy describes how this website handles information when you browse or contact KSR GROUPS.',
    sections: [
      {
        heading: 'Information you provide',
        paragraphs: [
          'The enquiry form opens your email application with the details you enter. This website does not transmit or store that form information on its server. If you send the email, it will be handled by your email provider and by the recipient.',
          'If you use a contact-copy button, the selected contact detail is copied to your device clipboard after you request it.',
        ],
      },
      {
        heading: 'Browser storage and cookies',
        paragraphs: [
          'The cookie notice stores your choice in your browser using local storage. See the Cookie Policy for details. This website currently does not use analytics or advertising cookies.',
        ],
      },
      {
        heading: 'Third-party services',
        paragraphs: [
          'This website loads the Inter typeface using Google Fonts. Your browser connects to Google to retrieve the font, and Google may receive technical request information such as your IP address. Google processes that information under its own policies.',
        ],
      },
      {
        heading: 'Contact',
        paragraphs: [
          `For privacy questions, contact KSR GROUPS at ${SITE_METADATA.email}.`,
        ],
      },
    ],
  },
  'terms-of-use': {
    title: 'Terms of Use',
    intro: 'By using this website, you agree to these terms. If you do not agree, please stop using the website.',
    sections: [
      {
        heading: 'Website information',
        paragraphs: [
          'The website provides general information about KSR GROUPS and its business areas. Content may be incomplete, illustrative, or subject to change. Verify project status, product availability, export markets, approvals, and other operational details directly before relying on them.',
          'Website content is not an offer, quote, or binding commitment. Any business arrangement is subject to separate written terms and required approvals.',
        ],
      },
      {
        heading: 'Permitted use',
        paragraphs: [
          'You may use this website for lawful, informational purposes. Do not attempt to disrupt the website, gain unauthorized access, or misuse its content or contact facilities.',
        ],
      },
      {
        heading: 'Third-party services and availability',
        paragraphs: [
          'The website may depend on third-party services, including Google Fonts. KSR GROUPS does not control those services or guarantee uninterrupted website availability.',
        ],
      },
      {
        heading: 'Changes and contact',
        paragraphs: [
          'These terms may be updated as the website changes. Questions may be sent to KSR GROUPS at ' + SITE_METADATA.email + '.',
        ],
      },
    ],
  },
  'cookie-policy': {
    title: 'Cookie Policy',
    intro: 'This page explains cookies and similar browser storage used by this website.',
    sections: [
      {
        heading: 'Current use',
        paragraphs: [
          'This website currently does not use analytics or advertising cookies. To remember your choice, it stores either “essential-only” or “all” under “ksr-cookie-consent” in your browser local storage. This preference stays on your device until you clear it. No optional cookies are currently enabled.',
        ],
      },
      {
        heading: 'Google Fonts',
        paragraphs: [
          'The website loads the Inter typeface from Google Fonts. Your browser makes a request to Google for the font, which may include technical information such as your IP address. This request is separate from the cookie preference stored by this website.',
        ],
      },
      {
        heading: 'Managing your choice',
        paragraphs: [
          'You can clear this website’s local storage through your browser settings. The cookie notice will appear again on your next visit. Blocking Google Fonts may cause your browser to display a system font instead.',
        ],
      },
      {
        heading: 'Questions',
        paragraphs: [
          `For questions about this policy, contact KSR GROUPS at ${SITE_METADATA.email}.`,
        ],
      },
    ],
  },
};

export function LegalPage({ page, onBack }: LegalPageProps) {
  const content = LEGAL_CONTENT[page];

  return (
    <section className="flex-1 bg-slate-50 py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-950 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to website
        </button>

        <article className="mt-8 rounded-xl border border-slate-300 bg-white p-6 sm:p-10 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-[#a4772e]">
            KSR GROUPS · Website policies
          </p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            {content.title}
          </h1>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
            {content.intro}
          </p>
          <p className="mt-3 text-xs text-slate-500">Last updated: November 2026</p>

          <div className="mt-8 space-y-7">
            {content.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-lg font-bold text-slate-900">{section.heading}</h2>
                <div className="mt-2 space-y-3">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-sm leading-relaxed text-slate-600"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
