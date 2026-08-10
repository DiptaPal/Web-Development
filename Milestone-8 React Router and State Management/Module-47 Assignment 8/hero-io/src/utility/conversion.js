const convertDownload = (download) =>{
    if(download > 1000){
        return new Intl.NumberFormat('en-US', {
            notation: 'compact',
            maximumFractionDigits: 1
        }).format(download);
    }
}

export {convertDownload};