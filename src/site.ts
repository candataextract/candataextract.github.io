// Site-wide constants. Change addresses here, not in the pages.
export const APP_URL = 'https://app.candataextract.com';
export const SALES_EMAIL = 'sales@candataextract.com';
export const COMPANY = 'Can Data Extract ApS';
export const CVR = '46815106';
export const ADDRESS = ['Peter Holms Vej 11, 3. tv', '2450 København SV', 'Denmark'];

export function salesMailto(subject: string): string {
  return `mailto:${SALES_EMAIL}?subject=${encodeURIComponent(subject)}`;
}
