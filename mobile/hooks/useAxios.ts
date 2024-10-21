import axios, { AxiosRequestConfig } from "axios";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, DELETE",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

const getConfig = (configInput?: AxiosRequestConfig<any>) => {
  return {
    ...configInput,
    headers: {
      ...corsHeaders,
      ...configInput?.headers,
    },
  };
};

const useAxios = () => {
  const post = async (
    url: string,
    data?: any,
    configInput?: AxiosRequestConfig<any>
  ) => {
    try {
      const response = await axios.post(url, data, getConfig(configInput));
      return response.data;
    } catch (err) {
      throw err;
    }
  };

  const put = async (
    url: string,
    data?: any,
    configInput?: AxiosRequestConfig<any>
  ) => {
    try {
      const response = await axios.put(url, data, getConfig(configInput));
      return response.data;
    } catch (err) {
      throw err;
    }
  };

  const patch = async (
    url: string,
    data?: any,
    configInput?: AxiosRequestConfig<any>
  ) => {
    try {
      const response = await axios.patch(url, data, getConfig(configInput));
      return response.data;
    } catch (err) {
      throw err;
    }
  };

  const get = async (url: string, configInput?: AxiosRequestConfig<any>) => {
    try {
      const response = await axios.get(url, getConfig(configInput));
      return response.data;
    } catch (err) {
      throw err;
    }
  };

  const remove = async (url: string, configInput?: AxiosRequestConfig<any>) => {
    try {
      const response = await axios.delete(url, getConfig(configInput));
      return response.data;
    } catch (err) {
      throw err;
    }
  };

  return {
    post,
    put,
    get,
    remove,
    patch,
  };
};

export default useAxios;
