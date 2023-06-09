import {CategoryType, machineData} from "../Match/BonusMachine/bomusMachine.data";


const InitialState: CategoryType[] = machineData


export type ShowPointsPictureType = ReturnType<typeof showProductPicture>
const SHOW_PRODUCT_PICTURE = 'SHOW_PRODUCT_PICTURE';


// export const machineReducer = (state: CategoryType[] = InitialState, action: ShowPointsPictureType) => {
//
//     switch (action.type) {
//         case SHOW_PRODUCT_PICTURE: {
//             return state.map((stateItem)=> stateItem.name === action.categoryName ?
//                  stateItem.brands.map(brand=> brand.name === action.brandName ? {...brand, showPicture : true} : {...brand})
//                 :
//                 {...stateItem})
//         }
//         default:
//             return state;
//     }
// };
export const machineReducer = (state: CategoryType[] = InitialState, action: ShowPointsPictureType) => {
    switch (action.type) {
        case SHOW_PRODUCT_PICTURE: {
            return state.map((stateItem) => {
                if (stateItem.name === action.categoryName) {
                    return {
                        ...stateItem,
                        brands: stateItem.brands.map((brand) =>
                            brand.name === action.brandName
                                ? { ...brand, showPicture: true }
                                : brand
                        ),
                    };
                } else {
                    return stateItem;
                }
            });
        }
        default:
            return state;
    }
};

export const showProductPicture = (categoryName: string, brandName: string) => ({
    type: SHOW_PRODUCT_PICTURE, categoryName, brandName
}as const)

