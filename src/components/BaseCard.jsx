export default function BaseCard({ apiData }) {
    const { name, id, img_url, rating, description, cast, genre, watch_url } = apiData;
    return (
        <>
            <div className="seriesCard">
                <div className="card_img">
                    <img src={img_url} width={500} height={500} alt={id} />
                </div>
                <h2>{name}</h2>
                <h3 className={`ratings ${rating >= 8.5 ? "green_rating" : "yellow_rating"}`}>Rating : <span>{rating}</span></h3>
                <p>Summary: {description}</p>
                <p>Genre: {genre}</p>
                <p>{cast}</p>
                <a href={watch_url} target="_blank">Watch Now</a>
            </div>
        </>
    )
}