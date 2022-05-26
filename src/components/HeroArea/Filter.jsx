import {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarthAmericas,
  faPersonHiking,
  faPersonWalkingLuggage,
  faTaxi,
  faHouseChimney,
} from "@fortawesome/free-solid-svg-icons";

export default function Filter() {

    const [active, setActive] = useState(0);

  return (
    <div className="heroFilters">
      <button onClick={()=>setActive(0)} className={`heroFilterBtn ${active===0 ? "Active" : " "}`}>
        <span className="heroFilterIcon">
          <FontAwesomeIcon icon={faEarthAmericas} />
        </span>
        <span className="heroFilterTxt">All</span>
      </button>
      <button onClick={()=>setActive(1)} className={`heroFilterBtn ${active===1 ? "Active" : " "}`}>
        <span className="heroFilterIcon">
          <FontAwesomeIcon icon={faPersonHiking} />
        </span>
        <span className="heroFilterTxt">Activities</span>
      </button>
      <button onClick={()=>setActive(2)} className={`heroFilterBtn ${active===2 ? "Active" : " "}`}>
        <span className="heroFilterIcon">
          <FontAwesomeIcon icon={faPersonWalkingLuggage} />
        </span>
        <span className="heroFilterTxt">Tours</span>
      </button>
      <button onClick={()=>setActive(3)} className={`heroFilterBtn ${active===3 ? "Active" : " "}`}>
        <span className="heroFilterIcon">
          <FontAwesomeIcon icon={faTaxi} />
        </span>
        <span className="heroFilterTxt">Rentals</span>
      </button>
      <button onClick={()=>setActive(4)} className={`heroFilterBtn ${active===4 ? "Active" : " "}`}>
        <span className="heroFilterIcon">
          <FontAwesomeIcon icon={faHouseChimney} />
        </span>
        <span className="heroFilterTxt">Staycations</span>
      </button>
    </div>
  );
}
