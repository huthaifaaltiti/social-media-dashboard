import { useState } from "react";
import "./App.css";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

import { BiUpArrow } from "react-icons/bi";

function App() {

  // set dark mode
  const [darkMode, setDarkMode] = useState(false);

  const handleCheckChange = (e) => {
    setDarkMode(e.target.checked);
  };

  return (
    <div className={darkMode && "dark"}>
      <div className="text-slate-400 pb-8 dark:bg-darkBg-dark">
        {/* Header */}

        <div className="bg-bg pb-40 dark:bg-darkBg dark:text-slate-300">
          <div className="container py-8 flex justify-between items-center">
            <div>
              <h1 className="text-slate-800 dark:text-white font-bold text-3xl">
                Social Media Dashboard
              </h1>
              <span className="text-sm">Total Followers: 12.3456</span>
            </div>

            <div>
              <label htmlFor="checkbox">Dark Mode</label>
              <span className="ml-2">
                <input
                  type="checkbox"
                  id="checkbox"
                  onChange={handleCheckChange}
                />
              </span>
            </div>
          </div>
        </div>

        {/* Main cards */}

        <div className="container -mt-40">
          {/* for big cards */}
          <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
            {/* Card 1*/}

            <div className="card before:bg-facebook">
              <div className="flex items-center justify-center gap-1">
                <span className="text-facebook">
                  <AiFillFacebook size={22} />
                </span>

                <span>@abcd</span>
              </div>

              <h2 className="text-slate-800 dark:text-white text-6xl font-bold pt-6">
                1987
              </h2>

              <p className="font-medium uppercase tracking-[0.15rem]">
                Followers
              </p>

              <div className="flex items-center justify-center gap-1 pt-6 text-mainGreen">
                <span>
                  <BiUpArrow size={15} />
                </span>

                <span>Today</span>
              </div>
            </div>

            {/* card 2 */}
            <div className="card before:bg-twitter">
              <div className="flex items-center justify-center gap-1">
                <span className="text-twitter">
                  <AiFillTwitterSquare size={22} />
                </span>

                <span>@abcd</span>
              </div>

              <h2 className="text-slate-800 dark:text-white text-6xl font-bold pt-6">
                1987
              </h2>

              <p className="font-medium uppercase tracking-[0.15rem]">
                Followers
              </p>

              <div className="flex items-center justify-center gap-1 pt-6 text-mainGreen">
                <span>
                  <BiUpArrow size={15} />
                </span>

                <span>Today</span>
              </div>
            </div>

            {/* card 3 */}
            <div className="card before:bg-gradient-to-r before:from-fuchsia-500 before:to-pink-600">
              <div className="flex items-center justify-center gap-1">
                <span className="text-fuchsia-400">
                  <AiFillInstagram size={22} />
                </span>

                <span>@abcd</span>
              </div>

              <h2 className="text-slate-800 dark:text-white text-6xl font-bold pt-6">
                1987
              </h2>

              <p className="font-medium uppercase tracking-[0.15rem]">
                Followers
              </p>

              <div className="flex items-center justify-center gap-1 pt-6 text-mainGreen">
                <span>
                  <BiUpArrow size={15} />
                </span>

                <span>Today</span>
              </div>
            </div>

            {/* card 4 */}
            <div className="card before:bg-red-700">
              <div className="flex items-center justify-center gap-1">
                <span className="text-red-700">
                  <AiFillYoutube size={22} />
                </span>

                <span>@abcd</span>
              </div>

              <h2 className="text-slate-800 dark:text-white text-6xl font-bold pt-6">
                1987
              </h2>

              <p className="font-medium uppercase tracking-[0.15rem]">
                Followers
              </p>

              <div className="flex items-center justify-center gap-1 pt-6 text-mainGreen">
                <span>
                  <BiUpArrow size={15} />
                </span>

                <span>Today</span>
              </div>
            </div>
          </div>

          {/* for bottom section-small cards */}

          <div className="container mt-20">
            <h2 className="font-bold mb-10">Overview - Today</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
              {/* adding 8 same cards using React code */}
              {Array(8)
                .fill("")
                .map((el) => (
                  <div className="card-sm">
                    <div className="flex justify-between items-center">
                      <p className="font-bold dark:text-gray-200">Pages Views</p>

                      <span className="text-facebook">
                        <AiFillFacebook size={22} />
                      </span>
                    </div>

                    <div className="flex justify-between items-center pt-10">
                      <p className="font-bold text-black text-lg dark:text-gray-400">101</p>

                      <span className="flex items-center justify-center gap-1 text-mainGreen text-sm">
                        <span>
                          <BiUpArrow size={10} />
                        </span>

                        <span>300%</span>
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
