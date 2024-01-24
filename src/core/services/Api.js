// LIBs
import axios from "axios";

// CONFIG
import { appConfig } from "../config/app";

const apiDash = axios.create({
  baseURL: appConfig.requestUrl,
});

export const getMenu = async () => {
  try {
    const req = await apiDash.get(`wp-json/menus/v1/menus/menu`);
    return req;
  } catch (err) {
    console.error(err);
  }
}

export const getAllAcf = async () => {
  try {
    const req = await apiDash.get(`wp-json/acf/v3/pages`);
    return req;
  } catch (err) {
    console.error(err);
  }
}

export const getAllAcfFind = async (id) => {
  try {
    const req = await apiDash.get(`wp-json/acf/v3/pages/${id}`);
    return req;
  } catch (err) {
    console.error(err);
  }
}

export const getAllWP = async () => {
  try {
    const req = await apiDash.get(`wp-json/wp/v2/pages`);
    return req;
  } catch (err) {
    console.error(err);
  }
}

export const getAllWPFind = async (id) => {
  try {
    const req = await apiDash.get(`wp-json/wp/v2/pages/${id}`);
    return req;
  } catch (err) {
    console.error(err);
  }
}

export const sendContact = async (params) => {
  try {
    // Passa os parâmetros no corpo da requisição
    const req = await apiDash.post('wp-json/contato/v1/enviar-email', params);
    return req;
  } catch (err) {
    console.error(err);
  }
};