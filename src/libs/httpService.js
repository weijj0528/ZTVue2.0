'use strict';
import axios from 'axios'
import Vue from 'vue'
import CryptoJS from "crypto-js"

var httpService = new Vue({
  data: {
    customerId: '',
    urlCommon: '/front',
    language: window.localStorage.language,
    KEY: window.localStorage.KEY,
    SID: window.localStorage.SID,
    version: 1,
    difTime: 0,
    apiUrl: {
      login: '/user/ztLogin',
      logout: '/user/ztLogout',
      most: '/handle/request'
    }
  },
  methods: {
    addSID: function addSID(url) {
      if(this.SID != undefined){
        this.SID = window.localStorage.SID;
      }
      if (this.SID && this.SID != undefined) {
        return url + ';jsessionid=' + this.SID ;
      } else {
        return url;
      }
    },
    getSID: function getSID(req, redirect) {
      if (req) {
        var cookiesObj = {};
        var cookie = req.headers.cookie;
        this.difTime = req.session.difTime;
        cookie && cookie.split(';').forEach(function (Cookie) {
          function Trim(str) {
            return str.replace(/(^\s*)|(\s*$)/g, "");
          }

          Cookie = Trim(Cookie);
          var parts = [];
          parts[0] = Cookie.substr(0, 3);
          parts[1] = Cookie.substr(4, Cookie.length);
          if (parts[1]) cookiesObj[parts[0].trim()] = (parts[1] || '').trim();
        });
        this.SID = cookiesObj.SID;
        this.KEY = cookiesObj.KEY;
      } else {
        this.KEY = window.localStorage.KEY;
        this.SID = window.localStorage.SID;
      }
      if (this.SID == undefined) {
        redirect('/login');
      }
    },
    getDate: function getDate(cb) {
      var _self = this;
      if (_self.difTime && cb) {
        return cb();
      } else if (_self.difTime) {
        return;
      } else {
        this.commonGet(this.urlCommon + this.apiUrl.getDate).then(function (response) {
          if (response.code == '1c01') {
            var timestamp = Date.parse(new Date());
            window.localStorage.difTime = response.biz_result.time - timestamp;
            _self.difTime = response.biz_result.time - timestamp;
            if (cb) cb();
          } else {
            /*_self.$message({
             showClose: true,
             message: response.msg,
             type: 'error'
             });*/
          }
        }, function (err) {
          /* _self.$message({
           showClose: true,
           message: '网络错误，请稍后重试',
           type: 'error'
           });*/
        });
      }
    },
    getSign: function getSign(str) {
      var _self = this;
      if (!_self.KEY) {
        _self.KEY = 'test';
      }
      if (!str) {
        str = 'test';
      }
      var signStr = CryptoJS.HmacSHA1(str, _self.KEY).toString(CryptoJS.enc.Base64);
      return signStr;
    },
    getBase64: function getBase64(str) {
      let s = CryptoJS.enc.Utf8.parse(str);
      let base64  = CryptoJS.enc.Base64.stringify(s);
      return base64;
    },
    //过滤请求的数据
    /*
     *1.传入一个对象 自动过滤该对象 键所对应的值为空的情况
     * 并返回一个 新对象
     */
    filterFormData(params){
      if (params && typeof params == 'object') {
        let obj = {};
        Object.keys(params).forEach((item) => {
          if (params[item] || params[item] === 0 || params[item] === false) obj[item] = params[item];
        });
        console.log(obj);
        return obj;
      } else {
        return params;
      }
    },
    commonPost: function commonPost(url, data) {
      url = this.addSID(url);
      data.version = this.version;
      let localTime = new Date().getTime();
      data.time = localTime + this.difTime;
      data.sign = this.getSign('module=' + data.biz_module + '&method=' + data.biz_method + '&time=' + data.time);
      var _self = this;
      return new Promise(function (resolve, reject) {
        axios({method: 'post', url: url, data: data}).then(function (response) {
          if (response.status === 200) {
            if (response.data.code === '1c01') {
              resolve(response.data);
            } else {
              _self.$Message.error({
                top: 100,
                content: response.data.msg,
                closable: true,
                duration: 3
              });
              reject(response.data);
            }
          }
        }).catch(function (error) {
          console.log(error);
          if (error.response !== undefined && error.response !== '') {
            if (error.response.status === 403 || error.response.status === 408) {
              window.localStorage.KEY = '';
              window.localStorage.SID = '';
              _self.KEY = '';
              _self.SID = '';
              window.location.href = '/login';
            }
          }
          reject(error);
        })
      })
    },
    commonGet: function commonGet(url) {
      return new Promise(function (resolve, reject) {
        axios.get(url).then(function (response) {
          resolve(response.data);
        }).catch(function (error) {
          reject(error);
        });
      });
    },
  }
});
export default httpService;