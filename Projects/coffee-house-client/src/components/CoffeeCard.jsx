
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee,allCoffee,setAllCoffee  }) => {
  const { _id, name, quantity, supplier, test, category, details, photo } =
    coffee;


  const handleDelete = (id) => {
    // console.log(id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              console.log("Delete confirm");
              const remaining = allCoffee.filter(item => item._id !== id);
              console.log(allCoffee)
              console.log(remaining)
              setAllCoffee(remaining); // 🔥 UI updated
            }
          });
      }
    });
  };
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
            <Link to={`updateCoffee/${_id}`} className="btn join-item">Eidt</Link>`
            <button
              onClick={() => handleDelete(_id)}
              className="btn join-item bg-orange-600"
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
