function MsgBox({username , color}){
    let styles = {backgroundColor : color}
    return (
    <>
        <h2 style={styles}> hello {username} </h2>
    </>
    );
}

export default MsgBox;