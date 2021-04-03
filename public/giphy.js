(function () {
    'use strict';

    async function searchField(query) {
      const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${'e2ya6YDC5TCK6saKKjD34cazevUIHrpc'}&q=${query}`); // waits until the request completes...

      console.log(query);
      let test = await response.json();
      console.log(test.data);
    }

    var giphy = {
      searchField
    };

    const onSubmit = e => {
      e.preventDefault();
      const input = e.target.querySelector('.search__field');
      giphy.searchField(input);
      console.log(input.value);
      console.log(giphy);
    };

    document.querySelector('.search').addEventListener('submit', onSubmit);

}());
