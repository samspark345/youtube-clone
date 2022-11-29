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
                const nextPageToken = state$.value.homeState.nextPageToken
                
                observer.next(SetVideosToLoad());
                request('videos',
                    {
                        params:{
                            part: 'snippet,contentDetails,statistics',
                            chart: 'mostPopular',
                            regionCode: 'CA',
                            maxResults: 20,
                            pageToken: nextPageToken,
                        }
                    }
                ).then((response) => {
                    console.log(response.data)
                    // observer.next(IncreaseVideosToGet(response.data.));
                    observer.next(GetYoutubeRecommendedVidsOnSuccess(response));
                    console.log(state$.value.homeState)
                    observer.next(SetVideosToStopLoad());
                    console.log(state$.value.homeState)
                    observer.complete();
                })
            })
        })
    )

export const homeEpic = combineEpics(
    updateYoutubeRecommendedVids
)