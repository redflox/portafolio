import { useState, useEffect } from 'react';

const ChatCard = () => {

    const [time, setTime] = useState(null);

    useEffect(() => {
        const date = new Date();
        setTime(date.toLocaleTimeString('en-US'));
    }, [])
    

    return (
        <>
            <div className="border p-2 shadow-lg aspect-2/1 rounded-lg row-span-2 w-full h-full col-span-2 overflow-hidden trnasform transition-transform duration-1000 ease-in-out  hover:cursor-pointer" onClick={() => document.getElementById('my_modal_5').showModal()}>
                <header className="w-auto bg-[#413C69] p-2 text-white font-bold text-xl rounded-lg">
                    <h2>Chatbot</h2>
                </header>
                <main className="mt-2 p-2 h-[80%] overflow-y-auto">
                    <div className="chat chat-start">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div className="chat-header">
                            Bot Bryan 
                            <time className="text-xs opacity-50"> {time}</time>
                        </div>
                        <div className="chat-bubble">Hola!👋  the Chosen One!</div>
                        <div className="chat-footer opacity-50">
                            Delivered
                        </div>
                    </div>
                    <div className="chat chat-end">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div className="chat-header">
                            Anakin
                            <time className="text-xs opacity-50">12:46</time>
                        </div>
                        <div className="chat-bubble">I hate you!</div>
                        <div className="chat-footer opacity-50">
                            Seen at 12:46
                        </div>
                    </div>
                    <div className="chat chat-end">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div className="chat-header">
                            Anakin
                            <time className="text-xs opacity-50">12:46</time>
                        </div>
                        <div className="chat-bubble">I hate you!</div>
                        <div className="chat-footer opacity-50">
                            Seen at 12:46
                        </div>
                    </div>
                    <div className="chat chat-end">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div className="chat-header">
                            Anakin
                            <time className="text-xs opacity-50">12:46</time>
                        </div>
                        <div className="chat-bubble">I hate you!</div>
                        <div className="chat-footer opacity-50">
                            Seen at 12:46
                        </div>
                    </div>
                </main>

            </div>

            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">CHAT BRYBOT</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>

    )
};

export default ChatCard