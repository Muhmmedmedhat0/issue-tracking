export default function SignInPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-3xl font-bold underline">Sign in</h1>
      <form
        className="mt-12 flex flex-col"
        action="/api/auth/signin"
        method="POST"
      >
        <label className="block mb-4">
          <span className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </span>
          <input
            type="email"
            name="email"
            className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-primary-500 focus:border-primary-500"
            required
          />
        </label>
        <label className="block mb-4">
          <span className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </span>
          <input
            type="password"
            name="password"
            className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-primary-500 focus:border-primary-500"
            required
          />
        </label>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          Sign in
        </button>
      </form>
    </div>
  );
}
