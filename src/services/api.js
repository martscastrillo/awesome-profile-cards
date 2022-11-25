// Fichero src/services/api.js
/* const callToApi = () => {
    // Llamamos a la API
    return     fetch('https://awesome-profile-cards.herokuapp.com/card', {
        method: 'POST', // Para enviar datos
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(person),
        })

      .then((response) => response.json())
      .then((response) => {
        // Cuando responde la API podemos limpiar los datos aquí
        const result = {
          palette: response.palette,
          name: response.name,
          job: response.job,
          phone: response.phone,
          email: response.email,
          linkedin: response.linkedin,
        };
        return result;
      });
  };
 */

//   function handleCreate(event) {
//     event.preventDefault();
//     fetch('https://awesome-profile-cards.herokuapp.com/card/', {
     
//       },
//     })
//       .then((response) => response.json())
//       .then((responseJson) => {
//         console.log(responseJson.cardURL);
//         shareSection.classList.remove('hidden');
//         linkCard.innerHTML = responseJson.cardURL;
//         linkCard.href = responseJson.cardURL;
//         linkTwitter.href = `https://twitter.com/intent/tweet?url=${responseJson.cardURL}`;
//       });
//   }
  
//   submitBtn.addEventListener('click', handleCreate);
  


  
//   export default callToApi;