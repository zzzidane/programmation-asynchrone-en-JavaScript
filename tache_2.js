// Tâche 02 et 03: Attente d'un appel avec gestion des erreurs

async function waitCall () {
    try {
        // Appel d'Api
        const response = await new Promise((resolve, reject) => {
            setTimeout(() => {
                const success = Math.random() > 0.5;
                if (success) {
                    resolve({data: 'Données récupérées avec succès'});
                } else {
                    reject(new Error('Echec de la récupération des données'));
                }
            }, 2000);
        });
        console.log(response.data);
        return response.data;

    } catch (error) {
        console.error(`Erreur d'appel d'Api : ${error.message}`);
        throw error;
    }
}
waitCall();