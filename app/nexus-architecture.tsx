type NexusArchitectureProps = {
  className?: string;
  compact?: boolean;
};

export function NexusArchitecture({ className = "", compact = false }: NexusArchitectureProps) {
  return (
    <div
      className={`nexus-architecture${compact ? " nexus-architecture-compact" : ""} ${className}`.trim()}
      data-nexus-story
      role="img"
      aria-label="Conceptual flow from MARDE hardware through Nexus to qualified human authorization and an authorized action"
    >
      <div className="nexus-registration-marks" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </div>

      <div className="nexus-endpoint-cluster" data-nexus-stage="endpoints">
        <div className="nexus-endpoint nexus-endpoint-air">
          <small>HARDWARE / 01</small>
          <strong>MARDE AIR</strong>
        </div>
        <div className="nexus-endpoint nexus-endpoint-ground">
          <small>HARDWARE / 02</small>
          <strong>MARDE GROUND</strong>
        </div>
      </div>

      <span className="nexus-route nexus-route-inbound" data-nexus-stage="inbound"><i /></span>

      <div className="nexus-core" data-nexus-stage="core">
        <small>COORDINATION LAYER</small>
        <strong>NEXUS</strong>
        <span>SYSTEM ASSISTANCE</span>
      </div>

      <div className="nexus-context nexus-context-scene" data-nexus-stage="context">
        <small>CONTEXT</small>
        <strong>SCENE + PATIENT</strong>
      </div>
      <span className="nexus-route nexus-route-context nexus-route-context-scene" data-nexus-stage="inbound"><i /></span>
      <div className="nexus-context nexus-context-supply" data-nexus-stage="context">
        <small>REQUIREMENTS</small>
        <strong>SUPPLY</strong>
      </div>
      <span className="nexus-route nexus-route-context nexus-route-context-supply" data-nexus-stage="inbound"><i /></span>

      <span className="nexus-route nexus-route-human" data-nexus-stage="human-path"><i /></span>

      <div className="nexus-authorization" data-nexus-stage="authorization">
        <small>QUALIFIED OPERATOR</small>
        <strong>HUMAN AUTHORIZATION</strong>
        <span>FINAL DECISION AUTHORITY</span>
      </div>

      <span className="nexus-route nexus-route-authorized" data-nexus-stage="authorized"><i /></span>

      <div className="nexus-outcome" data-nexus-stage="authorized">
        <small>HUMAN-AUTHORIZED</small>
        <strong>ACTION</strong>
      </div>
    </div>
  );
}
