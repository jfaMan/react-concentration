import NavbarLogo from './images/NavbarLogo.png';

type NavbarProps = {
  name: string;
  score: number;
  start: boolean;
  reset: () => void;
};

export default function Navbar({ name, score, start, reset }: NavbarProps) {

  const handleClick = () => {
    if (start && window.confirm("Are you sure you want to return to the main menu? The current game's progress will be lost!")) {
      reset();
    }

    return;
  };

  return (
    <div className="navbar">
      <img
        className={start ? "navbar__logo navbar__logo--clickable" : "navbar__logo"}
        src={NavbarLogo}
        alt="Logo"
        onClick={handleClick}
      />
      {start && <div className="navbar__score">TRIES REMAINING: {score}</div>}
      {start && <div className="navbar__name">NAME: {name}</div>}
    </div>
  );
};
