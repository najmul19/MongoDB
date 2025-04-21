import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const test = form.test.value;
    const category = form.category.value;
    const photo = form.photo.value;
    const details = form.details.value;
    // https://i.ibb.co.com/vCV5RQf6/1.png
    const newCoffee = {
      name,
      quantity,
      supplier,
      test,
      category,
      details,
      photo,
    };
    console.log(newCoffee);

    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "coffee added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold">Add Coffe</h2>
      <form onSubmit={handleAddCoffee}>
        {/* form name and quantity row */}
        <div className=" md:flex mb-8">
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>{" "}
            <br />
            <label className="input-group">
              <input
                name="name"
                type="text"
                className="input input-bordered w-full "
                placeholder="Coffee Name"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>{" "}
            <br />
            <label className="input-group">
              <input
                name="quantity"
                type="text"
                className="input input-bordered w-full "
                placeholder="Available Quantity"
              />
            </label>
          </div>
        </div>
        {/* form supplier test row */}
        <div className=" md:flex mb-8">
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text">Supplier Name</span>
            </label>{" "}
            <br />
            <label className="input-group">
              <input
                name="supplier"
                type="text"
                className="input input-bordered w-full "
                placeholder="Supplier Name"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Test</span>
            </label>{" "}
            <br />
            <label className="input-group">
              <input
                name="test"
                type="text"
                className="input input-bordered w-full "
                placeholder="Test"
              />
            </label>
          </div>
        </div>
        {/* form category and details row */}
        <div className=" md:flex mb-8">
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text">category</span>
            </label>{" "}
            <br />
            <label className="input-group">
              <input
                name="category"
                type="text"
                className="input input-bordered w-full "
                placeholder="category"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Details</span>
            </label>{" "}
            <br />
            <label className="input-group">
              <input
                name="details"
                type="text"
                className="input input-bordered w-full "
                placeholder="Details"
              />
            </label>
          </div>
        </div>
        {/* form photo url row */}
        <div className="mb-8">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>{" "}
            <br />
            <label className="input-group">
              <input
                name="photo"
                type="text"
                className="input input-bordered w-full "
                placeholder="Photo Url"
              />
            </label>
          </div>
        </div>

        <input
          type="submit"
          value="ADD COFFEE"
          className="btn btn-block bg-gray-800 text-white"
        />
      </form>
    </div>
  );
};

export default AddCoffee;
