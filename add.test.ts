import fetchData from "./src/server";



test('testing my fetch api ', async () => {
    const endpoint = "https://jsonplaceholder.typicode.com/todos/1"
    const data = await fetchData({ endpoint, cash: "default", method: 'GET' })
    console.log(data, "testing");

    expect(data)
})