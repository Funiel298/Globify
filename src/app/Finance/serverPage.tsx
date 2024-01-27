import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';
import darkNorway from '../../images/dark_norway.jpg'
import Loading from '../../components/Loading'


export default function Finance() {
  const today = new Date().toISOString().split('T')[0];

  const [numberOfPeople, setNumberOfPeople] = useState<number>(1);
  const [startDate, setStartDate] = useState<string>(today);
  const [endDate, setEndDate] = useState<string>(startDate);
  const [hotelCostPerNight, setHotelCostPerNight] = useState<number>(10);
  const [flightCost, setFlightCost] = useState<number>(0);

  

  useEffect(() => {
    const fetchFlightCost = async () => {
      try {
        if (startDate && endDate) {
          const response = await axios.get(
            `https://partners.api.skyscanner.net/apiservices/browseroutes/v1.0/US/USD/en-US/SFO-sky/ORD-sky/${startDate}?apiKey=YOUR_SKYSCANNER_API_KEY`
          );

          const cheapestPrice = response.data.Quotes[0].MinPrice;
          setFlightCost(cheapestPrice);
        }
      } catch (error) {
        console.error('Error fetching flight cost:', error);
      }
    };

    if (startDate && endDate) {
      fetchFlightCost();
    }
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


            <div className="flex flex-row mb-4 mt-4">
              <h1 className="font-semibold text-xl">Hotel Cost per Night (EUR):</h1>
              <input
                type="text"
                min={10}
                value={hotelCostPerNight}
                onChange={(e) => setHotelCostPerNight(parseInt(e.target.value))}
                className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg  block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              />
            </div>

            <div className="mt-4">
              <h1 className="font-semibold text-xl">Total Cost (EUR):</h1>
              <p>{calculateTotalCost()}</p>
            </div>
          </div>

          <Image src={darkNorway} alt="Cool Image" className="h-screen w-1/2 object-cover" />



        
      


      


    </main>
  );
}
