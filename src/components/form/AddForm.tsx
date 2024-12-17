import React, { ChangeEvent, FormEvent, ReactNode, useState } from 'react'

export interface Iinput {
    label:string
    name:string
    placeholder:string
    type:string
}

interface AddFormProps {
    onSubmit: (formdata:Record<string,string>) => void
    formBTN:ReactNode
    inputInfo:Iinput[]
}


const AddForm:React.FC<AddFormProps> = ({onSubmit,formBTN,inputInfo}) => {

    const [formdata,setformdata] = useState<Record<string,string>>({})

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit(formdata)
    }

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target
        setformdata((prev) => ({
            ...prev,
            [name]:value
        }))
    }

  return (
    <form onSubmit={handleSubmit}>
        {inputInfo.map(({label,name,placeholder,type}) => (
            <div  key={name}>
                <label htmlFor={label}>{label}</label>
                <input type={type}  placeholder={placeholder} name={name} id={name} onChange={handleChange}/>
            </div>
        ))}
        {formBTN}
    </form>
  )
}

export default AddForm