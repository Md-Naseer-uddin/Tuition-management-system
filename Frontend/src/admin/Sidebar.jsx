import Centers from "./Centers"

const Sidebar=()=>{
    return (
        <>
        <div className="border border-gray-300 w-1/5 h-screen flex flex-col m-2 space-y-2">
            <h1 className="m-4 text-2xl font-bold">Admin Dashboard</h1>
            <hr />
            <button className="text-xl border border-gray-300 ml-4 mr-4 pl-2 rounded text-left">Dashboard</button>
            <button className="text-lg border border-gray-300 ml-4 mr-4 pl-2 rounded text-left">Centers</button>
            <button className="text-lg border border-gray-300 ml-4 mr-4 pl-2 rounded text-left">Tutors</button>
            <button className="text-lg border border-gray-300 ml-4 mr-4 pl-2 rounded text-left">Students</button>
            <button className="text-lg border border-gray-300 ml-4 mr-4 pl-2 rounded text-left">Attendence</button>
        </div>
        </>
    )
}

export default Sidebar