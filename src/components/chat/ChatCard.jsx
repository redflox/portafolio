import { useState, useEffect } from 'react';
import Chat from './Chat'

const ChatCard = () => {
    const [startChat, setStartChat] = useState(false);
    const [openChat, setOpenChat] = useState(false); 
    const [message, setMessage] = useState([])
    useEffect(() => {
        console.log("EL CHAT ESTA: " + openChat)
        if(openChat){
            document.body.classList.add('no-scrollbar');
        } else {
            document.body.classList.remove('no-scrollbar');
        }
    }, [openChat])
    return (
        <>
            <div
                className="border shadow-lg aspect-2/2 lg:aspect-2/1 rounded-lg row-span-1 col-span-2  overflow-hidden trnasform transition-transform duration-1000 ease-in-out relative"
            >
                <Chat message={message} setOpenChat={setOpenChat}/>
            </div>

            <dialog
                id="my_modal_5"
                className=""
                onFocus={() => {
                    setStartChat(true);
                    setOpenChat(true);
                }}
                tabIndex="0"
            >
                <Chat message={message} fixed={true} setOpenChat={setOpenChat} startChat={startChat} setMessage={setMessage}/>
            </dialog>
        </>

    )
};

export default ChatCard