module.exports = url => {
  const parsed = new URL(url);
  const target = `${parsed.protocol}//${parsed.host}`;
  const pathname = parsed.pathname;
    return {
      "/fhir": {
        target,
        pathRewrite: { "^/fhir" : pathname }
      }
   };
};
