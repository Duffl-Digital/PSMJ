import { Suspense, useEffect } from "react";
import CaseStudyContent from "./CaseStudyContent";

export default function Page() {
    useEffect(() => {
    document.title = "Case Study | PSMJ";
  }, []);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CaseStudyContent />
    </Suspense>
  );
}