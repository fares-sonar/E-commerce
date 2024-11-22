import Page_Title from "../components/About/Page-Title/Page_Title"
import { Manage } from "../components/Account/Manage"
import { Profile } from "../components/Account/Profile"

export const Account = () => {
  const user = JSON.parse(localStorage.getItem("users"))
  return (
    <section className="container my-16">
      <div className="flex justify-between items-center">
        <Page_Title text={"My Account"}/>
        <h2> Welcome! <span className="text-lightRed">{user[0].name}</span></h2>
      </div>
      <div className="flex md:flex-row flex-col lg:gap-[11.5rem] md:gap-[8rem] gap-4 mt-16">
        <Manage/>
        <Profile/>
      </div>
    </section>
  )
}
