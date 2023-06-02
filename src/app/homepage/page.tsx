"use client"
import Link from "next/link"
import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

const Menubar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [invoiceName, setInvoiceName] = useState('');
    const [price, setPrice] = useState('');
    const [discount, setDiscount] = useState('');
    const [total, setTotal] = useState('');

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Calculate the total
        const parsedPrice = parseFloat(price);
        const parsedDiscount = parseFloat(discount);
        const calculatedTotal = parsedPrice - parsedDiscount;

        // Update the total state
        setTotal(calculatedTotal.toFixed(2));

        // Perform your form submission logic here
        console.log('Invoice Name:', invoiceName);
        console.log('Price:', parsedPrice);
        console.log('Discount:', parsedDiscount);
        console.log('Total:', calculatedTotal);

        // Reset the form fields
        setInvoiceName('');
        setPrice('');
        setDiscount('');
    };


    const navigation = [
        {
            href: "/",
            name: "Overview"
        },
        {
            href: "/",
            name: "Integration"
        },
        {
            href: "/billing",
            name: "Billing"
        },
        {
            href: "/transactions",
            name: "Transactions"
        },
        {
            href: "/plans",
            name: "plans"
        },
    ]

    return (
        <div >
            <div className="items-start justify-between md:flex">
                <div>
                    <h3 className="text-gray-800 text-2xl font-bold uppercase">
                        Invoices
                    </h3>
                </div>
                <div className="items-center gap-x-3 mt-6 md:mt-0 sm:flex uppercase">
                    <Link
                        href="/"
                        placeholder="filter"
                        className="flex items-center justify-center gap-x-2 px-4 py-2 text-center text-gray-700 duration-150 font-medium rounded-lg border hover:bg-gray-50 active:bg-gray-100 md:text-sm"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-500">
                            <path fillRule="evenodd" d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z" clipRule="evenodd" />
                        </svg>
                        Filter
                    </Link>
                    {/* <div>
                        <button
                            className="block px-4 py-2 mt-3 text-center text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 sm:mt-0 md:text-sm"
                        
                        >
                            Create Invoice
                        </button>
                        
                    </div> */}
                    <div>
                        <button
                            className="block px-4 py-2 mt-3 text-center text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 sm:mt-0 md:text-sm"
                            onClick={openModal}
                        >
                            Create Invoice
                        </button>

                        <Transition.Root show={isOpen} as={Fragment}>
                            <Dialog
                                open={isOpen}
                                onClose={closeModal}
                                className="fixed z-10 inset-0 overflow-y-auto"
                            >
                                <div className="flex items-center justify-center min-h-screen">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30" />
                                    </Transition.Child>

                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 scale-95"
                                        enterTo="opacity-100 scale-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 scale-100"
                                        leaveTo="opacity-0 scale-95"
                                    >
                                        <div className="bg-white rounded-lg p-6">
                                            <Dialog.Title className="text-lg font-medium text-gray-900">
                                                Create Invoice
                                            </Dialog.Title>

                                            <form onSubmit={handleSubmit}>
                                                <div className="mt-4">
                                                    <label htmlFor="invoiceName" className="block text-sm font-medium text-gray-700">
                                                        Invoice Name
                                                    </label>
                                                    <input
                                                        id="invoiceName"
                                                        name="invoiceName"
                                                        type="text"
                                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                                        value={invoiceName}
                                                        onChange={(e) => setInvoiceName(e.target.value)}
                                                        required
                                                    />
                                                </div>

                                                <div className="mt-4">
                                                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                                                        Price
                                                    </label>
                                                    <input
                                                        id="price"
                                                        name="price"
                                                        type="number"
                                                        step="0.01"
                                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                                        value={price}
                                                        onChange={(e) => setPrice(e.target.value)}
                                                        required
                                                    />
                                                </div>

                                                <div className="mt-4">
                                                    <label htmlFor="discount" className="block text-sm font-medium text-gray-700">
                                                        Discount
                                                    </label>
                                                    <input
                                                        id="discount"
                                                        name="discount"
                                                        type="number"
                                                        step="0.01"
                                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                                        value={discount}
                                                        onChange={(e) => setDiscount(e.target.value)}
                                                    />
                                                </div>

                                                <div className="mt-4">
                                                    <label htmlFor="total" className="block text-sm font-medium text-gray-700">
                                                        Total
                                                    </label>
                                                    <input
                                                        id="total"
                                                        name="total"
                                                        type="text"
                                                        className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 p-2"
                                                        value={total}
                                                        readOnly
                                                    />
                                                </div>

                                                <div className="mt-6">
                                                    <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-lg">
                                                        Submit
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </Transition.Child>
                                </div>
                            </Dialog>
                        </Transition.Root>
                    </div>s
                </div>
            </div>
            <div className="mt-6 md:mt-4">
                <ul className="w-full border-b flex items-center gap-x-3 overflow-x-auto">
                    {
                        navigation.map((item, idx) => (
                            // Replace [idx == 0] with [window.location.pathname == item.path] or create your own logic
                            <li key={idx} className={`py-2 border-b-2 ${idx == 0 ? "border-indigo-600 text-indigo-600" : "border-white text-gray-500"}`}>
                                <Link
                                    href={item.href}
                                    className="py-2.5 px-4 rounded-lg duration-150 text-sm hover:text-indigo-600 hover:bg-gray-50 active:bg-gray-100 font-medium"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Menubar