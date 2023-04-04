import { useState } from "react";
import DropDown from "../components/DropDown/DropDown";
import { getAuthToken } from "../util/auth-util";

function DropDownPage() {
  const [dropDownMenu, setDropDownMenu] = useState(false);

  const token = getAuthToken();
  console.log(token);

  return (
    <div>
      <button onClick={() => setDropDownMenu((is) => !is)}>메뉴</button>
      {dropDownMenu && <DropDown setDropDownMenu={setDropDownMenu} />}
    </div>
  );
}

export default DropDownPage;
