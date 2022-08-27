import axios from "axios";
import { XMLParser } from "fast-xml-parser";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const options = {
  ignoreAttributes: false,
  attributeNamePrefix: "",
};

export const api = {
  onFetchlocations(action) {
    return axios({
      method: "get",
      url: `${BASE_URL}/XML_STOPFINDER_REQUEST? outputFormat=rapidJSON&SpEncId=0&coordOutputFormat=EPSG:4326&serverInfo=1&suggestApp=vvs&t ype_sf=any&version=10.2.10.139&name_sf=${action.keyword}`,
    })
      .then((response) => {
        const parser = new XMLParser(options);
        let jsonObj = parser.parse(response?.data);
        return {
          locations:
            jsonObj?.itdRequest?.itdStopFinderRequest?.itdOdv?.itdOdvName
              ?.odvNameElem,
          status: response?.status,
        };
      })
      .catch((error) => ({ error }));
  },

  onFetchtrip(action) {
    return axios({
      method: "post",
      url: `${BASE_URL}/XML_TRIP_REQUEST2? language=de&locationServerActive=1&command=&usage=&anyObjFilter=&searchLimitMinutes=360&ptOptionsActive=1&illumTra nsfer=on&itOptionsActive=1&delMinDistTrips=1&coordListOutputFormat=STRING&convertStopsPTKernel2LocationServer=1&conve rtPOIsITKernel2LocationServer=1&outputOptionsActive=1&calcNumberOfTrips=1&itdTime=1600&computeMonomodalTripCar=1&s peedFactorCar=100%25&costFactorCar=0%25&distanceFactorCar=10%25&traveltimeFactorCar=90%25&lineRestriction=403&calcul ateCO2=1&calculateDistance=1&anyType_origin=&type_origin=any&anyObjFilter_origin=0&place_origin=&anyType_destination=&t ype_destination=any&anyObjFilter_destination=0&place_destination=&outputFormat=rapidJSON&includeFares=true&useUT=true& name_origin=${action?.origin}&name_destination=${action?.destination}&itdDate=20220828`,
    })
      .then((response) => {
        const parser = new XMLParser(options);
        let jsonObj = parser.parse(response?.data);
        return {
          tripSearch: jsonObj,
          status: response?.status,
        };
      })
      .catch((error) => ({ error }));
  },
};
