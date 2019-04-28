// import fetch from 'isomorphic-fetch'
export const GlovoAPI = {
  fetchCategories,
  fetchStores
}

async function fetchCategories() {
  const response = await fetch(`/categories`);
  const data = await handleResponse(response);
  return data;
}

async function fetchStores(categories) {
  
  try {
    const data = await Promise.all(categories.map(category =>
      fetch(`/stores?category=${category.name}`)
        .then(resp => resp.json())
        .catch((err) => {
          throw err;
        })
    ));

    return categories.map((category, i) => {
      category.stores = data[i].stores;
      return category;
    });
  }
  catch (err) {
    return Promise.reject(err);
  }
}

function handleResponse(response) {
  if (!response.ok) {
    return Promise.reject(response.statusText);
  }
  return response.json();
}
