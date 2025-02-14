
enum ActionType {
    counterIncrease = 'increaseBy',
    counterReset = 'reset'
};

export type Action =
    | { type: ActionType; payload?: any };

export const doReset = ():Action => ({ type: ActionType.counterReset });
export const doIncreaseBy = (value: number):Action => ({ 
    type: ActionType.counterIncrease,
    payload: value
 });