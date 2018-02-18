function map(arr,func){
// первый способ
    // let newArr=[];
    // for (let i=0;  i<arr.length;  i++){
    //       newArr.push(func(arr[i]));
    // }

//второй (оптимальный) способ
    let newArr = arr.reduce(func());
    return newArr;
}
const a = [1, 2, 3];
const b = map(a,function(x) {
   return x*x;
});
