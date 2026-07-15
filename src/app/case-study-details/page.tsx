import { Suspense } from "react";
import CaseStudyContent from "./CaseStudyContent";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CaseStudyContent />
    </Suspense>
  );
}