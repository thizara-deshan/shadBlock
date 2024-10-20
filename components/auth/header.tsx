type Props = {
  headerlabel: string;
};

function Header({ headerlabel }: Props) {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className="text-3xl font-semibold">ShadBlocks</h1>
      <p className="text-muted-foreground text-sm">{headerlabel}</p>
    </div>
  );
}

export default Header;
