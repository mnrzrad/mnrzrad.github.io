// Cloudflare Worker: tiny read-only proxy so your page can read publisher websites.
// Free tier is plenty. Dashboard: Workers & Pages -> Create -> Worker -> paste this -> Deploy.
// Then in the checker's Settings put on the FIRST line:  https://YOUR-NAME.workers.dev/?url={url}
const ALLOWED = ['doi.org', 'link.springer.com', 'springer.com', 'sciencedirect.com', 'tandfonline.com',
  'wiley.com', 'onlinelibrary.wiley.com', 'ieeexplore.ieee.org', 'mdpi.com', 'aimsciences.org',
  'cambridge.org', 'oup.com', 'academic.oup.com', 'sagepub.com', 'frontiersin.org', 'nature.com',
  'arxiv.org', 'jstor.org', 'projecteuclid.org', 'degruyter.com', 'siam.org', 'epubs.siam.org'];
export default {
  async fetch(req) {
    const cors = { 'Access-Control-Allow-Origin': '*' };
    const u = new URL(req.url).searchParams.get('url');
    if (!u) return new Response('missing ?url=', { status: 400, headers: cors });
    let t; try { t = new URL(u); } catch { return new Response('bad url', { status: 400, headers: cors }); }
    if (!ALLOWED.some(h => t.hostname === h || t.hostname.endsWith('.' + h)))
      return new Response('host not allowed', { status: 403, headers: cors });
    const r = await fetch(t.toString(), { redirect: 'follow', headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; funding-checker/1.0)', 'Accept': 'text/html,application/xhtml+xml' } });
    return new Response(r.body, { status: r.status, headers: { ...cors, 'Content-Type': r.headers.get('content-type') || 'text/html' } });
  }
};
