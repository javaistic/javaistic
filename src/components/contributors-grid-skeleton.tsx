export function ContributorsGridSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {Array.from({ length: 12 }).map((_, index) => (
        <div key={index} className="flex flex-col items-center rounded-lg p-4">
          <div className="bg-muted h-16 w-16 animate-pulse rounded-full"></div>
          <div className="bg-muted mt-3 h-4 w-20 animate-pulse rounded"></div>
          <div className="bg-muted mt-2 h-3 w-16 animate-pulse rounded"></div>
        </div>
      ))}
    </div>
  );
}
