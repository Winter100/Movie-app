import { useState } from "react";
import DropDown from "../components/DropDown/DropDown";

function DropDownPage() {
  const [dropDownMenu, setDropDownMenu] = useState(false);
  return (
    <div>
      <button onClick={() => setDropDownMenu((is) => !is)}>메뉴</button>
      {dropDownMenu && <DropDown setDropDownMenu={setDropDownMenu} />}
    </div>
  );
}

export default DropDownPage;
