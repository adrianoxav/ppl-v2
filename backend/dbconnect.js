const secrets = {

    dbUri: 'mongodb://localhost:27017/ppl'
    
};
    
export const getConnection = key => secrets[key];