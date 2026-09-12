import profilePic from './assets/hero.png'

function Card(){
    return (
        <div className="card">
            <img className='card-image' src={profilePic} alt="profile picture"></img>
            <h2 className='card-title'> Egor</h2>
            <p className='card-text'>Im studying at University</p>
        </div>
    );
}

export default Card  