function print(arr){
    var array=[]
    var curr_time = new Date().getTime();

    arr.forEach(async (x,i)=>{
        if(i>=2){
        await new Promise(done => setTimeout(() => done(), 4000))
        }
        array.push({value: x, time: new Date().getTime()})
        console.log(array[i]);
    })
    setTimeout(() => {
        array.forEach( x=>{
            if((x.time-curr_time) > 300){
                console.log(`values added after 3s ${x.value}`)
            }
        })
    }, 4001)
}


print([5,4,7,8,6])
