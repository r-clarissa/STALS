<h3 class="bg-blue-500 p-4">NAVBAR PLACEHOLDER</h3>
<button type="button" class="mx-4 mt-2 font-bold text-blue-500 drop-shadow-md">Back</button>
<br /><br />

<div class="container mx-auto rounded">
  <div class="rounded-xl bg-blue-200 p-6">
    <p class="mb-2 text-center text-xl font-bold drop-shadow-md">Edit Accommodation</p>
    <p class="mx-2 mb-3 text-lg font-bold drop-shadow-md">Background</p>

    <div class="flex">
      <div class="flex w-full flex-col space-y-2 bg-green-500 p-2">
        <input type="text" id="lodging-name" class="w-full rounded border bg-gray-50 p-2 px-4 text-sm text-gray-900 drop-shadow-md focus:border-gray-500" placeholder="Name of Lodging" />

        <input type="text" id="address" class="w-full rounded border bg-gray-50 p-2 px-4 text-sm text-gray-900 drop-shadow-md focus:border-gray-500" placeholder="Address" />

        <div class="w-full rounded bg-white p-2 drop-shadow-md">
          <p class="mx-2 mb-1 text-gray-400">Location</p>
          <div class="mx-2">
            <div class="flex w-full flex-row space-x-2">
              <div class="flex items-center">
                <input id="occupied_t" type="radio" value="true" name="occupied" class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500" />
                <label for="true" class="ml-2 text-gray-400">True</label>
              </div>

              <div class="flex items-center">
                <input id="occupied_f" type="radio" value="false" name="occupied" class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500" />
                <label for="false" class="ml-2 text-gray-400">False</label>
              </div>
            </div>
          </div>
        </div>

        <input type="text" id="contactno" class="w-full rounded border bg-gray-50 p-2 px-4 text-sm text-gray-900 drop-shadow-md focus:border-gray-500" placeholder="Contact Number" />

        <input type="text" id="customtag" class="w-full rounded border bg-gray-50 p-2 px-4 text-sm text-gray-900 drop-shadow-md focus:border-gray-500" placeholder="Custom Tags (optional)" />
      </div>

      <div class="w-full bg-yellow-500 p-2">
        <div class="flex flex-col space-y-2">
          <input type="text" id="fblink" class="w-full rounded border bg-gray-50 p-2 px-4 text-sm text-gray-900 drop-shadow-md focus:border-gray-500" placeholder="Facebook Page Link (optional)" />

          <input type="text" id="num-of-rooms" class="w-full rounded border bg-gray-50 p-2 px-4 text-sm text-gray-900 drop-shadow-md focus:border-gray-500" placeholder="Number of Available Rooms" />

          <input type="text" id="num-of-rooms" class="w-full rounded border bg-gray-50 p-2 px-4 text-sm text-gray-900 drop-shadow-md focus:border-gray-500" placeholder="Photos" />

          <div class="w-full rounded bg-white p-2 drop-shadow-md">
            <p class="mx-2 mb-1 text-gray-400">Availability</p>
            <div class="mx-2">
              <div class="flex w-full flex-row space-x-2">
                <div class="flex items-center">
                  <input id="occupied_t" type="radio" value="true" name="occupied" class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500" />
                  <label for="true" class="ml-2 text-gray-400">True</label>
                </div>

                <div class="flex items-center">
                  <input id="occupied_f" type="radio" value="false" name="occupied" class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500" />
                  <label for="false" class="ml-2 text-gray-400">False</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <p class="p-2 text-lg font-bold drop-shadow-md">Tags</p>

    <div class="flex">
      <div class="flex w-full flex-col space-y-2 bg-green-500 p-2">
        <div class="w-full rounded bg-white p-2 drop-shadow-md">
          <p class="mx-2 mb-1 text-gray-400">Sex</p>
          <div class="mx-2">
            <div class="flex w-full flex-row space-x-2">
              <div class="flex items-center">
                <input id="coed" type="radio" value="coed" name="sex" class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500" />
                <label for="coed" class="ml-2 text-gray-400">Coed</label>
              </div>

              <div class="flex items-center">
                <input id="male" type="radio" value="male" name="sex" class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500" />
                <label for="male" class="ml-2 text-gray-400">Male</label>
              </div>

              <div class="flex items-center">
                <input id="female" type="radio" value="female" name="sex" class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500" />
                <label for="female" class="ml-2 text-gray-400">Female</label>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full rounded bg-white p-2 drop-shadow-md">
          <p class="mx-2 mb-1 text-gray-400">Has Curfew</p>
          <div class="mx-2">
            <div class="flex w-full flex-row space-x-2">
              <div class="flex items-center">
                <input id="yes" type="radio" value="yes" name="curfew" class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500" />
                <label for="yes" class="ml-2 text-gray-400">Yes</label>
              </div>

              <div class="flex items-center">
                <input id="no" type="radio" value="no" name="curfew" class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500" />
                <label for="no" class="ml-2 text-gray-400">No</label>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full rounded bg-white p-2 drop-shadow-md">
          <p class="mx-2 mb-1 text-gray-400">Cooking Allowed</p>
          <div class="mx-2">
            <div class="flex w-full flex-row space-x-2">
              <div class="flex items-center">
                <input id="yes" type="radio" value="yes" name="cooking" class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500" />
                <label for="yes" class="ml-2 text-gray-400">Yes</label>
              </div>

              <div class="flex items-center">
                <input id="no" type="radio" value="no" name="cooking" class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500" />
                <label for="no" class="ml-2 text-gray-400">No</label>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full rounded bg-white p-2 drop-shadow-md">
          <p class="mx-2 mb-1 text-gray-400">Allows Visitors</p>
          <div class="mx-2">
            <div class="flex w-full flex-row space-x-2">
              <div class="flex items-center">
                <input id="yes" type="radio" value="yes" name="visitors" class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500" />
                <label for="yes" class="ml-2 text-gray-400">Yes</label>
              </div>

              <div class="flex items-center">
                <input id="no" type="radio" value="no" name="visitors" class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500" />
                <label for="no" class="ml-2 text-gray-400">No</label>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full rounded bg-white p-2 drop-shadow-md">
          <p class="mx-2 mb-1 text-gray-400">Allows Pets</p>
          <div class="mx-2">
            <div class="flex w-full flex-row space-x-2">
              <div class="flex items-center">
                <input id="yes" type="radio" value="yes" name="pets" class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500" />
                <label for="yes" class="ml-2 text-gray-400">Yes</label>
              </div>

              <div class="flex items-center">
                <input id="no" type="radio" value="no" name="pets" class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500" />
                <label for="no" class="ml-2 text-gray-400">No</label>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full rounded bg-white p-2 drop-shadow-md">
          <p class="mx-2 mb-1 text-gray-400">Common/Private Bathroom</p>
          <div class="mx-2">
            <div class="flex w-full flex-row space-x-2">
              <div class="flex items-center">
                <input id="common" type="radio" value="common" name="bathroom" class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500" />
                <label for="yes" class="ml-2 text-gray-400">Private</label>
              </div>

              <div class="flex items-center">
                <input id="private" type="radio" value="private" name="bathroom" class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500" />
                <label for="private" class="ml-2 text-gray-400">Common</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full bg-yellow-500 p-2">
        <div class="flex flex-col space-y-2">
          <div class="w-full rounded bg-white p-2 drop-shadow-md">
            <p class="mx-2 mb-1 text-gray-400">Aircon Unit</p>
            <div class="mx-2">
              <div class="flex w-full flex-row space-x-2">
                <div class="flex items-center">
                  <input id="with-aircon" type="radio" value="with-aircon" name="aircon" class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500" />
                  <label for="with-aircon" class="ml-2 text-gray-400">With Aircon</label>
                </div>

                <div class="flex items-center">
                  <input id="without-aircon" type="radio" value="without-aircon" name="aircon" class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500" />
                  <label for="without-aircon" class="ml-2 text-gray-400">Without Aircon</label>
                </div>
              </div>
            </div>
          </div>

          <div class="w-full rounded bg-white p-2 drop-shadow-md">
            <p class="mx-2 mb-1 text-gray-400">Parking Space</p>
            <div class="mx-2">
              <div class="flex w-full flex-row space-x-2">
                <div class="flex items-center">
                  <input id="with-parking" type="radio" value="with-parking" name="parking" class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500" />
                  <label for="with-parking" class="ml-2 text-gray-400">With Parking</label>
                </div>

                <div class="flex items-center">
                  <input id="without-parking" type="radio" value="without-parking" name="parking" class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500" />
                  <label for="without-parking" class="ml-2 text-gray-400">Without Parking</label>
                </div>
              </div>
            </div>
          </div>

          <div class="w-full rounded bg-white p-2 drop-shadow-md">
            <p class="mx-2 mb-1 text-gray-400">Has CCTV</p>
            <div class="mx-2">
              <div class="flex w-full flex-row space-x-2">
                <div class="flex items-center">
                  <input id="yes" type="radio" value="yes" name="cctv" class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500" />
                  <label for="yes" class="ml-2 text-gray-400">Yes</label>
                </div>

                <div class="flex items-center">
                  <input id="no" type="radio" value="no" name="cctv" class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500" />
                  <label for="no" class="ml-2 text-gray-400">No</label>
                </div>
              </div>
            </div>
          </div>

          <div class="w-full rounded bg-white p-2 drop-shadow-md">
            <p class="mx-2 mb-1 text-gray-400">Has Guards</p>
            <div class="mx-2">
              <div class="flex w-full flex-row space-x-2">
                <div class="flex items-center">
                  <input id="yes" type="radio" value="yes" name="guards" class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500" />
                  <label for="yes" class="ml-2 text-gray-400">Yes</label>
                </div>

                <div class="flex items-center">
                  <input id="no" type="radio" value="no" name="guards" class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500" />
                  <label for="no" class="ml-2 text-gray-400">No</label>
                </div>
              </div>
            </div>
          </div>

          <div class="w-full rounded bg-white p-2 drop-shadow-md">
            <p class="mx-2 mb-1 text-gray-400">Laundry Space Available</p>
            <div class="mx-2">
              <div class="flex w-full flex-row space-x-2">
                <div class="flex items-center">
                  <input id="occupied_t" type="radio" value="true" name="laundry-space" class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500" />
                  <label for="true" class="ml-2 text-gray-400">True</label>
                </div>

                <div class="flex items-center">
                  <input id="occupied_f" type="radio" value="false" name="laundry-space" class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500" />
                  <label for="false" class="ml-2 text-gray-400">False</label>
                </div>
              </div>
            </div>
          </div>

          <div class="w-full rounded bg-white p-2 drop-shadow-md">
            <p class="mx-2 mb-1 text-gray-400">Laundry Service Available</p>
            <div class="mx-2">
              <div class="flex w-full flex-row space-x-2">
                <div class="flex items-center">
                  <input id="occupied_t" type="radio" value="true" name="laundry-service" class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500" />
                  <label for="true" class="ml-2 text-gray-400">True</label>
                </div>

                <div class="flex items-center">
                  <input id="occupied_f" type="radio" value="false" name="laundry-service" class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500" />
                  <label for="false" class="ml-2 text-gray-400">False</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
