import BaseProductCard from "../components/base-components/BaseProductCard";
import NavBar from "../components/NavBar";

const Stores = () => {
  return (
    <div>
      <NavBar nativeSpacing="pt-6 pl-6 pr-2 sticky top-0 bg-white shadow-gray-200" />
      <section className="mt-8">
        <div className="flex justify-between items-center p-8">
          <h2 className="text-2xl text-gray-800 font-semibold">Shoes</h2>
          <p className="text-gray-500">View all</p>
        </div>
        <div className="sm:flex justify-center px-8 flex-wrap">
          <BaseProductCard
            nativeSpacing="sm:basis-3/6 md:basis-2/6 lg:basis-1/4 mx-auto my-6"
            blueCardSize="w-full sm:w-60"
            Amount="$30"
          ></BaseProductCard>
          <BaseProductCard
            nativeSpacing="sm:basis-3/6 md:basis-2/6 lg:basis-1/4 mx-auto my-6"
            blueCardSize="w-full sm:w-60"
            Amount="$30"
          ></BaseProductCard>
          <BaseProductCard
            nativeSpacing="sm:basis-3/6 md:basis-2/6 lg:basis-1/4 mx-auto my-6"
            blueCardSize="w-full sm:w-60"
            Amount="$30"
          ></BaseProductCard>
          <BaseProductCard
            nativeSpacing="sm:basis-3/6 md:basis-2/6 lg:basis-1/4 mx-auto my-6"
            blueCardSize="w-full sm:w-60"
            Amount="$30"
          ></BaseProductCard>
        </div>
      </section>
      <section className="mt-8">
        <div className="flex justify-between items-center p-8">
          <h2 className="text-2xl text-gray-800 font-semibold">Trending</h2>
          <p className="text-gray-500">View all</p>
        </div>
        <div className="sm:flex justify-center px-8 flex-wrap">
          <BaseProductCard
            nativeSpacing="sm:basis-3/6 md:basis-2/6 lg:basis-1/4 mx-auto my-6"
            blueCardSize="w-full sm:w-60"
            Amount="$30"
          ></BaseProductCard>
          <BaseProductCard
            nativeSpacing="sm:basis-3/6 md:basis-2/6 lg:basis-1/4 mx-auto my-6"
            blueCardSize="w-full sm:w-60"
            Amount="$30"
          ></BaseProductCard>
          <BaseProductCard
            nativeSpacing="sm:basis-3/6 md:basis-2/6 lg:basis-1/4 mx-auto my-6"
            blueCardSize="w-full sm:w-60"
            Amount="$30"
          ></BaseProductCard>
          <BaseProductCard
            nativeSpacing="sm:basis-3/6 md:basis-2/6 lg:basis-1/4 mx-auto my-6"
            blueCardSize="w-full sm:w-60"
            Amount="$30"
          ></BaseProductCard>
        </div>
      </section>
      <section className="mt-8">
        <div className="flex justify-between items-center p-8">
          <h2 className="text-2xl text-gray-800 font-semibold">Crocs</h2>
          <p className="text-gray-500">View all</p>
        </div>
        <div className="sm:flex justify-center px-8 flex-wrap">
          <BaseProductCard
            nativeSpacing="sm:basis-3/6 md:basis-2/6 lg:basis-1/4 mx-auto my-6"
            blueCardSize="w-full sm:w-60"
            Amount="$30"
          ></BaseProductCard>
          <BaseProductCard
            nativeSpacing="sm:basis-3/6 md:basis-2/6 lg:basis-1/4 mx-auto my-6"
            blueCardSize="w-full sm:w-60"
            Amount="$30"
          ></BaseProductCard>
          <BaseProductCard
            nativeSpacing="sm:basis-3/6 md:basis-2/6 lg:basis-1/4 mx-auto my-6"
            blueCardSize="w-full sm:w-60"
            Amount="$30"
          ></BaseProductCard>
          <BaseProductCard
            nativeSpacing="sm:basis-3/6 md:basis-2/6 lg:basis-1/4 mx-auto my-6"
            blueCardSize="w-full sm:w-60"
            Amount="$30"
          ></BaseProductCard>
        </div>
      </section>
    </div>
  );
};

export default Stores;
