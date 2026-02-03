export const BASE_URL = "http://localhost:8080";

export const API_PATHS = {
  AUTH: {
    LOGIN: `${BASE_URL}/api/auth/login`,
    REGISTER: `${BASE_URL}/api/auth/register`,
    GET_USER_INFO: `${BASE_URL}/api/users/me`,
  },

  DASHBOARD: {
    GET_DATA: `${BASE_URL}/api/dashboard`, // if implemented
  },

  INCOME: {
    ADD_INCOME: `${BASE_URL}/api/incomes`,
    GET_ALL_INCOME: `${BASE_URL}/api/incomes`,
    DELETE_INCOME: (incomeId) => `${BASE_URL}/api/incomes/${incomeId}`,
     DOWNLOAD_INCOME: `${BASE_URL}/api/incomes/download`, 
  },

  EXPENSE: {
    ADD_EXPENSE: `${BASE_URL}/api/expenses`,
    GET_ALL_EXPENSE: `${BASE_URL}/api/expenses`,
    DELETE_EXPENSE: (expenseId) => `${BASE_URL}/api/expenses/${expenseId}`,
     DOWNLOAD_EXPENSE: `${BASE_URL}/api/expenses/download`,
  },

  IMAGE: {
     UPLOAD_IMAGE: `${BASE_URL}/api/files/upload`,
     UPDATE_PROFILE: "/api/files/update/profile",
  },
};

