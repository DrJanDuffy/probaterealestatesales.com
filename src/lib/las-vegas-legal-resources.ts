/**
 * Third-party legal / court directory for Las Vegas & Clark County.
 * Phone and addresses are for visitor convenience; hours and services change—verify with each office.
 * Website URLs are included only for official government or nonprofit sources we can link safely.
 */

export type LegalResourceGroupId = 'self-help-and-aid' | 'courts-and-government';

export type LegalResourceEntry = {
  id: string;
  name: string;
  role: string;
  address: string;
  cityStateZip: string;
  /** Display format e.g. (702) 555-0100 */
  phone?: string;
  /** E.164 for tel: links */
  phoneE164?: string;
  hoursNote?: string;
  servicesNote?: string;
  /** Official .gov / established nonprofit only */
  websiteUrl?: string;
  websiteLabel?: string;
};

export const LEGAL_RESOURCE_GROUPS: Array<{
  id: LegalResourceGroupId;
  title: string;
  description: string;
}> = [
  {
    id: 'self-help-and-aid',
    title: 'Self-help centers & legal aid',
    description:
      'Free or low-cost forms help and civil information. These offices do not replace advice from your own attorney for your specific case.',
  },
  {
    id: 'courts-and-government',
    title: 'Courts & county offices',
    description:
      'Clark County court facilities and related county offices involved in probate, guardianship, and estate matters.',
  },
];

const NV = 'Las Vegas, NV';

function telDigits(display: string): string | undefined {
  const d = display.replace(/\D/g, '');
  if (d.length === 10) return `+1${d}`;
  if (d.length === 11 && d.startsWith('1')) return `+${d}`;
  return undefined;
}

function entry(
  partial: Omit<LegalResourceEntry, 'phoneE164'> & { phone?: string }
): LegalResourceEntry {
  const { phone, ...rest } = partial;
  return {
    ...rest,
    phone,
    phoneE164: phone ? telDigits(phone) : undefined,
  };
}

export const LEGAL_RESOURCE_ENTRIES: LegalResourceEntry[] = [
  entry({
    id: 'civil-law-self-help-center',
    name: 'Civil Law Self-Help Center',
    role: 'Self-help center (Clark County Courts)',
    address: '200 Lewis Ave',
    cityStateZip: NV,
    phone: '(702) 671-4528',
    hoursNote: 'Typical hours: open weekdays; confirm before visiting.',
    servicesNote: 'Onsite services',
    websiteUrl: 'https://www.clarkcountycourts.us/',
    websiteLabel: 'Clark County Courts (self-help)',
  }),
  entry({
    id: 'legal-aid-center-of-southern-nevada',
    name: 'Legal Aid Center of Southern Nevada',
    role: 'Non-profit organization',
    address: '725 E Charleston Blvd',
    cityStateZip: NV,
    phone: '(702) 386-1070',
    hoursNote: 'Typical hours: open weekdays; confirm before visiting.',
    servicesNote: 'Onsite services',
    websiteUrl: 'https://www.lacsn.org/',
    websiteLabel: 'Legal Aid Center of Southern Nevada',
  }),
  entry({
    id: 'regional-justice-center',
    name: 'Regional Justice Center',
    role: 'City courthouse',
    address: '200 Lewis Ave',
    cityStateZip: NV,
    phone: '(702) 671-4528',
    hoursNote: 'Typical hours: open weekdays; confirm before visiting.',
    websiteUrl: 'https://www.clarkcountycourts.us/',
    websiteLabel: 'Clark County Courts',
  }),
  entry({
    id: 'family-courts-and-services-center',
    name: 'Family Courts and Services Center',
    role: 'County court',
    address: '601 N Pecos Rd',
    cityStateZip: NV,
    phone: '(702) 455-2385',
    hoursNote: 'Typical hours: open weekdays; confirm before visiting.',
    websiteUrl: 'https://www.clarkcountycourts.us/',
    websiteLabel: 'Clark County Courts',
  }),
  entry({
    id: 'las-vegas-district-court',
    name: 'Las Vegas District Court (Eighth Judicial District)',
    role: 'City courthouse',
    address: '401 S 3rd St',
    cityStateZip: NV,
    hoursNote: 'Confirm filing hours and department contacts on the court website.',
    websiteUrl: 'https://www.clarkcountycourts.us/',
    websiteLabel: 'Clark County Courts',
  }),
  entry({
    id: 'las-vegas-justice-court',
    name: 'Las Vegas Justice Court',
    role: 'Courthouse',
    address: '200 Lewis Ave #2',
    cityStateZip: NV,
    phone: '(702) 671-3116',
    hoursNote: 'Typical hours: open weekdays; confirm before visiting.',
    websiteUrl: 'https://www.clarkcountycourts.us/',
    websiteLabel: 'Clark County Courts',
  }),
  entry({
    id: 'clark-county-public-administrator',
    name: 'Clark County Public Administrator / Guardian',
    role: 'County government office',
    address: '515 Shadow Ln',
    cityStateZip: NV,
    phone: '(702) 455-4332',
    hoursNote: 'Typical hours: open weekdays; confirm before visiting.',
    websiteUrl: 'https://www.clarkcountynv.gov/',
    websiteLabel: 'Clark County, NV (Public Administrator)',
  }),
];

const GROUP_BY_ID: Record<LegalResourceGroupId, { match: (e: LegalResourceEntry) => boolean }> = {
  'self-help-and-aid': {
    match: (e) =>
      e.id === 'civil-law-self-help-center' || e.id === 'legal-aid-center-of-southern-nevada',
  },
  'courts-and-government': {
    match: (e) =>
      [
        'regional-justice-center',
        'family-courts-and-services-center',
        'las-vegas-district-court',
        'las-vegas-justice-court',
        'clark-county-public-administrator',
      ].includes(e.id),
  },
};

export function getLegalResourcesByGroup(id: LegalResourceGroupId): LegalResourceEntry[] {
  return LEGAL_RESOURCE_ENTRIES.filter(GROUP_BY_ID[id].match);
}

export function googleMapsSearchUrl(address: string, cityStateZip: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${address}, ${cityStateZip}`)}`;
}
