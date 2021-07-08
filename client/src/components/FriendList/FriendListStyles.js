import styled from "styled-components";


export const Div = styled.div`
   padding: 0;
   margin: 0;

`;

// Friends List outer container styling
export const OuterContainer = styled.div`
  background-color: white;
  height: 400px;
  width: 300px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  border: 2px solid #5C458B;
  border-radius: 5px;
`;

// Friends list title container
export const TitleContainer = styled.div`
  color: #C5C8D5;
  background-color: #5C458B;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  font-size: large;
  font-family: cursive;

`;

// Title styling
export const Title = styled.h1`
    font-size: 1.5rem;
    margin-left: 10px;
`;

// Invite button styling
export const InviteBtn = styled.button`
    margin-right: 10px;
    padding: 5px 10px;
    color: #5C458B;
    font-weight: bolder;
    border-radius: 5px;
    font-family: cursive;
    cursor: pointer;
`;

// Button styling for friend list deleteion
export const RemoveBtn = styled.button`
    margin-right: 10px;
    padding: 5px 10px;
    color: #5C458B;
    font-weight: bolder;
    border-radius: 5px;
    cursor: pointer;
    font-family: cursive;
`;

// Styling for the actual list of friends
export const ListContainer = styled.div`
  color: #C5C8D5; 
  font-size: 1.3rem;
  display: flex;
  flex-direction: column;
  align-items: top;
  height: 100%;
`;

// each row of the friends list, name and delete button
export const FriendRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  align-items: center;
  font-family: cursive;
`;

// Styling for the name entry in FriendRow
export const FriendName = styled.p`
  margin-left: 10px;
  font-size: 1.1rem;
  font-family: cursive;
`;