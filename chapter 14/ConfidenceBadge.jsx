import { Badge, Icon, Tooltip, tokens } from "@design-system";

const CONFIDENCE_CONFIG = {
  high: {
    bg: tokens.ai.confidence.high.bg,
    border: tokens.ai.confidence.high.border,
    icon: "check_circle",
    label: "High confidence",
    tooltip: "AI is highly confident in this result.",
  },
  medium: {
    bg: tokens.ai.confidence.medium.bg,
    border: tokens.ai.confidence.medium.border,
    icon: "info",
    label: "Review suggested",
    tooltip: "AI has moderate confidence. Please verify.",
  },
  low: {
    bg: tokens.ai.confidence.low.bg,
    border: tokens.ai.confidence.low.border,
    icon: "warning",
    label: "Verify manually",
    tooltip: "AI is uncertain. Manual verification required.",
  },
};

function getLevel(score, thresholds) {
  // Thresholds are not hard-coded. They are pulled from the design
  // system configuration or the backend capability layer so that
  // calibration changes do not require a component release.
  if (score >= thresholds.high) return "high";
  if (score >= thresholds.medium) return "medium";
  return "low";
}

function ConfidenceBadge({ score, variant = "badge", thresholds }) {
  const level = getLevel(score, thresholds);
  const config = CONFIDENCE_CONFIG[level];

  return (
    <Tooltip content={config.tooltip}>
      <Badge
        style={{ background: config.bg, borderColor: config.border }}
        aria-label={`Confidence: ${config.label}`}
      >
        <Icon name={config.icon} size={14} />
        {variant !== "icon-only" && <span>{config.label}</span>}
      </Badge>
    </Tooltip>
  );
}
