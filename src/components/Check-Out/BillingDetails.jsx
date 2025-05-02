import { inputDiv } from "../../constants";
const BillingDetails=()=> {

  return (
    <div>
      <h2 className="text-2xl font-bold mb-8">Billing Details</h2>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
        {inputDiv.map((info, i) => (
          <div
            key={i}
            className={`${
              i === inputDiv.length - 1
                ? "flex justify-end items-center flex-row-reverse gap-2"
                : ""
            }`}
          >
            <label
              htmlFor={info.text}
              className="block text-sm font-medium text-gray-700 capitalize"
            >
              {info.desc}
              <span className="text-red-500">*</span>
            </label>
            <input
              type={info.type}
              id={info.text}
              name={info.text}
              required
              className={`${
                i === inputDiv.length - 1
                  ? "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  : "mt-1 w-full rounded-md bg-gray-100 outline-none border-b-2 p-2"
              }`}
            />
          </div>
        ))}
      </form>
    </div>
  );
}
export default BillingDetails;
