fecth("https://reqres.in/api/userss?page=2")
.then(Response) => {

    if(response.status !== 200) {

     console.log(`looks like there was a problem.status.code: ${response.status}`);

     return;
    }

    response.json()
    .then(data => console.log(data));
})
.catch(err => )
}