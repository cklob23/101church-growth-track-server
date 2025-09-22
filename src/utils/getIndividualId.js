import axios from "axios";

/**
 * Calls the CCB API with Basic Authentication.
 * @param {string} firstName - First name to search.
 * @param {string} lastName - Last name to search.
 */
export async function getIndividualId(firstName, lastName) {
    try {
        const response = await axios.get('https://101church.ccbchurch.com/api.php', {
            params: {
                srv: 'individual_search',
                first_name: firstName,
                last_name: lastName
            },
            auth: {
                username: 'CalebKlobe', // Put in .env file
                password: '%W35fDQb7RShZa7#' // Put in .env file
            },
            maxBodyLength: Infinity
        });

        console.log(response.data);
        return response.data;

    } catch (error) {
        console.error('Error fetching individual:', error.message);
        throw error;
    }
}

// Example usage:
//getIndividual('Caleb', 'Klobe');