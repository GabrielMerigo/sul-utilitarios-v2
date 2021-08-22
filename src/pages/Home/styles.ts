import styled from 'styled-components';

export const Img = styled.img`
	background-size: 100% 100%;
	width: 100%;
	height: 29rem;
	background-repeat: no-repeat;
	border-bottom: solid 0.35rem #9e9ea5;
  margin-top: 2rem;
`;

export const HighlightedVehicles = styled.div`
  .line-title{
    max-width: 900px;
    margin: 0.4rem auto;
    position: relative;
    text-align: center;

    div{
      margin-top: 1.4rem;
      position: absolute;
      border: 1px solid black;
      background-color: black;
      width: 100%;
    }

    h2 {
      font-size: 2rem;
      background: white;
      position: relative;
      display: inline-block;
      text-align: center;
      padding: 0 1rem;
      text-transform: uppercase;
      font-style: italic;
    }

  }
`;

export const CarList = styled.div`
  max-width: 900px;
  margin:0 auto;

  ul{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    list-style-type: none;
    margin: 0 auto;

    li {
      height:90%;
      width:94%;
      background: var(--gray-light);
      border-radius: 0.5rem;
      margin-top: 2rem;
      transition: all 400ms;

      div {
        background: var(--gray-dark);
        height: 39%;
        border-bottom-right-radius: 10px;
        border-bottom-left-radius:10px;
        padding-left: 0.7rem;

        svg{
          margin-right:0.2rem;
          color: #fa5d41;
        }

        h4, p{
          color: #ccc;
        }
      }
    }

    li:hover{
      filter: brightness(0.8);
      cursor: pointer;
      box-shadow: 6px 2px 21px 5px rgba(0,0,0,0.46);
    }
    
    img{
      width:90%;
    }
  } 

`;