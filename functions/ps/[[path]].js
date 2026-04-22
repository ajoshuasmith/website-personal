const UPSTREAM = 'https://umami.billygoatmedia.com';

export async function onRequest({ request }) {
  const url = new URL(request.url);
  const upstream = new URL(
    url.pathname.replace(/^\/ps/, '') + url.search,
    UPSTREAM,
  );
  return fetch(new Request(upstream, request));
}
