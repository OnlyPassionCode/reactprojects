import { useState, useRef, useEffect } from "react";

function ToDoList(){
    const [items, setItems] = useState(["Apprendre React", "Créer un projet en React"]);
    const refText = useRef("");
    const btnAdd = useRef(null);

    useEffect(() => {
        /**
         * @type {HTMLInputElement}
         */
        const currentBtnAdd = btnAdd.current;
        /**
         * @type {HTMLInputElement}
         */
        const currentText = refText.current;

        const handleKeyDown = (e) => {
            if(currentText !== document.activeElement) return;
            if(e.key !== "Enter") return;
            currentBtnAdd.click();
        }
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const addItem = () => {
        /**
         * @type {HTMLInputElement}
         */
        const current = refText.current;
        if(current.value.trim() === "") return;
        setItems([...items, current.value]);
        current.value = "";
    }

    const removeLastItem = () => {
        if(items.length > 0){
            setItems(items => {
                items.pop();
                return [...items];
            });
        }
    }

    return (
        <div>
            <ul>
                {items.map((item, index) =>  <li key={index}>{item}</li>)}
            </ul>
            <input type="text" ref={refText}/>
            <button onClick={addItem} ref={btnAdd}>Ajouter</button>
            <button onClick={removeLastItem}>Supprimer</button>
        </div>
    )
}

export default ToDoList;