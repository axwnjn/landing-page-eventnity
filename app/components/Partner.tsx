import Logo from "./ui/Logo";

const Partner = () => {
  return (
    <section className="flex flex-col items-center mb-50">
      <h3 className="text-5xl font-semibold mb-12">Client Partner</h3>
      <div className="grid grid-cols-4 gap-x-23 gap-y-14">
        <Logo />
        <Logo />
        <Logo />
        <Logo />
        <Logo />
        <Logo />
        <Logo />
        <Logo />
      </div>
    </section>
  );
};

export default Partner;
