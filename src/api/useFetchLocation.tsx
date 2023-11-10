export const useFetchLocation = () => {
	const getLocationData = async (pokemonId: number) => {
		try {
			const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/encounters`;
			const response = await fetch(url);

			if (!response.ok) {
				throw new Error(`HTTP ERRROR, status: ${response.status}`);
			}
			const data = response.json();

			return data;
		} catch (error) {
			console.error(error);
		}
	};

	return { getLocationData };
};
