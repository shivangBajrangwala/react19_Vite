import style from "../card-child/style.module.css";
import styled from "styled-components";

const Button = styled.a`
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: 0.25s;
    &:hover{
        border-color: #646cff;
        background-color: #646cff;
        color: #FFF;
    }
`

const RatingTitle = styled.h3`
    display: inline-flex;
    align-items: center;
    gap: .25em;
`

const RatingValue = styled.span`
    font-size: 16px;
    padding: 0px 8px;
    display: inline-block;
    overflow: hidden;
    border-radius: 4px;
    color: #213547;
    background-color: ${props => props.ratingBgColor >= 8.5 ? "greenyellow" : "yellow"};
`

export default function BaseCard({ apiData }) {
    const { name, id, img_url, rating, description, cast, genre, watch_url } = apiData;
    return (
        <>
            <div className={`${style.seriesCard} border border-slate-600 overflow-hidden rounded-lg`}>
                <div className={style.card_img}>
                    <img src={img_url} width={500} height={500} alt={id} />
                </div>
                <div className={`${style.card_content_box} p-[12px]`}>
                    <div className={"mb-[12px]"}>
                        <h2>{name}</h2>
                        <RatingTitle>Rating : <RatingValue ratingBgColor={rating}>{rating}</RatingValue></RatingTitle>
                    </div>
                    <div className={"mb-[12px]"}>
                        <p>Summary: {description}</p>
                        <p>Genre: {genre}</p>
                        <p>{cast}</p>
                    </div>
                    <div className={"mb-[12px]"}>
                        <Button href={watch_url} className={style.sec_btn} target="_blank">Watch Now</Button>
                    </div>
                </div>
            </div>
        </>
    )
}