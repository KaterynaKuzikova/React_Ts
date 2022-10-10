export interface IndexState {
    name: string;
  }
  
  export enum IndexActionTypes {
    SET_NAME = 'SET_NAME',
  }
  
  interface SetNameAction {
    type: IndexActionTypes.SET_NAME;
    payload: string;
  }
  
  export type IndexAction = SetNameAction;