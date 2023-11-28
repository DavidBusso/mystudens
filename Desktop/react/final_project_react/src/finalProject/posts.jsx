import ArrangementByBoolean from "./arrangementByBoolean"
import ArrangementByLetters from "./arrangementByLetters"
import ArrangementByNumbers from "./arrangementByNumbers"
import EditCurrent from "./editCurrent"
import EditNewOne from "./editNewOne"
import SearchByBoolean from "./searchByBoolean"
import SearchByTitle from "./searchByTitle"


export default function Posts(){


    return(
        <div>
            post
            <ArrangementByBoolean />
            <ArrangementByLetters />
            <ArrangementByNumbers />
            <EditCurrent />
            <EditNewOne />
            <SearchByBoolean />
            <SearchByTitle />
        </div>
    )

}