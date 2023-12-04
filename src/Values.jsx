/* eslint-disable react/prop-types */
function Values({ arr }) {
  return (
    <div>
      {arr &&
        arr.map((item) => (
          <p key={item} className="font-semibold text-xl">
            {item}
          </p>
        ))}
    </div>
  );
}

export default Values;
