
const Card = ({getPlayer}) => {

    const {name,photo,country,role} = getPlayer;
    
    return (
        <div>
        
            <div className="card text-left p-4 bg-base-100 border border-indigo-600">
                <figure><img  src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title p-0">{name}</h2>
                    <h3>{role}</h3>
                    <h4>{country}</h4>
                    <div className="card-actions  justify-center">
                    <button className="btn w-full btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;