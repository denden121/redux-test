const url = 'https://api.github.com';

class ReposApi {
    async getAllUsersAsync(count = 10) {
        const response = await fetch(`${url}/users?per_page=${count}`, {
            redirect: 'follow',
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error('Не удалось получить список пользователей');
        }

        return response.json();
    }
}

export default new ReposApi()