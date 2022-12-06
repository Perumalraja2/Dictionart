let conT = document.createElement('div')
conT.className='container'
conT.id="cont"
conT.innerHTML=`<div class="input-group">
  <input type="text" class="form-control" id ="inputvalue" placeholder="Enter a word" aria-label="Recipient's username" aria-describedby="button-addon2">
  <button class="btn btn-primary" type="button" id="button-addon2">Search</button>
</div>`
document.body.append(conT)

let final = document.getElementById('button-addon2')


let display = document.createElement('div')
display.className='dictionary'



final.addEventListener('click',()=>{    



let mean = document.getElementById("inputvalue").value
conT.append(display)


console.log(mean)

let mypromise = new Promise((resolve,reject)=>{
	async function Promise(){
let data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${mean}`)
let result = await data.json()
resolve(result);
} Promise();
})
mypromise.then((res)=>{
  let mean1 = document.getElementById("inputvalue").value


	let a = res[0].meanings[0].synonyms[0]
    if (a==undefined) {
    	console.log(mean1)
    }else{
      console.log(a)
    }

	}).catch((err)=>{console.log(err)})


mypromise.then((res)=>{console.log(res[0].meanings[0].definitions[0].definition)})

mypromise.then((res)=>{console.log(res)})

mypromise.then((res)=>{

let mean1 = document.getElementById("inputvalue").value


  let a = res[0].meanings[0].synonyms[0]
    if (a==undefined) {
     display.innerHTML=`<div class="card mb-3" style="">
  <div class="row g-0">
    <div class="col-md-4" >
      <img src="https://www.forumdaily.com/wp-content/uploads/2021/04/shutterstock_1008475954.jpg" class="img-fluid rounded-start" id ="img1"alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h4 class="card-title">The word is ${mean}</h4><br>
        <p class="card-text">Synonyms: ${mean1}</p><hr><br>
        <p class="card-text">Definitions: ${res[0].meanings[0].definitions[0].definition}"</p><hr>
        
      </div>
    </div>
  </div>
</div>`

    }else{
      display.innerHTML=`<div class="card mb-3" style="">
  <div class="row g-0">
    <div class="col-md-4" >
      <img src="https://www.forumdaily.com/wp-content/uploads/2021/04/shutterstock_1008475954.jpg" class="img-fluid rounded-start" id ="img1"alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h4 class="card-title">The word is ${mean}</h4><br>
        <p class="card-text">Synonyms: ${res[0].meanings[0].synonyms[0]}</p><hr><br>
        <p class="card-text">Definitions: ${res[0].meanings[0].definitions[0].definition}"</p><hr>
        
      </div>
    </div>
  </div>
</div>`
    }




})


})

