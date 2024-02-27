import React from "react";

function ChatMessage() {
  return (
    <div class="h-full w-full flex antialiased text-black-200 bg-white overflow-hidden">
      <div class="flex-1 flex flex-col">
        <main class="flex-grow flex flex-row min-h-0">
          <section class="flex flex-col flex-none overflow-auto w-24 group lg:max-w-sm md:w-2/5 transition-all duration-300 ease-in-out">
            {/*/Chat Header */}
            <div class="header p-4 flex flex-row justify-between items-center flex-none">
              <div
                className="w-16 h-16 relative flex flex-shrink-0"
                // style={{ filter: "invert(100%)" }}
              >
                <img
                  className="rounded-full w-full h-full object-cover "
                  alt="dev"
                  src="https://seeklogo.com/images/V/v-a-mimarlik-logo-EF26BE6776-seeklogo.com.png"
                />
              </div>
              <h2 class="text-xl font-bold hidden md:block group-hover:block">
                Dino
              </h2>
              <div class="block rounded-full hover:bg-gray-200 bg-white-800 w-10 h-10 p-2">
                <svg viewBox="0 0 24 24" class="w-full h-full fill-current">
                  <path d="M6.3 12.3l10-10a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-10 10a1 1 0 0 1-.7.3H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 .3-.7zM8 16h2.59l9-9L17 4.41l-9 9V16zm10-2a1 1 0 0 1 2 0v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h6a1 1 0 0 1 0 2H4v14h14v-6z" />
                </svg>
              </div>
            </div>
            {/* Chat Header End */}

            {/* Search  */}
            <div class="search-box p-4 flex-none">
              <form onsubmit="">
                <div class="relative">
                  <label>
                    <input
                      class="rounded-full py-2 pr-6 pl-10 w-full border border-gray-800 focus:border-gray-700 bg-gray-800 focus:bg-gray-900 focus:outline-none text-gray-200 focus:shadow-md transition duration-300 ease-in"
                      type="text"
                      value=""
                      placeholder="Search Messenger"
                    />
                    <span class="absolute top-0 left-0 mt-2 ml-3 inline-block">
                      <svg viewBox="0 0 24 24" class="w-6 h-6">
                        <path
                          fill="#bbb"
                          d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                        />
                      </svg>
                    </span>
                  </label>
                </div>
              </form>
            </div>
            {/* Search end */}

            <div class="contacts p-2 flex-1 overflow-y-scroll">
              <div class="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
                <div class="w-16 h-16 relative flex flex-shrink-0">
                  <img
                    class="shadow-md rounded-full w-full h-full object-cover"
                    src="https://randomuser.me/api/portraits/women/61.jpg"
                    alt=""
                  />
                </div>
                <div class="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
                  <p>Angelina Jolie</p>
                  <div class="flex items-center text-sm text-gray-600">
                    <div class="min-w-0">
                      <p class="truncate">
                        Ok, see you at the subway in a bit.
                      </p>
                    </div>
                    <p class="ml-2 whitespace-no-wrap">Just now</p>
                  </div>
                </div>
              </div>
              <div class="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
                <div class="w-16 h-16 relative flex flex-shrink-0">
                  <img
                    class="shadow-md rounded-full w-full h-full object-cover"
                    src="https://randomuser.me/api/portraits/men/97.jpg"
                    alt=""
                  />
                  <div class="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
                    <div class="bg-green-500 rounded-full w-3 h-3"></div>
                  </div>
                </div>
                <div class="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
                  <p class="font-bold">Tony Stark</p>
                  <div class="flex items-center text-sm font-bold">
                    <div class="min-w-0">
                      <p class="truncate">Hey, Are you there?</p>
                    </div>
                    <p class="ml-2 whitespace-no-wrap">10min</p>
                  </div>
                </div>
                <div class="bg-blue-700 w-3 h-3 rounded-full flex flex-shrink-0 hidden md:block group-hover:block"></div>
              </div>
              <div class="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
                <div class="w-16 h-16 relative flex flex-shrink-0">
                  <img
                    class="shadow-md rounded-full w-full h-full object-cover"
                    src="https://randomuser.me/api/portraits/men/97.jpg"
                    alt=""
                  />
                  <div class="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
                    <div class="bg-green-500 rounded-full w-3 h-3"></div>
                  </div>
                </div>
                <div class="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
                  <p class="font-bold">Tony Stark</p>
                  <div class="flex items-center text-sm font-bold">
                    <div class="min-w-0">
                      <p class="truncate">Hey, Are you there?</p>
                    </div>
                    <p class="ml-2 whitespace-no-wrap">10min</p>
                  </div>
                </div>
                <div class="bg-blue-700 w-3 h-3 rounded-full flex flex-shrink-0 hidden md:block group-hover:block"></div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default ChatMessage;
