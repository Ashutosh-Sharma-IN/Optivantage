import { Suspense } from 'react';
import ResultsContent from './ResultsContent';
import Navbar from '@/components/Navbar';

export default function ResultsPage() {
  return (
    <main className="min-h-screen bg-navy-900">
      <Navbar />
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-text-muted text-lg">Loading your results…</div>
        </div>
      }>
        <ResultsContent />
      </Suspense>
    </main>
  );
}
