const PLACEHOLDER_MARKER = 'REPLACE_WITH_YOUR_FORM_ID';

/**
 * Extracts a Tally form ID from a Tally URL (e.g. https://tally.so/r/mD9xyz).
 */
export function extractTallyFormId(url) {
  if (!url || url.includes(PLACEHOLDER_MARKER)) {
    return null;
  }

  const match = url.match(/tally\.so\/(?:r|forms)\/([a-zA-Z0-9_-]+)/i);
  return match ? match[1] : null;
}

/**
 * Returns true if a non-placeholder Tally URL is configured in .env.
 */
export function isTallyConfigured(url) {
  return Boolean(url && !url.includes(PLACEHOLDER_MARKER));
}

/**
 * Opens the Tally form as an in-page popup modal when Tally's embed script is
 * available, or falls back to opening the configured URL in a new tab.
 */
export function openTallyForm(url) {
  if (!isTallyConfigured(url)) {
    return { opened: false, reason: 'placeholder' };
  }

  const formId = extractTallyFormId(url);
  if (formId && typeof window !== 'undefined' && window.Tally?.openPopup) {
    window.Tally.openPopup(formId, {
      layout: 'modal',
      width: 700,
      overlay: true,
      autoClose: 1000,
    });
    return { opened: true, mode: 'popup' };
  }

  window.open(url, '_blank', 'noopener,noreferrer');
  return { opened: true, mode: 'tab' };
}
