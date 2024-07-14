import Link from "next/link";
import { Button } from "../components/ui/button";

export default function Enterprise() {
    return (
    <div className="mt-6 flex w-full flex-col rounded-lg border border-border bg-background px-3 py-3 text-center md:px-8">
    <p className="font-cal text-2xl">Enterprise</p>

    <p className="mt-1 text-muted-foreground">
      Need more? Contact us for a custom plan for your company.
    </p>

    <Link
      href="https://cal.com/vanxh/30min"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-5"
    >
      <Button>Schedule call</Button>
    </Link>
  </div>
    )
}