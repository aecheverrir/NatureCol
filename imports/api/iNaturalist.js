import { Meteor } from 'meteor/meteor';
import { check, Match } from 'meteor/check'
import { HTTP } from 'meteor/http';

const INATURALIST_URL = 'https://api.inaturalist.org/v1/';
const OBSERVATION = 'observations?';
const SPECIES_COUNT = 'observations/species_counts?';
const OBSERVERS = 'observations/observers?';
const IDENTIFIERS = 'observations/identifiers?';

const AMPERSANT = '&';
const IS_EQUAL = '=';
const COLOMBIA_PLACE = 'place_id=7196';

function apiCallLog(rest, url) {
  console.log(rest + " API Call");
  console.log(url);
}

Meteor.methods({
  'iNaturalist.getCarouselView'() {
    let urlCommand = "https://api.inaturalist.org/v1/observations?iconic_taxa=Aves,Plantae&photos=true&per_page=5" + AMPERSANT + COLOMBIA_PLACE;

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
  },
  'iNaturalist.getObservations'(queryParams, pageNum, itemsPerPage){
    
    //Verificacion basica de los inputs
    Match.test(pageNum, Match.OneOf(Number, Match.Integer));
    Match.test(itemsPerPage, Match.OneOf(Number, Match.Integer));
    check(queryParams, Object);

    //Verificacion detallada del JSON con los query params
    check(queryParams,{
      captive: Match.Maybe(String),
      verifiable: Match.Maybe(String),
      quality_grade: Match.Maybe(String),
      threatened: Match.Maybe(String),
      introduced: Match.Maybe(String),
      photos: Match.Maybe(String),
      popular: Match.Maybe(String),
      sounds: Match.Maybe(String),
      iconic_taxa: Match.Maybe(String),
      order_by: Match.Maybe(String),
      order: Match.Maybe(String),
      d1: Match.Maybe(String),
      d2: Match.Maybe(String)
    });

    let urlCommand = INATURALIST_URL + OBSERVATION +COLOMBIA_PLACE;

    //Se itera en las llaves del JSON, que son los nombres de los query params,
    //para formar la URL de la consulta.
    Object.keys(queryParams).forEach((key) =>{
      urlCommand += AMPERSANT + key + IS_EQUAL + data[key];
    });
    apiCallLog("QUERY", urlCommand);

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

  },
  'iNaturalist.getObservations.species'(queryParams, pageNum, itemsPerPage) {

    //Verificacion basica de los inputs
    Match.test(pageNum, Match.OneOf(Number, Match.Integer));
    Match.test(itemsPerPage, Match.OneOf(Number, Match.Integer));
    check(queryParams, Object);

    //Verificacion detallada del JSON con los query params
    check(queryParams, {
      captive: Match.Maybe(String),
      verifiable: Match.Maybe(String),
      quality_grade: Match.Maybe(String),
      threatened: Match.Maybe(String),
      introduced: Match.Maybe(String),
      photos: Match.Maybe(String),
      popular: Match.Maybe(String),
      sounds: Match.Maybe(String),
      iconic_taxa: Match.Maybe(String),
      order_by: Match.Maybe(String),
      order: Match.Maybe(String),
      d1: Match.Maybe(String),
      d2: Match.Maybe(String)
    });

    let urlCommand = INATURALIST_URL + SPECIES_COUNT + COLOMBIA_PLACE;

    //Se itera en las llaves del JSON, que son los nombres de los query params,
    //para formar la URL de la consulta.
    Object.keys(queryParams).forEach((key) => {
      urlCommand += AMPERSANT + key + IS_EQUAL + data[key];
    });
    apiCallLog("QUERY", urlCommand);

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

  },
  'iNaturalist.getObservations.observers'(queryParams, pageNum, itemsPerPage) {

    //Verificacion basica de los inputs
    Match.test(pageNum, Match.OneOf(Number, Match.Integer));
    Match.test(itemsPerPage, Match.OneOf(Number, Match.Integer));
    check(queryParams, Object);

    //Verificacion detallada del JSON con los query params
    check(queryParams, {
      captive: Match.Maybe(String),
      verifiable: Match.Maybe(String),
      quality_grade: Match.Maybe(String),
      threatened: Match.Maybe(String),
      introduced: Match.Maybe(String),
      photos: Match.Maybe(String),
      popular: Match.Maybe(String),
      sounds: Match.Maybe(String),
      iconic_taxa: Match.Maybe(String),
      order_by: Match.Maybe(String),
      order: Match.Maybe(String),
      d1: Match.Maybe(String),
      d2: Match.Maybe(String)
    });

    let urlCommand = INATURALIST_URL + OBSERVERS + COLOMBIA_PLACE;

    //Se itera en las llaves del JSON, que son los nombres de los query params,
    //para formar la URL de la consulta.
    Object.keys(queryParams).forEach((key) => {
      urlCommand += AMPERSANT + key + IS_EQUAL + data[key];
    });
    apiCallLog("QUERY", urlCommand);

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

  },
  'iNaturalist.getObservations.identifiers'(queryParams, pageNum, itemsPerPage) {

    //Verificacion basica de los inputs
    Match.test(pageNum, Match.OneOf(Number, Match.Integer));
    Match.test(itemsPerPage, Match.OneOf(Number, Match.Integer));
    check(queryParams, Object);

    //Verificacion detallada del JSON con los query params
    check(queryParams, {
      captive: Match.Maybe(String),
      verifiable: Match.Maybe(String),
      quality_grade: Match.Maybe(String),
      threatened: Match.Maybe(String),
      introduced: Match.Maybe(String),
      photos: Match.Maybe(String),
      popular: Match.Maybe(String),
      sounds: Match.Maybe(String),
      iconic_taxa: Match.Maybe(String),
      order_by: Match.Maybe(String),
      order: Match.Maybe(String),
      d1: Match.Maybe(String),
      d2: Match.Maybe(String)
    });

    let urlCommand = INATURALIST_URL + IDENTIFIERS + COLOMBIA_PLACE;

    //Se itera en las llaves del JSON, que son los nombres de los query params,
    //para formar la URL de la consulta.
    Object.keys(queryParams).forEach((key) => {
      urlCommand += AMPERSANT + key + IS_EQUAL + data[key];
    });
    apiCallLog("QUERY", urlCommand);

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