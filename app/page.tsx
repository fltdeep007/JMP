import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-10 rounded-2xl shadow-lg max-w-lg w-11/12 text-center">
        {/* Logo (uncomment if you have one in public/D1.png) */}
        {/* <div className="mb-6">
          <Image
            src="/D1.png"
            alt="JMP Logo"
            width={250}
            height={100}
            className="mx-auto"
          />
        </div> */}

        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-orange-600">
          🚀 We’re Launching Soon!
        </h1>

        <p className="text-lg text-gray-600 mb-6">
          Until then, feel free to explore:
        </p>

        <a
          href="https://share.google/U8nwU3BzPlxANC4Ek"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md transition hover:bg-orange-700 hover:-translate-y-1"
        >
          Explore Now
        </a>

        {/* Footer (optional) */}
        {/* <footer className="mt-6 text-sm text-gray-500">
          शुद्धता का वादा | JMP
        </footer> */}
      </div>
    </main>
  );
}
