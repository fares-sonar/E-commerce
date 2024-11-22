import Head from "../components/Check-Out/Head"
import BillingDetails from "../components/Check-Out/BillingDetails"
import OrderSummary from "../components/Check-Out/OrderSummary"
export const CheckOut = () => {
  
  
  return (
    // container lg:px-0 px-4
    <>
    <section className=" container lg:px-0 px-4  bg-gray-50 py-12  sm:px-6 ">
      <div className="">
        <Head/>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Billing Details Form */}
          <BillingDetails/>

          {/* Order Summary */}
          <OrderSummary/>
        </div>
      </div>
    </section>

    </>
  )
}
