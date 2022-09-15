const socials = ({imgURL, link, name, decor}) => {
    return(
        <> 
            <span><a href={link} rel='noreferrer' target='_blank'><img className={decor} src={imgURL} alt={name}/></a></span>
        </>    
    );
}

export default socials;