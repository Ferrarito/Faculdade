const apiUrl = 'https://672bd26f1600dda5a9f676e9.mockapi.io/api/v1/Animais';


async function carregarAnimais() {
    try {
        const response = await fetch(apiUrl);
        const animais = await response.json();
        
        const lista = document.getElementById('animal-list');
        lista.innerHTML = ''; 

        
        animais.forEach(animal => {
            const item = document.createElement('li');
            item.textContent = `${animal.id} - ${animal.nome} (${animal.idade} anos) - ${animal.raca}`;
            lista.appendChild(item);
        });
    } catch (error) {
        console.error('Erro ao carregar animais:', error);
    }
}


async function cadastrarAnimal() {
    const novoAnimal = {
        nome: "Totó",
        idade: 12,
        raca: "Cachorro"
    };

    try {
        await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novoAnimal)
        });
        carregarAnimais(); 
    } catch (error) {
        console.error('Erro ao cadastrar animal:', error);
    }
}


document.addEventListener('DOMContentLoaded', carregarAnimais);
