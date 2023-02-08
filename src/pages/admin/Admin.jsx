import { Link } from "react-router-dom";

function Admin() {
  return (
    <div className="flex items-center flex-col justify-around h-[90vh] mt-[10vh] lg:mt-[12vh] lg:h-[88vh]">
      <h1 className="text-lg">Bun venit la panoul administratorului!</h1>
      <div className="flex flex-col items-center justify-evenly h-[40vh]">
        <Link to="/admin-chart">
          <div className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-gray-400 shadow-md">
            Interogare Raspunsuri
          </div>
        </Link>
        <Link to="/admin-email">
          <div className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-gray-400 shadow-md">
            Creare Email
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Admin;
