import { SignJWT,jwtVerify } from "jose";

async function GenAccessToken(data){
    var token = await new SignJWT(data).setProtectedHeader({alg:"HS256"}).setExpirationTime("1d").setIssuedAt().sign( new TextEncoder().encode(process.env.SECRETE))

    return token
}

async function JWTVerify (token){
try {
    const { payload } = await jwtVerify(token,new TextEncoder().encode(process.env.SECRETE))
return payload
} catch (error) {
    console.log(error)
}
}
export { GenAccessToken, JWTVerify}