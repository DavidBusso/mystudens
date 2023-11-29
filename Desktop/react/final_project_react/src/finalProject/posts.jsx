import ArrangementByBooleanTrue from "./arrangementByBooleanTrue"
import ArrangementByLetters from "./arrangementByLetters"
import ArrangementByNumbers from "./arrangementByNumbers"
import EditCurrent from "./editCurrent"
import EditNewOne from "./editNewOne"
import SearchByBooleanFalse from "./searchByBooleanFalse"
import SearchByTitle from "./searchByTitle"
import SearchByBooleanTrue from "./searchByBooleanTrue"


export default function Posts(){


    return(
        <div>
            post
            <ArrangementByBooleanTrue />
            <ArrangementByLetters />
            <ArrangementByNumbers />
            <EditCurrent />
            <EditNewOne />
            <SearchByBooleanFalse />
            <SearchByBooleanTrue />
            <SearchByTitle />
        </div>
    )

}