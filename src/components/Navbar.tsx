import GitHubLogo from '/github-mark.svg';

const Navbar = () => {
  return (
    <div className="flex h-16">
      <div className="my-auto ml-4">
        <h1 className="text-3xl font-bold text-amber-600 underline">
          Bin to Dec
        </h1>
      </div>

      <div className="grow" />

      <div className="my-auto mr-4">
        <a href="https://github.com/hskwakr/bin2dec">
          <img src={GitHubLogo} width={45} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
