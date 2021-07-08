import {
    OuterContainer,
    TitleContainer,
    Title,
    InviteBtn,
    ListContainer,
    FriendRow,
    FriendName,
    RemoveBtn
} from './FriendListStyles';

const FriendList = () => {

    return (
        <OuterContainer>
            <TitleContainer>
                <Title>Friends List</Title>
                <InviteBtn>Edit</InviteBtn>
            </TitleContainer>
            <ListContainer>
                {/* {friends} */}
                <FriendRow>
                    <FriendName>username-1</FriendName>
                    <RemoveBtn>Chat</RemoveBtn>
                </FriendRow>
                <FriendRow>
                    <FriendName>username-2</FriendName>
                    <RemoveBtn>Chat</RemoveBtn>
                </FriendRow>
                <FriendRow>
                    <FriendName>username-3</FriendName>
                    <RemoveBtn>Chat</RemoveBtn>
                </FriendRow>
            </ListContainer>
        </OuterContainer>
    )
}

export default FriendList;