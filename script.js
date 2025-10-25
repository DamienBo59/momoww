document.addEventListener('DOMContentLoaded', () => {
    // Sélection des éléments interactifs
    const proteinesInput = document.getElementById('proteines');
    const glucidesInput = document.getElementById('glucides');
    const lipidesInput = document.getElementById('lipides');
    const fibresInput = document.getElementById('fibres');
    const resultValue = document.getElementById('resultValue');
    const resetButton = document.getElementById('resetButton');

    const allInputs = [proteinesInput, glucidesInput, lipidesInput, fibresInput];

    // Fonction de calcul des points
    const calculateProPoints = () => {
        // Récupère les valeurs, avec 0 par défaut si le champ est vide
        const proteines = parseFloat(proteinesInput.value) || 0;
        const glucides = parseFloat(glucidesInput.value) || 0;
        const lipides = parseFloat(lipidesInput.value) || 0;
        const fibres = parseFloat(fibresInput.value) || 0;

        // Applique la formule fournie
        const points = (proteines / 11) + (glucides / 9) + (lipides / 4) - (fibres / 35);

        // Le résultat ne peut pas être négatif
        const finalResult = Math.max(0, points);

        // Affiche le résultat arrondi à une décimale
        resultValue.textContent = finalResult.toFixed(1);
    };

    // Ajoute un écouteur d'événement sur chaque champ
    // L'événement 'input' se déclenche à chaque modification
    allInputs.forEach(input => {
        input.addEventListener('input', calculateProPoints);
    });

    // Logique du bouton de réinitialisation
    resetButton.addEventListener('click', () => {
        allInputs.forEach(input => {
            input.value = ''; // Vide chaque champ
        });
        calculateProPoints(); // Recalcule pour remettre le résultat à 0
    });
});