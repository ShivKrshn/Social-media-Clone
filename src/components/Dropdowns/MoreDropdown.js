import "./moredropdown.scss";
//import { useState } from "react";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import { useState } from "react";

const MoreDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ToggleHandler = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className="dropdown-container">
      <button className="dropdown-button" onClick={ToggleHandler}>
        <span>More</span>
        <ArrowDropDownRoundedIcon className="more"/>
      </button>

      {isOpen && (
        <ul className={`${isOpen ? "dropdown-menu-show" : "dropdown-menu"}`}>
          <li>Sports</li>
          <li>Music</li>
          <li>Films</li>
          <li>TV Programmes</li>
          <li>Books</li>
          <li>Apps & Games</li>
          <li>Likes</li>
          <li>Events</li>
          <li>Questions</li>
          <li>Groups</li>
          <li>Reviews Given</li>
        </ul>
      )}
    </div>
  );
};

export default MoreDropdown;
