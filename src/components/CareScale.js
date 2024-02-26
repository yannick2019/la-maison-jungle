const quantityLabel = {
  1: "peu",
  2: "modérément",
  3: "beaucoup"
}

function CareScale({ scaleValue, careType }) {
  const range = [1, 2, 3]
  const scaleType = careType === 'light' ? '☀️' : '💧'

  return (
    <div onClick={() => {
      alert(
        `Cette plante requiert ${quantityLabel[scaleValue]} ${careType === "light" ? "de lumière" : "d'arrosage"}`
      )
    }}>
      {range.map((randgeElem) => (
        scaleValue >= randgeElem ? (<span key={randgeElem.toString()}>{scaleType}</span>) : null
      ))}
    </div>
  )
}

export default CareScale