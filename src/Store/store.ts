import { create } from "zustand";
import {produce} from 'immer'
interface counterState {
	count: number;
	location: { country: string; zone: string };
	increment: () => void;
	decrement: () => void;
	incrementAsync: () => Promise<void>;
	changeZone: () => void;
}

const useCounterStore = create<counterState>(
    (set) => {
	return ({
		count: 0,
		location: {
			country: "Nepal",
			zone: "Bagmati",
		},
		increment: () => set((state) => ({ count: state.count + 1 })),
		decrement: () => set((state) => ({ count: state.count - 1 })),
		incrementAsync: async () => {
			//    return new Promise((resolve)=>{
			//     relolve(

			//     )
			//    })
			// setTimeout(() => {
			// 	set((state)=>({count:state.count+1}));
			// }, 5000);
			await new Promise((resolve) => {
				setTimeout(resolve, 1000);
			});
			set((state) => ({ count: state.count + 1 }));
		},
		changeZone: () =>
			// set((state) => ({
			// 	...state,
			// 	location: { ...state.location, zone: "none" },
			// }))
            set(produce(state=>{state.location.zone='None'}))
}         
);
});


import { StoreApi, UseBoundStore } from 'zustand'

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never

const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
  _store: S,
) => {
  let store = _store as WithSelectors<typeof _store>
  store.use = {}
  for (let k of Object.keys(store.getState())) {
    ;(store.use as any)[k] = () => store((s) => s[k as keyof typeof s])
  }

  return store
}

export const useCounterStoreA=createSelectors(useCounterStore)

export default useCounterStore;
