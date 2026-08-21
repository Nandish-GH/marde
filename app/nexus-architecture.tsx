type NexusArchitectureProps = {
  className?: string;
  compact?: boolean;
};

const activity = [
  ["01", "Mission received", "Complete"],
  ["02", "Mission context assembled", "Complete"],
  ["03", "Air available", "Complete"],
  ["04", "Ground available", "Complete"],
  ["05", "Operator review", "In review"],
  ["06", "Awaiting authorization", "Pending"],
] as const;

const assets = [
  ["AIR", "MARDE AIR", "En route", AirplaneTilt],
  ["GROUND", "MARDE GROUND", "Deploying", Truck],
  ["MODULE", "MEDICAL MODULE", "Connected", Cube],
] as const;

function PanelHeading({ children, icon }: { children: React.ReactNode; icon: React.ReactNode }) {
  return <h3 className="nexus-console-panel-heading">{icon}{children}</h3>;
}

function StatusDot({ state = "ready" }: { state?: "ready" | "pending" }) {
  return <span className={`nexus-status-dot nexus-status-dot-${state}`} aria-hidden="true" />;
}

export function NexusArchitecture({ className = "", compact = false }: NexusArchitectureProps) {
  return (
    <section
      className={`nexus-console${compact ? " nexus-console-compact" : ""} ${className}`.trim()}
      aria-label="Planned MARDE Nexus human-in-the-loop concept interface"
      data-nexus-story
    >
      <header className="nexus-console-header">
        <div>
          <strong>MARDE NEXUS</strong>
          <span>COMMAND &amp; COORDINATION LAYER</span>
        </div>
        <p>COORDINATE · REACH · ACCESS · INTERVENE · CONTINUE CARE</p>
      </header>

      <aside className="nexus-mission-panel nexus-console-panel">
        <PanelHeading icon={<Crosshair aria-hidden="true" />}>MISSION</PanelHeading>
        <dl>
          <div><dt>MISSION</dt><dd>001</dd></div>
          <div><dt>SCENARIO</dt><dd>SIMULATED RESPONSE</dd></div>
          <div><dt>TYPE</dt><dd>CONTROLLED DEMONSTRATION</dd></div>
          <div><dt>STATUS</dt><dd><StatusDot /> ACTIVE</dd></div>
        </dl>
      </aside>

      <figure className="nexus-operational-view nexus-console-panel">
        <figcaption>OPERATIONAL VIEW · FICTIONAL DEMONSTRATION MAP</figcaption>
        <div className="nexus-map" aria-label="Abstract route from MARDE Air through deployment, Ground, and the simulated scene">
          <svg className="nexus-map-route" viewBox="0 0 720 470" preserveAspectRatio="none" aria-hidden="true">
            <path className="nexus-route-link" d="M108 90 C178 123 190 183 262 212 S380 249 444 309 S548 344 626 390" />
            <path className="nexus-route-comms" d="M108 90 C275 79 442 135 626 390" />
            <circle cx="108" cy="90" r="8" />
            <circle cx="262" cy="212" r="8" />
            <circle cx="444" cy="309" r="8" />
            <circle cx="626" cy="390" r="9" />
          </svg>
          <div className="nexus-map-node nexus-map-node-air"><i aria-hidden="true"><AirplaneTilt /></i><strong>MARDE AIR</strong><span>En route</span></div>
          <div className="nexus-map-node nexus-map-node-deploy"><i aria-hidden="true"><Crosshair /></i><strong>DEPLOYMENT</strong><span>Demonstration zone</span></div>
          <div className="nexus-map-node nexus-map-node-ground"><i aria-hidden="true"><Truck /></i><strong>MARDE GROUND</strong><span>Deploying</span></div>
          <div className="nexus-map-node nexus-map-node-scene"><i aria-hidden="true"><MapPin /></i><strong>SCENE</strong><span>Simulated destination</span></div>
          <div className="nexus-map-key" aria-hidden="true"><span /> Planned route <i /> Link / comms</div>
        </div>
      </figure>

      <div className="nexus-console-rail">
        <section className="nexus-authorization-panel nexus-console-panel">
          <PanelHeading icon={<UserCircle aria-hidden="true" />}>HUMAN AUTHORIZATION</PanelHeading>
          <dl>
            <div><dt>OPERATOR</dt><dd>QUALIFIED OPERATOR</dd></div>
            <div><dt>AUTHORITY</dt><dd>FINAL DECISION AUTHORITY</dd></div>
          </dl>
          <div className="nexus-authorization-state" aria-label="Concept state: awaiting authorization">
            <StatusDot state="pending" /> AWAITING AUTHORIZATION
          </div>
          <p>Consequential actions require operator approval.</p>
        </section>

        <section className="nexus-asset-panel nexus-console-panel">
          <PanelHeading icon={<Cube aria-hidden="true" />}>ASSET STATUS</PanelHeading>
          <div className="nexus-asset-list">
            {assets.map(([code, label, state, Icon]) => (
              <article key={code}>
                <span className="nexus-asset-code" aria-hidden="true"><Icon /></span>
                <div><strong>{label}</strong><span>{state}</span></div>
                <StatusDot />
              </article>
            ))}
          </div>
        </section>

        <section className="nexus-activity-panel nexus-console-panel">
          <PanelHeading icon={<Activity aria-hidden="true" />}>MISSION ACTIVITY</PanelHeading>
          <ol>
            {activity.map(([code, label, state], index) => (
              <li key={code} className={index === activity.length - 1 ? "is-pending" : undefined}>
                <span>{code}</span><strong>{label}</strong><small>{state}</small>
              </li>
            ))}
          </ol>
        </section>
      </div>

      <section className="nexus-system-panel nexus-console-panel" aria-label="Concept system status">
        <PanelHeading icon={<ShieldCheck aria-hidden="true" />}>SYSTEM STATUS</PanelHeading>
        <dl>
          <div><dt>NETWORK</dt><dd><StatusDot /> Secure</dd></div>
          <div><dt>TELEMETRY</dt><dd><StatusDot /> Nominal</dd></div>
          <div><dt>DATA SYNC</dt><dd><StatusDot /> Active</dd></div>
          <div><dt>MISSION LINK</dt><dd><StatusDot /> Stable</dd></div>
        </dl>
      </section>

      <footer className="nexus-console-footer">
        <span>CONCEPT INTERFACE · PLANNED V1</span>
        <strong>NEXUS V1 · HUMAN-IN-THE-LOOP COMMAND LAYER</strong>
      </footer>
    </section>
  );
}
import {
  ActivityIcon as Activity,
  AirplaneTilt,
  Crosshair,
  Cube,
  MapPin,
  ShieldCheck,
  Truck,
  UserCircle,
} from "@phosphor-icons/react/dist/ssr";
