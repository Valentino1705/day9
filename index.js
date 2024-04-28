const fetchData = async () => {
    try {
        const response = await fetch("https://api.npoint.io/7ea303bbd272d0f0dc8f");
        if (!response.ok) {
            throw new Error('Terjadi kesalahan saat mengambil data.');
        }
        const data = await response.json();

        const list = document.getElementById('list-data')

        for (let index = 0; index < data.next_steps.length; index++) {
            const listItem = data.next_steps[index];
            list.innerHTML += `
                <li>${listItem}</li>
            `
        }
    } catch (error) {
        console.error('Error:', error);
    }
}
