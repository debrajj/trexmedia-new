export default function Loading() {
  return (
    <div className="min-h-screen bg-n-8 flex items-center justify-center">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-color-1 border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-color-2 border-b-transparent rounded-full animate-spin animate-reverse"></div>
      </div>
    </div>
  );
}