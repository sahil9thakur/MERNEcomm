import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAIlS_REQUEST,
    PRODUCT_DETAIlS_SUCCESS,
    PRODUCT_DETAIlS_FAIL,
} from "../constants/productConstants";

export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true, products: [] };
        case PRODUCT_LIST_SUCCESS:
            return { loading: false, products: action.payload };
        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const productDetailsReducer = (
    state = { product: { reviews: [] } },
    action
) => {
    switch (action.type) {
        case PRODUCT_DETAIlS_REQUEST:
            return { loading: true, ...state };
        case PRODUCT_DETAIlS_SUCCESS:
            return { loading: false, product: action.payload };
        case PRODUCT_DETAIlS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
