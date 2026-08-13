/**
 * Verified business facts, kept in one place so no component invents its own.
 *
 * Everything here was confirmed directly by the owner. Anything unconfirmed is
 * absent by design rather than guessed: no customer list, no years-in-business,
 * and no machine count. Do not add claims here that have not been confirmed.
 *
 * Contact is email only. There is deliberately no phone number in the codebase.
 */

export const site = {
  name: 'PM Vending',
  /** New enquiries. This is the address every call to action points at. */
  salesEmail: 'sales@pmvends.com',
  /**
   * Existing customers with a machine already on site. Kept out of the calls to
   * action and shown only in the footer, so it does not compete with the sales
   * address on a page whose job is new enquiries.
   */
  supportEmail: 'support@pmvends.com',
  serviceArea: 'Chicagoland',
  hours: {
    label: 'Monday to Friday, 8:30am to 5:00pm',
    short: '8:30am to 5:00pm',
  },
} as const;

/**
 * The Formspree form id, the part after /f/ in the endpoint.
 *
 * GitHub Pages cannot process a POST, so the form posts to Formspree, which
 * emails the submission on and returns the visitor to /thanks. That redirect is
 * built from `site` in astro.config.mjs, so if the deployment URL changes, that
 * constant must change with it or people will land on a dead address.
 *
 * Setting this back to null makes the form fall back to a mailto: link.
 */
export const formspreeId: string | null = 'xyegjbrb';

/** The four steps the owner described, from first contact to a stocked machine. */
export const process = [
  {
    title: 'You get in touch',
    body: 'Email us with your location and roughly how many people are on site. There is no form to fight with and nothing to sign at this stage.',
  },
  {
    title: 'We talk through the site',
    body: 'A short email exchange about your team size, the space available, and whether you want snacks, drinks, or both.',
  },
  {
    title: 'We choose the products together',
    body: 'You tell us what your team actually drinks and eats. That list decides what goes in the machine rather than a fixed national planogram.',
  },
  {
    title: 'We install and keep it stocked',
    body: 'We place the machine, keep it filled, and handle the servicing. Your team pays at the machine by tapping a card.',
  },
] as const;
