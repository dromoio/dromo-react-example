function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Header = (props: { column: string }) => {
  return (
    <th
      scope="col"
      className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
    >
      {props.column}
    </th>
  );
};
const Row = (props: { keys: string[]; row: any }) => {
  return (
    <tr key={JSON.stringify(props.row)}>
      {props.keys.map((k, idx) => (
        <td
          key={`${k}${idx}`}
          className={classNames(
            "border-b border-gray-200",
            "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
          )}
        >
          {props.row[k]}
        </td>
      ))}
    </tr>
  );
};
export const DataTable = (props: { uploadData: any[] }) => {
  console.log(props);
  const columns = Object.keys(props.uploadData[0] || {});
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">
            {props.uploadData.length === 0
              ? "Upload some data first!"
              : "Complete Upload"}
          </h1>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle">
            <div className="shadow-sm ring-1 ring-black ring-opacity-5">
              <table
                className="min-w-full border-separate"
                style={{ borderSpacing: 0 }}
              >
                <thead className="bg-gray-50">
                  <tr>
                    {columns.map((col) => (
                      <Header column={col} key={col} />
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {props.uploadData.map((row, idx) => (
                    <Row {...{ keys: columns, row }} key={idx} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
