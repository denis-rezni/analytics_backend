import {createLogic} from "redux-logic";
import PracticeActions from "./actions";
import PracticeService from "./service";
import {getId} from "./getters";
import actions from "../../layout/actions";
import {fetchingTypes, PracticeFields} from "./enum";

const service = new PracticeService();

const getPractice = createLogic({
    type: PracticeActions.getPractice.type,
    latest: true,

    process({getState, action}: any, dispatch, done) {
        const id = action.payload;
        dispatch(actions.fetchingTrue({destination: fetchingTypes.GET_PRACTICE}));
        service.getPractice(id)
            .then((res) => {
                dispatch(PracticeActions.setPractice(res.data));
            })
            .finally(() => {
                dispatch(actions.fetchingFalse({destination: fetchingTypes.GET_PRACTICE}));
                return done();
            });
    }
});

const savePractice = createLogic({
    type: PracticeActions.savePractice.type,
    latest: true,

    process({getState, action}: any, dispatch, done) {
        const {id, practice} = action.payload;
        service.savePractice(practice, id)
            .then((res) => {
            })
            .finally(() => {
                return done();
            });
    }
});

const startLoading = (dispatch: any, field: string) => {
    if (field === PracticeFields.BIBLIOGRAPHIC_REFERENCE) {
        dispatch(actions.fetchingTrue({destination: field}));
    } else {
        dispatch(actions.fetchingComponentTrue({destination: field}));
    }
}

const stopLoading = (dispatch: any, field: string) => {
    if (field === PracticeFields.BIBLIOGRAPHIC_REFERENCE) {
        dispatch(actions.fetchingFalse({destination: field}));
    } else {
        dispatch(actions.fetchingComponentFalse({destination: field}));
    }
}

const saveField = createLogic({
    type: PracticeActions.saveField.type,
    latest: true,

    process({getState, action}: any, dispatch, done) {
        const state = getState();
        const practiceId = getId(state);
        const {field, value} = action.payload;
        startLoading(dispatch, field);
        service.patchPractice({[field]: value}, practiceId)
            .then((res: any) => {
                dispatch(PracticeActions.setPractice(res.data));
            })
            .catch((err) => {
                console.error(`could not save field: ${field}`);
                dispatch(PracticeActions.getPractice(practiceId));
            })
            .finally(() => {
                stopLoading(dispatch, field)
                return done();
            });
    }
});


export default [getPractice, savePractice, saveField];