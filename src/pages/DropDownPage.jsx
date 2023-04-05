import { useState } from "react";
import DropDown from "../components/DropDown/DropDown";
import Btn from "../components/Btn/Btn";

function DropDownPage() {
  const [dropDownMenu, setDropDownMenu] = useState(false);

  return (
    <div>
      <Btn setDropDownMenu={setDropDownMenu} />
      {dropDownMenu && <DropDown setDropDownMenu={setDropDownMenu} />}
    </div>
  );
}

export default DropDownPage;
