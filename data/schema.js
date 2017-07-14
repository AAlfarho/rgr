import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} from 'graphql';

let Schema = (db) => {
    
     
    let RootStore = {}
    let LinkStoreType = new GraphQLObjectType({
            name: 'Store',
            fields: () => ({
                links: {
                    type: new GraphQLList(LinkType),
                    resolve: () => db.collection('links').find({}).toArray()
                }
            })
        })
    
    let LinkType = new GraphQLObjectType({
        name: 'Link',
        fields: () => ({
            _id : { type: GraphQLString },
            title : { type: GraphQLString },
            url : { type: GraphQLString }
        })
    });
    
    let schema = new GraphQLSchema({
        query: new GraphQLObjectType({
            name: 'Query',
            fields: () => ({
                store: {
                    type: LinkStoreType,
                    resolve: () => RootStore
                }
            })
        })
    });
    
    return schema
}



export default Schema;