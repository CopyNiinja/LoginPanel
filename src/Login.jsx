import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bgImage from "./assets/side-bg.jpg";
const Login = () => {
  return (
    <div className="min-h-screen bg-gray-200 w-full p-5 ">
      <div className="flex flex-col mx-auto   md:max-w-[54rem] md:  md:flex-row md:relative ">
        <div
          className="bg-white relative max-w-[32rem] md:max-w-[40rem]  flex flex-col gap-6 mx-auto p-7 md:p-5 rounded-2xl  md:rounded-r-none md:static
            "
        >
          {" "}
          <div className="absolute right-7 top-6 text-gray-400 md:text-gray-500 md:bg-white md:h-[1.3rem] md:w-5 md:rounded-full   pl-1 md:hover:bg-gray-400 md:hover:text-white">
            <FontAwesomeIcon
              icon={faXmark}
              className="hover:scale-150 md:hover:scale-110 duration-200 cursor-pointer "
            />
          </div>
          <h1 className="text-xl font-extrabold text-[#007D5B">Log In</h1>
          <p className="text-sm text-gray-400">
            Login to your account to enjoy our facilities and get access to
            beyond that.
          </p>
          <input
            type="email"
            placeholder="Enter your email address"
            className="border p-4  py-4 outline-none rounded-md"
          />
          <div className="flex flex-col gap-6  md:flex-row md:justify-between md:gap-2    ">
            <a
              className="text-center text-[#007D5B] md:flex-1 md:self-center md:text-start md:ml-2"
              href="#"
            >
              Forget password?
            </a>
            <button
              className="border p-2 py-4 block  w-full mx-auto bg-[#007D5B] hover:bg-[#00402D] text-white rounded-md md:flex-1"
              type="submit"
            >
              Next
              <FontAwesomeIcon icon={faArrowRight} className="ml-3 mt-1" />
            </button>
          </div>
          <div className="space-y-5 text-center">
            <hr />
            <p className="text-sm text-gray-400">Or login with</p>
            <div className="flex flex-col gap-4 md:flex-row md:justify-between md:gap-2 ">
              <button className="border p-2 block w-full mx-auto shadow-sm duration-500 rounded-md group hover:text-white hover:bg-blue-800">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-blue-900 mr-2 group-hover:text-white"
                />
                Facebook
              </button>
              <button className="border p-2 block w-full mx-auto rounded-md  duration-500 shadow-sm group hover:text-white  hover:bg-[#E94134]">
                <FontAwesomeIcon
                  icon={faGoogle}
                  className="text-[#E94134] mr-2 group-hover:text-white"
                />
                Google{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="hidden w-[370px] md:block  md:rounded-r-2xl ">
          <img
            src={bgImage}
            alt=""
            className="w-full h-full object-cover  md:rounded-r-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
