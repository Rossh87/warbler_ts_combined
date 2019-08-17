export type TLoadingStateValues = "initial" | "loading" | "ready" | "failed";

export interface ILoadingState {
    user: TLoadingStateValues;
    messages: TLoadingStateValues;
}
