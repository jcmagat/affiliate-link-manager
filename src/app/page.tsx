import UrlContainer from "@/components/UrlContainer";

export default function Home() {
  return (
    <main className="mx-auto max-w-xl py-12 md:py-24">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">URL Shortener</h1>
        <p className="md:text-lg">Shorten your URLs and share them easily</p>
      </div>
      <UrlContainer />
    </main>
  );
}
