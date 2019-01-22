var friendList=[
    {
        name:"anthony",
        age:25,
        occupation:"software developer",
        photo:"https://pbs.twimg.com/media/DkaO27MXoAAzo7w.jpg",
        scores:[4,3,2,4,2,5,2,4,1,3]
    },
    {
        "name": "tony",
        "age": 34,
        "occupation": "IT",
        "photo": "https://pbs.twimg.com/media/Dmb1sxKVAAAvTWN.jpg",
        "scores": [
            2,
            5,
            2,
            2,
            5,
            1,
            1,
            1,
            4,
            3
        ]
    },
    {
        name:"samantha",
        age:23,
        occupation:"work",
        photo:"data:image/jpeg;base64,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",
        scores:[1,2,3,4,5,4,3,2,1,2]
    }
];

module.exports={
    friendList:friendList
}