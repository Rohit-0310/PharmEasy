import { HEALTH_CARE_PRODUCT , SORT_HEALTH_CARE_PRODUCT} from "./actionType";



export const healthCareProduct = (data) => ({
    type : HEALTH_CARE_PRODUCT,
    payload: data,
})

export const sortHealthCareProduct = (data) => ({
    type : SORT_HEALTH_CARE_PRODUCT,
    payload: data,
})


export const getHCRData = () => (dispatch) => {
    fetch("https://mydbpharma.herokuapp.com/Products")
    .then((data) => data.json())
    .then((res) => dispatch(healthCareProduct(res)));
}


export const sortLow = () => (dispatch) => {
    fetch("https://mydbpharma.herokuapp.com/Products")
      .then((data) => data.json())
      .then((res) =>
        dispatch(
          sortHealthCareProduct(
            res.sort((a, b) => {
              return b.dis_price - a.dis_price
            })
          )
        )
      );
  };