/**
 * @component TotalPrice
 * @purpose To display the calculated total price for selected services.
 * @description Shows the estimated total cost in a styled display component.
 * @techContext Built with Next.js (App Router), Tailwind CSS, and DaisyUI, leveraging WordPress as a headless CMS.
 */

const TotalPrice = () => {
  return (
    <div className="flex items-center justify-between w-full bg-base-100 rounded-full p-2 py-1 pe-1 mx-5 text-sm border border-base-300">
      <p className="ms-2">Total Price:</p>
      <p className="bg-primary text-primary-content text-bold rounded-full px-2 py-1">7 000</p>
    </div>
  )
}

export default TotalPrice
