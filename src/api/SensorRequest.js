
import * as ssDing from '../api/index.js';

  const SensorRequest = {

      // 获取官网用户访问信息
      GetLogServer(param, callSuccess, callFail) {
        ssDing.PostDataUrl("GetLogServer", param, true, respData => {
            callSuccess(respData);
        }, callFail);
      },
      // 保存官网用户访问信息
      saveLogServer(param, callSuccess, callFail) {
        ssDing.PostDataUrl("AccessRecordInfoAddFun", param, true, respData => {
          callSuccess(respData);
        }, callFail);
      }
  };

  export default SensorRequest;

