import { Doctor } from './values/Doctor';
type AppStore = {doctors: Doctor[]}
const store: AppStore = {
    doctors: [
        { id: 1, name: 'Marvel', speciality: "Neurology" },
        { id: 2, name: 'Strange', speciality: "Psychology" },
    ]
};
export default store;