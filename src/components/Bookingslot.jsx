import { tables } from "../data/tables"

const Bookingslot = () => {
  return (
    <>
        <div className="grid grid-cols-3 gap-4">
            {tables.map(table => (
                <div key={table.id} className="w-[50px] h-[50px] bg-green-400 flex justify-center items-center 
                text-white rounded-md">
                    {table.id}
                </div>
            ))}
        </div>
    </>
  )
}

export default Bookingslot