import './popup.css';
const Popup=(props)=>{
    return(props.trigger)?(
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={(false)=>props.setTrigger()}>Close</button>
                {props.children}

            </div>

        </div>
    ):"";
}
export default Popup