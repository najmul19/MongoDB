const AddCoffee = () => {
  return (
    <div>
      <h2>Add Coffe</h2>
      <form>
        <div className="bg-[#F4F3F0] flex">
          <div className="form-control">
            <label placeholder="Coffee Name">
              <span>Coffee Name</span>
            </label> <br />
            <div className="join">
              <input
                className="input input-bordered join-item"
                placeholder="Coffee Name"
              />
            </div>
          </div>
          <div className="form-control">
            <label placeholder="Coffee Name">
              <span>Available Quantity</span>
            </label> <br />
            <div className="join">
              <input
                className="input input-bordered join-item"
                placeholder="Available Quantity"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
