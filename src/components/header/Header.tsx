import MiddleHeader from "./MiddleHeader";
import TopHeader from "./TopHeader";

const Header = () => {
  return (
    <header>
      {/* TopHeader */}
      <TopHeader />
      <div className=" max-w-screen-xl mx-auto px-4 lg:px-0">
        {/* Middle Header */}
        <MiddleHeader />
        {/* BottomHeader */}
        <div>Bottom</div>
      </div>
    </header>
  );
};

export default Header;
