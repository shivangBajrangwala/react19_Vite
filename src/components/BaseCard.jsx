export default function BaseCard(props) {
    return (
        <>
            <div className="seriesCard" key={props.id}>
                <div className="card_img">
                    <img src={i.img_url} width={500} height={500} alt={i.id} />
                </div>
                <h2>{i.name}</h2>
                <h3>Rating: {i.rating}</h3>
                <p>Summary: {i.description}</p>
                <p>Genre: {i.genre}</p>
                <p>{i.cast}</p>
                <a href={i.watch_url} target="_blank">Watch Now</a>
            </div>
        </>
    )
}