import { Dispatch } from 'redux';
import { emit, FullState } from '../../';
import { InvItemType } from '../../../../../types';
import { setUserfeedbackAction } from '../setUserfeedbackAction';

export const droneSwarms = (invItem: InvItemType) => {
    return (dispatch: Dispatch, getState: () => FullState, sendToServer: typeof emit) => {
        dispatch(setUserfeedbackAction('droneSwarms'));
    };
};
