import ToggleTheme from "./ToggleTheme";
export const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-4xl" href="#">
          Roni Saha
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Link</a>
          </li>
          <li>
            <ToggleTheme />
          </li>
        </ul>
      </div>
    </div>
  );
};
