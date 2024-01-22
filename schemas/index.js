import user from './user';
import pin from './pin';
import comment from './comment';
import postedBy from './postedBy';
import like from './like';
import category from './category'

// export default createSchema({
//     name: 'default',
//     types: schemaTypes.concat
// })
export const schemaTypes = [user, pin, comment, postedBy, like, category]
