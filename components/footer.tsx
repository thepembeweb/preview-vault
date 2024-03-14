import Image from "next/image";
import ExternalLinks from "./links";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-zinc-800">
      <div className="px-global text-white/40">
        <p className="flex items-center mt-2">
          Powered by{" "}
          <a
            href="https://www.themoviedb.org/"
            rel="noreferrer"
            className="ml-2"
          >
            <Image
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
              alt="TMDB"
              width={110}
              height={24}
              unoptimized
            />
          </a>
        </p>
        <p className="mt-4 text-xs">
          This project uses the{" "}
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            TMDB API
          </a>{" "}
          but is not endorsed or certified by TMDB.
        </p>

        <ExternalLinks />
      </div>
    </footer>
  );
}
