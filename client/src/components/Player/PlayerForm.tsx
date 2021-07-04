import { useState } from "react";

const PlayerForm = ({
    submitPlayer
}: any) => {
    const initialData = {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
    };
    const [data, setData] = useState<any>(initialData);

    const handleChange = (key: string, event: any) => {
        event.preventDefault();
        setData((old: any) => ({
            ...old,
            [key]: event.target.value
        }));
    }
    return (
        <div className="row">
            <h1 className="center">Add a new player</h1>
            <form onSubmit={(event: any) => {
                event.preventDefault();
                submitPlayer(data);
                setData(initialData);
            }} className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={data.firstName}
                            onChange={(event: any) => handleChange('firstName', event)}
                        />
                        <label htmlFor="firstName">First Name</label>
                    </div>
                    <div className="input-field col s6">
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={data.lastName}
                            onChange={(event: any) => handleChange('lastName', event)}
                        />
                        <label htmlFor="lastName">Last Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={data.phone}
                            onChange={(event: any) => handleChange('phone', event)}
                        />
                        <label htmlFor="phone">Phone</label>
                    </div>
                    <div className="input-field col s6">
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={data.email}
                            onChange={(event: any) => handleChange('email', event)}
                        />
                        <label htmlFor="email">Email</label>
                    </div>
                </div>
                <button className="btn waves-effect waves-light" type="submit">Add player</button>
            </form>
        </div>
    );
};

export default PlayerForm;