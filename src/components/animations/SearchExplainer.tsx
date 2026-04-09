"use client";

import { SearchFlow } from "./SearchFlow";
import { FeatureExplainer } from "./FeatureExplainer";

export function SearchExplainer() {
  return (
    <FeatureExplainer
      notes={[
        {
          title: "Embed",
          text: "Your query is converted into a 384-dimensional vector using a local embedding model. This captures meaning, not just keywords.",
        },
        {
          title: "Search",
          text: "The vector is compared against all your conversation embeddings stored in Retrace. Every platform is searched simultaneously in one query.",
        },
        {
          title: "Rank",
          text: "Results are ranked by cosine similarity. The most semantically relevant matches surface first, regardless of which platform they came from.",
        },
        {
          title: "Local",
          text: "Embedding and search happen entirely on your machine. No data leaves your laptop for search queries.",
        },
      ]}
    >
      <SearchFlow />
    </FeatureExplainer>
  );
}
