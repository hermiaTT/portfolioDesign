import { combineReducers } from"redux";
import InteriorPage from './interiorPage';
import BrandingPage from "./brandingPage";
const reducers = combineReducers({
    InteriorPage: InteriorPage,
    BrandingPage: BrandingPage
});
export default reducers;