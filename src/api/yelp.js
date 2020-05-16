import axios from 'axios';

//Using Yelp API
export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
        'Bearer pWBBGijrMycZThzVGIrit4LNk19RdrEo67OVONmmxtFRFmDgloFVTVhilJm34xskYHRBSIBCpdlVKmduavKN3eRBA11f2j9m34PoujdvjCYw0VZpmWSP5-BVo8m6XnYx'
    }
});

