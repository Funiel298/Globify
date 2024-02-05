import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { FaDollarSign, FaCalculator, FaPlane, FaUtensils, FaFilm } from 'react-icons/fa';
import darkNorway from '../../images/dark_norway.jpg';
import { FaIcons } from 'react-icons/fa6';
import { MdEmojiTransportation } from "react-icons/md";

export default function Finance() {
  const today = new Date().toISOString().split('T')[0];

  const [numberOfPeople, setNumberOfPeople] = useState<number>(1);
  const [startDate, setStartDate] = useState<string>(today);
  const [endDate, setEndDate] = useState<string>(startDate);
  const [hotelCostPerNight, setHotelCostPerNight] = useState<number>(10);
  const [flightCost, setFlightCost] = useState<number>(0);
  const [calculating, setCalculating] = useState(false);

  const airlineTicketPrice = 500; // Replace with actual data
  const averageDailyMealExpense = 30; // Replace with actual data
  const averageDailyEntertainmentExpense = 20; // Replace with actual data
  const averageDailyTransportationExpense = 40; // Replace with actual data

  useEffect(() => {
    const fetchAverageExpenses = async () => {
      setCalculating(true);

      try {
        if (startDate && endDate) {
          const response = await axios.get(
            `https://partners.api.skyscanner.net/apiservices/browseroutes/v1.0/US/USD/en-US/SFO-sky/ORD-sky/${startDate}?apiKey=YOUR_SKYSCANNER_API_KEY`
          );

          const cheapestPrice = response.data.Quotes[0].MinPrice;
          setFlightCost(cheapestPrice);
        }

        // Fetch additional average expense data here

        setCalculating(false);
      } catch (error) {
        console.error('Error fetching average expenses:', error);
        setCalculating(false);
      }
    };

    fetchAverageExpenses();
  }, [startDate, endDate]);

  const calculateTotalCost = () => {
    if (!startDate || !endDate) return 0;

    const startDateObj = new Date(startDate);
    const endDateObj = new Date(endDate);

    const numberOfNights = Math.ceil((endDateObj.getTime() - startDateObj.getTime()) / (1000 * 60 * 60 * 24));
    const totalHotelCost = numberOfNights * hotelCostPerNight;
    const totalCost = totalHotelCost + flightCost;
    return totalCost * numberOfPeople;
  };

  const handleCalculateExpenses = () => {
    setCalculating(true);

    // Add logic to recalculate expenses

    setCalculating(false);
  };

  return (
    <main className="flex flex-row w-screen overflow-hidden ">
      <div className="w-[50vw] p-5 flex flex-col justify-start items-start overflow-x-hidden overflow-y-scroll">
        <div className="flex flex-row mb-4">
          <h1 className="font-semibold text-xl">Number of People:</h1>
          <input
            type="text"
            min={1}
            max={100}
            value={numberOfPeople}
            onChange={(e) => setNumberOfPeople(parseInt(e.target.value))}
            className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-lg rounded-lg  block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          />
        </div>

        <div date-rangepicker className="flex items-center">
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg>
                </div>
                <input name="start" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date start"/>
              </div>
              <span className="mx-4 text-gray-500">to</span>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg>
                </div>
                <input name="end" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date end"/>
            </div>
          </div>

        <div className="mt-4">
          <h1 className="font-semibold text-xl">Total Cost (EUR):</h1>
          <p>{calculateTotalCost()}</p>
        </div>

        <div className="mt-8">
          <h1 className="font-semibold text-xl">Additional Information:</h1>
          <table className="table-auto w-full mt-4">
            <thead>
              <tr>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2">Average Expense</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2 flex flex-row items-center">
                  <FaPlane className="mr-2" />
                  Airline Ticket
                </td>
                <td className="border px-4 py-2">{airlineTicketPrice} EUR</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 flex flex-row items-center">
                  <FaUtensils className="mr-2" />
                  Daily Meal
                </td>
                <td className="border px-4 py-2">{averageDailyMealExpense} EUR</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 flex flex-row items-center">
                  <FaIcons className="mr-2" />
                  Daily Entertainment
                </td>
                <td className="border px-4 py-2">{averageDailyEntertainmentExpense} EUR</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 flex flex-row items-center">
                  <MdEmojiTransportation className="mr-2"  />
                  Daily Transportation
                </td>
                <td className="border px-4 py-2">{averageDailyTransportationExpense} EUR</td>
              </tr>
            </tbody>
          </table>
        </div>

        <button
          onClick={handleCalculateExpenses}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8 flex items-center"
          disabled={calculating}
        >
          <FaCalculator className="mr-2" />
          {calculating ? 'Calculating...' : 'Calculate Expenses'}
        </button>
      </div>

      <Image src={darkNorway} alt="Cool Image" className="h-screen w-1/2 object-cover" />
    </main>
  );
}
