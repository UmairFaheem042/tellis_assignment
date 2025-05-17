const Start = () => {
  return (
    <div>
      <section className="container mx-auto py-10 text-center">
        <h2 className="text-3xl font-bold mb-6">Start Your Mortgage Journey</h2>
        <p className="text-lg mb-6">
          Ready to take the next step? Begin your application now.
        </p>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-lg mb-2">Full Name</label>
            <input type="text" className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-2">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded w-full"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};
export default Start;
