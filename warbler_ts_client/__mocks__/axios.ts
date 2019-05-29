const axios = jest.genMockFromModule('axios');

// Get mock data shapes
import {mockMessages, mockUser} from './mockData';

const selectMockDataFromURL = (url: string) => {
    const exp = /api\/(.*)/gi;

    const path = exp.exec(url)[1];

    switch(path) {
        case 'messages':
            return mockMessages
        case 'user':
            return mockUser
    }
}

const wrapSelectedData = (url: string) => ({
    data: selectMockDataFromURL(url)
});

axios.get = jest.fn((url) => {
    return Promise.resolve(wrapSelectedData(url));
})

export default axios;