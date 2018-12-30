import actionCreatorFactory from "typescript-fsa"
import { reducerWithInitialState } from "typescript-fsa-reducers"

export type CounterState = { count: number }

const initialState: CounterState = {
  count: 0
}

type CalcPayload = {
  value: number
}

const actionCreator = actionCreatorFactory()

export const increment = actionCreator("INCREMENT")
export const decrement = actionCreator("DECREMENT")
export const calc = actionCreator<CalcPayload>("CALC")

export const counterReducer = reducerWithInitialState(initialState)
  .case(increment, state => ({ ...state, count: state.count + 1 }))
  .case(decrement, state => ({ ...state, count: state.count - 1 }))
  .case(calc, (state, payload) => ({ ...state, count: state.count + payload.value }))
