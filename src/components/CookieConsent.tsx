interface CookieConsentProps {
  onEssentialOnly: () => void;
  onAcceptAll: () => void;
  onOpenPolicy: () => void;
}

export function CookieConsent({
  onEssentialOnly,
  onAcceptAll,
  onOpenPolicy,
}: CookieConsentProps) {
  return (
    <aside
      aria-labelledby="cookie-notice-title"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-slate-200 bg-white shadow-2xl"
    >
      <div className="mx-auto flex max-w-[1600px] flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="max-w-3xl">
          <h2 id="cookie-notice-title" className="text-sm font-semibold text-slate-900">
            Your cookie preferences
          </h2>
          <p className="mt-1 text-xs leading-relaxed text-slate-600">
            We use essential storage to remember this choice. Optional analytics or
            marketing cookies will only be enabled if those services are added and you
            consent. Read our{' '}
            <button
              type="button"
              onClick={onOpenPolicy}
              className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900"
            >
              Cookie Policy
            </button>
            .
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2">
          <button
            type="button"
            onClick={onEssentialOnly}
            className="border border-slate-300 bg-white px-4 py-2.5 text-xs font-semibold text-slate-800 transition-colors hover:bg-slate-100"
          >
            Essential only
          </button>
          <button
            type="button"
            onClick={onAcceptAll}
            className="bg-black px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-neutral-800"
          >
            Accept all
          </button>
        </div>
      </div>
    </aside>
  );
}
