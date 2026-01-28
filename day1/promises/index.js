const myPromise = new Promise((resolve, reject) => {
    let marks = 80;
    if(marks>30){
        resolve("pass");
    }else{
        reject("fail");
    }}
)
myPromise.then((msg) =>console.log(msg))
      .catch((error) => console.log("error occured."))
      // console.log(myPromise);
