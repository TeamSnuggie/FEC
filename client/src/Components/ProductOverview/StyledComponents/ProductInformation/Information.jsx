// Product Information text (category, name, style name, etc)

// Import any relevant methods from the styled-components library
import styled from 'styled-components';

// Category
const CategorySpan = styled.span`
  font-size: 26;
  margin-bottom: 12px;
`;

// Product Name
const ProductNameSpan = styled.span`
  font-size: 40;
  font-weight: bold;
  margin-bottom: 12px;
`;

// Style Text
const StyleSpan = styled.span`
  padding: 6px;
  font-size: 26;
  font-weight: bold;
  border: solid 3px;
  border-radius: 5px 5px 0 0;
  background-color: #828e82;
`;

// Style Name
const StyleNameSpan = styled.span`
  font-size: 22;
`;

// Export the styled components
export { CategorySpan, ProductNameSpan, StyleSpan, StyleNameSpan };