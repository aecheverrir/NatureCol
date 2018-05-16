import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { HTTP } from 'meteor/http';

const INATURALIST_URL = 'https://api.inaturalist.org/v1/';
const OBSERVATION = 'observations?';

function apiCallLog(rest, url) {
  console.log(rest + " API Call");
  console.log(url);
}

Meteor.methods({
  'iNaturalist.getCarouselView'() {
    let urlCommand = "https://api.inaturalist.org/v1/observations?iconic_taxa=Aves,Plantae&photos=true&place_id=7196&per_page=5";

    apiCallLog("GET", urlCommand);
    try {
      let res = HTTP.get(urlCommand);
      if (res) {
        return res.data.results;
      }
      else {
        return null;
      }
    }
    catch (error) {
      apiCallLog("ERROR detected! ", error);
    }
  }
});