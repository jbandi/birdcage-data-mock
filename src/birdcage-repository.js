
const tweets = [
    {
        _id: 0,
        title: 'Wow I am using JavaScript!',
        created: new Date()
    },
    {
        _id: 1,
        title: 'Woot! I just discovered React!',
        created: new Date()
    }
];

export default class BirdcageRepository {
    getTweets(){
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve([...tweets]), 0); // return a snapshot of the array
        });
    }

    addTweet(title) {

        const newTwet = {
            _id: Math.random(),
            title,
            created: new Date()
        }

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                tweets.push(newTwet);
                resolve()
            }, 0);
        });

    }
}
