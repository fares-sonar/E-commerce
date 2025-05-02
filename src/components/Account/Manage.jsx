export const Manage = () => {
  const account = ["My Profile", "Address Book", "My Payment Option"];
  const order = ["My Returns", "My Cancellations"];
  return (
    <div className="space-y-3 px-4 ">
      <div>
        <h2 className="font-medium">Manage My Account</h2>
        <div className="pl-4 mt-4 flex flex-col">
          {account.map((item, i) => (
            <a
              key={i}
              className="text-gray-400 hover:text-lightRed transition-colors"
              href="#"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
      <div>
        <h2 className="font-medium">My Order</h2>
        <div className="pl-4 mt-4 flex flex-col">
          {order.map((item, i) => (
            <a
              key={i}
              className="text-gray-400 hover:text-lightRed transition-colors"
              href="#"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
      <h2 className="font-medium">My Order</h2>
    </div>
  );
};

