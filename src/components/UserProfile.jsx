import cross from "../assets/cross.png"
const UserProfile = ({ closeuserProfile }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 bg-white absolute top-15 right-5 w-96 h-96">
    <span className=" absolute top-3 right-3 h-5 w-5 cursor-pointer " onClick={closeuserProfile}> <img src={cross} alt="cross" className=" h-5 w-5"/></span>
      <div className=" py-6  border-t-[1px]">
        <div className="font-bold text-xl mb-2"></div>
        <p className="text-gray-700 text-base">
          <strong>Email:</strong>
        </p>
        <p className="text-gray-700 text-base">
          <strong>Role:</strong>
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
