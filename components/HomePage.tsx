import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import GridStyle from "./GridStyle";
import Link from "next/link";

function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Build Frontends Faster with Ready-to-Use Shadcn Components
          </h1>
          <p className="text-gray-500 md:text-xl dark:text-gray-400">
            Discover, copy, and customize a library of pre-built Shadcn
            components to accelerate your development workflow.
          </p>
          <Button className="inline-flex items-center rounded-md text-sm font-medium">
            Explore Blocks
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <GridStyle />
          </div>
          <Card className="p-8">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Join the Community</h3>
              <p className="text-muted-foreground py-4">
                Sign up to contribute, rate, and collaborate with other
                developers.
              </p>
            </div>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Join Now
            </Link>
          </Card>
          <Card className="p-8">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Get Started Quickly</h3>
              <p className="text-muted-foreground py-4">
                Copy, paste, and customize components to speed up your frontend
                development.
              </p>
            </div>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Docs
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
