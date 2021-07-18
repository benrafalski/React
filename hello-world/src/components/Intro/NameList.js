import React from 'react'
import Person from './Person'

function NameList() {
    const names  = ['Bruce', 'Clark', 'Diana']
    const person = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 32,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 29,
            skill: 'Vue'
        }
    ]

    const personList = person.map(person => <Person key={person.id} person={person}/>)
    const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>)
    return <div>{nameList}</div>
}

export default NameList
