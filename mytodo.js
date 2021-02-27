
const help = document.getElementById('help')
const form = document.honey
axios.get('https://api.vschool.io/shamikasims/todo/')
    .then(response =>{
        getData(response.data)
    })

    let ul = document.createElement('ul');

function getData(task){
   console.log(task)

    for(let i=0; i<task.length;i++){
        let li = document.createElement('li');
        li.innerHTML = `<span class="delete">×</span><input type="checkbox"><label>${task[i].title}</label>`;
        ul.appendChild(li);
      help.append(ul)
    }
}
   
   const honey= document.honey    
   honey.addEventListener("submit",function(event){
        event.preventDefault()
            
        const pepper={
            title:honey.title.value,
            description:honey.description.value,
            imgUrl:honey.imgUrl.value,
            price:honey.price.value
        }  
        axios.post('https://api.vschool.io/shamikasims/todo/',pepper)
        .then(response=> console.log(response.data))
        .catch(error => console.log(error)) 
    })




   




        axios.delete("https://api.vschool.io/shamikasims/todo/6039075aee6f8d3fc3fec86a")
        .then(response => console.log(response))
        .catch(error => console.log(error))