module.exports = async function (context, myBlob) {
  context.log(
    "JavaScript blob trigger function processed blob \n Blob:",
    context.bindingData.blobTrigger,
    "\n Blob Size:",
    myBlob.length,
    "Bytes"
  );
  const blobName = context.bindingData.name;
  context.log(`Blob name: ${blobName}`);
};
