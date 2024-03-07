const SignUp = ({ setIsLogin }) => {
  const handleSignUp = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    // Retrieve existing users data from localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the user with the provided email already exists
    const userExists = existingUsers.some((user) => user.email === email);

    if (userExists) {
      // If user already exists with the provided email, show an alert
      alert("User already exists with this email.");
    } else {
      // If user doesn't exist, add them to the list of users
      const newUser = {
        name: name,
        email: email,
        password: password,
        cart: [],
      };
      const updatedUsers = [...existingUsers, newUser];
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      setIsLogin(true);
    }
  };

  return (
    <div className="">
      <div className="mx-8 lg:ml-40 mt-8 text-gray-700">
        <h1 className="font-bold text-3xl">Sign up</h1>
        <p className="text-sm mt-2">
          or{" "}
          <span
            className="text-custom-orange cursor-pointer"
            onClick={() => setIsLogin(true)}
          >
            login to your account
          </span>
        </p>
      </div>

      <form onSubmit={handleSignUp}>
        <div className="mx-8 lg:ml-40 mt-8">
          <input
            type="text"
            name="name"
            placeholder="Enter Name..."
            className="px-6 py-[14px] w-full lg:w-[360px] border-2 border-solid-gray-500 font-bold text-sm outline-none"
            required
          />
        </div>

        <div className="mx-8 lg:ml-40 mt-4">
          <input
            type="email"
            name="email"
            placeholder="Enter Email..."
            className="px-6 py-[14px] w-full lg:w-[360px] border-2 border-solid-gray-500 font-bold text-sm outline-none"
            required
          />
        </div>
        <div className="mx-8 lg:ml-40 mt-4">
          <input
            type="password"
            name="password"
            placeholder="Enter Password..."
            className="px-6 py-[14px] w-full lg:w-[360px] border-2 border-solid-gray-500 font-bold text-sm outline-none"
            required
          />
        </div>

        <div className="mx-8 lg:ml-40 mt-8">
          <button
            type="submit"
            className="bg-custom-orange px-6 py-[14px] w-full lg:w-[360px] text-white font-bold hover:shadow-md"
          >
            CONTINUE
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
