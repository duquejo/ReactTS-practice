import { useForm } from '../hooks/useForm';


interface FormData {
    email: string;
    name: string;
    postal: number;
    age: number;
}

export const Formulario = () => {

    const { name, email, age, postal, form, handleChange } = useForm<FormData>({
        email: 'jose@demo.com',
        name: 'Jose Duque',
        postal: 12345,
        age: 29
    });

    return (
        <form autoComplete="false">
            <div className="mb-3">
                <label htmlFor="form-label">Postal Code:</label>
                <input type="number"
                       className="rounded block"
                       onChange={ handleChange }
                       value={ postal }
                       name="postal" />
            </div>
            <div className="mb-3">
                <label htmlFor="form-label">Email:</label>
                <input type="email"
                       className="rounded block"
                       onChange={ handleChange }
                       value={ email }
                       name="email" />
            </div>
            <div className="mb-3">
                <label htmlFor="form-label">Name:</label>
                <input type="text"
                       className="rounded block"
                       onChange={ handleChange }
                       value={ name }
                       name="name" />
            </div>
            <div className="mb-3">
                <label htmlFor="form-label">Age:</label>
                <input type="text"
                       className="rounded block"
                       onChange={ handleChange }
                       value={ age }
                       name="age" />
            </div>
            <pre>{ JSON.stringify( form, null, 3 ) }</pre>
        </form>
    )
}
