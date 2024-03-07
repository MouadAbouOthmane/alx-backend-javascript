export default function getResponseFromAPI() {
  const myPromise = new Promise((myResolve, myReject) => {
    myResolve();
    myReject();
  });
  return myPromise;
}
