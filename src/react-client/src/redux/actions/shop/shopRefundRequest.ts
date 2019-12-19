import { Dispatch } from "redux";
import { EmitType, ShopItemType, ShopRefundRequestAction } from "../../../constants/interfaces";
import { SOCKET_CLIENT_SENDING_ACTION } from "../../../constants/otherConstants";
import { SERVER_SHOP_REFUND_REQUEST } from "../actionTypes";

/**
 * Action to refund an item from the shop.
 */
const shopRefundRequest = (shopItem: ShopItemType) => {
    return (dispatch: Dispatch, getState: any, emit: EmitType) => {
        const clientAction: ShopRefundRequestAction = {
            type: SERVER_SHOP_REFUND_REQUEST,
            payload: {
                shopItem
            }
        };
        emit(SOCKET_CLIENT_SENDING_ACTION, clientAction);
    };
};

export default shopRefundRequest;
