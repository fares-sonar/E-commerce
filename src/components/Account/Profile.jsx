import { inputs, password } from "../../constants";
const Profile = () => {
  return (
    <>
      <form className="px-16 py-10 flex-1 g-white shadow-md">
        <div className="space-y-12">
          <div>
            <h2 className="text-xl font-medium text-lightRed">
              Edit Your Profile
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              {inputs.map((input, i) => (
                <div key={i} className="md:col-span-3 col-span-6">
                  <label
                    htmlFor={input.text}
                    className="block text-sm/6 font-medium capitalize text-gray-900"
                  >
                    {input.text}
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name={input.text}
                      id={input.text}
                      autoComplete={input.autoComplete}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
              ))}
              <div className="col-span-6 space-y-6">
                <h2>Password Changes</h2>
                {password.map((item, i) => (
                  <div key={i} className="sm:col-span-2 sm:col-start-1">
                    <div className="mt-2">
                      <input
                        type="text"
                        name={item.name}
                        id={item.name}
                        autoComplete={item.autoComplete}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm/6 font-semibold text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-lightRed px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save Changes
          </button>
        </div>
      </form>
    </>
  );
};
export default Profile;
