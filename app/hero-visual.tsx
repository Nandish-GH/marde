export function HeroVisual() {
  return (
    <div
      className="hero-graphic hero-video-ready"
      role="img"
      aria-label="Atmospheric MARDE aerospace concept study"
    >
      <div className="hero-visual-stage">
        <div className="hero-visual-scroll atmospheric-hero-visual">
          <div className="hero-media-slot" aria-hidden="true">
            <div className="visual-depth-layer visual-layer-light">
              <span className="atmosphere-wash" />
              <span className="atmosphere-light-pass" />
              <span className="atmosphere-haze" />
            </div>

            <div className="visual-depth-layer visual-layer-planes">
              <span className="corridor-glow" />
              <div className="response-corridor">
                <span className="corridor-plane corridor-plane-far" />
                <span className="corridor-plane corridor-plane-mid" />
                <span className="corridor-plane corridor-plane-near" />
                <span className="corridor-edge corridor-edge-one" />
                <span className="corridor-edge corridor-edge-two" />
              </div>
              <span className="cropped-aperture" />
            </div>

            <div className="visual-depth-layer visual-layer-contours">
              <span className="contour-field">
                <i className="contour-line contour-one" />
                <i className="contour-line contour-two" />
                <i className="contour-line contour-three" />
                <i className="contour-line contour-four" />
                <i className="contour-line contour-five" />
              </span>
              <span className="distance-rule distance-rule-one" />
              <span className="distance-rule distance-rule-two" />
              <span className="distance-rule distance-rule-three" />
            </div>

            <div className="visual-depth-layer visual-layer-registration">
              <span className="registration-mark registration-mark-one" />
              <span className="registration-mark registration-mark-two" />
              <span className="registration-line"><i /><i /><i /><i /><i /></span>
            </div>
          </div>

          <div className="scroll-cue" aria-hidden="true"><span>SCROLL TO EXPLORE</span><i /></div>
        </div>
      </div>
    </div>
  );
}
