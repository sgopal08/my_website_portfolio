// Lightweight visit/click tracking via GoatCounter (goatcounter.com) — free,
// cookie-free analytics with a JSON API. Sign up at https://www.goatcounter.com/signup,
// then replace GOATCOUNTER_CODE below with your site code (the part before
// ".goatcounter.com" in the URL GoatCounter gives you).
const GOATCOUNTER_CODE = 'sanjana';

// Visiting the site with ?owner=1 once sets a permanent local flag so your own
// future visits (from that browser) aren't counted. IP-based detection isn't
// reliable (home/mobile IPs change), so this is the practical alternative.
const OWNER_FLAG_KEY = 'sg_owner_visit';

function isOwner() {
  try {
    if (new URLSearchParams(window.location.search).get('owner') === '1') {
      localStorage.setItem(OWNER_FLAG_KEY, '1');
    }
    return localStorage.getItem(OWNER_FLAG_KEY) === '1';
  } catch {
    return false;
  }
}

let ready = false;

export function initAnalytics() {
  if (ready || typeof window === 'undefined') return;
  if (GOATCOUNTER_CODE === 'YOUR-GOATCOUNTER-CODE') {
    // eslint-disable-next-line no-console
    console.warn(
      'GoatCounter site code not set — analytics disabled. See src/utils/analytics.js',
    );
    return;
  }
  if (window.location.hostname === 'localhost' || isOwner()) return;

  ready = true;
  const script = document.createElement('script');
  script.async = true;
  script.src = '//gc.zgo.at/count.js';
  script.setAttribute(
    'data-goatcounter',
    `https://${GOATCOUNTER_CODE}.goatcounter.com/count`,
  );
  document.head.appendChild(script);
}

// For events that aren't a plain link/button click (e.g. "form actually
// succeeded"). Simple clicks should instead use a data-goatcounter-click
// attribute directly in JSX — GoatCounter binds those automatically.
export function trackEvent(name) {
  if (!ready || isOwner() || !window.goatcounter) return;
  window.goatcounter.count({ path: name, title: name, event: true });
}
