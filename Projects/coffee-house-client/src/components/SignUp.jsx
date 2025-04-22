import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("from sign up");
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;
    createUser(email, password)
      .then((res) => {
        console.log("user created at firebase: ", res.user);
        const createdAt = res.user.metadata?.creationTime;
        const newUser = { name, email, createdAt };
        // save new user info to the database
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log("user created to db", data);
            if (data.insertedId) {
              Swal.fire({
                title: "Success",
                text: "User Created Successfully",
                icon: "success",
                confirmButtonText: "Cool",
              });
            }
          })
          .catch((e) => {
            console.log("error", e);
          });
      })
      .catch((e) => {
        console.log("ERROR", e.message);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-300">
      <div className="card bg-gray-500 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="text-2xl font-semibold text-center">
          Register your account
        </h2>
        <form onSubmit={handleSignUp} className="card-body ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="name"
              className="input w-full input-bordered"
              required
            />
            
          </div>
          {/* <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="photo-url"
              className="input w-full input-bordered"
              required
            />
          </div> */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input w-full input-bordered"
              required
            />
          </div>

          

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input w-full input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn w-full btn-neutral rounded-none">
              Register
            </button>
          </div>
        </form>
        <p className="text-center font-semibold ">
          Already Have An Account ?{" "}
          <Link to="/auth/login" className="text-red-600">
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
    // <div className="hero bg-base-200 min-h-screen">
    //   <div className="hero-content flex-col ">
    //     <div className="text-center lg:text-left">
    //       <h1 className="text-5xl font-bold">Sign Up Now!</h1>

    //     </div>
    //     <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
    //       <form onSubmit={handleSignUp} className="card-body">
    //         <div className="form-control">
    //           <label className="label">
    //             <span className="label-text">Name</span>
    //           </label>
    //           <input
    //             name="name"
    //             type="text"
    //             placeholder="name"
    //             className="input input-bordered"
    //             required
    //           />
    //         </div>
    //         <div className="form-control">
    //           <label className="label">
    //             <span className="label-text">Email</span>
    //           </label>
    //           <input
    //             name="email"
    //             type="email"
    //             placeholder="email"
    //             className="input input-bordered"
    //             required
    //           />
    //         </div>
    //         <div className="form-control">
    //           <label className="label">
    //             <span className="label-text">Password</span>
    //           </label>
    //           <input
    //             name="password"
    //             type="password"
    //             placeholder="password"
    //             className="input input-bordered"
    //             required
    //           />
    //           <label className="label">
    //             <a href="#" className="label-text-alt link link-hover">
    //               Forgot password?
    //             </a>
    //           </label>
    //         </div>
    //         <div className="form-control mt-6">
    //           <button className="btn btn-primary">Login</button>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>
  );
};

export default SignUp;
