// custom hook
import { useState, useEffect } from "react";

const localCache = {};

export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (!animal) {
      // no animal
      setBreedList([]);
    } else if (localCache[animal]) {
      // previously requested
      setBreedList(localCache[animal]);
    } else {
      // go get
      requestBreedList();
    }

    async function requestBreedList() {
      // send request to api
      setBreedList([]);
      setStatus("loading");

      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );

      const json = await res.json();
      // save to local cache
      localCache[animal] = json.breeds || []; // or empty array to avoid issues

      setBreedList(localCache[animal]);
      setStatus("loaded");
    }
  }, [animal]); // re-run whenever a new animal is selected

  return [breedList, status];
}
