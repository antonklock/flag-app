const FlagDisplay = ({ flag }) => {

    console.log('FlagDisplay ran');

    return (
        <div className="FlagDisplay">
            <img src={flag.src} alt='flag'/>
        </div>
    )
}
    
export default FlagDisplay;