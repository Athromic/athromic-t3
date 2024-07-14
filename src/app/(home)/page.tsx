import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Github } from "lucide-react";
import OpenBio from "../../../public/openbio.png";
import Pricing from "../../components/pricing";
import Enterprise from "~/components/enterprise";
import { Button } from "../../components/ui/button";

export default async function Page() {

  return (
      <div className="flex h-full w-full flex-col items-center justify-center text-center">
        <Image src={OpenBio} alt="OpenBio" width={75} height={75} priority />
        <h2 className="font-cal text-xl md:text-2xl">Athromic</h2>

        <h1 className="mt-8 font-cal text-3xl md:text-5xl">
          this app
          <br />
          will be something cool.
        </h1>

        <p className="mt-4 text-lg md:text-xl">
          Cool, a description.
        </p>

        <div className="mt-12 flex items-center gap-x-4">
          <Link href="#" passHref>
            <Button className="min-w-full whitespace-nowrap">
              Main Button
            </Button>
          </Link>

          <Link href="#" target="_blank" rel="noopener noreferrer" passHref>
            <Button className="whitespace-nowrap">
              <Github size={24} className="mr-2" />
              Star on Github
            </Button>
          </Link>
        </div>

        <Button
          variant="link"
          size="sm"
          asChild
          className="mt-2 transition-transform ease-in-out active:scale-95"
        >
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Announcement Post
            <ChevronRight size={12} className="ml-2" />
          </Link>
        </Button>
        <div className="my-12" />
        <Pricing />
        <Enterprise />
      </div>
  );
}
