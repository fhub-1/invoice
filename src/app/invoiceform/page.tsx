
function InvoicePage() {
  return (
    <section className="bg-gray-200 py-8">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-6">Create Invoice</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="customerName" className="block text-gray-700 font-medium mb-2">Customer Name</label>
            <input type="text" id="customerName" name="customerName" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
          </div>
          {/* Add more form fields here */}
          <div className="flex justify-between">
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500">Create Invoice</button>
            <button type="button" className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded focus:outline-none focus:ring-gray-500 focus:border-gray-500">Save as Draft</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default InvoicePage;
