import { Uploader } from "./Uploader";

export const UploadPage = (props: {
  setUploadData: (data: any[][]) => void;
  uploadData: any[][];
}) => {
  return (
    <div>
      <div className="bg-white shadow sm:rounded-lg my-3">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Import Data
          </h3>
          <div className="mt-2 sm:flex sm:items-start sm:justify-between">
            <div className="max-w-xl text-sm text-gray-500">
              <p>
                Implement Dromo, and use it to load, validate, and correct data
                from any CSV, Excel, or XML file.
              </p>
            </div>
            <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center">
              <Uploader setResults={props.setUploadData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
