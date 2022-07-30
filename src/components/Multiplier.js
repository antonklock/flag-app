const Multiplier = ({ multiplier }) => {
    return (
        <p style={style}>
        x{ multiplier } 
        </p>
    )
}

export default Multiplier;

const style = {
    fontSize: '2.5rem',
    fontWeight: '1000',
    color: '#ffd600',
    textShadow: '1px 1px 1px rgba(0, 0, 0, 0.5)',
    marginTop: '0px',
}