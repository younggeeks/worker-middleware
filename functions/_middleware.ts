

const middleOne = async (context: any) => {
    const { cf, next } = context;
    console.log("the cf object [M1]:", JSON.stringify(context.request.cf));
    try {
        return await next();
    } catch (err: any) {
        return new Response(`${err.message}\n${err.stack}`, { status: 500 });
    }
}

const middleTwo = async (context: any) => {
    const { cf, next } = context;
    console.log("the cf object [M2]:", JSON.stringify(context.request.cf));
    try {
        return await next();
    } catch (err: any) {
        return new Response(`${err.message}\n${err.stack}`, { status: 500 });
    }
}

const middleThree = async (context: any) => {
    const { cf, next } = context;
    console.log("the cf object [M3]:", JSON.stringify(context.request.cf));
    try {
        return await next();
    } catch (err: any) {
        return new Response(`${err.message}\n${err.stack}`, { status: 500 });
    }
}
export const onRequest = [middleOne, middleTwo, middleThree]