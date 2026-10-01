function AIResponseCard({ response, capabilities }) {
  return (
    <Card variant="ai-generated">
      <ResponseContent text={response.text} />

      {capabilities.supportsCitations && (
        <CitationList sources={response.citations} />
      )}

      {capabilities.supportsConfidence && (
        <ConfidenceBadge score={response.confidence} />
      )}

      {capabilities.supportsImages && response.images && (
        <ImageGallery images={response.images} />
      )}

      <FeedbackControls responseId={response.id} />
    </Card>
  );
}
