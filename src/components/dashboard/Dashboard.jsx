import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import {  Home, Menu, X, } from 'lucide-react';

const Dashboard = () => {
  return (
    <>
    
            <aside id="sidenav-open" className="h-screen">
        <nav className="flex flex-col justify-between h-full p-5 border-r bg-gray-50">
            <div>
            <a href="#" className="flex items-center p-3 rounded-xl hover:bg-gray-200">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 w-7 text-gray-900"
                fill="currentColor"
                viewBox="0 0 16 16"
                >
                <path
                    d="M6 1H1v14h5V1zm9 0h-5v5h5V1zm0 9v5h-5v-5h5zM0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V1zm1 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-5z"
                />
                </svg>
                <span className="text-gray-900">Dashboard</span>
            </a>

            <a href="#" className="flex items-center p-3 rounded-xl hover:bg-gray-200">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 w-7 text-gray-900"
                fill="currentColor"
                viewBox="0 0 16 16"
                >
                <path
                    d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0V9z"
                />
                <path
                    d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"
                />
                <path
                    d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"
                />
                </svg>
                <span className="text-gray-900">Analytics</span>
            </a>

            <a href="#" className="flex items-center p-3 rounded-xl hover:bg-gray-200">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 w-7 text-gray-900"
                fill="currentColor"
                viewBox="0 0 16 16"
                >
                <path
                    d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
                />
                </svg>
                <span className="text-gray-900">Orders</span>
            </a>

            <a href="#" className="flex items-center p-3 rounded-xl hover:bg-gray-200">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 w-7 text-gray-900"
                fill="currentColor"
                viewBox="0 0 16 16"
                >
                <path
                    d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"
                />
                <path
                    d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"
                />
                <path
                    d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"
                />
                </svg>
                <span className="text-gray-900">Events</span>
            </a>

            <a href="#" className="flex items-center p-3 rounded-xl hover:bg-gray-200">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 w-7 text-gray-900"
                fill="currentColor"
                viewBox="0 0 16 16"
                >
                <path
                    d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"
                />
                <path
                    d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"
                />
                </svg>
                <span className="text-gray-900">Settings</span>
            </a>
            </div>

            <div className="flex justify-between">
            <a
                href="#"
                className="flex items-center p-2 rounded-xl hover:bg-gray-50 hover:text-blue-700"
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 m-1"
                fill="currentColor"
                viewBox="0 0 16 16"
                >
                <path
                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                />
                </svg>
                <span className="text-xs">Facebook</span>
            </a>
            <a
                href="#"
                className="flex items-center p-2 rounded-xl hover:bg-gray-50 hover:text-blue-700"
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 m-1"
                fill="currentColor"
                viewBox="0 0 16 16"
                >
                <path
                    d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                />
                </svg>
                <span className="text-xs">Twitter</span>
            </a>
            <a
                href="#"
                className="flex items-center p-2 rounded-xl hover:bg-gray-50 hover:text-red-700"
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 m-1"
                fill="currentColor"
                viewBox="0 0 16 16"
                >
                <path
                    d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.122C.002 7.343.01 6.6.064 5.78l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"
                />
                </svg>
                <span className="text-xs">Youtube</span>
            </a>
            </div>
        </nav>

        <a href="#" id="sidenav-close" title="Close Menu" aria-label="Close Menu"></a>
        </aside>

        <main className="overflow-y-scroll h-screen">
        <header className="flex items-center justify-between p-4 sticky top-0 bg-white">
            <div className="flex items-center justify-between">
            <a
                href="#sidenav-open"
                className="visible sm:hidden"
                title="Open Menu"
                aria-label="Open Menu"
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 text-gray-900"
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                stroke-linecap="round"
                stroke-linejoin="round"
                >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
            </a>
            <h1 className="mx-2 text-xl font-bold text-gray-900">Dashboard</h1>
            </div>
            <input
            type="text"
            className="flex-grow sm:flex-grow-0 w-36 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            name="search"
            placeholder="Search..."
            />
        </header>

        <section className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
            <div
            className="flex items-center border border-transparent rounded-3xl p-5 bg-white"
            >
            <img
                className="w-8 h-8 mr-3"
                src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
                alt="bitcoin"
            />
            <div>
                <div className="font-bold">Bitcoin</div>
                <div className="text-sm text-gray-600">$32,221</div>
            </div>
            </div>

            <div
            className="flex items-center border border-transparent rounded-3xl p-5 bg-white"
            >
            <img
                className="w-8 h-8 mr-3"
                src="https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880"
                alt="Ethereum"
            />
            <div>
                <div className="font-bold">Ethereum</div>
                <div className="text-sm text-gray-600">$1,344.49</div>
            </div>
            </div>
            <div
            className="flex items-center border border-transparent rounded-3xl p-5 bg-white"
            >
            <img
                className="w-8 h-8 mr-3"
                src="https://assets.coingecko.com/coins/images/2/large/litecoin.png?1547033580"
                alt="Litecoin"
            />
            <div>
                <div className="font-bold">Litecoin</div>
                <div className="text-sm text-gray-600">$134.36</div>
            </div>
            </div>
            <div
            className="flex items-center border border-transparent rounded-3xl p-5 bg-white"
            >
            <img
                className="w-8 h-8 mr-3"
                src="https://assets.coingecko.com/coins/images/780/large/bitcoin-cash-circle.png?1594689492"
                alt="Bitcoin Cash"
            />
            <div>
                <div className="font-bold">Bitcoin Cash</div>
                <div className="text-sm text-gray-600">$428.33</div>
            </div>
            </div>
        </section>

        <section className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
            <div className="flex flex-col w-full p-4">
                <h1 className="text-2xl font-bold text-gray-900">February</h1>
                <div className="grid grid-cols-7 grid-rows-6">
                <div
                    className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center text-gray-500"
                >
                    Sun
                </div>
                <div
                    className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center text-gray-500"
                >
                    Mon
                </div>
                <div
                    className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center text-gray-500"
                >
                    Tue
                </div>
                <div
                    className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center text-gray-500"
                >
                    Wed
                </div>
                <div
                    className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center text-gray-500"
                >
                    Thu
                </div>
                <div
                    className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center text-gray-500"
                >
                    Fri
                </div>
                <div
                    className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center text-gray-500"
                >
                    Sat
                </div>
                <div
                    className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-400 hover:bg-yellow-200 rounded-full"
                >
                    31
                </div>
                <div
                    className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-800 hover:bg-yellow-200 rounded-full"
                >
                    1
                </div>
                <div
                    className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-800 hover:bg-yellow-200 rounded-full bg-yellow-200"
                >
                    2
                </div>
                <div
                    className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-800 hover:bg-yellow-200 rounded-full"
                >
                    3
                </div>
                <div
                    className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-800 hover:bg-yellow-200 rounded-full"
                >
                    4
                </div>
                <div
                    className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-800 hover:bg-yellow-200 rounded-full"
                >
                    5
                </div>
                <div
                    className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-800 hover:bg-yellow-200 rounded-full"
                >
                    6
                </div>
                <div
                    className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-800 hover:bg-yellow-200 rounded-full"
                >
                    7
                </div>
                <div
                    className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-800 hover:bg-yellow-200 rounded-full"
                >
                    8
                </div>
                <div
                    className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-800 hover:bg-yellow-200 rounded-full"
                >
                    9
                </div>
                <div
                    className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-800 hover:bg-yellow-200 rounded-full"
                >
                    10
                </div>
                <div
                    className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-800 hover:bg-yellow-200 rounded-full"
                >
                    11
                </div>
                <div
                    className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-800 hover:bg-yellow-200 rounded-full"
                >
                    12
                </div>
                <div
                    className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-800 hover:bg-yellow-200 rounded-full"
                >
                    13
                </div>
                <div
                    className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-800 hover:bg-yellow-200 rounded-full"
                >
                    14
                </div>
                <div
                    className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-800 hover:bg-yellow-200 rounded-full"
                >
                    15
                </div>
                <div
                    className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-800 hover:bg-yellow-200 rounded-full"
                >
                    16
                </div>
                <div
                    className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-800 hover:bg-yellow-200 rounded-full"
                >
                    17
                </div>
                <div
                    className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-800 hover:bg-yellow-200 rounded-full"
                >
                    18
                </div>
                <div
                    className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-800 hover:bg-yellow-200 rounded-full"
                >
                    19
                </div>
                <div
                    className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-800 hover:bg-yellow-200 rounded-full"
                >
                    20
                </div>
                <div
                    className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-800 hover:bg-yellow-200 rounded-full"
                >
                    21
                </div>
                <div
                    className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-800 hover:bg-yellow-200 rounded-full"
                >
                    22
                </div>
                <div
                    className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-800 hover:bg-yellow-200 rounded-full"
                >
                    23
                </div>
                <div
                    className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-800 hover:bg-yellow-200 rounded-full"
                >
                    24
                </div>
                <div
                    className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-800 hover:bg-yellow-200 rounded-full"
                >
                    25
                </div>
                <div
                    className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-800 hover:bg-yellow-200 rounded-full"
                >
                    26
                </div>
                <div
                    className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-800 hover:bg-yellow-200 rounded-full"
                >
                    27
                </div>
                <div
                    className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-800 hover:bg-yellow-200 rounded-full"
                >
                    28
                </div>
                <div
                    className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-400 hover:bg-yellow-200 rounded-full"
                >
                    1
                </div>
                <div
                    className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-400 hover:bg-yellow-200 rounded-full"
                >
                    2
                </div>
                <div
                    className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-400 hover:bg-yellow-200 rounded-full"
                >
                    3
                </div>
                <div
                    className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-400 hover:bg-yellow-200 rounded-full"
                >
                    4
                </div>
                <div
                    className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-400 hover:bg-yellow-200 rounded-full"
                >
                    5
                </div>
                <div
                    className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-400 hover:bg-yellow-200 rounded-full"
                >
                    6
                </div>
                </div>
            </div>

            <div className="flex flex-col w-full p-4">
                <div className="mb-4 text-2xl font-bold text-gray-900">Lorem</div>
                <div className="grid grid-cols-auto-1fr-auto grid-rows-5 gap-2 w-full">
                <div className="grid place-items-center">Image</div>
                <div className="grid place-items-center">Progress</div>
                <div className="grid place-items-center">Orders</div>

                <div className="grid place-items-center">
                    <img
                    className="w-12 rounded-full"
                    src="https://images.unsplash.com/profile-1588704999444-1b832088da38image?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
                    title="Thom Bradley"
                    alt="Thom Bradley"
                    />
                </div>
                <div className="flex justify-center items-center">
                    <div className="w-40 h-2 rounded-md bg-gray-300">
                    <div className="w-11/12 h-2 rounded-md bg-green-700"></div>
                    </div>
                </div>
                <div className="grid place-items-center">210</div>

                <div className="grid place-items-center">
                    <img
                    className="w-12 rounded-full"
                    src="https://images.unsplash.com/profile-1601607115147-05bd9390e83fimage?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
                    title="Liam Shaw"
                    alt="Liam Shaw"
                    />
                </div>
                <div className="flex justify-center items-center">
                    <div className="w-40 h-2 rounded-md bg-gray-300">
                    <div className="w-10/12 h-2 rounded-md bg-purple-700"></div>
                    </div>
                </div>
                <div className="grid place-items-center">160</div>

                <div className="grid place-items-center">
                    <img
                    className="w-12 rounded-full"
                    src="https://images.unsplash.com/profile-1589428506859-8e8436b52465image?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
                    title="Gama. Films"
                    alt="Gama. Films"
                    />
                </div>
                <div className="flex justify-center items-center">
                    <div className="w-40 h-2 rounded-md bg-gray-300">
                    <div className="w-9/12 h-2 rounded-md bg-pink-700"></div>
                    </div>
                </div>
                <div className="grid place-items-center">100</div>

                <div className="grid place-items-center">
                    <img
                    className="w-12 rounded-full"
                    src="https://images.unsplash.com/profile-1590413354417-c1befb996909image?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
                    title="Allec Gomes"
                    alt="Allec Gomes"
                    />
                </div>
                <div className="flex justify-center items-center">
                    <div className="w-40 h-2 rounded-md bg-gray-300">
                    <div className="w-1/2 h-2 rounded-md bg-blue-700"></div>
                    </div>
                </div>
                <div className="grid place-items-center">80</div>

                <div className="grid place-items-center">
                    <img
                    className="w-12 rounded-full"
                    src="https://images.unsplash.com/profile-fb-1575866378-4a803b813236.jpg?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
                    title="Brandon Atchison"
                    alt="Brandon Atchison"
                    />
                </div>
                <div className="flex justify-center items-center">
                    <div className="w-40 h-2 rounded-md bg-gray-300">
                    <div className="w-3/12 h-2 rounded-md bg-red-700"></div>
                    </div>
                </div>
                <div className="grid place-items-center">40</div>
                </div>
            </div>
            </div>

            <div className="w-full lg:w-1/2">
            <div className="flex flex-col w-full p-4">
                <h1 className="mb-4 text-2xl font-bold text-gray-900">News</h1>
                <div className="flex flex-col mb-4">
                <div className="flex mb-4">
                    <div className="min-w-min">
                    <div
                        className="border-2 border-blue-700 hover:bg-blue-700 rounded-full w-4 h-4 mt-1 mr-2 cursor-pointer"
                    ></div>
                    </div>
                    <div className="flex flex-col flex-grow">
                    <div className="text-gray-400">Today, 11:30pm</div>
                    <div className="text-gray-900">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed,
                        consectetur!
                    </div>
                    </div>
                </div>
                <div className="flex mb-4">
                    <div className="min-w-min">
                    <div
                        className="border-2 border-purple-700 hover:bg-purple-700 rounded-full w-4 h-4 mt-1 mr-2 cursor-pointer"
                    ></div>
                    </div>
                    <div className="flex flex-col flex-grow">
                    <div className="text-gray-400">Today, 9pm</div>
                    <div className="text-gray-900">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed,
                        consectetur!
                    </div>
                    </div>
                </div>
                <div className="flex mb-4">
                    <div className="min-w-min">
                    <div
                        className="border-2 border-pink-700 hover:bg-pink-700 rounded-full w-4 h-4 mt-1 mr-2 cursor-pointer"
                    ></div>
                    </div>
                    <div className="flex flex-col flex-grow">
                    <div className="text-gray-400">Today, 8:30pm</div>
                    <div className="text-gray-900">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed,
                        consectetur!
                    </div>
                    </div>
                </div>
                <div className="flex mb-4">
                    <div className="min-w-min">
                    <div
                        className="border-2 border-green-700 hover:bg-green-700 rounded-full w-4 h-4 mt-1 mr-2 cursor-pointer"
                    ></div>
                    </div>
                    <div className="flex flex-col flex-grow">
                    <div className="text-gray-400">Today, 6pm</div>
                    <div className="text-gray-900">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed,
                        consectetur!
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <div className="flex flex-col w-full p-4">
                <h1 className="mb-4 text-2xl font-bold text-gray-900">Profile</h1>
                <div
                id="profile-progress"
                className="w-52 h-52 mb-8 m-auto grid place-items-center text-4xl font-bold"
                >
                75%
                </div>
                <div className="font-bold text-center text-gray-900">
                75% of your profile is complete
                </div>
            </div>
            </div>
        </section>
        </main>
    </>

  );
};

export default Dashboard;