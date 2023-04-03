module.exports = async function (context, myBlob) {
    context.log('Blob trigger function processed blob:', context.bindingData.name, myBlob);

    const blobName = context.bindingData.name;
    context.log(`Blob name: ${blobName}`);
};
