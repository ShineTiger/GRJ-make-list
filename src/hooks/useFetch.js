import { useEffect, useState } from "react";

const useFetch = () => {
    const [itemData, setItemData] = useState([]);

    useEffect(()=> {
        fetch("http://localhost:3001/item")
        .then(res => {
          return res.json();
        })
        .then(item => {
          setItemData(item)
        });
      }, []);
      return itemData
}

export default useFetch;