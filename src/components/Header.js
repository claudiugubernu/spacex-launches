import Logo from "./Logo";
import ReloadData from './ReloadData';


const Header = () => {
  return (
    <header>
        <div className="navbar">
            <Logo />
            <ReloadData />
        </div>
    </header>
  )
}

export default Header