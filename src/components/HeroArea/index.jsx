import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarthAfrica,
  faDice,
  faMoneyBill1,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import Search from "./Search";
import Filter from "./Filter";

export default function Hero() {
  return (
    <div className="heroArea">
      <div className="heroHeading">
        <div className="heroMainHeading">It's time for new</div>
        <div className="heroSubHeading">
          <div className="moving">
            <div className="heroSubHeadingItem">Experiences</div>
            <div className="heroSubHeadingItem">Adventures</div>
            <div className="heroSubHeadingItem">Escapes</div>
            <div className="heroSubHeadingItem">Thrills</div>
            <div className="heroSubHeadingItem">Memories</div>
          </div>
        </div>
      </div>
      <Filter />
      <Search />
      <div className="statistics">
        <div className="colInMob">
          <div className="statItem">
            <span className="statIcon">
              <FontAwesomeIcon icon={faDice} />
            </span>
            <span className="statText">
              <div className="statTxtUp">24,00+</div>
              <div className="statTxtDown">TRAVEL EXPERIENCES</div>
            </span>
          </div>
          <div className="statItem">
            <span className="statIcon">
              <FontAwesomeIcon icon={faEarthAfrica} />
            </span>
            <span className="statText">
              <div className="statTxtUp">55+</div>
              <div className="statTxtDown">COUNTRIES</div>
            </span>
          </div>
        </div>
        <div className="colInMob">
          <div className="statItem">
            <span className="statIcon">
              <FontAwesomeIcon icon={faMoneyBill1} />
            </span>
            <span className="statText">
              <div className="statTxtUp">BEST PRICE+</div>
              <div className="statTxtDown">GUARANTEED</div>
            </span>
          </div>
          <div className="statItem">
            <span className="statIcon">
              <FontAwesomeIcon icon={faUsers} />
            </span>
            <span className="statText">
              <div className="statTxtUp">84 Million+</div>
              <div className="statTxtDown">USERS PER YEAR</div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
