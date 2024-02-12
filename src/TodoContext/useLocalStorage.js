import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;

    React.useEffect(() => {
        try{
            if(!localStorageItem){
                localStorage.setItem(itemName, JSON.stringify([]));
                parsedItem = initialValue;
            } else{
                parsedItem = JSON.parse(localStorageItem);
                setItem(parsedItem);
            }
        } catch(e){
            setError(true);
        }
        setLoading(false);
    }, []);

    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    }

    return {
        item,
        saveItem,
        loading,
        error,
    };
}

export { useLocalStorage };

/*const defaultTodos = [
  { text: 'Cortar cebolla', completed: true},
  { text: 'Dejar de ser un hdp', completed: false},
  { text: 'Que me consuma el personaje', completed: false},
  { text: 'Dejar de ser nefasto', completed: true},
];
localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
localStorage.removeItem('TODOS_V1');*/