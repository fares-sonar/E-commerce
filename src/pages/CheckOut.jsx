import { lazy } from "react";
const  Head = lazy(()=> import("../components/Check-Out/Head")) ;
const BillingDetails = lazy(()=> import("../components/Check-Out/BillingDetails")) ;
const OrderSummary = lazy(()=> import("../components/Check-Out/OrderSummary")) ;

const CheckOut = () => {
  return (
    <>
      <section className=" container lg:px-0 px-4  bg-gray-50 py-12  sm:px-6 ">
        <div className="">
          <Head />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Billing Details Form */}
            <BillingDetails />

            {/* Order Summary */}
            <OrderSummary />
          </div>
        </div>
      </section>
    </>
  );
};
export default CheckOut