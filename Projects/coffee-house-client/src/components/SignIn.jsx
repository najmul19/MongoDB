import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const SignIn = () => {
  const { signInUser } = useContext(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log("from in up");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
      .then((res)=> {
        console.log(res.user);
      })
      .catch((e)=> {
        console.log(e);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-300">
      <div className="card bg-gray-500 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="text-2xl font-semibold text-center">
          Sign In your account
        </h2>
        <form onSubmit={handleSignIn} className="card-body ">
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
              Sign In
            </button>
          </div>
        </form>
        <p className="text-center font-semibold ">
          Already Have An Account ?{" "}
          <Link to="/auth/login" className="text-red-600">
            Register
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default SignIn;
