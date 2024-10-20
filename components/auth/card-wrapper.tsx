"use client";

import { Card, CardHeader, CardContent, CardFooter } from "../ui/card";
import BackButton from "./back-button";
import Header from "./header";
import Socials from "./socials";

type Props = {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
};

function CardWrapper({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial = true,
}: Props) {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header headerlabel={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Socials />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
}

export default CardWrapper;
