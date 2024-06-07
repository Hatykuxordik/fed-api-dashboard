import { NavbarLinks } from "./data";

function NavBar() {
  return (
    <nav className="flex justify-between items-center mb-4 bg-white rounded-[70px] px-4 py-2">
      <img src="TestLogo.svg" alt="Logo" className="h-12 w-40" />
      <ul className="flex space-x-8">
        {NavbarLinks.map((link) => (
          <li
            key={link.id}
            className={
              link.isActive ? link.isActive : "flex items-center gap-2"
            }
          >
            <a href="#" className="text-black text-sm flex items-center gap-2">
              <img src={link.icon} alt={link.label} className="h-4 w-4" />
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex items-center space-x-4">
        <img
          src="dp.png"
          alt="User Avatar"
          className="h-10 w-10 rounded-full"
        />
        <div>
          <p className="font-bold">Dr. Jose Simmons</p>
          <p className="text-sm text-zinc-500">General Practitioner</p>
        </div>
        <div className="flex items-center space-x-1">
          <img src="settings.svg" alt="Settings" className="h-4 w-4" />
          <img src="more.svg" alt="More options" className="h-4 w-4" />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
