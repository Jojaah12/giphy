async function searchField(query) {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${query}`);
    // waits until the request completes...
    console.log(query);

    let test = await response.json();

    console.log(test.data);
}
export default {
    searchField
}