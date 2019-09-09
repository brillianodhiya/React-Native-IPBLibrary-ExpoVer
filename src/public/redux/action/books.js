import Axios from "axios";
import { AsyncStorage } from 'react-native';

export const getBooks = (search) => {
  return {
    type: "GET_BOOK",
    payload: Axios.get(`http://192.168.6.155:8888/books/all?search=${search}`)
  };
};

// export const addBooks = (title, description, image, date_released, genre) => {
//   return {
//     type: "POST_BOOK",
//     payload: Axios.post("http://192.168.100.132:8888/books/", {
//       title,
//       description,
//       image,
//       date_released,
//       genre
//     })
//   };
// };

// export const updateBook = (idbooks, title, description, image) => {
//   return {
//     type: "UPDATE_BOOK",
//     payload: Axios.patch(`https://floating-sierra-16009.herokuapp.com/books/?idbooks=${idbooks}`, {
//       title,
//       description,
//       image
//     })
//   };
// };

// export const deleteBook = idbooks => {
//   return {
//     type: "DELETE_BOOK",
//     payload: Axios.delete(`https://floating-sierra-16009.herokuapp.com/books/?idbooks=${idbooks}`)
//   };
// };

export const rentBook = async idbooks => {
  const value = await AsyncStorage.getItem('access_token');
  let token = value
  if (token.startsWith("Bearer ")) {
    token = token.slice(7, token.length).trimLeft();
  }
  return {
    type: "RENT_BOOK",
    payload: Axios.post(
      `http://192.168.6.155:8888/books/rent?idbooks=${idbooks}`,
      "",
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Accept: "application/json",
          x_token: token
        }
      }
    ),
    payloads: Axios.get(`http://192.168.6.155:8888/books/all`)
  };
};

export const returnBook = idbooks => {
  return {
    type: "RETURN_BOOK",
    payload: Axios.post(
      `http://192.168.6.155:8888/books/return/?idbooks=${idbooks}`
    )
  };
};

export const getRent = async () => {
  const value = await AsyncStorage.getItem('access_token');
  let token = value
  if (token.startsWith("Bearer ")) {
    token = token.slice(7, token.length).trimLeft();
  }
  return {
    type: "GET_RENT_BOOK",
    payload: Axios.get(`http://192.168.6.155:8888/books/rent/`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Accept: "application/json",
        x_token: token
      }
    })
  };
};
