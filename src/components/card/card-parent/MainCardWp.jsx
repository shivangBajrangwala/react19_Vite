import seriesData from "../../../api/seriesData.json";
import BaseCard from "../card-child/BaseCard";
import style from "../card-parent/style.module.css";


export default function MainCardWp() {
    return (
        <>
            <div className={style.seriesCard_wp}>
                <div className={style.seriesCard_row}>
                    {
                        seriesData.map((i, index) => {
                            return (
                                <>
                                    <BaseCard key={i.index || index} apiData={i} />
                                </>
                            )
                        })
                    }
                </div>
            </div>

        </>
    )
}
