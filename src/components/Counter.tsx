
import useCounterStore from "../Store/store"
import { useCounterStoreA } from "../Store/store"

// function log(){
//     const count=useCounterStore.getState().count
// console.log(count)
// }
// log()


// function inc(){
//     useCounterStore.setState((state)=>({count:state.count+1}))
// }
// inc()

function Counter(){

    // const value=useCounterStore((state)=>state.count)
    // const increment=useCounterStore(state=>state.increment)
    // const decrement=useCounterStore(state=>state.decrement)
    // const incrementAsync=useCounterStore(state=>state.incrementAsync)
    // // log()

    // const {location,changeLocation}=useCounterStore(state=>({location:state?.location?.zone,changeLocation:state.changeZone}))

    const value=useCounterStoreA.use.count()
    const increment=useCounterStoreA.use.increment()
    const decrement=useCounterStoreA.use.decrement()
    const incrementAsync=useCounterStoreA.use.incrementAsync()
    const location=useCounterStoreA.use.location().zone
    const changeLocation=useCounterStoreA.use.changeZone()

    console.log(useCounterStore.getState())




 
    return(
        <>
        <p>Current value is ---{value}</p>

        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={incrementAsync}>IncrementAsync</button>
        <h1>{location}</h1>
        <button onClick={changeLocation}>Change</button>
        </>
    )

}

export default Counter