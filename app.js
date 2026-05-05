<script src="https://cdn.jsdelivr.net/npm/tsparticles@2/tsparticles.bundle.min.js"></script>
<script>
/* PARTICLES */
tsParticles.load("particles", {
  particles: {
    number: { value: 50 },
    color: { value: "#a100ff" },
    size: { value: { min: 1, max: 3 } },
    move: { enable: true, speed: 1 },
    links: { enable: true, distance: 120, color: "#a100ff", opacity: 0.25 }
  }
});

/* LOGIN MODAL */
function openLogin(){ document.getElementById("loginModal").classList.toggle("active"); }

/* SKIN PREVIEW */
const userInput = document.getElementById("user");
const skinImg = document.getElementById("skinImg");
if(userInput && skinImg){
  userInput.addEventListener("input", ()=>{
    const n = userInput.value.trim();
    skinImg.src = n ? "https://mc-heads.net/avatar/" + n : "";
  });
}

/* AUTH (local demo) */
function register(){
  const u = document.getElementById("user").value.trim();
  const p = document.getElementById("pass").value.trim();
  const msg = document.getElementById("msg");
  if(!u || !p){ msg.innerText="Uzupełnij dane"; return; }
  localStorage.setItem("u",u);
  localStorage.setItem("p",p);
  msg.innerText="Zarejestrowano!";
}
function login(){
  const u = document.getElementById("user").value.trim();
  const p = document.getElementById("pass").value.trim();
  const msg = document.getElementById("msg");
  if(u===localStorage.getItem("u") && p===localStorage.getItem("p")){
    localStorage.setItem("logged","yes");
    msg.innerText="Wchodzisz...";
    setTimeout(()=>window.location="form.html",700);
  }else msg.innerText="Złe dane";
}

/* FORM SEND (Discord webhook) */
async function sendForm(e){
  e.preventDefault();
  const nick = document.getElementById("nick").value.trim();
  const skin = document.getElementById("skin").value.trim();
  const status = document.getElementById("status");

  const webhook = "TUTAJ_WKLEJ_WEBHOOK"; // <-- podmień

  try{
    await fetch(webhook,{
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body: JSON.stringify({
        content: "🔥 NOWE ZGŁOSZENIE 🔥\nNick: " + nick + "\nSkin: " + skin
      })
    });
    status.innerText="Wysłano!";
  }catch(err){
    status.innerText="Błąd wysyłania";
  }
}

/* AUTO (opcjonalne) */
if(localStorage.getItem("logged")==="yes"){
  console.log("Zalogowany");
}
</script>
