import DropdownNotification from "./DropdownNotification"

const RightProfile = () => {
  return (
    <div className=" items-center gap-3 2xsm:gap-7 hidden sm:flex sm:m-auto">
    <ul className="flex items-center gap-2 2xsm:gap-4">

      {/* <!-- Notification Menu Area --> */}
      <DropdownNotification />
      {/* <!-- Notification Menu Area --> */}

      {/* <!-- Chat Notification Area --> */}
      {/* <DropdownMessage /> */}
      {/* <!-- Chat Notification Area --> */}
    </ul>

    {/* <!-- User Area --> */}
    {/* <DropdownUser /> */}
  </div>
  )
}

export default RightProfile