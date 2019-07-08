import { createAxiosTypes } from "~/utils/axiosTypeCreator";

const FETCH_TODAY_FEED = createAxiosTypes('FETCH_TODAY_FEED');
const FETCH_FEED = createAxiosTypes('FETCH_FEED');

export default {
    FETCH_TODAY_FEED,
    FETCH_FEED
}
