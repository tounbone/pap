export default function Teste() {
  return (
    <>
<div className="flex flex-col">
  <div className="-m-1.5 overflow-x-auto">
    <div className="p-1.5 w-96 inline-block align-middle">
      <div className="border rounded-lg divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
        <div className="flex p-1 bg-gray-100">
          <div className="relative max-w-xs">
            <label
              htmlFor="hs-table-with-pagination-search"
              className="sr-only"
            >
              Procurar
            </label>
            <input
              type="text"
              name="hs-table-with-pagination-search"
              id="hs-table-with-pagination-search"
              className="p-3 pl-10 block w-full border rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
              placeholder="Procurar"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-4">
              <svg
                className="h-3.5 w-3.5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
</svg>
        </div>
        <div className="overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td className="py-3 pl-4">
                  <div className="flex items-center h-5">
                    <input
                      id="hs-table-pagination-checkbox-1"
                      type="checkbox"
                      className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    />
                    <label
                      htmlFor="hs-table-pagination-checkbox-1"
                      className="sr-only"
                    >
                      Checkbox
                    </label>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                  Inquérito para os funcionários da empresa
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                  Carlos Couves
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                  13:24
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a className="text-blue-500 hover:text-blue-700" href="#">
                    Delete
                  </a>
                </td>
              </tr>
              <tr>
                <td className="py-3 pl-4">
                  <div className="flex items-center h-5">
                    <input
                      id="hs-table-pagination-checkbox-2"
                      type="checkbox"
                      className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    />
                    <label
                      htmlFor="hs-table-pagination-checkbox-2"
                      className="sr-only"
                    >
                      Checkbox
                    </label>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                Alteração dos salários - Novembro 2024
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                  27
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                  London No. 1 Lake Park
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a className="text-blue-500 hover:text-blue-700" href="#">
                    Delete
                  </a>
                </td>
              </tr>
              <tr>
                <td className="py-3 pl-4">
                  <div className="flex items-center h-5">
                    <input
                      id="hs-table-pagination-checkbox-3"
                      type="checkbox"
                      className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    />
                    <label
                      htmlFor="hs-table-pagination-checkbox-3"
                      className="sr-only"
                    >
                      Checkbox
                    </label>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                  Ficheiros para orçamento de...
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                  31
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                  Sidney No. 1 Lake Park
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a className="text-blue-500 hover:text-blue-700" href="#">
                    Delete
                  </a>
                </td>
              </tr>
              <tr>
                <td className="py-3 pl-4">
                  <div className="flex items-center h-5">
                    <input
                      id="hs-table-pagination-checkbox-4"
                      type="checkbox"
                      className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    />
                    <label
                      htmlFor="hs-table-pagination-checkbox-4"
                      className="sr-only"
                    >
                      Checkbox
                    </label>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                  Reunião com Mário
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                  16
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                  LA No. 1 Lake Park
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a className="text-blue-500 hover:text-blue-700" href="#">
                    Delete
                  </a>
                </td>
              </tr>
              <tr>
                <td className="py-3 pl-4">
                  <div className="flex items-center h-5">
                    <input
                      id="hs-table-pagination-checkbox-5"
                      type="checkbox"
                      className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    />
                    <label
                      htmlFor="hs-table-pagination-checkbox-5"
                      className="sr-only"
                    >
                      Checkbox
                    </label>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                  RE: novos horários
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                  45
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                  Melbourne No. 1 Lake Park
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a className="text-blue-500 hover:text-blue-700" href="#">
                    Delete
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="py-1 px-4">
          <nav className="flex items-center space-x-2">
            <a
              className="text-gray-400 hover:text-blue-600 p-4 inline-flex items-center gap-2 font-medium rounded-md"
              href="#"
            >
              <span aria-hidden="true">«</span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="w-10 h-10 bg-blue-500 text-white p-4 inline-flex items-center text-sm font-medium rounded-full"
              href="#"
              aria-current="page"
            >
              1
            </a>
            <a
              className="w-10 h-10 text-gray-400 hover:text-blue-600 p-4 inline-flex items-center text-sm font-medium rounded-full"
              href="#"
            >
              2
            </a>
            <a
              className="w-10 h-10 text-gray-400 hover:text-blue-600 p-4 inline-flex items-center text-sm font-medium rounded-full"
              href="#"
            >
              3
            </a>
            <a
              className="text-gray-400 hover:text-blue-600 p-4 inline-flex items-center gap-2 font-medium rounded-md"
              href="#"
            >
              <span className="sr-only">Next</span>
              <span aria-hidden="true">»</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  );
}
