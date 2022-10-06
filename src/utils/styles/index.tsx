import styled from "styled-components";
import {InputContainerProps, PageProps} from "./styleTypes";

const SIDEBAR_WIDTH = 400

export const InputField = styled.input`
  font-family: 'Inter';
  outline: none;
  border: none;
  background-color: inherit;
  color: #fff;
  font-size: 18px;
  width: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 4px 0;
`

export const InputContainer = styled.div<InputContainerProps>`
  background-color: ${(props)=> props.backgroundColor || "#131313"};
  padding: 12px 16px;
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
`

export const InputLabel = styled.label`
  display: block;
  color: #8f8f8f;
  font-size: 14px;
  margin: 4px 0;
`

export const Button = styled.button`
  width: 100%;
  outline: none;
  border: none;
  font-family: 'Inter';
  font-size: 16px;
  background-color: #2b09ff;
  color: #fff;
  border-radius: 10px;
  padding: 20px 0;
  font-weight: 500;
  transition: 300ms background-color ease;
  transition: 250ms border ease;
  
  &:hover{
    cursor: pointer;
    background-color: #3010ff;
  }
  &:active{
    background-color: #3a1cff;
  }
`

export const Page = styled.div<PageProps>`
  display:${(props => props.display)};
  justify-content:${(props => props.justifyContent)};
  align-items: ${(props => props.alignItems)};
  height: 100%;
  background-color: #1a1a1a;
`

export const ConversationSidebarStyle = styled.aside`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${SIDEBAR_WIDTH}px;
  background-color: #1a1a1a;
  border-right: 1px solid #5454543d;
  overflow-y: scroll;
  &::-webkit-scrollbar{
    display: none;
  }
`

export const ConversationChannelPageStyle = styled.div`
  height: 100%;
  margin-left: ${SIDEBAR_WIDTH}px;
`

export const ConversationSidebarHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: ${SIDEBAR_WIDTH}px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 0 32px;
  background-color: #151515;
  height: 85px;
  align-items: center;
  border-bottom: 1px solid #5454543d;
  & h1{
    font-weight: 500;
  }
`

export const ConversationSidebarContainer = styled.div`
  margin-top: 85px;
`

export const ConversationSidebarItem = styled.div`
  display: flex;
  align-items: center;
  gap:20px;
  box-sizing: border-box;
  padding: 18px 32px;
  border-bottom: 1px solid #5454543d;
  background-color: #131313;
`

export const OverlayStyle = styled.div`
  height: 100%;
  width: 100%;
  background-color: #000000c4;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const ModalContainerStyle = styled.div`
  background-color: #121212;
  width: 650px;
  box-sizing: border-box;
  border-radius: 10px;
`;

export const ModalHeaderStyle = styled.header`
  width: 100%;
  padding: 0 24px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 28px;
  & h2 {
    font-weight: 500;
    margin: 0;
  }
`;

export const ModalContentBodyStyle = styled.div`
  padding: 24px;
`;

export const TextField = styled.textarea`
  font-family: 'Inter';
  outline: none;
  border: none;
  background-color: inherit;
  color: #fff;
  font-size: 18px;
  width: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 4px 0;
  resize: none;
  ::-webkit-scrollbar {
    display: none;
  }
`