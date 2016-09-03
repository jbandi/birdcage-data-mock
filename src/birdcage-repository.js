
const initialTweets = [
    {
        title: 'Use React & Redux',
        completed: false,
        id: 0
    },
    {
        title: 'Use Electron',
        completed: false,
        id: 0
    }
];

export default class BirdcageRepository {
    getTweets(){
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(initialTweets), 0);
        });
    }
}
