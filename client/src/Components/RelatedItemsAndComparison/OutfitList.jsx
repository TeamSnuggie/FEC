import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import OutfitCards from './OutfitCards.jsx';
import OutfitCarouselRight from './OutfitCarouselRight.jsx';
import OutfitCarouselLeft from './OutfitCarouselLeft.jsx';
import styled from 'styled-components'

const OutfitList = (props) => {
  const [outfitProd, setOutfitProd] = useState([]);
  const [outfitId, setOutfitId] = useState([]);
  const [outfitIndex, setOutfitIndex] = useState([]);
  const [styles, setStyles] = useState([]);
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    outfitRender(outfitIndex)
    .then((data) => {
      Promise.all(data)
      .then((value) => {
        setOutfitProd(value)
      })
      .catch((error) => {
        console.log('useEffect error', error)
      })
    })
  }, [outfitId, outfitIndex])

  async function outfitRender(index) {
    var temp = [];
    for (var i = 0; i < outfitId.length; i++) {
      temp.push(props.getProduct(outfitId[i]));
    }
      return temp;
  }

  const addOutfitId = (id) => {
    if (outfitId.indexOf(id) > -1) {
      return setOutfitId(outfitId);
    } else {
      console.log(outfitId);
      return setOutfitId([...outfitId, id])
    }
  }
  async function stylesArray() {
    var temp = [];
    outfitId.forEach((id) => {
      temp.push(getStyles(id));
    })
    return temp;
  }
  async function getStyles(id) {
    return axios.get('/snuggie/styles', {params: {product_id: id}})
    .then((res) => {
      return res.data
    })
  }
  useEffect(() => {
    if (outfitId.length > 0) {
      stylesArray()
      .then((array) => {
        Promise.all(array)
        .then((values) => {
          setStyles(values)
        })
      })
      .catch((err) => {
        console.log('styles error', err)
      })
    }
  }, [outfitId])
  async function getStars(id) {
    return axios.get('/snuggie/reviews/', {params: {product_id: id, count: 500, sort: "relevant"}})
        .then((res) => {
          console.log('res.data', res.data)
          return res.data;
        })
        .catch((error) => {
          console.log('Error in getting review metadata from server', error);
        })
      }

  async function starsArray() {
    var temp = [];
    outfitId.forEach((id) => {
      temp.push(getStars(id));
    })
    return temp;
  }
  useEffect(() => {
    starsArray()
    .then((array) => {
      Promise.all(array)
      .then((values) => {
        setReviewData(values)
      })
    })
  }, [outfitId])
  return (
    <div>
      <Header>
        <h3>Your Outfit</h3>
      </Header>
      <OutfitListContainer>
        <CarouselContainer>
          {Boolean(outfitId.length > 3) ? <OutfitCarouselLeft outfitProd={outfitProd} setOutfitIndex={setOutfitIndex} outfitIndex={outfitIndex} outfitId={outfitId}/> : null}
        </CarouselContainer>
        <Row>
        <AddContainer onClick={(e) => {addOutfitId(props.productId)}}>
          <AddText> ADD TO OUTFIT +</AddText>
        </AddContainer>
          <OutfitCards outfitId={outfitId} outfitProd={outfitProd} setOutfitId={setOutfitId} outfitIndex={outfitIndex} styles={styles} reviewData={reviewData}/>
          </Row>
        <CarouselContainer>
          {Boolean(outfitId.length > 3) ? <OutfitCarouselRight outfitProd={outfitProd} setOutfitIndex={setOutfitIndex} outfitIndex={outfitIndex} outfitId={outfitId}/> : null}
        </CarouselContainer>
      </OutfitListContainer>
    </div>
  )
}

export default OutfitList;

// styled components
const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  margin 0px;
`;

const CarouselContainer = styled.div`
  display: flex;
  width: 24px;
`;

const AddContainer = styled.div`
  position: flex;
  justify-content: flex-start;
  border: 3px solid black;
  border-radius: 10px;
  text-align: center;
  margin: 20px;
  width: 260.906px;
  height: 403px;
  padding: 10px;
  background-color: #607B7D;
  :hover {
    cursor: pointer;
    border-color: #EF8354;
    color: #EF8354;
  }
`;

const OutfitListContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

`;

const AddText = styled.p`
  font-weight: bold;
  font-size: 75px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = styled.div`
  font-size: 20px;
  font-weight: 300;
`;