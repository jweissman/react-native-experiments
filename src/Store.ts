import { Doctor } from './values/Doctor';
type AppStore = {doctors: Doctor[]}
const store: AppStore = {
    doctors: [
        { id: 1, name: 'Marvel', practice: "Neurology" },
        { id: 2, name: 'Strange', practice: "Psychology" },
    ]
};
export default store;