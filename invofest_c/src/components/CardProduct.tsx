interface cardProducts {
    children: React.ReactNode;
    className?: string;
    foto : string;
    name : string;
    description : string;
}

const CardProducts : React.FC<cardProducts> = ({foto, name, description,}) => {
    return (
        <div>
            <img src={foto}/>
            <h3>{name}</h3>
            <p>{description}</p>
            
        </div>  
    );
};
export default CardProducts;