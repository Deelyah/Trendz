import "../App.css";
import NavBar from "../components/NavBar";
import shoppingGirl from "../assets/shopping-girl.png";
import BaseButton from "../components/base-components/BaseButton";
import BaseCard from "../components/base-components/BaseCard";
import sweater from "../assets/sweater.png";

const landingPage = () => {
  let emptyArr = ["", "", ""];
  return (
    <section>
      <div className="w-full md:pt-20 bg-custom-blue-1 flex items-start justify-center relative">
        <div className="w-full h-screen relative bottom-0 inner_container pt-6 pl-6 pr-2 md:rounded-3xl">
          <NavBar />
          <div className="md:flex md:mt-10">
            <div className="md:w-2/3 lg:w-1/2">
              <div className="my-12">
                <h2 className="text-4xl font-semibold leading-16 text-gray-800 md:text-6xl md:font-bold">
                  Shop Everything{" "}
                  <span className="my-5 ">Anytime, Anyplace</span>
                </h2>
                <p className="mt-4">
                  Get to shop from stores all over the world
                </p>
              </div>
              <div className="mb-12">
                <BaseButton customStyle="button-blue rounded-full ">
                  Start shopping
                </BaseButton>
              </div>
            </div>
            <div className="hidden md:inline">
              <img src={shoppingGirl} alt="a shopping girl" />
            </div>
          </div>
          <div className="sm:flex justify-around mt-12 my-8">
            {emptyArr.map((i) => (
              <BaseCard id={i} extraStyle="bg-custom-blue-2 px-8 rounded-2xl">
                <img src={sweater} alt="A sweat shirt" />
              </BaseCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default landingPage;
