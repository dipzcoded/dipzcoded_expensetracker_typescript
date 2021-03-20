import { TransactionState } from "../context/GlobalState";

//   types
export enum Types {
  Create = "CREATE_TRANSACTION",
  Delete = "DELETE_TRANSACTION",
}

//   actions
export type TransactionActions =
  | { type: Types.Create; payload: TransactionState }
  | { type: Types.Delete; id: number };

export const transactionReducer = (
  state: TransactionState[],
  action: TransactionActions
) => {
  switch (action.type) {
    case Types.Create:
      return [{ ...action.payload }, ...state];

    case Types.Delete:
      return [
        ...state.filter(
          (transaction: TransactionState) => transaction.id !== action.id
        ),
      ];

    default:
      return state;
  }
};
