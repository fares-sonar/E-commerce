
export const Manage = () => {
  return (
    <div className="space-y-3 px-4 ">
        <div>
          <h2 className="font-medium">Manage My Account</h2>
          <div className="pl-4 mt-4 flex flex-col">
            <a className="text-gray-400 hover:text-lightRed transition-colors" href="#">My Profile</a>
            <a className="text-gray-400 hover:text-lightRed transition-colors" href="#">Address Book</a>
            <a className="text-gray-400 hover:text-lightRed transition-colors" href="#">My Payment Option</a>
          </div>
        </div>
        <div>
          <h2 className="font-medium">My Order</h2>
          <div className="pl-4 mt-4 flex flex-col">
            <a className="text-gray-400 hover:text-lightRed transition-colors" href="#">My Returns</a>
            <a className="text-gray-400 hover:text-lightRed transition-colors" href="#">My Cancellations</a>
          </div>
        </div>
        <h2 className="font-medium">My Order</h2>

    </div>
  )
}
