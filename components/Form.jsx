"use client"

import { useState } from "react"

const Fields = [
    {
        field: "name",
        placeHolder: "Nombre del donante",
        label: "Nombre",
    },
    {
        field: "id",
        placeHolder: "Introduza su DNI",
        label: "DNI",
    },
    {
        field: "number",
        placeHolder: "numero",
        label: "Numero",
    }
]

function Form(props) {
    const [formState, setFormState] = useState({
        name: '',
        id: '',
        number: 0
    })

    const setField = (field, value) => {
        setFormState((prevState) => ({ ...prevState, [field]: value }))
        let a = 2 / 0
    }
    const { name, id, number } = formState
    return (
        <div>
            <h3>Nuevo donante.</h3>
            <form className=''>
                <Field field="name" placeHolder="placeholder" label="Nombre" type="text" set={setField} value={name} />
                <Field field="id" placeHolder="placeholder" label="Dni" type="text" set={setField} value={id} />
                <Field field="number" placeHolder="placeholder" label="Numero" type="number" set={setField} value={number} />
            </form>
        </div>
    )
}

export default Form


function Field({ field, type, label, value, set, className }) {
    const setField = (e) => {
        const newValue = type === 'text' ? e.target.value : parseInt(e.target.value)
        set(field, newValue)
    }


    return (<div>
        <label htmlFor="">{label}</label>
        <input
            className="bg-gray-800 text-white m-1 border-spacing-0"
            name={field}
            value={value}
            onInput={setField}
            type={type}
        />
    </div>)
}