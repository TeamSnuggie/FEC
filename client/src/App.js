import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Overview from './Components/ProductOverview/Overview.jsx';
import QnaIndex from './Components/QuestionsAndAnswers/QnaIndex.jsx';
import RatingsAndReviewsIndex from './Components/RatingsAndReviews/RatingsAndReviewsIndex.jsx'
import RInC from './Components/RelatedItemsAndComparison/RInCIndex.jsx';

var App = () => {

  // Hooks for what specific product is being displayed
  const [productId, setProductId] = useState();
  const [chosenProduct, setChosenProduct] = useState({});

  // When App first mounts, send a GET request to the server to get the productId of the first product received
  useEffect(() => {
    // Send axios request to get all products
    axios.get('/snuggie/products') // No query/parameters, so this endpoint returns ALL products
      // Then get the specific product
      .then((results) => {
        console.log('ah', results);
        return axios.get('/snuggie/products', { params: {product_id: results.data[0].id} });
      })
      // Then set the hooks
      .then((results) => {
        setChosenProduct(results.data);
        setProductId(results.data.id);
      })
      .catch((error) => {
        console.log('An error occurred when initializing data received from server:', error);
      });
  }, []); // Second argument being an empty array causes this instance of useEffect to only run once

  return(
    <div>
      <div>navbar</div>
      <h1>ANNOUNCEMENTS GO HERE</h1>
      <Overview productId={productId} chosenProduct={chosenProduct} />
      <br/>
      <RInC/>
      <br/>
      <QnaIndex/>
      <br/>
      <RatingsAndReviewsIndex/>
    </div>
  )
}

export default App;