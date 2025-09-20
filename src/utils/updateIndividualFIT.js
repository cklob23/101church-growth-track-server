import axios from "axios";

/**
 * Updates an individual's spiritual gifts and abilities in CCB.
 * @param {number} individualId - The individual's ID.
 * @param {Object} spiritualGifts - Key/value pairs of spiritual gifts.
 * @param {Object} abilities - Key/value pairs of abilities.
 */
export async function updateIndividualFIT(individualId, spiritualGifts, abilities) {
    try {
        const params = {
            srv: 'update_individual_fit',
            individual_id: individualId
        };

        // Add spiritual gifts to params (e.g., spiritual_gifts[1]=56)
        Object.entries(spiritualGifts).forEach(([key, value]) => {
            params[`spiritual_gifts[${key}]`] = value;
        });

        // Add abilities to params (e.g., abilities[1]=6)
        Object.entries(abilities).forEach(([key, value]) => {
            params[`abilities[${key}]`] = value;
        });

        const response = await axios.post('https://101church.ccbchurch.com/api.php', null, {
            params: params,
            auth: {
                username: 'CalebKlobe', // Put in .env file
                password: '%W35fDQb7RShZa7#' // Put in .env file
            },
            maxBodyLength: Infinity
        });

        console.log(response.data);
        return response.data;

    } catch (error) {
        console.error('Error updating individual FIT:', error.message);
        throw error;
    }
}

// Example usage:
updateIndividualFIT(
    'yourUsername',
    'yourPassword',
    5566,
    { 1: 56, 2: 26, 3: 6, 4: 6, 5: 7 },
    { 1: 6, 2: 2 }
);