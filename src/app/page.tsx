import Link from "next/link";
import { prisma } from "./utils/prisma";

export default async function Home() {
  // Fetch your invoice items from the database using Prisma or any other method

  // const invoiceItems = [];
  const invoiceItems = [];

for (let i = 1; i <= 50; i++) {
  invoiceItems.push({
    id: i,
    item: `Item ${i}`,
    price: `$${(Math.random() * 100).toFixed(2)}`,
    quantity: Math.floor(Math.random() * 10) + 1,
    discount: `${Math.floor(Math.random() * 50)}%`,
    total: `$${(Math.random() * 100).toFixed(2)}`,
  });
}

  return (
    <main className="p-10">
    <table className="min-w-full divide-y divide-gray-400">
      <thead>
        <tr>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Discount</th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {invoiceItems.map((item) => (
          <tr key={item.id} className="cursor-pointer hover:bg-gray-100">
            <td className="px-6 py-4 whitespace-nowrap">
              <Link href={`/invoice/${item.id}`}>
                {item.item}
              </Link>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">{item.price}</td>
            <td className="px-6 py-4 whitespace-nowrap">{item.quantity}</td>
            <td className="px-6 py-4 whitespace-nowrap">{item.discount}</td>
            <td className="px-6 py-4 whitespace-nowrap">{item.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </main>
  
  );
}
