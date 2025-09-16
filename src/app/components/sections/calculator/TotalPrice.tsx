const TotalPrice = () => {
  return (
    <div className="flex items-center gap-2">
      <span className="bg-base-100 rounded-full p-2 pe-1">
        Total Price: <span className="bg-accent text-accent-content rounded-full px-2 py-1">7 000</span>
      </span>
      <button className="btn btn-accent rounded-full">BUY</button>
    </div>
  )
}

export default TotalPrice
