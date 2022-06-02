
// console.log('HELLO')
let myLeads = []
// myLeads.JSON.parse(myLeads)
// myLeads.push("www.lead2.com")
// myLeads = JSON.stringify(myLeads)
// console.log(typeof myLeads)

const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

let leadsFromLocalStorage =localStorage.getItem("myLeads")
// console.log(leadsFromLocalStorage)
if(leadsFromLocalStorage){
 myLeads = leadsFromLocalStorage
 render(myLeads)
}



tabBtn.addEventListener("click",function(){

 chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
  myLeads.push(tabs[0].url)
  localStorage.setItem("myLeads",JSON.stringify(myLeads))
  render(myLeads)
  
 })

 // console.log(tab[0].url)
})

function render(leads) {
 let listitems = ""
 for (let i = 0; i < leads.length; i++) {
  listitems += `
  <li>
   <a href = ' ${leads[i]} ' target = '_blank'> 
    ${leads[i]}  
   </a>
  </li>`
 }
 ulEl.innerHTML = listitems
}

deleteBtn.addEventListener("dblclick",function(){
 localStorage.clear()
 myLeads=[]
 render(myLeads)
})

inputBtn.addEventListener("click", function () {
 myLeads.push(inputEl.value)
 inputEl.value = ""
 localStorage.setItem("myLeads",JSON.stringify(myLeads))
 render(myLeads)
})



