import { Bounce, toast } from 'react-toastify';
const getAppsFromLS = () => {
    const appsSTR = localStorage.getItem("installed");
    if(appsSTR){
        const apps = JSON.parse(appsSTR);
        return apps;
    } else{   
        return [];
    }
}

const storeAppsToLS = (id) => {
    const appsData = getAppsFromLS();
    if(appsData.includes(id)){
        toast.warn('Already Install', {
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
    } else{
        appsData.push(id);
        const data = JSON.stringify(appsData);
        localStorage.setItem("installed", data)
        toast.success('Install Successful', {
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

const uninstallAppFromLS = (id) => {
    const storedApps = getAppsFromLS();
    const remainApps = storedApps.filter(storedId => storedId !== id);
    const data = JSON.stringify(remainApps);
    localStorage.setItem("installed", data);
    toast.success('Uninstall Successful', {
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


export { getAppsFromLS, storeAppsToLS, uninstallAppFromLS };

