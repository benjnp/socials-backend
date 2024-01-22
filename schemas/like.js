export default {
    name: 'like',
    title: 'Like',
    type: 'document',
    fields: [
        {
            name: 'likedBy',
            title: 'LikedBy',
            type: 'postedBy'
        },
        {
            name: 'userId',
            title: 'UserID',
            type: 'string'
        },
    ]
}