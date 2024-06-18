import fetchData from 'data-fatch-ts'

const data = async () => {
    const endpoint = 'https://jsonplaceholder.typicode.com/todos'
    const res =await fetchData({endpoint})
    return console.log(res.length);
    
}

data() 