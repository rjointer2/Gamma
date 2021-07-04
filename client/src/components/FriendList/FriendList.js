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
                <InviteBtn>Invite</InviteBtn>
            </TitleContainer>
            <ListContainer>
                {/* {friends} */}
                <FriendRow>
                    <FriendName>Friend-1</FriendName>
                    <RemoveBtn>Delete</RemoveBtn>
                </FriendRow>
                <FriendRow>
                    <FriendName>Friend-2</FriendName>
                    <RemoveBtn>Delete</RemoveBtn>
                </FriendRow>
                <FriendRow>
                    <FriendName>Friend-3</FriendName>
                    <RemoveBtn>Delete</RemoveBtn>
                </FriendRow>
            </ListContainer>
        </OuterContainer>
    )
}

export default FriendList;