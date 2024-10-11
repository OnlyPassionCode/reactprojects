import { useRef, useState } from "react";


function Register(){

    const [users, setUsers] = useState([]);
    const nameRef = useRef(null);
    const countriesRef = useRef(null);

    const handleRegister = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const country = countriesRef.current.value;
        if(name.trim() === "" || country.trim() === "") return;
        if(users.some(user => user.name === name)) return;
        const user = {
            name,
            country
        }
        setUsers((users) => [...users, user]);
    }

    return (
        <main>
            <form action="" method="GET" name="register">
                <div>
                    <label htmlFor="name">Nom :</label>
                    <input ref={nameRef} type="text" name="name" id="name" />
                </div>
                <div>
                    <label htmlFor="country-select">Choisissez votre pays :</label>
                    <select ref={countriesRef} name="countries" id="country-select">
                        <option value="">--Liste de tout les pays--</option>
                        <option value="Belgique">Belgique</option>
                        <option value="France">France</option>
                        <option value="Allemagne">Allemagne</option>
                        <option value="Espagne">Espagne</option>
                        <option value="Italie">Italie</option>
                        <option value="Suisse">Suisse</option>
                        <option value="Portugal">Portugal</option>
                        <option value="Pays-Bas">Pays-Bas</option>
                        <option value="Autriche">Autriche</option>
                        <option value="Grèce">Grèce</option>
                        <option value="Danemark">Danemark</option>
                        <option value="Suède">Suède</option>
                        <option value="Norvège">Norvège</option>
                        <option value="Finlande">Finlande</option>
                        <option value="Irlande">Irlande</option>
                        <option value="Islande">Islande</option>
                        <option value="Luxembourg">Luxembourg</option>
                        <option value="Pologne">Pologne</option>
                        <option value="Hongrie">Hongrie</option>
                        <option value="République Tchèque">République Tchèque</option>
                        <option value="Slovaquie">Slovaquie</option>
                        <option value="Roumanie">Roumanie</option>
                        <option value="Bulgarie">Bulgarie</option>
                        <option value="Croatie">Croatie</option>
                        <option value="Serbie">Serbie</option>
                        <option value="Bosnie-Herzégovine">Bosnie-Herzégovine</option>
                    </select>
                </div>
                <input type="submit" value="M'inscrire" onClick={handleRegister} />
            </form>
            <section id="users">
                {users.reverse().map((user, index) =>
                        <div className="user" key={index}>
                            <p>Nom: {user.name}</p>
                            <p>Pays: {user.country}</p>
                            <hr />
                        </div>
                    )
                }
            </section>
        </main>
    )
}

export default Register;