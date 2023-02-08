import { Link } from "react-router-dom";

function EmailPage() {
  return (
    <div className="flex items-center flex-col justify-evenly h-[90vh] mt-[10vh] lg:mt-[12vh] lg:h-[88vh]">
      <h1>Selecteaza un template</h1>
      <div className="flex w-11/12 h-[60vh] justify-between">
        <Link to="/admin-template-1" className="w-1/2 mx-1">
          <div
            className="h-full flex flex-col items-center justify-around bg-orange-300  hover:bg-orange-400
          active:bg-orange-400  rounded-md cursor-pointer"
          >
            <h2 className="font-bold text-lg">Template 1</h2>
            <p>Subiect</p>
            <p>Titlu</p>
            <p>Text</p>
            <p>Imagine</p>
          </div>
        </Link>
        <Link to="/admin-template-2" className="w-1/2 mx-1">
          <div
            className="h-full flex flex-col items-center justify-around bg-indigo-300 hover:bg-indigo-400 
          active:bg-indigo-400  rounded-md cursor-pointer"
          >
            <h2 className="font-bold text-lg">Template 2</h2>
            <p>Subiect</p>
            <p>Titlu</p>
            <p>Text</p>
            <p>Imagine</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default EmailPage;
