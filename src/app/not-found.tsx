export default function NotFound() {
  return (
    <div className="flex h-[calc(100vh-var(--nav-height))] w-screen items-center justify-center">
      <div className="flex items-stretch gap-8">
        <h1 className="self-center text-2xl font-medium">404</h1>
        <div className="border-r-foreground border-r" />
        <p className="self-center text-sm">This page could not be found.</p>
      </div>
    </div>
  );
}
