export default function getResponseFromAPI() {
  const myPromise = new Promise(function (myResolve, myReject) {
    myResolve();
    myReject();
  });
  return myPromise;
}
