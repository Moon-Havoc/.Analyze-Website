export default function Loading() {
  return <section className="route-loading" role="status" aria-live="polite" aria-label="Loading .Analyze page">
    <span className="loading-kicker">.ANALYZE / PAGE TRANSITION</span>
    <div className="loading-track" aria-hidden="true"><span/></div>
    <p>Loading page content</p>
  </section>;
}
