// All of the styled components here are flexbox containers to organize their respective contents in certain ways

// Import any relevant methods from the styled-components library
import styled from 'styled-components';

// Container to hold the Image Gallery and Product Information (except description) component containers
const ProductOverviewContainer = styled.section`
  display: flex;
  flex-direction: row;
  width: 1360px;
`;

// Image Gallery container
const ImageGalleryContainer = styled.section`
  display: flex;
  flex-direction: row;
  background-color: #828e82;
  border-radius: 10px;
`;

// Product Information container (does not include Product Description)
const ProductInformationContainer = styled.section`
  display: flex;
  flex-direction: column;
  font-family: 'Nanum Gothic Coding', monospace;
  background-color: #607B7D;
  width: 483px;
  padding: 12px;
  border: solid 3px;
  border-left: 0px;
  border-radius: 0 10px 0px 0;
`;

// Container to hold the Star Rating shared component and Read [#] Reviews link in Product Information section
const ProductOverviewStarContainer = styled.section`
  display: flex;
  flex-direction: row;
  margin-bottom: 12px;
`;

// Container to hold all the rows of Style Thumbnails in the Product Information section
const StyleThumbnailRowContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #3a606e;
  padding: 12px;
  border-radius: 0 0 5px 5px;
  border: solid 3px;
  border-top: 0;
  border-color: #120309;
  margin-bottom: 12px;
`;

// Container to hold a single row of Style Thumbnails in Product Information section
const StyleThumbnailContainer = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 3px 2px 3px 2px;
`;

// Container to hold the chosen Style Thumbnail and the icon that indicates that it's the chosen one
const ChosenStyleContainer = styled.section`
  position: relative;
`;

const PriceContainer = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

// Container for the size and count buttons in Product Information section
const SizeAndCountContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
`;

// Container for the add to cart and favorite buttons in Product Information section
const AddToCartContainer = styled.section`
  display: flex;
  flex-direction: row;
`;

// Container that holds a dropdown and the message that conditionally renders if a size/quantity isn't selected upon Adding to Cart
const SizeDropdownContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 3;
`;
const QuantityDropdownContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
`;

// Container to hold the Product Information description component
const ProductInformationDescription = styled.section`
  display: flex;
  flex-direction: row;
  width: 1353px;
  background-color: #607b7d;
  border: solid 3px;
  border-top: 0;
  border-radius: 0 0 10px 10px;
  border-color: #120309;
`;

// Container to hold the Product Slogan and Description
const SloganDescriptionContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 12px;
  width: 820px;
`;

// Export the styled components
export { ProductOverviewContainer, ImageGalleryContainer, ProductInformationContainer, ProductOverviewStarContainer, StyleThumbnailRowContainer, StyleThumbnailContainer, ChosenStyleContainer, PriceContainer, SizeAndCountContainer, AddToCartContainer, SizeDropdownContainer, QuantityDropdownContainer, ProductInformationDescription, SloganDescriptionContainer };