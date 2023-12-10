import { useRef, useEffect } from 'react';

const initialMessages = [
    "Me complace darte la bienvenida a mi sitio web. Aquí encontrarás toda la información que necesitas sobre mí y mi trabajo.",
    "Si tienes alguna pregunta o necesitas ayuda para navegar por el sitio, no dudes en preguntarme. Estoy aquí para asistirte.",
    "¿Hay algo específico que te gustaría saber? Puedo proporcionarte detalles sobre mis proyectos, habilidades, experiencias, y más.",
];

const Chat = ({ startChat, message, setMessage, fixed, setOpenChat }) => {
    const chatRef = useRef(null);
    useEffect(() => {
        if (startChat) {
            const intervalo = setInterval(() => {
                setMessage(mensajesActuales => {
                    // Calcula el índice en función de la longitud del estado actual
                    let currentIndex = mensajesActuales.length;

                    // Verifica si aún hay mensajes por añadir
                    if (currentIndex < initialMessages.length) {
                        return [...mensajesActuales, initialMessages[currentIndex]];
                    } else {
                        // Detiene el intervalo si todos los mensajes han sido añadidos
                        clearInterval(intervalo);
                        return mensajesActuales;
                    }
                });
            }, 2000);
            return () => clearInterval(intervalo);
        }
    }, [startChat])
    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [message]);
    return (
        <>
            <div
                className='overscroll-none'
            >
                <div
                    id="header"
                    className={`${fixed ? 'fixed' : 'absolute'} top-0 w-full bg-green-700 h-16 pt-2 text-white flex justify-between shadow-md`}
                >
                    <form method="dialog">
                        <button
                            aria-label='Atras'
                            onClick={() => setOpenChat(false)}
                        >
                            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="icon-dots-vertical w-8 h-8 mt-2 ml-4">
                                <path className="text-white fill-current" d="M30,29a1,1,0,0,1-.81-.41l-2.12-2.92A18.66,18.66,0,0,0,15,18.25V22a1,1,0,0,1-1.6.8l-12-9a1,1,0,0,1,0-1.6l12-9A1,1,0,0,1,15,4V8.24A19,19,0,0,1,31,27v1a1,1,0,0,1-.69.95A1.12,1.12,0,0,1,30,29ZM14,16.11h.1A20.68,20.68,0,0,1,28.69,24.5l.16.21a17,17,0,0,0-15-14.6,1,1,0,0,1-.89-1V6L3.67,13,13,20V17.11a1,1,0,0,1,.33-.74A1,1,0,0,1,14,16.11Z" />
                            </svg>
                        </button>
                    </form>


                    <div
                        className='my-3 text-white font-bold text-lg tracking-wide'
                    >
                        @BRYANBOT
                    </div>

                    <div
                        className='hover:cursor-pointer'
                        onClick={() => document.getElementById('my_modal_5').showModal()}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" className="icon-dots-vertical w-12 h-12 mt-3 mr-2">
                            <path className="text-white fill-current" fill="none" stroke="currentColor" strokeLinecap="round" d="M.5 3.5V1C.5.7.7.5 1 .5h2.5m8 3V1c0-.3-.2-.5-.5-.5H8.5m3 8V11c0 .3-.2.5-.5.5H8.5m-8-3V11c0 .3.2.5.5.5h2.5m0-8L1 1m7.5 7.5L11 11M8.5 3.5L11 1M3.5 8.5L1 11" />
                        </svg>
                    </div>
                </div>

                <div
                    id="main"
                    className={`${fixed ? 'fixed' : 'absolute'} top-16 bottom-16 w-full overflow-y-scroll bg-gray-300`}
                    ref={chatRef}
                >
                    <div className="chat chat-start pl-4 pb-4">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div className="chat-header">
                            BRYANBOT
                        </div>
                        <div className="chat-bubble">"¡Hola! 👋 Soy BRYANBOT, tu asistente virtual aquí."</div>
                    </div>
                    {
                        message.map((message, index) => {
                            return (
                                <div key={`${index}-${message}`} className="chat chat-start pl-4 pb-4">
                                    <div className="chat-image avatar">
                                        <div className="w-10 rounded-full">
                                            <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <div className="chat-header">
                                        BRYANBOT
                                    </div>
                                    <div className="chat-bubble">{message}</div>

                                </div>
                            )
                        })
                    }
                </div>
            </div >
            <div
                id="footer"
                className={`${fixed ? 'fixed' : 'absolute'} bottom-0 w-full flex justify-between bg-green-100`}
            >
                <textarea
                    className='flex-grow m-2 py-2 px-4 mr-1 rounded-full border border-gray-950 resize-none outline-none'
                    rows="1"
                    placeholder='Mensaje...'
                >
                </textarea>
                <button
                    aria-label='Enviar mensaje'
                    className='m-2 outline-none'
                >
                    <svg className="svg-inline--fa text-green-400 fa-paper-plane fa-w-16 w-12 h-12 py-2 mr-2" aria-hidden="true"
                        focusable="false" data-prefix="fas" data-icon="paper-plane" role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512">
                        <path fill="currentColor"
                            d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z" />
                    </svg>
                </button>
            </div>
        </>
    )
}

export default Chat