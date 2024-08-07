const myHeaders = new Headers();
myHeaders.append("x-apihub-key", "zi-6orzVhVKVv9Kj1en-LcmMmC0YjpELHjwFz1ujJWBiAO3kp8");
myHeaders.append("x-apihub-host", "Global-REST-Countries-API.allthingsdev.co");
myHeaders.append("x-apihub-endpoint", "bd1c54c5-d841-4898-842f-c00457c0aafc");

export const requestOptions = {
   method: "GET",
   headers: myHeaders,
   redirect: "follow"
};