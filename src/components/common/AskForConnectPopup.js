import React, { useEffect, useState } from 'react';



const AskForConnectPopup = (props) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(()=>{
        if(props.isEnabled !== isVisible){
            setIsVisible(props.isEnabled);
        }
    },[props]);

    const handleOnClose = ()=>{
        if(props.onClose){
            props.onClose();
        }else{
            setIsVisible(false);
        }
    }

    const handleOnConnect = ()=>{
        if(props.onConnect){
            props.onConnect();
        }
    }

    return (
        <>
        {isVisible &&            
            <div className="modal-container">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title w-100 text-center">No wallet connected</h5>
                        </div>
                        <div className="modal-body text-center">

                            <p>You need to connect your wallet.</p>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-peach btn-outline round mr-auto"  onClick={handleOnClose}>CLOSE</button>
                            <button type="button" className="btn btn-peach round ml-auto"  onClick={handleOnConnect}>CONNECT</button>
                        </div>
                    </div>
                </div>
            </div>
        }
    </>
    );
}

export default AskForConnectPopup;