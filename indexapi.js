'use strict'

axios.get("https://localhost:8080/duck/readall")
.then(res=> console.log(res))
.catch(err=> console.log(err));

