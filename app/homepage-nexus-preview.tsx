import {
  AirplaneTilt,
  Crosshair,
  Cube,
  MapPin,
  Truck,
  UserCircle,
} from "@phosphor-icons/react/dist/ssr";

const previewAssets = [
  ["MARDE AIR", "En Route", AirplaneTilt],
  ["MARDE GROUND", "Deploying", Truck],
  ["MEDICAL MODULE", "Connected", Cube],
] as const;

function PreviewStatusDot({ pending = false }: { pending?: boolean }) {
  return (
    <span
      className={`nexus-status-dot${pending ? " nexus-status-dot-pending" : ""}`}
      aria-hidden="true"
    />
  );
}

export function HomepageNexusPreview() {
  return (
    <section
      className="home-nexus-preview"
      aria-label="Preview of the planned MARDE Nexus human-in-the-loop coordination interface"
      data-nexus-story
    >
      <header className="home-nexus-preview-header">
        <div>
          <strong>NEXUS / SIMULATED RESPONSE</strong>
          <span>COMMAND &amp; COORDINATION PREVIEW</span>
        </div>
        <span>CONCEPT INTERFACE</span>
      </header>

      <figure className="home-nexus-map-panel">
        <figcaption>MISSION VIEW · FICTIONAL DEMONSTRATION MAP</figcaption>
        <div
          className="nexus-map home-nexus-map"
          aria-label="Abstract route connecting MARDE Air, deployment, MARDE Ground, and a simulated scene"
        >
          <svg className="nexus-map-route" viewBox="0 0 720 470" preserveAspectRatio="none" aria-hidden="true">
            <path className="nexus-route-link" d="M108 90 C178 123 190 183 262 212 S380 249 444 309 S548 344 626 390" />
            <path className="nexus-route-comms" d="M108 90 C275 79 442 135 626 390" />
            <circle cx="108" cy="90" r="8" />
            <circle cx="262" cy="212" r="8" />
            <circle cx="444" cy="309" r="8" />
            <circle cx="626" cy="390" r="9" />
          </svg>
          <div className="nexus-map-node nexus-map-node-air">
            <i aria-hidden="true"><AirplaneTilt /></i><strong>MARDE AIR</strong><span>En Route</span>
          </div>
          <div className="nexus-map-node nexus-map-node-deploy">
            <i aria-hidden="true"><Crosshair /></i><strong>DEPLOYMENT</strong><span>Demonstration Zone</span>
          </div>
          <div className="nexus-map-node nexus-map-node-ground">
            <i aria-hidden="true"><Truck /></i><strong>MARDE GROUND</strong><span>Deploying</span>
          </div>
          <div className="nexus-map-node nexus-map-node-scene">
            <i aria-hidden="true"><MapPin /></i><strong>SCENE</strong><span>Simulated Destination</span>
          </div>
          <div className="nexus-map-key" aria-hidden="true"><span /> Planned route <i /> Link / comms</div>
        </div>
      </figure>

      <section className="home-nexus-assets" aria-labelledby="home-nexus-assets-title">
        <h4 id="home-nexus-assets-title"><Cube aria-hidden="true" /> ASSET STATUS</h4>
        <div>
          {previewAssets.map(([label, state, Icon]) => (
            <article key={label}>
              <span className="home-nexus-asset-icon" aria-hidden="true"><Icon /></span>
              <div><strong>{label}</strong><span>{state}</span></div>
              <PreviewStatusDot />
            </article>
          ))}
        </div>
      </section>

      <section className="home-nexus-authorization" aria-labelledby="home-nexus-authorization-title">
        <h4 id="home-nexus-authorization-title"><UserCircle aria-hidden="true" /> HUMAN AUTHORIZATION</h4>
        <dl>
          <div><dt>OPERATOR</dt><dd>Qualified Operator</dd></div>
          <div><dt>AUTHORITY</dt><dd>Final Decision Authority</dd></div>
        </dl>
        <div className="home-nexus-authorization-state">
          <PreviewStatusDot pending /> AWAITING AUTHORIZATION
        </div>
      </section>
    </section>
  );
}
