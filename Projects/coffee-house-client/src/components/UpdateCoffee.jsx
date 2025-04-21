import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  // console.log(coffee)
  const {_id, name, quantity, supplier, test, category, details, photo } = coffee;
  const handleUpdateCoffee = (e) => {
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
    const updatedCoffee = {
      name,
      quantity,
      supplier,
      test,
      category,
      details,
      photo,
    };
    console.log(updatedCoffee);

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: "Success",
            text: "Coffee Updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold">Update Coffee: {name} </h2>
      <form onSubmit={handleUpdateCoffee}>
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
                defaultValue={name}
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
              defaultValue={quantity}
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
              defaultValue={supplier}
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
              defaultValue={test}
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
              defaultValue={category}
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
              defaultValue={details}
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
              defaultValue={photo}
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
          value="UPDATE COFFEE"
          className="btn btn-block bg-gray-800 text-white"
        />
      </form>
    </div>
  );
};

export default UpdateCoffee;
