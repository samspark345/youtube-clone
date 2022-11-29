import { Http } from "@mui/icons-material";
import axios from "axios";
import { combineEpics, ofType } from "redux-observable";
import {
    Observable,
    Observer
}from 'rxjs'
import { mergeMap } from "rxjs/operators";
import { request } from "../../api";
import {GetYoutubeRecommendedVidsOnSuccess, GET_RECOMMENDED_YT_VIDS, IncreaseVideosToGet, SetVideosToLoad, SetVideosToStopLoad} from'../actions/homeActions';


// function getYtVideosApiRequest(){
//     request  
// }

const updateYoutubeRecommendedVids = (action$, state$) =>
    action$.pipe(
        ofType(GET_RECOMMENDED_YT_VIDS),
        mergeMap((action) => {
            return new Observable((observer) => {
                const totalVideoCount = state$.value.HomeState.totalVideoCount + 20
                observer.next(IncreaseVideosToGet(totalVideoCount));
                observer.next(SetVideosToLoad());
                console.log(state$.value.HomeState)
                request('videos',
                    {
                        params:{
                            part: 'snippet,contentDetails,statistics',
                            chart: 'mostPopular',
                            regionCode: 'CA',
                            maxResults: totalVideoCount,
                            pageToken: '',
                        }
                    }
                ).then((response) => {
                    console.log(response.data.items)
                    observer.next(GetYoutubeRecommendedVidsOnSuccess(response));
                    console.log(state$.value.HomeState)
                    observer.next(SetVideosToStopLoad());
                    console.log(state$.value.HomeState)
                    observer.complete();
                })
            })
        })
    )

export const homeEpic = combineEpics(
    updateYoutubeRecommendedVids
)