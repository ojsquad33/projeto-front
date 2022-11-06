const BarraProgresso = (props) => {
    const { bgcolor, completed } = props;
  
    const containerStyles = {
      height: '30px',
      width: '100%',
      backgroundColor: "lightgray",
      borderRadius: 50,
      marginBottom: '30px',
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'center',
      transition: 'width 1s ease-in-out',
    }
  
    const labelStyles = {
      position: 'relative',
      top: '5px',
      left: '5px',
      color: 'white',
      fontWeight: 'bold'
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
    );
  };
  
  export default BarraProgresso;