export default function NewIssuePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-3xl font-bold underline">Create New Issue</h1>
      <form className="mt-12 flex flex-col">
        <label className="block mb-4">
          <span className="block text-gray-700 text-sm font-bold mb-2">
            Title
          </span>
          <input
            type="text"
            name="title"
            className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-primary-500 focus:border-primary-500"
            required
          />
        </label>
        <label className="block mb-4">
          <span className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </span>
          <textarea
            name="description"
            className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-primary-500 focus:border-primary-500"
            required
          />
        </label>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          Create
        </button>
      </form>
    </div>
  );
}
