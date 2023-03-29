import { useAppSelector } from "../hooks";
import { RootState } from "../store";


const selectUsername = (state: RootState) => state.user.username;
export const readUsername = useAppSelector(selectUsername);

