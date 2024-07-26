import { Input, Button } from "@nextui-org/react";

export default async function WaitlistForm() {
  return (
    <div className="flex items-center">
      <Input type="email" variant="faded" label="Email" />
      <Button size="lg" radius="md">
        Join waitlist
      </Button>
    </div>
  );
}
