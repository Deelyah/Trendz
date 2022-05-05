import BaseCard from "./BaseCard";
import Sneaker from "../../assets/sneaker.png";
import Star from "../../assets/star.png";
import BaseButton from "./BaseButton";
import Cart from "../../assets/add-cart.png";

const BaseProductCard = (props) => {
  return (
    <section className={props.nativeSpacing}>
      <div className="flex justify-center">
        <BaseCard
          extraStyle={`white-card p-4 rounded-lg ${props.whiteCardSize}`}
        >
          <BaseCard
            extraStyle={`bg-custom-blue-2 p-2 rounded-lg ${props.blueCardSize}`}
          >
            <img src={Sneaker} alt="Sneaker" />
          </BaseCard>
          <div className="font-medium flex items-center mt-4">
            <h5 className="text-gray-800 text-sm">Review (4.5)</h5>
            <div className="w-4 h-4">
              <img src={Star} alt="A Star" />
            </div>
          </div>
          <div className="flex justify-between">
            <h5>{props.Amount}</h5>
            <BaseButton customStyle="circle white-card h-8 w-8 flex justify-center items-center">
              <img src={Cart} alt="Add to cart" />
            </BaseButton>
          </div>
        </BaseCard>
      </div>
    </section>
  );
};
export default BaseProductCard;
