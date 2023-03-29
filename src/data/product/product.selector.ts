import { useAppSelector } from "../hooks";
import { RootState } from "../store";


const selectProductData = (state: RootState) => state.product;
export const readProductData = useAppSelector(selectProductData);

const selectProductStatus = (state: RootState) => state.productStatus;
export const readProductStatus = useAppSelector(selectProductStatus);

const selectIsAdmin = (state: RootState) => state.user.isAdmin;
export const readIsAdmin = useAppSelector(selectIsAdmin);
