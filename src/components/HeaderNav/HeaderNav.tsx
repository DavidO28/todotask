import { NavLink } from "react-router-dom";
import { MyPaths } from "../../routes/MyPaths";
import { HeaderNavTypes } from "../../types/HeaderNavTypes";
import "./HeaderNav.scss";

const navItems: HeaderNavTypes[] = [
  { path: MyPaths.home, label: "Home" },
  { path: MyPaths.addtodo, label: "Add Todo" },
  { path: MyPaths.todolist, label: "Todo List" },
];

const HeaderNav: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink to={item.path}>{item.label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default HeaderNav;
