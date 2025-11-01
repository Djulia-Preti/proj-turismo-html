document.addEventListener('DOMContentLoaded', () => {
    // 1. Lógica para ABRIR/FECHAR ao clicar no CARD inteiro
    document.querySelectorAll('.pacote-clicavel').forEach(card => {
        
        // Adiciona um cursor de clique para indicar que é interativo
        card.style.cursor = 'pointer'; 

        card.addEventListener('click', (event) => {
            
            const targetId = card.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);
            
            // Verifica se o clique foi diretamente no botão de fechar, se for, ignora o clique do card principal
            if (event.target.classList.contains('btn-fechar-roteiro')) {
                return; 
            }
            
            // Alterna a exibição (mostra/esconde) do elemento
            if (targetElement.style.display === 'block') {
                targetElement.style.display = 'none';
            } else {
                // (Opcional) Esconde qualquer outro roteiro aberto antes de mostrar o novo
                document.querySelectorAll('.roteiro-detalhe').forEach(roteiro => {
                    roteiro.style.display = 'none';
                });
                
                targetElement.style.display = 'block';
            }
        });
    });

    // 2. Lógica para FECHAR ao clicar no botão "Fechar Roteiro" (dentro do roteiro)
    document.querySelectorAll('.btn-fechar-roteiro').forEach(button => {
        button.addEventListener('click', (event) => {
            const roteiro = event.target.closest('.roteiro-detalhe');
            if (roteiro) {
                roteiro.style.display = 'none';
            }
            // Impede que o clique suba para o .pacote-clicavel e abra novamente
            event.stopPropagation(); 
        });
    });
});