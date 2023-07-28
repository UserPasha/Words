import {CategoryType, machineData} from "../Match/BonusMachine/bomusMachine.data";


const InitialState: CategoryType[] = machineData


export type ShowPointsPictureType = ReturnType<typeof showProductPicture>
export type ChangeActiveBrandType = ReturnType<typeof changeActiveBrand>
const SHOW_PRODUCT_PICTURE = 'SHOW_PRODUCT_PICTURE';
const CHANGE_ACTIVE_BRAND = 'CHANGE_ACTIVE_BRAND'


export const machineReducer = (state: CategoryType[] = InitialState, action: ShowPointsPictureType | ChangeActiveBrandType) => {
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
        case CHANGE_ACTIVE_BRAND: {
            // return state.map((stateItem) => {
            //     if (stateItem.name === action.categoryName) {
            //         const activeBrand = stateItem.brands.find(
            //             (brand) => brand.name === action.newBrandName
            //         );
            //         if (activeBrand) {
            //             return {
            //                 ...stateItem,
            //                 active: {
            //                     ...stateItem.active,
            //                     name: action.newBrandName,
            //                     pictureUrl: action.pictureUrl,
            //                 },
            //             };
            //         }
            //     }
            //     return stateItem;
            // });
            //const { categoryName, brandName } = action.payload;
            const newState = state.map((category) => {
                if (category.name === action.categoryName) {
                    const brand = category.brands.find((brand) => brand.name === action.newBrandName);
                    if (brand) {
                        return {
                            ...category,
                            active: { ...brand },
                        };
                    }
                }
                return category;
            });
            return newState;
        }
        default:
            return state;
    }
};

export const showProductPicture = (categoryName: string, brandName: string) => ({
    type: SHOW_PRODUCT_PICTURE, categoryName, brandName
}as const)

export const changeActiveBrand = (categoryName: string, newBrandName: string) => ({
    type: CHANGE_ACTIVE_BRAND, categoryName, newBrandName
}as const)

