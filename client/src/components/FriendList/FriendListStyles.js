import styled from "styled-components";

// Friends List outer container styling
export const OuterContainer = styled.div`
  background-color: white;
  height: 300px;
  width: 300px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  border: 2px solid #5C458B;
  border-radius: 5px;
`;

// Friends list title container
export const TitleContainer = styled.div`
  color: white;
  background-color: #5C458B;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  font-size: large;
`;

// Title styling
export const Title = styled.h1`
    font-size: 1.5rem;
    margin-left: 10px;
`;

// Invite button styling
export const InviteBtn = styled.button`
  margin-right: 10px;
  padding: 5px;
  color: #5C458B;
  font-weight: bolder;
`;

// Button styling for friend list deleteion
export const RemoveBtn = styled.button`
  align-items: center;
`;

// Styling for the actual list of friends
export const ListContainer = styled.div`
  color: #C5C8D5; 
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 2rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: white;
  }
`;

// each row of the friends list, name and delete button
export const FriendRow = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
`;

// Styling for the name entry in FriendRow
export const FriendName = styled.p`
  align-items: center;
`;