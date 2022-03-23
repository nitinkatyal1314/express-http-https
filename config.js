const CONFIG = {
    server: {
        https: {
            port: 1112
        },
        http: {
            port: 1111
        },
        static_dir: "static"
    },
    mongo: {
        host: 'localhost',
        port: 27018,
        dbname: 'Hackathon'
    },
}

module.exports=CONFIG;