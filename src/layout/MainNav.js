import { Link } from "react-router-dom";

function MainNav() {
  return (
    <header>
      <div>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link href="">Some Link</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;
