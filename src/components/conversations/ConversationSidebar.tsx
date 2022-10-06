import React, {useContext, useState} from 'react';
import {
    ConversationSidebarContainer,
    ConversationSidebarHeader,
    ConversationSidebarItem,
    ConversationSidebarStyle
} from "../../utils/styles";
import {TbEdit} from "react-icons/tb";
import {ConversationType} from "../../utils/types";
import styles from './index.module.scss'
import {useNavigate} from "react-router-dom";
import {CreateConversationModal} from "../modals/CreateConversationModal";
import {AuthContext} from "../../utils/Context/AuthContext";

type Props ={
    conversations:ConversationType[]
}

const ConversationSidebar:React.FC<Props> = ({conversations}) => {

    const navigate = useNavigate()
    const {user} = useContext(AuthContext)
    const [showModal, setShowModal] = useState(false)

    const getDisplayUser = (conversationParams: ConversationType) => {
      return conversationParams.creator.id === user?.id?
          conversationParams.receiver:conversationParams.creator
    }

    return (<>
                {showModal && <CreateConversationModal  setShowModal={setShowModal} />}
                <ConversationSidebarStyle>
                    <ConversationSidebarHeader>
                        <h1>Conversations</h1>
                        <div>
                            <TbEdit size={40} onClick={()=>setShowModal(!showModal)}/>
                        </div>
                    </ConversationSidebarHeader>
                    <ConversationSidebarContainer>
                        {
                            conversations.map(conversation=>
                                <ConversationSidebarItem onClick={()=>navigate(`/conversations/${conversation.id}`)}>
                                    <div className={styles.conversationAvatar}></div>
                                    <div>
                                        <span className={styles.conversationName}>
                                            {`${getDisplayUser(conversation).firstName}
                                            ${getDisplayUser(conversation).lastName}`}
                                        </span>
                                        <span className={styles.conversationLastMessage}>last message here</span>
                                    </div>
                                </ConversationSidebarItem>)
                        }
                    </ConversationSidebarContainer>
                </ConversationSidebarStyle>
            </>
    );
};

export default ConversationSidebar;