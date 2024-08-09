import MiddleHeader from "./MiddleHeader";
import TopHeader from "./TopHeader";

const Header = () => {
  return (
    <header>
      {/* TopHeader */}
      <TopHeader />
      <div className="">
        {/* Middle Header */}
        <MiddleHeader />
        {/* BottomHeader */}
        <div>Bottom</div>
      </div>
    </header>
  );
};

export default Header;
