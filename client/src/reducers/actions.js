const doAddProduct = (product) => {
    return { type: 'LOAD', payload: product };
  };

  export {doAddProduct};