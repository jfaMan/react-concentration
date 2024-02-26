import NavbarLogo from './images/NavbarLogo.png';

type NavbarProps = {
  name: string;
  score: number;
  start: boolean;
};

export default function Navbar({ name, score, start }: NavbarProps) {

  return (
    <div className="navbar">
      <img
        className="navbar__logo"
        src={NavbarLogo}
        alt="Logo"
      />
      {start && <div className="navbar__score">TRIES REMAINING: {score}</div>}
      {start && <div className="navbar__name">NAME: {name}</div>}
    </div>
  );
};
