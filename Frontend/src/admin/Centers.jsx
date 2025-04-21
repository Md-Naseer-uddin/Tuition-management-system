import Sidebar from "./Sidebar";

const Centers = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[80%]">
        <div className="w-full">
          <h1 className="text-3xl font-normal mt-4 ml-2 mb-3">
            Centers Management
          </h1>
          <div className="flex justify-between">
            <div>
              Total Centers
              <br />x
            </div>
            <div>
              Total Tutors
              <br />y
            </div>
            <div className="mr-3">
              Total Students
              <br />z
            </div>
          </div>
          <div className="flex justify-around">
            {/* Search bar */}
            <div className=" w-[100%] flex justify-between items-start p-4 ">
              {/* Input on the left */}
              <input
                className="border rounded p-2 text-[15px] w-[300px]"
                type="text"
                placeholder="Search Centers"
              />

              {/* Buttons on the right */}
              <div className="flex gap-4">
                <button className="text-[16px] px-4 py-2 border rounded">
                  Add Center
                </button>
                <button className="text-[16px] px-4 py-2 border rounded">
                  Remove Center
                </button>
              </div>
            </div>
          </div>
          <h1 className="text-2xl mt-4 ml-4 mb-2 font-normal">Centers List</h1>
          <div className="flex flex-col gap-4">
            <div className="w-100 h-30">Center1</div>
            <div className="w-100 h-30">Center2</div>
            <div className="w-100 h-30">Center3</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Centers;
