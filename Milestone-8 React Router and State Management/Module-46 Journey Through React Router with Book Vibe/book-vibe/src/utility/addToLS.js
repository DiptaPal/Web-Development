import { Bounce, toast } from 'react-toastify';


const getStoredBooks = (type) => {
    let storedBookSTR;
    if(type === "read"){
        storedBookSTR = localStorage.getItem("read-list");
    } else {
        storedBookSTR = localStorage.getItem("wish-list")
    }

    if(storedBookSTR){
        const storedBook = JSON.parse(storedBookSTR);
        return storedBook;
    } else{
        return [];
    }
}

const addToStoreLS = (id, type) => {
    let  storedBookData;
    if(type === "read"){
        storedBookData = getStoredBooks("read");
    } else {
        storedBookData = getStoredBooks("wish");
    }
    
    if(storedBookData.includes(id)){
            toast.warn('Already Added', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
            });
    } else {
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData);
        if(type === "read"){
            localStorage.setItem("read-list", data);
            toast('Successfully Added', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
            });
        } else {
            localStorage.setItem("wish-list", data);
            toast('Successfully Added', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
            });
        }
    }
    
}

export { addToStoreLS, getStoredBooks };

