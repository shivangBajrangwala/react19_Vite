import seriesData from "../api/seriesData.json";
import BaseCard from "../components/BaseCard";


export default function MainCardWp() {
    return (
        <>
            <div className="seriesCard_wp">
                <div className="seriesCard_row">
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
