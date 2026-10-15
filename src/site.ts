// Site-wide constants. Change addresses here, not in the pages.
export const APP_URL = 'https://app.candataextract.com';
export const SALES_EMAIL = 'sales@candataextract.com';
export const COMPANY = 'Can Data Extract ApS';

export function salesMailto(subject: string): string {
  return `mailto:${SALES_EMAIL}?subject=${encodeURIComponent(subject)}`;
}
