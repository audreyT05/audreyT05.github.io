let myFullName = "Audrey Tsang ";
document.getElementById("btnGet").addEventListener("mouseover",second_Mess);
function second_Mess(){
    let f_Mess = document.getElementById("midtermMessage1").textContent;
    document.getElementById("midtermMessage2").innerHTML = f_Mess + myFullName;
}