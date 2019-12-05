import { RNS3 } from 'react-native-aws3';
import { loading } from './common';
import axios from 'axios';
import ImagePicker from 'react-native-image-crop-picker';
import { store } from '../../redux/store';

let _options = {
  secretKey: '',
  accessKey: '',
  region: '',
  bucket: ''
};

export const apiAws3 = {
  upload: (url: String, mine = 'image/jpeg') => {
    const timeStamp = new Date().getTime();
    const bodyFormData = {
      uri: url,
      name: `${timeStamp}.${mine.split('/')[1]}`,
      type: mine
    };
    return RNS3.put(bodyFormData, getOption());
  },
  uploadPhoto: async () => {
    const { init } = store.getState();
    try {
      const image = await ImagePicker.openPicker({
        width: 600,
        height: 600,
        size: 200 * 1024,
        // compressImageQuality: 200 * 1024,
        compressImageMaxWidth: 600,
        compressImageMaxHeight: 600,
        cropping: true
      });
      const resultImage = await apiAws3.upload(image.path);
      axios({
        method: 'get',
        url: `${init.storageThumb}/400x400/${resultImage.body.postResponse.key}`
      });
      axios({
        method: 'get',
        url: `${init.storageThumb}/50x50/${resultImage.body.postResponse.key}`
      });
      const img = resultImage.body.postResponse.location;
      return Promise.resolve(img);
    } catch (error) {
      loading(false);
      console.log(error.message);
      return Promise.reject();
    }
  }
};

export const setOptionAWS3 = options => {
  _options = options;
};

export const getOption = () => _options;
