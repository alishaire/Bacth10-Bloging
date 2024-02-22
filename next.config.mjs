/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        DB_URI: "mongodb+srv://harisbinahson:harisbin@cluster0.3nsm6fv.mongodb.net/bloging?retryWrites=true&w=majority",
        SECRETE:"WeAreBloging"
    }
};

export default nextConfig;
