import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";
import ConversationSidebar from "../../components/conversations/ConversationSidebar";
import {Page} from "../../utils/styles";
import ConversationPanel from "../../components/conversations/ConversationPanel";
import {ConversationType} from "../../utils/types";
import {getConversations} from "../../utils/api";

const ConversationPage = () => {
    const {id} = useParams()
    const [conversations, setConversations] = useState<ConversationType[]>([])

    useEffect(()=>{
        getConversations().then(({data})=>{
            setConversations(data)
        }).catch((err)=>
            console.log(err))
    },[])

    return (
        <Page>
            <ConversationSidebar conversations={conversations}/>
            {!id && <ConversationPanel/>}
            <Outlet/>
        </Page>
    );
};

export default ConversationPage;