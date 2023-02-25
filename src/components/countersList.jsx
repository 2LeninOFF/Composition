import React,{useState} from 'react'
import Counter from './counter'

const CountersList = () => {
    const initialState = [
        { id:0, value:0, name:'Ненужная вещь' }, 
        { id:1, value:0, name:'Ложка' },
        { id:2, value:0, name:'Вилка' },
        { id:3, value:0, name:'Тарелка' },
        { id:4, value:0, name:'Набор минималиста' }
    ]
    const [counters, setCounters] = useState(initialState)

const handleDelete = (id) => {
    const newCounters = counters.filter((count) => count.id!==id)
    setCounters(newCounters)
}
const handleReset = () => {
    setCounters(initialState)
    console.log('handle reset')
}
const handleIncrement = (id) => {
    counters[id].value += 1
    const newCountersIncrement = counters.filter((count) => count.id >= 0) // отрисовка, не более
    setCounters(newCountersIncrement)
}

const handleDecrement = (id) => {
    counters[id].value -= 1
    const newCountersDecrement = counters.filter((count) => count.id >= 0) // отрисовка, не более
    setCounters(newCountersDecrement)
}
    return (
    <>
    {counters.map((count)=>(
        <Counter
        key={count.id}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
        {...count}
        />
    ))}
    <button className="btn btn-primary btm-sm m-2" onClick = {handleReset}>Сброс</button>
    </>
    )
}
export default CountersList