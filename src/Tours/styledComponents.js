import styled from "styled-components";
let H1 = styled.h1`
  font-size: 38px;
  color: #102a42;
  font-weight: 500;
  text-align: center;
  margin: 50px 0px 10px;
  letter-spacing: 2px;
`;

let Hr = styled.hr`
  width: 100px;
  border: none;
  border-bottom: 3px solid #49a6e9;
  margin: 10px auto 20px;
`;

let Section = styled.section`
  background-color: #f1f5f8;
  margin: 0px auto;
  width: 720px;
  max-width: 98%;

  div {
    width: 94%;
    margin: 24px auto;
    padding-bottom: 20px;
    border-radius: 10px;
    background-color: #fff;
  }

  img {
    width: 100%;
    height: 350px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  h3 {
    letter-spacing: 2px;
    color: #000;
    margin: 16px 10px;
  }
  .price {
    float: right;
    background-color: rgb(85, 87, 87);
    color: white;
    padding: 2px 10px;
    margin: 14px;
    letter-spacing: 1px;
  }
  p {
    color: rgb(85, 87, 87);
    line-height: 21px;
    font-size: 15px;
    margin: 10px;
    letter-spacing: 1.5px;
  }

  .notInterested,
  #refresh {
    color: #bb2f25;
    background-color: #fff;
    border: 2px solid #bb2f25;
    padding: 5px 12px;
    font-family: ubuntu, sans-serif;
    letter-spacing: 1.5px;
    font-weight: 500;
    font-size: 17px;
    cursor: pointer;
  }
  article {
    text-align: center;
  }
  #loading {
    width: 66%;
    margin: 0px 17%;
  }
  .notInterested:hover,
  #refresh a:hover {
    background-color: #f1f5f9;
  }

  .showText {
    border: none;
    float: none;
    margin: 0px !important;
    font-size: 17px;
    letter-spacing: 1.5px;
    color: blue;
    background-color: #fff;
  }
  .showText:hover {
    color: #00009f;
  }
  #refresh {
    text-align: center;
    box-shadow: none;
    width: 20%;
    margin: 40px 40%;
  }
  a {
    text-decoration: none;
    color: #bb2f25;
  }
  @media (max-width: 544px) {
    h3 {
      letter-spacing: 0.5px;
      font-size: 18px;
    }
    .price {
      letter-spacing: 0.5px;
      font-size: 14px;
    }
    p {
      color: rgb(85, 87, 87);
      line-height: 18px;
      font-size: 13px;
      margin: 10px;
      letter-spacing: 1.3px;
    }
  }
`;

export { H1, Hr, Section };
