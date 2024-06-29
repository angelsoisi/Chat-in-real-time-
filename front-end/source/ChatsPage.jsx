import {MultiChatSocket,MultiChatWindow,useMultiChatLogic} from 'react-chat-engine-advanced'
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('c61effc0-a839-4edc-b997-5edf6df270ab',props.user.username,props.user.secret)
    return (
    <div style={{height:'100vh'}}>
        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow {...chatProps} style={{height:'100%'}} />
    </div>
    )
}


export default ChatsPage