import { useAccount, useConnect, useDisconnect } from "wagmi";

function App() {
  const account = useAccount();
  const { connectors, connect, status, error } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <>
      <div className="container mx-auto mt-10 flex justify-between">
        <div className="">
          <h2 className="font-bold text-2xl text-teal-500">
            Connection Details
          </h2>

          <div className="relative overflow-x-auto mt-8  border rounded-md shadow-xl">
            <table className="w-full text-sm rounded-lg shadow-lg text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Key
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Property
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b  dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 text-teal-500 font-medium  whitespace-nowrap "
                  >
                    Status
                  </th>
                  <td className="px-6 py-4 text-black uppercase">
                    {account.status}
                  </td>
                </tr>
                <tr className="border-b text-teal-500   dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap "
                  >
                    Addresses
                  </th>
                  <td className="px-6 py-4 uppercase text-black">
                    {JSON.stringify(account.addresses)}
                  </td>
                </tr>
                <tr className="">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-teal-500   whitespace-nowrap "
                  >
                    ChainId
                  </th>
                  <td className="px-6 py-4 text-black">{account.chainId}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <h2 className="font-bold mt-10">Wallets</h2>
            {connectors.map((connector) => (
              <button
                key={connector.uid}
                className="mr-2 border mt-3 bg-teal-500 text-white px-3 py-2 rounded-md shadow-lg"
                onClick={() => connect({ connector })}
                type="button"
              >
                {connector.name}
              </button>
            ))}
          </div>
        </div>

        <div className="border rounded-lg w-[500px] overflow-hidden m-4 shadow-lg">
          <div className="sticky top-0 z-50  border-b  border-gray-300 bg-white py-5 px-8 text-left text-sm  text-gray-800">
            <h4 className=" inline-block py-1 text-left font-sans font-semibold normal-case">
              RootStock Community
            </h4>
          </div>
          <div className="flex-grow px-8 pt-8 text-left text-gray-700">
           

           
          
            <div className="relative mb-6 text-center">
              <span className="relative bg-white px-2 text-sm text-gray-600">
                Yesterday
              </span>
            </div>

          

         

            <div className="relative mb-6 text-left">
              <div className="text-gray-700">
                <div className="absolute inset-x-0 top-0">
                  <img
                    src="https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg="
                    alt=""
                    className="float-right inline-block h-6 w-6 sm:h-12 sm:w-12 rounded-full"
                  />
                </div>
                <div className="relative float-right mr-8 sm:mr-16 inline-block rounded-md bg-blue-700 py-3 px-4 text-white">
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                  </p>
                </div>
              </div>
              <div className="clear-both flex text-gray-700"></div>
            </div>

            <div className="mt-4  flex items-start border-t  border-gray-300 sm:p-8 py-4 text-left  text-gray-700">
              <textarea
                cols="1"
                rows="1"
                placeholder="Your Message"
                className="mr-4 mt-3 overflow-hidden w-full flex-1 cursor-text resize-none whitespace-pre-wrap rounded-md bg-white text-sm py-2 sm:py-0 font-normal text-gray-600 opacity-70 shadow-none outline-none focus:text-gray-600 focus:opacity-100"
              ></textarea>
              <button className="relative  inline-flex h-10 w-auto flex-initial cursor-pointer items-center justify-center self-center  rounded-md bg-blue-700 px-6 text-center align-middle text-sm font-medium text-white outline-none focus:ring-2">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
