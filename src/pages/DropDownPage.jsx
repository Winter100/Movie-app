import { useState } from "react";
import DropDown from "../components/DropDown/DropDown";
import Btn from "../components/Btn/Btn";

function DropDownPage() {
  const [dropDownMenu, setDropDownMenu] = useState(false);

  return (
    <div>
      <Btn title={"메뉴"} />
      <button onClick={() => setDropDownMenu((is) => !is)}>메뉴</button>
      {dropDownMenu && <DropDown setDropDownMenu={setDropDownMenu} />}
    </div>
  );
}

export default DropDownPage;
