import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  max-width: 100%;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProfileBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 408px;
  height: 59px;
  padding: 10px 16px;
  background: #EDEDED;
  justify-content: space-between;

  svg:hover {
    cursor: pointer;
  }

  #profile {
    width: 236px;
    height: 40px;

    justify-content: center;

    img {
      border-radius: 50%;
    }
  }

  #newchat {
    height: 24px;
    width: 24px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  #options {
    justify-content: flex-end;
  }
`;

export const SearchMenu = styled.div`
  display: flex;
  flex-direction: row;
  width: 408px;
  height: 49px;
  align-items: center;
  justify-content: center;
  background: #FAFAFA;
  border-bottom: 1px solid #d5d7d6;


  &&::after {
    border-bottom: 2px solid rgba(255, 255, 255, 0.14);
  }
`;

export const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  width: 382px;
  height: 35px;
  border-radius: 18px;
  border: none;
  background: #fff;
  align-items: center;
  justify-content: flex-start;

  #search_button {
    margin-left: 12px;
  }

  #search_input {
    background: #fff;
    margin-left: 18px;

    input {
      border: none;
      width: 285px;
      height: 20px;
    }
  }
`;

export const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  width: 408px;
  max-height: 549px;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 3px;
    height: 10px;
  }

  ::-webkit-scrollbar-reziser {
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: none;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 72px;
  align-items: center;
  padding: 0 15px 0 13px;

  span {
    align-self: flex-end;
  }

  &:hover {
    cursor: pointer;
    background: ${darken(0.04, '#fff')};
  }
`;

export const MessageInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 325px;
  height: 72px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`;

export const ContactAvatar = styled.div`
  display: flex;
  flex-direction: row;

  img {
    border-radius: 50%;
    margin-right: 15px;
    width: 49px;
    height: 49px;
  }
`;

export const ContactName = styled.div`
  display: flex;
  flex-direction: row;

  span {
    font-size: 17px;
    font-weight: bold;
    line-height: 25px;
  }
`;

export const Hour = styled.div`
  margin-top: -16px;
  align-self: flex-end;

  span {
    font-size: 13px;
    color: #333;
  }
`;

export const PreviewMessage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: baseline;
  align-items: baseline;

  span {
    font-size: 14px;
  }

  .viewed {
    color: #589FFC;
  }
`;

export const Chat = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png');
`;

export const ChatInfo = styled.div`
  display: flex;
  flex-direction: row;
  background: #ededed;
  padding: 10px 16px;
  width: 958px;
  height: 59px;
  border-left: 1px solid #d5d7d6;
  border-bottom: 1px solid #d5d7d6;

  img {
    border-radius: 50%;
  }

  ::-webkit-scrollbar {
    width: 3px;
    height: 10px;
  }

  ::-webkit-scrollbar-reziser {
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: none;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;

  p {
    padding-left: 15px;
    color: rgba(0, 0, 0, 0.9);
    font-size: 16px;
    width: 704px;
    height: 21px;
  }

  span {
    padding-left: 15px;
    color: rgba(0, 0, 0, 0.6);
    font-size: 13px;
    width: 704px;
    height: 21px;
  }
`;

export const MessageBar = styled.div`
  display: flex;
  flex-direction: row;
  width: 958px;
  height: 62px;
  background: #f0f0f0;
  align-self: center;
  justify-content: center;
  margin-top: 536px;

  :-webkit-scrollbar {
    width: 3px;
    height: 10px;
  }

  ::-webkit-scrollbar-reziser {
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: none;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const Message = styled.div`
  display: flex;
  padding: 5px 10px;
  align-items: center;

  input {
    background: #fff;
    color: #333;
    width: 829px;
    height: 42px;
    margin: 5px 17px 5px 15px;
    padding: 9px 12px 11px;
    border: none;
    border-radius: 30px;

  }

  svg:hover {
    cursor: pointer;
  }

  .voice {
    padding: 5px 10px;
    width: 44px;
    height: 52px;
  }

`;
