import BaiDu from "../images/partners/BaiDu.png";
import Decent from "../images/partners/Decent.png";
import nVidia from "../images/partners/nVidia.png";
import samsaung from "../images/partners/samsaung.jpg";
import taiwania from "../images/partners/taiwania.png";
import texasInstruments from "../images/partners/texasInstruments.png";

const Partners = () => {
  return (
    <div className="center">
      <div className="our-partners">
        <img src={BaiDu} />
        <img src={Decent} />
        <img src={nVidia} />
        <img src={samsaung} />
        <img src={taiwania} />
        <img src={texasInstruments} />
      </div>
    </div>
  );
};

export default Partners;
