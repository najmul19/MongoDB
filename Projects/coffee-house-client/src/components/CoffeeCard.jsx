const CoffeeCard = ({ coffee }) => {
  const { name, quantity, supplier, test, category, details, photo } = coffee;
  return (
    <div className="card card-side bg-[#F4F3F0] shadow-xl">
      <figure>
        <img src={photo} alt="Coffee Image" />
      </figure>
      <div className="card-body flex flex-row justify-between w-full">
        <div className="w-1/2">
          <h2 className="card-title">Name: {name}</h2>
          <p>{quantity}</p>
          <p>{supplier}</p>
          <p>{test}</p>
        </div>
        <div className="card-actions justify-end w-1/2">
          <div className="join join-vertical space-y-4">
            <button className="btn join-item">View</button>
            <button className="btn join-item">Eidt</button>
            <button className="btn join-item">X</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
