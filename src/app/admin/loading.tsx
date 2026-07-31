function SkeletonBlock({ className = "" }: { className?: string }) {
  return (
    <div
      className={`animate-pulse rounded-lg bg-stone-100 shadow-[inset_0_0_0_1px_rgba(214,211,209,0.7)] ${className}`}
    />
  );
}

function SkeletonSection() {
  return (
    <section className="rounded-xl border border-stone-200 bg-white p-5">
      <div className="mb-5 flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
        <div className="w-full max-w-2xl">
          <SkeletonBlock className="h-5 w-44" />
          <SkeletonBlock className="mt-3 h-4 w-full max-w-lg" />
        </div>
        <SkeletonBlock className="h-9 w-24" />
      </div>

      <div className="rounded-xl border border-stone-200 bg-white p-5">
        <div className="mb-4 flex items-center gap-2">
          <SkeletonBlock className="h-4 w-4" />
          <SkeletonBlock className="h-4 w-20" />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <SkeletonBlock className="h-11" />
          <SkeletonBlock className="h-11" />
          <SkeletonBlock className="h-24 md:col-span-2" />
        </div>
        <SkeletonBlock className="mt-5 h-10 w-32" />
      </div>

      <div className="mt-4 space-y-3">
        <SkeletonBlock className="h-16" />
        <SkeletonBlock className="h-16" />
        <SkeletonBlock className="h-16" />
      </div>
    </section>
  );
}

export default function AdminLoading() {
  return (
    <div className="space-y-6" aria-label="관리자 페이지 로딩 중">
      <SkeletonBlock className="h-11 w-full max-w-md" />
      <SkeletonSection />
      <SkeletonSection />
    </div>
  );
}
