import axios from 'axios';
import Loading from '../config/Loading';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';
import * as RootNavigation from '../navigation/NavigationService';
import { ApiConstants } from '../constants';
import RootSiblings from 'react-native-root-siblings';
import Spinner from 'react-native-loading-spinner-overlay';
import { cos } from 'react-native-reanimated';

class Api {
  constructor() {
    this.baseURL = ApiConstants.baseUrl;
  }

  async _post(endPoint, params, is_loading = false, show_message = false) {
    var token = await AsyncStorage.getItem('token_detail');
    if (token == null) {
      this.instance = axios.create({
        baseURL: this.baseURL,
        headers: {
          Accept: 'application/json',
        },
      });
    } else {
      this.instance = axios.create({
        baseURL: this.baseURL,
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + JSON.parse(token),
        },
      });
    }

    if (is_loading === true) {
      this.loading = new RootSiblings(<Spinner visible={true} />);
    }

    return this.instance
      .post(endPoint, params)
      .then(response => {
        if (is_loading === true) {
          this.loading.destroy();
        }
        if (show_message) {
          Toast.show(response?.message);
        }
        return response;
      })
      .catch(async error => {
        if (is_loading === true) {
          this.loading.destroy();
        }
        if (error.message === 'Network Error') {
          Toast.show('The network connection is lost');
        } else {
          Toast.show(error.response.data.message);
          if (error.response.status === 401) {
            await AsyncStorage.removeItem('user_detail');
            await AsyncStorage.removeItem('token_detail');
            RootNavigation.navigate('AuthStack', {});
          }
        }
      });
  }

  async _get(endPoint, params, is_loading = false, show_message = false) {
    if (is_loading === true) {
      this.loading = new RootSiblings(<Spinner visible={true} />);
    }
    var token = await AsyncStorage.getItem('token_detail');
    console.log(JSON.parse(token));
    if (token == null) {
      this.instance = axios.create({
        baseURL: this.baseURL,
        headers: {
          Accept: 'application/json',
        },
      });
    } else {
      this.instance = axios.create({
        baseURL: this.baseURL,
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + JSON.parse(token),
        },
      });
    }
    return this.instance
      .get(endPoint, params)
      .then(response => {
        if (is_loading === true) {
          this.loading.destroy();
        }
        if (show_message) {
          Toast.show(response.message);
        }
        return response.data;
      })
      .catch(async error => {
        if (is_loading === true) {
          this.loading.destroy();
        }
        if (error.message === 'Network Error') {
          Toast.show('The network connection is lost.');
        } else {
          Toast.show(error.response.data.message);

          if (error.response.status === 401) {
            await AsyncStorage.removeItem('user_detail');
            await AsyncStorage.removeItem('token_detail');
            RootNavigation.navigate('AuthStack', {});
          }
          return error.response.data.error;
        }
      });
  }

  async _patch(endPoint, params, is_loading = false, show_message = false) {
    if (is_loading === true) {
      this.loading = new RootSiblings(<Spinner visible={true} />);
    }
    var token = await AsyncStorage.getItem('token_detail');
    console.log(JSON.parse(token));
    if (token == null) {
      this.instance = axios.create({
        baseURL: this.baseURL,
        headers: {
          Accept: 'application/json',
        },
      });
    } else {
      this.instance = axios.create({
        baseURL: this.baseURL,
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + JSON.parse(token),
        },
      });
    }
    return this.instance
      .patch(endPoint, params)
      .then(response => {
        if (is_loading === true) {
          this.loading.destroy();
        }
        if (show_message) {
          Toast.show(response.message);
        }
        return response.data;
      })
      .catch(async error => {
        console.log(error)
        if (is_loading === true) {
          this.loading.destroy();
        }
        if (error.message === 'Network Error') {
          Toast.show('The network connection is lost.');
        } else {
          Toast.show(error.response.data.message);
          if (error.response.status === 401) {
            await AsyncStorage.removeItem('user_detail');
            await AsyncStorage.removeItem('token_detail');
          }
          return error.response.data.error;
        }
      });
  }

  async _delete(endPoint, params, is_loading = false, show_message = false) {
    if (is_loading === true) {
      this.loading = new RootSiblings(<Spinner visible={true} />);
    }
    var token = await AsyncStorage.getItem('token_detail');
    console.log(JSON.parse(token));
    if (token == null) {
      this.instance = axios.create({
        baseURL: this.baseURL,
        headers: {
          Accept: 'application/json',
        },
      });
    } else {
      this.instance = axios.create({
        baseURL: this.baseURL,
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + JSON.parse(token),
        },
      });
    }
    return this.instance
      .delete(endPoint, params)
      .then(response => {
        if (is_loading === true) {
          this.loading.destroy();
        }
        if (show_message) {
          Toast.show(response.message);
        }
        return response.data;
      })
      .catch(async error => {
        if (is_loading === true) {
          this.loading.destroy();
        }
        if (error.message === 'Network Error') {
          Toast.show('The network connection is lost.');
        } else {
          Toast.show(error.response.data.error);
          if (error.response.status === 401) {
            await AsyncStorage.removeItem('user_detail');
            await AsyncStorage.removeItem('token_detail');
          }
          return error.response.data.error;
        }
      });
  }
}

export default new Api();
