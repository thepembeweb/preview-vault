import { BiLogoGithub } from "react-icons/bi";

export default function ExternalLinks() {
  return (
    <div className="flex gap-5 items-center flex-wrap text-2xl mt-5">
      <a
        href="https://github.com/thepembeweb/preview-vault"
        target="_blank"
        rel="noreferrer noopener"
      >
        <BiLogoGithub />
        <span className="sr-only">Github</span>
      </a>
    </div>
  );
}
