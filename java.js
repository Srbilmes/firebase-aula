import{ initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import{ getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
   apiKey: "AIzaSyBsu2A8C36rOazAtJQplKtFJVz4Ny6OJII",
   authDomain: "aula-de-programacao-8f1a2.firebaseapp.com",
   projectId: "aula-de-programacao-8f1a2",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const botao = document.getElementById("btnSalvar");
botao.addEventListener("click", async () => {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    await addDoc(collection(db, "usuarios"), {
        nome: nome,
        senha: senha,
        email: email,
    });
    alert("Dados salvos com sucesso!")
});
