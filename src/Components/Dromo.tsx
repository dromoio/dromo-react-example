export const Dromo = (props: { setResults: (data: any[]) => void }) => {
  return (
    <a
      href="https://developer.dromo.io/getting-started"
      target="_blank"
      onClick={() => alert("Add Dromo to import data!")}
      rel="noopener noreferrer"
      className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-[#0052cc] hover:bg-[#172c4d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
    >
      Import Data
    </a>
  );
};
