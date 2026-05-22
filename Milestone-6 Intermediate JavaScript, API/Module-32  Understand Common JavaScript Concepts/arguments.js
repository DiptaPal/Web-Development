function add(a, b){
    console.log(arguments);
    console.log(a ,b);

    const params = [...arguments]
    console.log(params);
}
add(88, 77, 7, 5);