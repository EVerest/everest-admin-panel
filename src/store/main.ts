import {defineStore} from "pinia";

type SnackbarMessage = {
    text: string;
    color: string;
    timeout: number;
};
export const useMainStore = defineStore({
    id: 'main',
    state: () => ({
        snackbar_message: undefined as SnackbarMessage | undefined,
    }),
    actions: {
        setSnackbarMessage(payload: SnackbarMessage) {
            this.snackbar_message = {...payload};
        },
    },
});
