import { useEffect, useState } from 'react';
import getEntries from '../services/getEntries';

const useEntries = (entry) => {
  const [loading, setLoading] = useState(false);
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [tagsList, setTagsList] = useState([]);

  useEffect(() => {
    setLoading(true);
    getEntries(entry).then((entries) => {
      setRestaurantsList(entries.items);
    });
    setLoading(false);
  }, [loading]);
  return { loading, restaurantsList, tagsList };
};

export default useEntries;
