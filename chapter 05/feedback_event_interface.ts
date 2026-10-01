interface FeedbackEvent {
  eventId: string;
  timestamp: number;
  userId: string;
  sessionId: string;
  modelVersion: string;

  // Input data
  prompt: string;

  // Output data
  response: string;
  confidence?: number;

  // User feedback
  explicitRating?: number;
  implicitSignals: {
    timeToInteraction: number;
    accepted: boolean;
    modified: boolean;
    regenerated: boolean;
    copied: boolean;
  };

  // Performance metrics
  latencyMs: number;
}
